# NHI3:2025 Vulnerable Third-Party NHI

| Threat agents/Attack vectors                                                                                                                                                                     | Security Weakness                                                                                                             | Impacts                                                                                                                                                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Exploitability: **Average**                                                                                                                                                                        | Prevalence : **Common**<br>Detectability: **Hard**                                                                        | Technical: **Severe**<br>Business: **Specific**                                                                                                                    |
| Finding a vulnerable 3rd-party application is not trivial and requires some work to achieve. However, once breached, access to the 3rd-party customers/users/clients is simple. | 3rd-party applications are commonly used by developers, such as VSCode extensions and business applications. In many cases, the owners of said extensions are small community or individual developers not following best practices and thus open to vulnerabilities. The 3rd-party implementation is usually hidden from the organization. Furthermore, breaches are uncommonly publicly known, and if so, details are incomplete, making them difficult to monitor. Detecting a breached 3rd-party without advanced notice is near impossible. | Third-party applications are usually given wide access to sensitive material, such as source code, secrets, files, etc. Compromising a developer’s ecosystem can lead to a supply chain attack, the theft of personal data, and the effect on critical systems. |


## Description

Third-party non-human identities (NHIs) are extensively integrated into the development workflow, both through the use of integrated development environments (IDEs) and their extensions and also through the use of 3rd party SaaS. Visual Studio Code (VSCode), for example, has a vast marketplace of extensions that enhance functionality. These extensions often require significant access to the developer's machine, including the ability to read code, access environment variables, and interact with other system resources.
To perform their functions, 3rd parties may need to integrate with external services such as version control systems, databases, virtual machines, and cloud environments. This integration necessitates providing the 3rd parties with sensitive NHIs like access tokens, API keys, or SSH keys. If a third-party extension is compromised—whether through a security vulnerability or a malicious update—it can be exploited to steal these credentials or misuse the granted permissions.
Moreover, 3rd parties can be exposed to hard-coded credentials within the codebase or environment variables that contain sensitive information. If a 3rd party has access to these elements, and it becomes malicious or is already malicious, it can exfiltrate this information. Therefore, relying on third-party NHIs without proper vetting and security measures introduces significant risks to the organization.

## Example Attack Scenarios

* **IDE Integration with Code Repositories** Developers often configure their IDEs to interact directly with code repositories like GitHub or GitLab. This setup requires supplying the IDE or its extensions with personal access tokens (PATs) or SSH keys to enable features like code syncing, pushing commits, and managing pull requests. If an extension is compromised, these credentials can be exposed, allowing unauthorized access to the developer's repositories and potentially sensitive organizational code.
* **Extensions Accessing Cloud Resources** Extensions that facilitate deployment and testing on virtual machines or cloud services require access to cloud environments. Developers provide these extensions with NHIs such as API keys or access tokens to interact with services like AWS, Azure, or Google Cloud Platform. A malicious extension could use these credentials to access, modify, or delete cloud resources, leading to data breaches or service disruptions.
* **3rd Party Service Provider** Developers integrate a 3rd party service provider such as Sisense to create a BI application. The developers create a privileged NHI such as database credentials and send them to the provider as part of the integration process. If the provider is breached, the attacker can leverage the NHI to gain access to the developer’s environment.


## How To Prevent

* **Vet and Limit Third-Party Integrations**  
   - Perform security reviews before integrating third-party tools or services, ensuring vendors follow security best practices.  
   - Grant only the minimum permissions required (principle of least privilege) and regularly audit or revoke unused access.

* **Monitor and Detect Third-Party Behavior**  
   - Continuously monitor third-party activity using logs, API call tracking, and behavior analytics to detect anomalies.  
   - Implement security scanning tools to identify vulnerabilities or malicious behavior in third-party software.

* **Use Ephemeral and Rotating Credentials**  
   - Replace long-term secrets with short-lived, ephemeral credentials (e.g., AWS STS, Azure Managed Identities).  
   - Automate credential rotation to limit the impact of compromised third-party integrations.


## References
* [JetBrains Security Issue Affecting GitHub Plugin](https://blog.jetbrains.com/security/2024/06/updates-for-security-issue-affecting-intellij-based-ides-2023-1-and-github-plugin/)
* [Malicious VSCode Extensions Stealing Data](https://blog.checkpoint.com/securing-the-cloud/malicious-vscode-extensions-with-more-than-45k-downloads-steal-pii-and-enable-backdoors/)
* [Deep Dive into VSCode Extension Vulnerabilities](https://snyk.io/blog/visual-studio-code-extension-security-vulnerabilities-deep-dive/)
* [Making sense out of the Sisense hack](https://medium.com/@ronilichtman/making-sense-out-of-the-sisense-hack-f61a3d9b80a7)


## Data points
* [Datadog State of the Cloud 2024]((https://www.datadoghq.com/state-of-cloud-security/))
  * 10% third party integration to AWS are overprivileged.
  * 2% third party integration to AWS are vulnerable to confused deputy vulnerability.
  * Initial access to 365 is made through malicious 3d-party OAuth apps.
* [CSA NHI Report](https://s3.amazonaws.com/content-production.cloudsecurityalliance/22j8ue25fxvafdnirpgoqtdv7l1u?response-content-disposition=inline%3B%20filename%3D%22The%20State%20of%20Non-Human%20Identity%20Security%2020240917.pdf%22%3B%20filename%2A%3DUTF-8%27%27The%2520State%2520of%2520Non-Human%2520Identity%2520Security%252020240917.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS6XDIRHKHO4F5SU4%2F20241211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241211T163927Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=394370ac74a7a3f24385341bdee52ca01958c4859595f1f9969ffefdaa6d6f2f)
  * 38% answers put supply chain attacks as one of the top 3 most concerning NHI threats. (2/10)
  * 16% answers put malicious suppliers as one of the top 3 most concerning NHI threats. (9/10)
  * 29% of times compromised external integrations were the cause for NHI-related security incidents. (7/10)
  * 21% of organizations put managing requests for third-party tools and services as most challenging to manage. (10/16)
  * 26% of organizations need visibility into third-party vendors as the most important capability of an NHI tool. (1/16)
  * 38% of organizations reported limited to no visibility into third-party vendors.
* Recent Breaches
  * Sisense Breach - [link](https://medium.com/@ronilichtman/making-sense-out-of-the-sisense-hack-f61a3d9b80a7)
