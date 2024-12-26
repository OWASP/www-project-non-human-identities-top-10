# Methodology and Data

## Overview

During the drafting of risks, examples, and reference collection, data from various sources were gathered to support future criteria ranking.

### Data Sources

The following sources were identified and utilized:

1. **Recent Breaches**: A compilation of [high-profile breaches](https://docs.google.com/document/d/18Bu2ixzbxWFP-OBt7ZeOojBsOQ9daqUc8jw6uETbOO0/edit?tab=t.f6ika6u9gf17#heading=h.m5vxaikeuzj1) from the past 3 years involving Non-Human Identity (NHI) abuse at one or more stages of the attack.
2. **CVE Scores**: Publicly available vulnerabilities from the [NVD](https://nvd.nist.gov) (National Vulnerability Database) were analyzed, using CVSS severity scores as a key metric.
3. **Survey Data**: Surveys highlighting pressing issues in the NHI domain were compiled into data points supporting criteria ranking for each risk. These included:
   - Datadog's State of Cloud Security (2022, [2023](https://www.datadoghq.com/state-of-cloud-security-2023/), and [2024](https://www.datadoghq.com/state-of-cloud-security/))
   - CSA NHI Report ([2024](https://cloudsecurityalliance.org/artifacts/state-of-non-human-identity-security-survey-report))
   - Verizon's Data Breach Investigations Report (DBIR, [2024](https://www.verizon.com/business/resources/reports/2024-dbir-data-breach-investigations-report.pdf))

## Methodology

### Initial Drafting

The project team initially drafted 12 risks within the Non-Human Identity security domain. This process involved consultation with:
- Prominent community figures
- Vulnerability databases
- Publicly available incident reports

Only issues reported within the past three years were considered. Each identified risk was documented with a description, example attacks, and relevant references. The initial draft was shared publicly for review and feedback.

### Data Collection

In the second phase, the team began collecting and reviewing publicly available data. The collected data was matched to specific data points for each risk, ensuring comprehensive coverage.

### Criteria and Ranking Methodology

The team convened to discuss and finalize the ranking methodology. The following criteria were selected as the most relevant metrics:
- **Exploitability**
- **Detectability**
- **Prevalence**
- **Technical Impact**

Terminology was aligned with these criteria (see [Ranking Criteria](ranking-criteria.md) for details).

### Risk Ranking

Each contributor was assigned specific risks to evaluate. The team ranked each risk according to the collected data points and aligned them with the chosen terminology. This work resulted in an initial draft of the OWASP NHI Top-10.

### Validation and Finalization

The draft rankings were shared publicly, and the team held review meetings to:
- Validate consistency across risks
- Ensure alignment with terminology
- Confirm that scores were supported by the collected data points

In the final phase, the team assigned weights to each criterion based on its impact on risk severity. Terminology values were converted into numerical scores, and a weighted average was calculated for each risk. This process produced the [final risk scores](https://docs.google.com/spreadsheets/d/1pAOrTpD-3tRzCUqLhfTuMkN_SbhIjC7Icvf6vqqYOOU/edit?gid=0#gid=0).
