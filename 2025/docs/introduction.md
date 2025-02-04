# Introduction

## What Are Non-Human Identities (NHIs)?

Non-human identities (NHIs) are used to provide authorization to software entities such as applications, APIs, bots, and automated systems to access secured resources. Unlike human identities, NHIs are not controlled or directly owned by a human. Their identity object and authentication often work differently to human, and common human user security measures do not apply to them.

Examples of NHIs include:

- API keys used by microservices to access database applications.
- Service accounts in backend systems connecting multiple subsystems.
- Roles associated with automated services to access cloud resources.
- Tokens used by bots to access protected application resources.

As modern software becomes increasingly automated and interconnected, NHIs have become essential to application development.

---

## The Importance of Securing NHIs

Mismanagement of NHIs introduces significant security risks. Key issues include:

- **Excessive Permissions**: NHIs are commonly granted very broad access to resources which leads to a widespread damage if compromised.
- **Credential Mismanagement**: NHI credentials can easily be wrongly managed: leaving hardcoded keys in code, poor or no rotation policies, and usage of deprecated authentication method make NHI vulnerable to compromise. 
- **Lack of Monitoring**: NHIs are notoriously under-monitored, allowing malicious activity to go unnoticed.

The key issues above make it so a compromised NHIs can lead to unauthorized access, data breaches, or attacks on infrastructure. With NHIs playing critical roles in development pipelines, cloud environments, and SaaS ecosystems, securing them is essential.

---

## Examples of Risks and Breaches

In recent worlds, with the increase of prevalence in using NHIs, real-world incidents involving a compromised NHI have grown exponentially. Some of the highest profile incidents are presented below and demonstrate the risks of insecure NHIs:

- [**Microsoft's Midnight Blizzard Breach (January 2024)**](https://www.microsoft.com/en-us/security/blog/2024/01/25/midnight-blizzard-guidance-for-responders-on-nation-state-attack/): A nation-state actor, Midnight Blizzard, initiated an attack against Microsoft's tenant. After gaining access to a non-production Microsoft 365 test tenant, they exploited a legacy OAuth application — an unmanaged non-human identity — with full privileges to access Microsoft's production environment. This led to unauthorized access to corporate email accounts, resulting in the exfiltration of sensitive communications and documents. 
- [**Okta's Support System Breach (November 2023)**](https://sec.okta.com/articles/2023/11/unauthorized-access-oktas-support-case-management-system-root-cause): Okta has experienced a security breach involving a compromised service account. An employee had saved the credentials for this service account to their personal Google account after signing in on an Okta-managed device. The compromise of the employee's personal Google account allowed attackers to obtain these credentials, granting unauthorized access to Okta's customer support system. The attackers accessed files related to 134 customers, including HTTP Archive (HAR) files containing sensitive data like session tokens.
- [**Internet Archive's Zendesk Support Platform Breach (October 2024)**](https://www.bleepingcomputer.com/news/security/internet-archive-breached-again-through-stolen-access-tokens/): Attackers exploited unrotated access tokens tied to the Internet Archive's Zendesk support platform, leading to unauthorized access and potential data exposure.  This incident highlights the importance of regularly rotating and securing non-human identity credentials to prevent unauthorized access. 

---

## About the OWASP NHI Top 10 Project

The **OWASP Non-Human Identity (NHI) Top 10** identifies and ranks the most critical risks associated with NHIs, providing a practical guide for developers and organizations. 

### Why This Project Matters

As NHIs become more prevalent, securing them has become as important as protecting human users. This project aims to:

- Raise awareness of NHI-related security challenges.
- Offer actionable insights for securing NHIs from their most dangerous risks.
- Help developers and organizations prioritize risks and implement best practices.

### How We Built the List

We identified key risks through real-world incidents, surveys, CVE databases, and industry input. Using the collected data and based on the [OWASP Risk Rating Methodology](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology), we ranked the top 10 risks to provide a clear prioritized list.

### What Developers Should Do

Developers can use this project to:

1. Understand the risks associated with NHIs in their applications.
2. Apply the recommended practices to secure NHIs and mitigate threats.
3. Monitor and improve their NHI security continuously.
