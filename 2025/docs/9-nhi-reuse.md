# NHI9:2025 NHI Reuse

| Threat agents/Attack vectors | Security Weakness                                                                                                                                                                                                                                                                                                                | Impacts                                       |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| Exploitability: **Hard**    | Prevalence: **Widespread**<br>Detectability: **Hard**                                                                                                                                                                                                                                                                           | Technical: **Low**<br>Business: **Specific** |
| Successfully exploiting a Re-used NHI requires the threat agent to first gain access to the environment. Therefore, NHI Reuse is dependent on a separate initial access vector. | NHIs are very commonly reused because tailor fitting NHI for each workload is difficult. Common cases include the use of a single AWS IAM Role for multiple workloads or the use of a single API key for multiple workloads. Detecting NHI reuse is difficult given the high variability of workloads that can be using the NHI. | NHI Reuse impact depends on the privilege of the associated NHI. If least-privilege is adopted, this impact is Low. |

### Description

Non-Human Identities (NHIs), such as service accounts, API keys, and machine credentials, play a critical role in enabling applications and services to authenticate and access necessary resources. However, reusing the same NHI across different applications, services, or components—even if they are deployed together—introduces significant security risks. If an NHI is compromised in one area, an attacker can exploit it to gain unauthorized access to other parts of the system that use the same credentials. 

In addition to these risks, the reuse of NHIs can complicate breach mitigation actions and impact audits.   

To minimize these risks, it's essential to assign unique NHIs to each application or service. This approach adheres to the principle of least privilege, ensuring that each NHI has only the permissions necessary for its specific function. By isolating NHIs, organizations can contain potential breaches and prevent attackers from moving laterally within the environment.

### Examples

* **Kubernetes Service Account Reuse**: In a Kubernetes cluster, multiple pods can share the same Kubernetes service account, including critical pods responsible for orchestration tasks. If one pod has a vulnerability and gets compromised, an attacker can use the shared service account to perform actions across the cluster. This could lead to unauthorized access to sensitive data, manipulation of workloads, or even full control over the cluster's resources.
* **Shared API Keys Between Applications**: An organization uses the same API key for multiple applications to access a third-party service. If one application is compromised and the API key is exposed, the attacker can use it to access or manipulate data across all applications that use the shared key, potentially leading to a widespread breach.
* **Reused Cloud Credentials**: Different services within an organization utilize the same cloud credentials (e.g., AWS IAM roles, Azure service principals) to interact with cloud resources. If an attacker obtains these credentials from a less secure service, they can access critical resources used by more secure services, bypassing isolation mechanisms and escalating the attack.

## How To Prevent

* **Assign Unique NHIs to Each Application or Service**
   - Ensure that each logical system component is granted a unique NHI which it operates under
   - Ensure that the ability to authenticate as the assigned NHI is limited to the associated system component
* **Assign Unique NHIs in Each Environment**
   - Ensure that each logical environment uses distinct NHIs when interacting with other systems or environments
* **Enforce the Principle of Least Privilege**
   - Ensure that NHIs are only granted the minimal level of access required for their function
* **Audit and Review the Use of NHIs**
   - Audit all NHIs along with their access grants and assigned system components
   - Review, on a regular basis, that NHIs are not reused and that they continue to follow the principle of least privilege for their function

### References

* [Kubernetes: Managing Service Accounts](https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/)
* [OWASP: Principle of Least Privilege](https://owasp.org/www-community/Access_Control)
* [AWS Identity and Access Management Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
* [Azure Service Principal Security](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal)
* [Google Cloud: Best Practices for Managing Service Accounts](https://cloud.google.com/iam/docs/best-practices-service-accounts)
* [Chronicle cross-customer bucket access](https://cloud.google.com/support/bulletins#gcp-2023-028)

### Data Points

- **Cloud Vulnerability Database \-** Chronicle cross-customer bucket access
- **CSA NHI Report** \- 14% of organizations need consumer identification as the most important capability of an NHI tool. (11/16)
- **Recent Breach** \- .env file Breach \- [link](https://medium.com/@ronilichtman/large-scale-extortion-via-secrets-in-env-files-why-secret-vaults-just-arent-enough-9b4c568724ca)


