# NHI6:2025 Insecure Cloud Deployment Configurations

| Threat Agents & Attack Vectors                    | Security Weakness                                                                                          | Impact                                         |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| Exploitability: **Average**            | Prevalence: **Common**<br>Detectability: **Easy**                       | Technical: **Severe**<br>Business: **Specific**     |
| Generally, discovering misconfigured pipelines is difficult because they are set up within the organization's confines. However, once a threat actor gains simple read access, they can relatively easily reconnoiter the environment and discover vulnerable configurations. | Risks in managing CI/CD pipelines have gained awareness, and as a result, many CI/CD providers support OIDC-based access and push their users to use it. However, many organizations still need to catch up and use hard-coded credentials or insecure OIDC-based authentication. <br> The CI/CD misconfigurations happen on the organizations' “home turf” and thus are easy to search for. Furthermore, current known misconfigurations are well documented. | Successfully compromising a CI/CD misconfiguration could lead to supply chain attacks or rogue access to environments, as most pipelines are granted high-privilege access.

## Description

Continuous Integration and Continuous Deployment (CI/CD) applications enable developers to automate the process of building, testing, and deploying code to production environments. These integrations often require the CI/CD pipelines to authenticate with cloud services, which is typically achieved using either dedicated service accounts with static credentials or OpenID Connect (OIDC) for federated identity management.

Using dedicated service accounts with static credentials in CI/CD pipelines is considered insecure. Static credentials can be inadvertently exposed through code repositories, logs, or configuration files. If compromised, these credentials can provide attackers with persistent and potentially privileged access to production environments, bypassing multi-factor authentication (MFA) and other security measures.

OIDC offers a more secure alternative by allowing CI/CD pipelines to obtain short-lived, dynamically generated tokens for authentication. However, misconfigurations in OIDC setups can introduce vulnerabilities. If the identity tokens are not properly validated or there are no strict conditions on token claims—such as the `sub` (subject) claim—unauthorized users might exploit these weaknesses to gain access to cloud resources.

Proper configuration and management of CI/CD integrations are crucial to maintain the security of the production environment. This includes enforcing the principle of least privilege, implementing robust credential management practices, and ensuring that OIDC tokens are properly validated and restricted to authorized entities.


## Example Attack Scenarios

* **AWS IAM Roles with Misconfigured OIDC Trust Relationships**: AWS roles that allow OIDC access through `AssumeRoleWithWebIdentity` can be misconfigured if they trust public OIDC providers like GitHub or GitLab without properly restricting the `sub` claim. Without this restriction, any user on these platforms could potentially assume the role, leading to unauthorized access to AWS resources.

* **Hard-Coded Azure Service Principal Credentials**: An Azure Service Principal intended for use within a GitHub Action might have its credentials hard-coded into the pipeline's configuration files. If these files are stored in a publicly accessible repository or are otherwise exposed, attackers can obtain the credentials and authenticate as the service principal, gaining access to Azure resources with the associated permissions.

## How To Prevent
* **Use OIDC for Secure Authentication**
  - Replace static credentials with short-lived, dynamically generated tokens using OIDC.
  - Validate tokens strictly, including issuer, audience, and claims.
* **Enforce Least Privilege**
  - Limit CI/CD pipeline permissions to only what is necessary.
  - Restrict trust relationships in IAM roles and OIDC configurations.
* **Avoid Hard-Coded Credentials**
  - Store secrets securely with tools like AWS Secrets Manager, Azure Key Vault, or HashiCorp Vault.
  - Regularly scan repositories and configurations for exposed credentials.

## References

* [Exploiting Misconfigured GitLab OIDC AWS IAM Roles](https://hackingthe.cloud/aws/exploitation/Misconfigured_Resource-Based_Policies/exploiting_misconfigured_gitlab_oidc_aws_iam_roles/)

* [Security Recommendations for AWS Access in GitHub Actions](https://github.com/aws-actions/configure-aws-credentials#security-recommendations)



## Data Points

* **CSA NHI Report** - 32% of times configuration error was the cause for NHI-related security incidents. (4/10)

