# NHI8:2024 Environment Isolation NHI

| Threat agents/Attack vectors                                                                                                                                                                     | Security Weakness                                                                                                             | Impacts                                                                                                                                                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Exploitability: **Average**                                                                                                                                                                        | Prevalence: **Uncommon**<br>Detectability: **Hard**                                                                        | Technical: **Moderate**<br>Business: **Specific**                                                                                                                    |
| Successfully exploiting an unisolated NHI requires the threat agent to first gain access to the test environment. That said, test environments tend to have significantly less protections in place than production environments. | NHIs are not commonly re-used between non-prod and prod environments. Detecting unisolated NHI is difficult given the high variability of workload and environment permutations that can be using the same NHI. | The impact of isolated NHI depends on the privilege of the associated NHI. Given that the associated NHI is, by nature, in a prod environment, the impact is non-negligible.|


## Description

Environment isolation is a fundamental security practice in cloud application deployment, where separate environments are used for development, testing, staging, and production. This separation ensures that issues in one environment do not affect others, particularly the production environment where real users and sensitive data reside.
Non-human identities (NHIs), such as service accounts, API keys, and roles, are often utilized during the deployment process and throughout an application's lifecycle. However, reusing the same NHIs across multiple environments—especially between testing and production—can introduce significant security vulnerabilities. If an NHI used in a less secure testing environment has permissions to access production resources, an attacker who compromises the testing environment could leverage this NHI to infiltrate the production environment.
To mitigate these risks, it is critical to enforce strict isolation of NHIs based on the environments in which they operate. This involves:


* **Using Separate NHIs for Each Environment:** Assign unique NHIs to each environment to prevent cross-environment access.
* **Applying the Principle of Least Privilege:** Limit NHIs' permissions to only what is necessary for their specific environment.
* **Implementing Environment-Specific Access Controls:** Ensure that NHIs in non-production environments cannot access production resources.
* **Regular Auditing and Monitoring:** Continuously monitor NHIs for any unauthorized access attempts or anomalies.

By isolating environments and the NHIs associated with them, organizations can significantly reduce the attack surface and prevent potential breaches from propagating across environments.

## Example Attack Scenarios

* **Shared AWS Access Keys Across Environments:** An AWS access key is used in both testing and production environments to access Amazon S3 buckets. While intended for accessing mock data in the testing environment, the key also has permissions to access sensitive production data. If the testing environment is compromised, an attacker could use the shared access key to retrieve or manipulate production data, leading to data breaches or service disruptions.
* **Shared Azure System-assigned Managed Identity across subscriptions:** A system-assigned managed identity allows resources to use it both in a test subscription and a production subscription and has permissions to resources in both subscriptions. This configuration allows processes in the testing environment to access resources in the production environment. If an attacker gains access to the testing environment, they could exploit the managed identity gaining unauthorized access to critical resources and potentially compromising the entire production environment.


## How To Prevent
* **Strict Environment Isolation for NHIs:** Assign unique NHIs to each environment (development, testing, staging, production) to ensure that access credentials or identities in one environment cannot be reused in another.
* **Apply the Principle of Least Privilege (PoLP):** Grant NHIs only the minimal permissions required for their specific tasks within their designated environments. This minimizes the potential damage if an NHI is compromised.
* **Enforce Environment-Specific Access Controls:** Configure access policies so that NHIs in non-production environments (e.g., testing) cannot interact with or access resources in the production environment.
* **Segregate Infrastructure for Sensitive Resources:** Use separate resource groups, subscriptions, or accounts to isolate production from non-production environments. This ensures that even with an NHI compromise, the blast radius is limited to its environment.


## References
* [AWS Recommendations on Workload Isolation](https://aws.amazon.com/solutions/guidance/workload-isolation-on-aws/)

## Data points
* **CSA NHI Report** - 32% of times configuration error was the cause for NHI-related security incidents. (4/10)