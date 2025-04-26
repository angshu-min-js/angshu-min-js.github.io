# Zeta IAM Strategy Paper

---

## 🚀 North Star

> **North Star:**  
> **Seamless and Secure Authentication & Authorization for Customers and Employees**

### CIAM (Customer Identity & Access Management)
- **Goal:** Seamless and secure authentication for customers.
- **North Star Metric:**  
  **Secure Authentication Success Rate**
  ```
  = (# of successful authentications) / 
    (# of users who initiated authentication AND have completed configuration for their domain × % of secure authentication)
    per tenant per week
  ```

### EIAM (Employee Identity & Access Management)
- **Goal:** Seamless and secure access for employees.
- **North Star Metric:**  
  **Secure Authorization Success Rate**
  ```
  = (# of successful resource accesses) / 
    (# of users requesting access and having the role × % of users accessing the right resource)
    per tenant per week
  ```

---

## 📌 Background

The organization was at a crossroads.  
Priorities kept shifting, teams were siloed, and employee engagement was dropping.  
Leadership recognized the urgent need for clarity and trust, deciding to create a comprehensive Strategy Paper to realign everyone and set a three-year course for success.

---

## 1. Identifying the Problem

- Confusion due to frequent priority changes.
- Lack of clarity around *who* the real customer was.
- No unifying vision or clear, cross-team goals.
- Platform teams working in isolation.

> **Without a shared north star, the organization would struggle to execute, regardless of talent or resources.**

---

## 2. Laying Down the Objective

- **What should the organization's new focus be based on the evolving market and internal learnings?**
- **How should all teams organize around this strategy to deliver real impact in the next three years?**

---

## 3. Writing the Strategy Paper

### Objective

- **Overview:** Outline the updated strategy based on new organizational directives.
- **Why:** Clarify direction, realign teams, and re-energize employees.

### Preamble: Who is Our Customer?

- Many small banks
- Medium-sized banks
- **Top large banks** (chosen for scalable, profitable growth)

### Current Strategy

- **Shift:** Move from selling piecemeal solutions to a **single, cohesive platform** for large banks.
- **Core Idea:**  
  - The **platform** is the **main product**.  
  - All other products are **enablers**.

### Assumptions

- **80%** of large banks' use cases will be addressed by the core platform.
- Specialized business units will handle additional customizations.
- **Short-term (6–12 months) focus:**
  - Launch a successful key application (usage, NPS, CX).
  - Acquire large banks in target geographies and ensure high retention.

### Platform Team Realignment

- **Personas:**  
  1. Internal Developers  
  2. Internal Admins, Support Engineers, Product Managers
- **Approach:**  
  - Shared OKRs  
  - Single, cross-team platform roadmap  
  - Regular cross-prioritization ceremonies

---

## 4. Specialized Strategies

### Cipher P&E's Going Forward Strategy

#### CIAM/EIAM
- Shift from just "building SSO" to **enabling complete authentication and authorization**.
- Build standard OIDC implementations, session management, privacy compliance.
- Serve internal developers first, external admins later.

#### KMS (Key Management Services)
- Enable cryptographic compliance (FIPS 140-2 level 3 HSMs).
- Offer 99.999% availability.
- Serve business encryption needs, especially for banking-grade customers.

#### ACS (Authentication and Core Services)
- Focus purely on stability — keep the lights on.
- Support app launches with zero incidents.

---

## 5. Programs and North Stars

- **Strategic Programs**: Each with clear owners and managers.
- **Aligned to North Stars**:
  - Application Success (NPS, traction, CX)
  - Developer/Admin Experience (faster TATs)
  - Support ticket reductions
  - Platform availability and stability

---

## 6. JAS Planning and Prioritization

- Freeze intakes for low-priority areas (e.g., ACS and KMS)
- Prioritize based on direct customer impact or platform success
- Build a common prioritization model (P1–P4 buckets)

---

## 7. The Presentation to Teams

- Why the strategy was necessary
- What had changed
- How it would impact each team
- What success would look like (year by year)
- How everyone had a part to play

> For the first time in months, teams had:  
> ✅ A clear customer  
> ✅ A clear product focus  
> ✅ Clear near-term and long-term goals  
> ✅ A way to measure their progress

---

## 📈 Metrics

### Other Metrics
- Quick TAT of implementation
- Fault Tolerance
- System Availability

### Counter Metrics
- Drop because of security/policies
- Drop because of not having the right roles

---

## Closing

The **Strategy Paper** became the foundation for:
- Platform realignment
- Faster execution
- Stronger collaboration
- Revitalized employee morale

> It wasn't just a document.  
> It was a **new beginning**.

---

## References

- Previous CIAM/EIAM strategies
- Customer needs
- Platform modules
- North star metrics

# Strategy Paper (Structured)

## Objective

**Overview:** This document outlines what should be the new strategy based on the new directives of the organization.

**Why it is important:** Today, everyone on the team is confused because of the changing priorities, leading to low employee engagement and motivation. Team members are confused as there is no clear sense of strategy.

---

## Preamble

### Who is the Customer?

When the organization started, it had the following options:

- A large number of small banks.
- A lot of medium-size banks.
- Top large banks.

**Based on the organization's learning, targeting top large banks is the new strategy for growth.**

---

## Current Strategy

The organization plans to sell banks a single platform that caters to specific banking needs, including retail credit and retail prepaid products. This strategy fits with a publication about targeting high-value clients for faster growth.

- The platform is the core product.
- All other product lines are enablers for the core product.

---

## Assumptions

- The core platform will enable 80% of all large bank's use cases; additional customization will be handled by specialized business units.
- Short-term (6–12 months) focus:
  - Make a specific application successful (traction, NPS, CX).
  - Acquire new large banks in target geographies and ensure high retention.

---

## Platform Team Realignment

Primary personas:
1. Internal Developers
2. Internal Admins, Support Engineers, Product Managers

Approach:
- Shared OKRs
- Single, cross-team platform roadmap
- Regular cross-prioritization ceremonies

---

## Specialized Strategies

### CIAM/EIAM
- Shift from just "building SSO" to enabling complete authentication and authorization for the platform.
- Build standard OIDC implementations, session management, privacy compliance.
- Serve internal developers first, external admins later.

### KMS
- Enable cryptographic compliance (FIPS 140-2 level 3 HSMs).
- Offer 99.999% availability.
- Serve business encryption needs, especially for banking-grade customers.

### ACS
- Focus purely on stability — keep the lights on.
- Support app launches with zero incidents.

---

## Programs and North Stars

- Strategic programs, owners, and managers assigned.
- North Stars: Application Success (NPS, traction, CX), Developer/Admin Experience, Support ticket reductions, Platform availability and stability.

---

## JAS Planning and Prioritization

- Freeze intakes for low-priority areas (e.g., ACS and KMS).
- Prioritize based on direct customer impact or platform success.
- Build a common prioritization model (P1–P4 buckets).

---

## Presentation and Closing

- Strategy Paper presented in a company-wide meeting.
- Teams gained clarity, focus, and renewed motivation.
- The paper became the foundation for platform realignment, faster execution, and stronger collaboration.

---

**References:** Previous CIAM/EIAM strategies, customer needs, platform modules, and north star metrics. 