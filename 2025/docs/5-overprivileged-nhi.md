# NHI5:2025 Overprivileged NHI

| Threat agents/Attack vectors                                                                                                                                                                     | Security Weakness                                                                                                                                                                                                                                                                                                                                                                                      | Impacts                                                                                                                                                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Exploitability: **Hard**                                                                                                                                                                        | Prevalence: **Widespread**<br>Detectability: **Average**                                                                                                                                                                                                                                                                                                                                              | Technical: **Severe**<br>Business: **Specific**                                                                                                                    |
| Successfully exploiting an overprivileged NHI requires the threat agent to first gain access to the environment. Therefore, Overprivileged NHI is dependent on a separate initial access vector. | NHIs are very commonly over-privileged because right-sizing privileges for NHIs is a very difficult and time-consuming task. Detection of overprivileged non-human identities varies depending on the type of environment. While cloud environments offer tools that simplify detection, on-premises environments lack similar built-in capabilities, making detection of such identities much harder. | Overprivileged NHI impact is high due to the high amount of privileges associated. These tend to be admin accounts with widespread impact.|


## Description

Non-human identities (NHIs)—such as service accounts, API tokens, and workload identities—are designed for programmatic access to cloud resources and services. They enable applications, services, and automated processes to function securely without human intervention. However, during application development and maintenance, developers or administrators may inadvertently assign NHIs excessive privileges beyond their functional requirements, unnecessarily expanding the potential blast radius in case of a compromise.
When an over-privileged NHI is compromised—whether through vulnerabilities in the application, malware, or other security breaches—attackers can exploit the excessive permissions to:

* **Access Sensitive Data:** Unauthorized access to confidential files, databases, or user information.
* **Escalate Privileges:** Gain higher levels of access within the system, potentially reaching administrative or root levels.
* **Move Laterally Within the Network:** Access other systems or services within the organization's network that the NHI can reach.
* **Install Malicious Software:** Deploy malware, ransomware, or other malicious tools to further compromise the system.
* **Entire cloud account takeover:** Leak of identities related to cloud root account or administrator, could leak to full control and to account takeover.

## Example Attack Scenarios

* **Overprivileged Web Server User:** A web server runs under a local user account on a Linux machine that also has access to other applications, system files, or sensitive data directories. If the web server has a vulnerability that allows remote code execution, an attacker could exploit this to gain control over the web server process. With the excessive permissions of the user account, the attacker could access or modify other applications, steal sensitive data, or make unauthorized system changes.
* **Overprivileged VM:** A Jenkins EC2 instance is mistakenly assigned the AWS AdministratorAccess managed policy, even though it only requires permissions for EKS and ECS. Exploiting a vulnerability on the instance, an attacker gains initial access, leverages the excessive privileges to navigate the cloud environment, and exfiltrates sensitive data from S3 buckets.
* **Overprivileged OAuth Application:** A developer installs the OAuth application that they are developing on a production Azure account and provides it with the AppRoleAssignment.ReadWriteAll privilege despite the App only requiring read access to a specific directory in Azure Blob Storage. This significantly increases the impact of the damage that a malicious entity can inflict if it gets a hold of that application.
* **Database Service Account with Excessive Permissions:** A managed database service operates with a service account that has administrative privileges on the account. If an attacker manages to get access to the database, they could use the service account's high-level permissions to access and perform actions on the entire cloud account.
* **Unrestricted Application User with Broad Network Access:** A database application operates with a service account that has administrative privileges on the server. If an attacker exploits a vulnerability in the database software, they could use the service account's high-level permissions to execute arbitrary commands, install malware, or create new user accounts, leading to full system compromise.


## How To Prevent

* **Enforce the principle of least privilege:** Assign each identity only the permissions essential for its specific tasks, avoiding any form of administrative privileges unless absolutely necessary.
* **Regularly audit and review permissions:** Continuously assess the permissions granted to identities to ensure they are strictly necessary. Audit privileged identities to detect and address potential misuse or overprovisioning.
* **Establish preventive guardrails:** Implement deny policies at the organizational level to prohibit excessively permissive configurations and enforce strict access controls.
* **Leverage Just-in-Time (JIT) access:** Utilize tools that enable temporary, on-demand elevation of privileges, allowing for high-level access only when required and within a defined time frame.

## References
* .env File Breach (August 2024) - [link1](https://unit42.paloaltonetworks.com/large-scale-cloud-extortion-operation/), [link2](https://medium.com/@ronilichtman/large-scale-extortion-via-secrets-in-env-files-why-secret-vaults-just-arent-enough-9b4c568724ca)
* Microsoft Midnight Blizzard breach (January 2024) - [link1](https://msrc.microsoft.com/blog/2024/01/microsoft-actions-following-attack-by-nation-state-actor-midnight-blizzard/), [link2](https://medium.com/@ronilichtman/how-to-protect-yourself-from-the-microsoft-oauth-attack-powershell-scripts-included-71b398034b8d)
* Microsoft SAS Token Breach (September 2023) - [link](https://www.wiz.io/blog/38-terabytes-of-private-data-accidentally-exposed-by-microsoft-ai-researchers)
* CircleCI Breach (January 2023) - [link](https://circleci.com/blog/jan-4-2023-incident-report/)
* Uber Breach (September 2022) - [link](https://www.upguard.com/blog/what-caused-the-uber-data-breach)
* Verkada Breach (March 2021) - [link](https://www.verkada.com/security-update/report/)

## Data points
* [Datadog State of the Cloud 2024](https://www.datadoghq.com/state-of-cloud-security/)
  * 17.6% have excessive data access, such as listing and accessing data from all S3 buckets in the account
  * 10% of clusters have a dangerous node role that has full administrator access, allows for privilege escalation, has overly permissive data access (e.g., all S3 buckets), or allows for lateral movement across all workloads in the account
  * Over one in three Google Cloud VMs (33%) have sensitive permissions to a project
* [CSA NHI Report](https://s3.amazonaws.com/content-production.cloudsecurityalliance/22j8ue25fxvafdnirpgoqtdv7l1u?response-content-disposition=inline%3B%20filename%3D%22The%20State%20of%20Non-Human%20Identity%20Security%2020240917.pdf%22%3B%20filename%2A%3DUTF-8%27%27The%2520State%2520of%2520Non-Human%2520Identity%2520Security%252020240917.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS6XDIRHKHO4F5SU4%2F20241211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241211T163927Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=394370ac74a7a3f24385341bdee52ca01958c4859595f1f9969ffefdaa6d6f2f) 
  * 33% answers put over-privileged accounts as one of the top 3 most concerning NHI threats (3/10)
  * 37% of times over-privileged identities were the cause for NHI-related security incidents (2/10)
  * 22% of organizations need managing permissions as the most important capability of an NHI tool (5/16)
  * 26% of organizations believe that over 50% of their service accounts are over-privileged
* [Orca Security State of the Cloud Security report 2022](https://orca.security/wp-content/uploads/2022/09/2022-State-of-Public-Cloud-Security-Report.pdf)
  * 44% of environments have at least one privileged identity access management (IAM) role.
  * 23% have at least one EC2 Instance with Administrator IAM role.
