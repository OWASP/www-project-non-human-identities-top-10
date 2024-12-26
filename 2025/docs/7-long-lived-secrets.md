# NHI7:2024 Long-Lived Secrets


| Threat agents/Attack vectors                                                                                                                                                                    | Security Weakness                                                                                                                                                 | Impacts                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Exploitability: **Hard**                                                                                                                                                                        | Prevalence: **Widespread**  Detectability: **Easy**                                                                                                               | Technical: **Severe** <br> Business: **Specific**                                                                                                 |
| Successfully exploiting a Long-Lived Secret requires the threat agent to first gain access to the secret value. Therefore, Long-Lived Secret attacks depend on a separate initial access vector. | Long-Lived Secrets are extremely common in modern environments. This is due to the challenges associated with rotation and low availability of ephemeral solutions. | Detecting Long-Lived Secrets is easy given the majority of secret managers enable users to see the amount of time that has passed since rotation. |

## Description

Long-lived Secrets refers to the use of sensitive NHIs such as API keys, tokens, encryption keys, and certificates with expiration dates that are too far in the future or that don’t expire at all. Developers frequently use these secrets to enable applications to authenticate and interact with various services and resources within an organization. Oftentimes, these secrets can be breached or leak (see Secret Leakage). If a breached secret is long-lived, it provides attackers with access to sensitive services without any time constraints.


## Example Attack Scenarios



* An attacker with low-level privileges in the corporate network identifies a year-old data dump. The dump contains a sensitive Access Token with admin privileges. The attacker leverages the sensitive Access Token to raise privileges in the network.
* A web session cookie is set to be long-lived. An infostealer campaign dumps cookies from one browser in the corporate network. The infostealer then sells that cookie to an attacker who leverages the session cookie to breach the corporate network.



## How To Prevent

* **Implement Automatic Secret Rotation:** Regularly rotating secrets (API keys, credentials, tokens, etc.) is a key strategy for minimizing the risk of long-lived secrets being exposed or exploited. Manually rotating secrets can be error-prone and time-consuming, so it's best to implement an automated system that rotates secrets at defined intervals.
* **Define Proper Secret Expiration and Revocation:** set expiry dates for long-lived credentials such as API keys and certificates, so that they are only valid for a limited period. Even if they are not actively rotated, their expiration will reduce the risk.
* **Use Secret Management Tools:** like AWS Secrets Manager, Google Secret Manager, Azure Key Vault or HashiCorp Vault to provide secure storage for secrets and allow you to configure them for automatic rotation. These tools ensure that secrets are only accessible to authorized services or users.
* **Use Short-Lived Secrets:** Use short-lived access tokens combined with refresh tokens, such as those provided by OAuth 2.0 and OpenID Connect. When the access token expires, the refresh token can be used to request a new access token without user intervention.



## References
* MSFT SAS Token Breach (June 2023) - [link](https://www.wiz.io/blog/38-terabytes-of-private-data-accidentally-exposed-by-microsoft-ai-researchers)
* CircleCI Breach (January 2023) - [link](https://circleci.com/blog/jan-4-2023-incident-report/)
* Cloudflare Breach (Febuary 2024) - [link](https://medium.com/@ronilichtman/how-cloudflare-got-hoktad-part-one-d5bb75dac3f0)
* CircleCI Breach (January 2023) - [link](https://circleci.com/blog/jan-4-2023-incident-report/)
* Snowflake Breach (May 2024) - [link](https://medium.com/@ronilichtman/snowstorm-surrounding-the-recent-snowflake-hack-ab7e51e0c5be)


## Data points
* [Datadog State of the Cloud 2024](https://www.datadoghq.com/state-of-cloud-security/)
  * Datadog State of the Cloud 2024 - 46% of AWS orgs users use long lived credentials to sign
into the console
  * Datadog State of the Cloud 2024 - 60% of keys across cloud providers have age > 1 year.
  * Datadog State of the Cloud 2023 - 50% of keys across cloud providers have age > 1 year.
  * Datadog State of the Cloud 2023 - users with long lived keys - 76% in AWS, 50% in Azure,
27% in GCP
  * Cloud Vulnerability Database  - Internal Azure Container Registry writable via exposed secret
  * Cloud Vulnerability Database  - Azure Site Recovery privilege escalation CSA NHI Report - 45% of times lack of credential rotation were the cause for NHI-related security incidents (1/10).
  * CSA NHI Report - 26% of organizations need management of secrets lifecycle as the most important capability of an NHI tool. (1/16)
  * CSA NHI Report - 51% of organizations have no formal process to offboard or revoke long lived API keys.
* [Orca Security State of the Cloud Security report 2022](https://orca.security/wp-content/uploads/2022/09/2022-State-of-Public-Cloud-Security-Report.pdf)
  * 80% of AWS environments have KMS rotation disabled.
  * 79% of AWS environments have at least one access key older than 90 days.



