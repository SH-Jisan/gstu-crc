# Project Charter & Functional Specification: CRC Platform

> **Document Status**: DRAFT / APPROVED IN PHASE 1  
> **Target System**: Come for Road Child (CRC) Official Platform  
> **Stakeholders**: CRC Central Council, CRC GSTU & Branch Network, Donors, Volunteers, Beneficiaries  

---

## 1. Executive Summary & Vision

**Come for Road Child (CRC)** is a nationwide humanitarian and social volunteer organization founded on **5 June 2016**.
- **Motto / Slogan**: *"The World Will Be Free from Street Children by Connected Together"*
- **Core Principles**: Brotherhood, Commitment, Trust.
- **Core Values**: Empathy, Respect, Non-discrimination, Neutrality, Responsibility, Transparency, Teamwork, Learning & Growth.
- **Primary Goal of Web Platform**: Build an authoritative, emotionally resonant, transparent, and high-performance digital presence to mobilize donations, manage volunteers across university branches, showcase educational initiatives (*Hatekhori School*), and publicly publish financial audit reports.

---

## 2. Target User Personas & User Journeys

| Persona | Primary Goal | Key Features Used |
| :--- | :--- | :--- |
| **Donor / Well Wisher** | Donate securely, track transparency, sponsor child education. | One-time / Monthly Donation, "Support a Child", Annual Audit Reports, Impact Stories. |
| **Prospective Volunteer / Student** | Join local university branch, participate in activities. | "Become a Member", "Volunteer With Us", Branch Activity Explorer, Events. |
| **Beneficiary / Public** | Seek educational/medical support or report child in need. | "Report a Concern" (Safeguarding hotline/form), Relief programs, Contact. |
| **Governance / Council Member** | Review institutional status, alumni network, constitutional rules. | Leadership Directory, Councils (Permanent/Executive/Temporary), Statutory Texts. |

---

## 3. Complete Information Architecture (9 Core Modules)

```
CRC Platform
│
├── 1. Happening Now
│   ├── Current Campaigns (Emergency relief, winter clothing, etc.)
│   ├── Events & Notice Board
│   └── Latest News & Press Releases
│
├── 2. Who We Are
│   ├── About (Principles, Vision, Mission, Objectives, Mode of Action)
│   ├── History & Founding Story (2016 origin, GSTU, Khulna Central, Expansion)
│   ├── How We Run (Finance, Three-Council Governance Model)
│   └── Symbol & Flag
│
├── 3. Our Work
│   ├── Where We Work (Interactive Branch Network Map: GSTU, Khulna, IU, BU, MBSTU)
│   └── Flagship Programs:
│       ├── Hatekhori School (Free institutional education for street children)
│       ├── Health & Wellbeing Campaigns
│       ├── Relief & Support (Eid/Winter cloth distribution, Iftar)
│       └── Youth Social Engagement & Member Development
│
├── 4. Our People
│   ├── Three-Tier Governance:
│   │   ├── Permanent Council (Founder, Chief Coordinator, Financial/Advisory)
│   │   ├── Executive Council (President, General Secretary, Executive Members)
│   │   └── Temporary Council (Audit, Discipline, Election Committees)
│   ├── Advisors & Alumni Directory
│   └── Volunteer Network & Volunteer Policy
│
├── 5. Get Involved
│   ├── Become a Member / General Member Registration
│   ├── Volunteer With Us (Application flow)
│   ├── Collaborate / Partner (Institutional partnerships)
│   ├── Donate (Fund allocation policy)
│   └── Support a Child (Direct educational sponsorship)
│
├── 6. Our Promises & Transparency
│   ├── Report a Concern (Whistleblowing & Child Safeguarding Form)
│   ├── Financial Transparency (Expenditure policy, Internal & External Audits)
│   ├── Code of Conduct & Policies
│   └── Data Protection & Donor Privacy
│
├── 7. Resources & Updates
│   ├── Notices & Circulars
│   ├── Statutory Text & Constitution Documents
│   ├── Annual Financial & Activity Reports (PDF downloads)
│   ├── Media Gallery (Photos, Videos)
│   └── FAQ Center
│
├── 8. Impact Stories
│   └── Real transformation stories of underprivileged children & volunteers
│
└── 9. Contact
    ├── Central Office (Khulna) & Branch Directory
    ├── Emergency Hotline & Designated Contact Persons
    └── Inquiry Form
```

---

## 4. Non-Functional & Engineering Requirements

1. **Visual Excellence & Dignity**: Child safeguarding ethics must be reflected in the visual presentation (no exploitative imagery; inspiring, dignified, and professional aesthetic).
2. **Performance (Core Web Vitals)**: Target Lighthouse score $\ge 90$ across Performance, Accessibility, Best Practices, and SEO.
3. **Responsive Design**: Flawless experience across mobile smartphones (360px+), tablets, laptops, and ultra-wide desktops.
4. **Security & Privacy**: Strict protection of donor details, SSL/TLS, sanitized form inputs, CSRF defense, and no hardcoded credentials.
