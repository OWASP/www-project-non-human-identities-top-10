/* assets/js/mxgraph-responsive.js
   Normalizes diagrams.net (mxgraph) embeds:
   - strips inline width/min-width/height
   - makes inline SVGs responsive (tries to compute tight viewBox)
   - normalizes iframes to width:100% (scrollable)
   - adds small Fit / Full controls
   - watches for viewer re-applying styles
*/
(function () {
  'use strict';

  var injected = false;
  function injectStyles() {
    if (injected) return;
    injected = true;
    var css = '\
    .mxgraph-responsive-controls { position: absolute; top: 6px; right: 6px; z-index: 9999; display:flex; gap:6px; }\
    .mxgraph-responsive-controls button { background: rgba(255,255,255,0.95); border:1px solid rgba(0,0,0,0.08); padding:6px 8px; font-size:12px; border-radius:6px; cursor:pointer; }\
    .mxgraph-responsive-controls button:active{ transform:translateY(1px);}\
    .mxgraph { position: relative; box-sizing: border-box; }\
    ';
    var s = document.createElement('style');
    s.setAttribute('data-mxgraph-helper', '1');
    s.appendChild(document.createTextNode(css));
    (document.head || document.documentElement).appendChild(s);
  }

  function setImportant(el, prop, value) {
    try { el.style.setProperty(prop, value, 'important'); } catch (e) {}
  }

  function normalizeContainer(container) {
    if (!container || !container.style) return;
    container.removeAttribute && container.removeAttribute('width');
    container.removeAttribute && container.removeAttribute('height');
    try {
      container.style.removeProperty('min-width');
      container.style.removeProperty('minHeight');
      container.style.removeProperty('min-height');
      container.style.removeProperty('width');
      container.style.removeProperty('height');
      container.style.removeProperty('max-width');
    } catch (e) {}
    setImportant(container, 'min-width', '0');
    setImportant(container, 'min-height', '0');
    setImportant(container, 'width', '100%');
    setImportant(container, 'max-width', '100%');
    setImportant(container, 'height', 'auto');
    setImportant(container, 'overflow', 'auto');
    if (!container.style.position) container.style.position = 'relative';
  }

  function computeTightBBox(svg) {
    if (!svg) return null;
    var vb = svg.getAttribute('viewBox');
    if (vb) {
      var parts = vb.trim().split(/\s+|,/).map(Number);
      if (parts.length === 4 && parts.every(isFinite)) return { x: parts[0], y: parts[1], width: parts[2], height: parts[3] };
    }

    try {
      var bb = svg.getBBox();
      if (bb && bb.width > 0 && bb.height > 0) {
        return { x: bb.x, y: bb.y, width: bb.width, height: bb.height };
      }
    } catch (e) {}

    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    var found = false;
    var nodes = svg.querySelectorAll('*');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      try {
        if (typeof el.getBBox === 'function') {
          var b = el.getBBox();
          if (b && b.width > 0 && b.height > 0 && isFinite(b.x) && isFinite(b.y)) {
            found = true;
            minX = Math.min(minX, b.x);
            minY = Math.min(minY, b.y);
            maxX = Math.max(maxX, b.x + b.width);
            maxY = Math.max(maxY, b.y + b.height);
          }
        }
      } catch (ignore) {}
    }
    if (!found) return null;
    return { x: minX, y: minY, width: (maxX - minX), height: (maxY - minY) };
  }

  function normalizeSvg(svg) {
    if (!svg) return;
    try {
      if (!svg.__mx_orig) {
        svg.__mx_orig = {
          widthAttr: svg.getAttribute('width'),
          heightAttr: svg.getAttribute('height'),
          viewBoxAttr: svg.getAttribute('viewBox'),
          style: svg.getAttribute('style') || ''
        };
      }
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      svg.removeAttribute('min-width');

      var tight = computeTightBBox(svg);
      if (tight && isFinite(tight.width) && tight.width > 0 && isFinite(tight.height) && tight.height > 0) {
        svg.setAttribute('viewBox', [tight.x, tight.y, tight.width, tight.height].join(' '));
      }

      if (!svg.getAttribute('preserveAspectRatio')) {
        svg.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      }

      svg.style.removeProperty('min-width');
      setImportant(svg, 'min-width', '0');
      setImportant(svg, 'width', '100%');
      setImportant(svg, 'max-width', '100%');
      setImportant(svg, 'height', 'auto');
      svg.style.display = svg.style.display || 'block';
      svg.style.transform = svg.style.transform || 'none';
      svg.style.transformOrigin = svg.style.transformOrigin || '0 0';
    } catch (e) {
      console.warn('normalizeSvg error', e);
    }
  }

  function normalizeIframe(ifr) {
    if (!ifr) return;
    try {
      ifr.removeAttribute && ifr.removeAttribute('width');
      ifr.removeAttribute && ifr.removeAttribute('height');
      setImportant(ifr, 'min-width', '0');
      setImportant(ifr, 'width', '100%');
      setImportant(ifr, 'max-width', '100%');
      setImportant(ifr, 'height', 'auto');
      ifr.style.display = ifr.style.display || 'block';
    } catch (e) {}
  }

  function addControls(container, svgOrIframe) {
    if (!container || container.querySelector('.mxgraph-responsive-controls')) return;
    try {
      var ctrl = document.createElement('div');
      ctrl.className = 'mxgraph-responsive-controls';
      ctrl.setAttribute('role','toolbar');
      ctrl.setAttribute('aria-label','Diagram display controls');

      var fitBtn = document.createElement('button');
      fitBtn.type = 'button';
      fitBtn.textContent = 'Fit';
      fitBtn.title = 'Fit to container width';
      fitBtn.addEventListener('click', function () {
        if (!svgOrIframe) svgOrIframe = container.querySelector('svg, iframe');
        if (!svgOrIframe) return;
        if (svgOrIframe.tagName && svgOrIframe.tagName.toLowerCase() === 'svg') {
          normalizeSvg(svgOrIframe);
          svgOrIframe.style.transform = 'none';
          setImportant(svgOrIframe, 'width', '100%');
        } else {
          normalizeIframe(svgOrIframe);
          setImportant(container, 'overflow', 'auto');
        }
      });

      var fullBtn = document.createElement('button');
      fullBtn.type = 'button';
      fullBtn.textContent = 'Full';
      fullBtn.title = 'Show original (full) size';
      fullBtn.addEventListener('click', function () {
        if (!svgOrIframe) svgOrIframe = container.querySelector('svg, iframe');
        if (!svgOrIframe) return;
        if (svgOrIframe.tagName && svgOrIframe.tagName.toLowerCase() === 'svg') {
          var orig = svgOrIframe.__mx_orig || {};
          if (orig.viewBoxAttr !== null && orig.viewBoxAttr !== undefined) {
            if (orig.viewBoxAttr) svgOrIframe.setAttribute('viewBox', orig.viewBoxAttr);
            else svgOrIframe.removeAttribute('viewBox');
          }
          if (orig.widthAttr) svgOrIframe.setAttribute('width', orig.widthAttr);
          if (orig.heightAttr) svgOrIframe.setAttribute('height', orig.heightAttr);
          svgOrIframe.style.removeProperty('width');
          svgOrIframe.style.removeProperty('max-width');
          svgOrIframe.style.removeProperty('min-width');
        } else {
          container.style.removeProperty('overflow');
        }
      });

      ctrl.appendChild(fitBtn);
      ctrl.appendChild(fullBtn);
      container.appendChild(ctrl);
    } catch (e) {
      console.warn('addControls error', e);
    }
  }

  function normalizeContainerAndChildren(container) {
    try {
      normalizeContainer(container);
      var iframe = container.querySelector('iframe');
      var svg = container.querySelector('svg');
      if (iframe) normalizeIframe(iframe);
      if (svg) normalizeSvg(svg);
      addControls(container, svg || iframe);
    } catch (e) {
      console.warn('normalizeContainerAndChildren error', e);
    }
  }

  function watchContainer(container) {
    if (!container) return;
    normalizeContainerAndChildren(container);

    var mo = new MutationObserver(function (mutations) {
      var scheduled = false;
      function schedule() {
        if (scheduled) return;
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          normalizeContainerAndChildren(container);
        }, 80);
      }
      mutations.forEach(function (m) {
        if (m.type === 'attributes' && (m.attributeName === 'style' || m.attributeName === 'width' || m.attributeName === 'height')) {
          schedule();
        } else if (m.type === 'childList' && (m.addedNodes.length || m.removedNodes.length)) {
          schedule();
        }
      });
    });

    mo.observe(container, { attributes: true, attributeFilter: ['style','width','height'], childList: true, subtree: true });
  }

  function init() {
    injectStyles();
    var nodes = document.querySelectorAll('.mxgraph');
    nodes.forEach(function (n) { watchContainer(n); });

    var rootObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1) return;
          if (node.classList && node.classList.contains('mxgraph')) {
            watchContainer(node);
          } else {
            var inner = node.querySelector && node.querySelector('.mxgraph');
            if (inner) watchContainer(inner);
          }
        });
      });
    });
    rootObserver.observe(document.documentElement || document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
