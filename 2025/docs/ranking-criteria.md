# Ranking Criteria

The OWASP NHI Top-10 2025 project used OWASP's [Risk Rating Methodology](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology) to define and evaluate the risk criteria.

The goal of the project was to identify, prioritize, and rank risks associated with non-human identities (NHIs). To achieve this, we focused exclusively on inherent risk factors, without considering the likelihood of a specific threat scenario occurring or the organization-specific nuances of managing NHIs. 

This methodology ensures a consistent approach that highlights the most pressing risks but remains adaptable to various environments.

## Criteria and Terminology

The table below summarizes the criteria and terminology used in the ranking process:

| **Threat Agents: Exploitability** | **Security Weakness: Prevalence** | **Security Weakness: Detectability** | **Impact: Technical** |
|----------------------------------|------------------------------------|--------------------------------------|-----------------------|
| Easy: **3**                      | Widespread: **3**                  | Hard: **3**                          | Severe: **3**         |
| Average: **2**                   | Common: **2**                      | Average: **2**                        | Moderate: **2**       |
| Hard: **1**                      | Uncommon: **1**                    | Easy: **1**                           | Low: **1**            |

### Explanation of Assumptions

To maintain consistency, specific assumptions were applied during the ranking process:

- **Exploitability:** Scores assume that the organization is already vulnerable to the risk and that the threat actor has sufficient knowledge to attempt exploitation.
- **Impact:** The impact scores reflect a "worst-case scenario," considering the most severe consequences that could arise from the risk.
- **Prevalence:** The prevalence ratings focus on how widespread the security weakness is across environments, without factoring in mitigation efforts.
- **Detectability:** This considers how challenging it would be for an organization to identify the security weakness, assuming usual detection mechanisms are in place.

By grounding the ranking process in these assumptions, we aim to provide a clear and actionable framework for understanding and addressing risks related to non-human identities.
