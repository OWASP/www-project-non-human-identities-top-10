---

layout: col-sidebar
title: OWASP Non-Human Identities Top 10
tags: non-human-identity
level: 2
type: documentation
pitch: The primary goal of the "OWASP Non-Human Identities Top 10" document is to provide assistance and education for organizations looking to secure the non-human identities in their organization's environment. The guide provides information about what the most prominent security risks are for such identities, the challenges involved, and how to overcome them.

---

<div class="alert">
    <p style="text-align:center">
We're thrilled to introduce the <a href="./2025/">OWASP Non-Human Identities Top 10 for 2025</a>!
    </p>
</div>

This comprehensive list highlights the most critical challenges in integrating Non-Human Identities (NHIs) into the development lifecycle, ranked based on exploitability, prevalence, detectability, and impact.

## What is Non-Human Identities top 10?

The Non-human identity (NHI) top 10 is a comprehensive list of the most pressing security risks and vulnerabilities that non-human identities present to organizations. 

Non-human identities are prevalent in usage for facilitating creation of applications by developers, and the project is aimed at helping security professionals thoroughly understand their non-human attack surface, so they can better protect and manage it. The project spans across thoroughly explaining the risks and their potential exploits, as well as providing actionable prevention practices and incident response playbooks. 

## NHI Top 10 - 2025 -  A sneak peak

* [NHI1:2025 - Improper Offboarding]({{ site.baseurl }}/2025/1-improper-offboarding/)

Improper offboarding refers to the inadequate deactivation or removal of non-human identities (NHIs) such as service accounts and access keys when they are no longer needed.
Unmonitored and deprecated services may remain vulnerable, and their associated NHIs can be exploited by attackers to gain unauthorized access to sensitive systems and data.
[Read More >>]({{ site.baseurl }}/2025/1-improper-offboarding/)

* [NHI2:2025 - Secret Leakage]({{ site.baseurl }}/2025/2-secret-leakage/)

Secret Leakage refers to the leakage of sensitive NHIs such as API keys, tokens, encryption keys, and certificates to unsanctioned data stores throughout the software development lifecycle
When secrets are leaked —for instance, hard-coded into source code, stored in plain text configuration files, or sent over public chat applications —they become susceptible to exposure.
[Read More >>]({{ site.baseurl }}/2025/2-secret-leakage/)

* [NHI3:2025 - Vulnerable Third-Party NHI]({{ site.baseurl }}/2025/3-vulnerable-third-party-nhi/)

Third-party non-human identities (NHIs) are extensively integrated into the development workflow, both through the use of integrated development environments (IDEs) and their extensions and also through the use of 3rd party SaaS.
If a third-party extension is compromised—whether through a security vulnerability or a malicious update—it can be exploited to steal these credentials or misuse the granted permissions.
[Read More >>]({{ site.baseurl }}/2025/2-secret-leakage/)

* [NHI4:2025 - Insecure Authentication]({{ site.baseurl }}/2025/4-insecure-authentication/)

Developers frequently integrate internal and external (third-party) services into their applications. These services require access to resources within these systems, necessitating authentication credentials. 
However, some authentication methods are deprecated, vulnerable to known attacks, or considered weak due to outdated security practices. Utilizing insecure or obsolete authentication mechanisms can expose organizations to significant risks.
[Read More >>]({{ site.baseurl }}/2025/4-insecure-authentication/)

* [NHI5:2025 - Overprivileged NHI]({{ site.baseurl }}/2025/5-overprivileged-nhi/)

During application development and maintenance, developers or administrators may assign NHIs with significantly more privileges than required for their function.
When an over-privileged NHI is compromised — whether through vulnerabilities in the application, malware, or other security breaches — attackers can exploit the excessive permissions.
[Read More >>]({{ site.baseurl }}/2025/5-overprivileged-nhi/)

* [NHI6:2025 - Insecure Cloud Deployment Configurations]({{ site.baseurl }}/2025/6-insecure-cloud-deployment-configurations/)

Continuous Integration and Continuous Deployment (CI/CD) applications enable developers to automate the process of building, testing, and deploying code to production environments.
These integrations often require authentication with cloud services, typically achieved using static credentials or OpenID Connect (OIDC).
Static credentials can be inadvertently exposed through code repositories, logs, or configuration files. If compromised, these credentials can provide attackers with persistent and potentially privileged access to production environments.
While OIDC offers a more secure alternative, if the identity tokens are not properly validated or there are no strict conditions on token claims unauthorized users might exploit these weaknesses to gain access.
[Read More >>]({{ site.baseurl }}/2025/6-insecure-cloud-deployment-configurations/)

* [NHI7:2025 - Long-Lived Secrets]({{ site.baseurl }}/2025/7-long-lived-secrets/)

Long-lived Secrets refers to the use of sensitive NHIs such as API keys, tokens, encryption keys, and certificates with expiration dates that are too far in the future or that don’t expire at all.
If a breached secret is long-lived, it provides attackers with access to sensitive services without any time constraints.
[Read More >>]({{ site.baseurl }}/2025/7-long-lived-secrets/)

* [NHI8:2025 - Environment Isolation]({{ site.baseurl }}/2025/8-environment-isolation/)

Environment isolation is a fundamental security practice in cloud application deployment, where separate environments are used for development, testing, staging, and production.
NHIs are often utilized during the deployment process and throughout an application's lifecycle. However, reusing the same NHIs across multiple environments—especially between testing and production—can introduce significant security vulnerabilities.
[Read More >>]({{ site.baseurl }}/2025/8-environment-isolation/)

* [NHI9:2025 - NHI Reuse]({{ site.baseurl }}/2025/9-nhi-reuse/)

Reusing the same NHI across different applications, services, or components — even if they are deployed together — introduces significant security risks. If an NHI is compromised in one area, an attacker can exploit it to gain unauthorized access to other parts of the system that use the same credentials.
[Read More >>]({{ site.baseurl }}/2025/9-nhi-reuse/)

* [NHI10:2025 - Human Use of NHI]({{ site.baseurl }}/2025/10-human-use-of-nhi/)

During application development and maintenance, developers or administrators may misuse NHIs for manual tasks that should be performed using individual human identities with appropriate privileges. This practice introduces significant security risks such as elevated privileges for NHIs, lack of auditing and accountability due to indistinguishable activity between humans and automation.
[Read More >>]({{ site.baseurl }}/2025/10-human-use-of-nhi/)

## Project Road Map
1. Submission of project proposal ✓
2. Reaching out to prominent contributors of the identity security space ✓
3. Mapping out top risks ✓
4. Data collection on chosen risks ✓
* A public survey co-operated with Cloud Security Alliance (CSA)
* Data assessment on real-life environments and platforms
* Public data collection of zero-day vulnerabilities
5. Aggregation of data and risk scoring ✓
6. Final draft of the top 10 risks alongside above Documentation efforts ✓
7. Round-table together with contributors and leaders to construct roadmap towards project review and graduation to a Lab project. (ongoing)