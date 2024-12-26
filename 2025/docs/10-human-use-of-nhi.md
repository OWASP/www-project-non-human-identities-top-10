# NHI10:2025 Human Use of NHI

| Threat Agents & Attack Vectors                    | Security Weakness                                                                                          | Impact                                         |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| Exploitability: **Hard**            | Prevalence: **Common**<br>Detectability: **Hard**                       | Technical: **Low**<br>Business: **Specific**     |
| Successfully exploiting Human use of NHI requires the threat agent first to gain access to the environment. Therefore, Human use of NHI attacks depends on a separate initial access vector. | Developers often impersonate service accounts to debug issues.<br>Most NHI providers do not provide tooling to differentiate between workloads assuming the NHI and humans assuming the NHI.      | Human use of NHI impact depends on the privilege of the associated NHI.<br>If least-privilege is adopted, this impact is Low. 

## Description
Non-human identities (NHIs)—such as service accounts, API tokens, and workload identities—are designed for programmatic access to cloud resources and services. They enable applications, services, and automated processes to function securely without human intervention. However, during application development and maintenance, developers or administrators may misuse these NHIs for manual tasks that should be performed using individual human identities with appropriate privileges.
This practice introduces significant security risks: 
- Elevated privileges beyond necessity
 - Lack of detailed auditing and accountability
 - Indistinguishable activity between humans and automation
 - Obfuscation by attackers


## Example Scenarios
- **Administrators Using Service Account Credentials:**  An IT administrator uses a service account's credentials to log into cloud management consoles for convenience. This service account has extensive permissions intended for automated deployment tasks. The administrator now has access beyond their role's requirements, and any actions they perform are logged under the service account, obscuring accountability.
- **Developers Executing Commands with NHIs:** A developer manually runs scripts or commands using an NHI that has permissions to production environments. If the developer makes an error or performs unauthorized changes, it becomes difficult to trace the activity back to them, as logs attribute the actions to the NHI.
- **Shared API Tokens Among Team Members:** A team shares an API token associated with a service account to access certain resources quickly. This token has broad access rights. If any team member's environment is compromised, the attacker can use the shared token to access sensitive systems, and it would be challenging to identify the source of the breach.
- **Bypassing Security Controls:** An employee uses an NHI to access resources that are restricted under their user account due to policies like MFA requirements or IP address restrictions. This undermines the organization's security posture and can lead to unauthorized data access.
- **Attackers Leveraging NHIs for Persistence:** After compromising an environment, an attacker obtains NHI credentials and uses them to maintain access. Since NHIs are not subject to regular password changes or MFA, the attacker can persist in the environment undetected for extended periods.

## How to Prevent
- **Use dedicated identities:** Use dedicated human identities with appropriate roles and permissions for debugging or maintenance tasks.
- **Audit and Monitor NHI Activity:** Use tools or platforms that support auditing and tracking of NHI usage, making human use detectable and accountable.
- **Use Context-Aware Access Controls:** Use conditional access policies that detect and block human access to NHIs based on suspicious patterns.
- **Educate Developers and Administrators:** Provide training on the risks of using NHIs manually and provide alternative access methods to ensure secure access practices.

## References
- [Microsoft Azure: Best Practices for Securing Service Accounts](https://docs.microsoft.com/en-us/azure/security/fundamentals/service-accounts)
- [AWS Security Blog: Best Practices for Managing AWS Access Keys](https://aws.amazon.com/blogs/security/best-practices-for-managing-aws-access-keys/)
- [Google Cloud: Best practices for managing service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)


## Data Points
- [Anetac Report: 75 Percent of Organizations Misuse Service Accounts, Leading to Critical Security Risks](https://cioinfluence.com/security/anetac-report-75-percent-of-organizations-misuse-service-accounts-leading-to-critical-security-risks/)
- CSA NHI Report - 32% of organizations put service accounts as most challenging to manage. (1/16)
- CSA NHI Report - 26% of organizations believe that over 50% of their service accounts are over-privileged
