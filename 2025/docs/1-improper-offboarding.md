# NHI1:2025 Improper Offboarding

| Threat Agents & Attack Vectors                    | Security Weakness                                                                                          | Impact                                         |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| Exploitability: **Easy**            | Prevalence: **Widespread**<br>Detectability: **Hard**                       | Technical: **Severe**<br>Business: **Specific**     |
| Exploiting an improperly offboarded NHI greatly depends on context. Considering the case of an inside threat, it’s quite simple to identify what necessary credentials are needed to exploit the improperly offboarded identity. | The current capabilities of offboarding NHIs, such as service accounts, are lackluster, and organizations rarely use existing possibilities. Thus, many NHIs are not properly offboarded after they are no longer needed or once the original owner has left.<br>Security teams are lacking tools to detect old NHIs that were not properly offboarded. Existing techniques of detecting such NHIs rely on incomplete information that takes a long time to compile.      | Due to the deep insight a potential inside threat has of the organization, exploiting improperly offboarded NHIs could lead to compromise of critical systems, exfiltration of sensitive data and usage of advanced persistence methods. |

## Description
Improper offboarding refers to the inadequate deactivation or removal of non-human identities (NHIs) such as service accounts and access keys when they are no longer needed. This situation often arises when applications are deprecated, services are taken offline, or when the original owners or administrators of these NHIs leave the organization. Failure to properly offboard NHIs poses significant security risks. Unmonitored and deprecated services may remain vulnerable, and their associated NHIs can be exploited by attackers to gain unauthorized access to sensitive systems and data. Additionally, orphaned NHIs may retain elevated permissions, amplifying the potential damage from any security breach.

## Example Attack Scenarios
- **Orphaned Kubernetes Service Accounts:** A Kubernetes cluster belonging to a decommissioned service retains active service accounts. If an attacker gains access to this unmonitored cluster, they could exploit these service accounts to interact with other resources within the organization's infrastructure, potentially leading to data exfiltration or further compromise.
- **Ex-Employee Exploiting Unrevoked Credentials:** An employee who managed automated services leaves the organization, but the NHIs associated with those services are not disabled or transferred. The ex-employee could misuse still-valid credentials to access the organization's systems remotely, leading to unauthorized data access, service disruptions, or even sabotage.
- **Leftover Apps Used for Privilege Escalation & Lateral Movement:** An application created in a test environment, designated to test a workload, is later connected to a sensitive production environment to complete the testing suite, and is not decommissioned once the workload is transferred to run in a production server. Then, an attack reaching the less secure test environment can use this application to move laterally within the organization.

## How to Prevent
- Implement an offboarding process that reviews all NHIs associated with the departing employee. For each NHI, determine if it is still required. If not, decommission it; otherwise, transfer ownership to another employee and rotate any credentials the departing employee may have had access to during its creation.
- Automate offboarding steps wherever possible by integrating HR systems with identity and access management (IAM) tools.
- Regularly audit active NHIs to identify ongoing human usage and block potential misuse.

## References
- [Cloud Security Alliance: Decommissioning Orphaned and Stale Non-Human Identities](https://cloudsecurityalliance.org/blog/2024/06/03/decommissioning-orphaned-and-stale-non-human-identities)
- [Ex-Employee Accessed Former Company's System and Deleted Resources](https://www.channelnewsasia.com/singapore/former-employee-hack-ncs-delete-virtual-servers-quality-testing-4402141)
- [Microsoft Breach by Midnight Blizzard Threat Actor](https://msrc.microsoft.com/blog/2024/01/microsoft-actions-following-attack-by-nation-state-actor-midnight-blizzard/)

## Data Points
- CSA NHI Report - 31% answers put insufficient NHI offboarding as one of the top 3 most concerning NHI threats. (5/10)
- CSA NHI Report - 32% of times orphaned identities were the cause for NHI-related security incidents. (4/10)
- CSA NHI Report - 15% of organizations need automated provisioning and de-provisioning as the most important capability of an NHI tool. (9/16)
- CSA NHI Report - 51% of organizations have no formal process to offboard or revoke long lived API keys.
- Recent Breach - [Microsoft Breach](https://medium.com/@ronilichtman/how-to-protect-yourself-from-the-microsoft-oauth-attack-powershell-scripts-included-71b398034b8d)
