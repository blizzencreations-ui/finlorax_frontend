export const SERVICES = [
  {
    icon: "💰",
    title: "Income Tax Filing & Advisory Services",
    desc: "We provide accurate and reliable Income Tax Return (ITR) filing services tailored for individuals, professionals, and businesses.",
    accentColor: "#c9a84c",
    bgGradient: "linear-gradient(135deg, #1a2a0e 0%, #2d4a18 100%)",
    details: {
      intro: "We provide accurate and reliable Income Tax Return (ITR) filing services tailored for individuals, professionals, and businesses. Our expert team ensures full compliance with the latest tax laws while helping you maximize your savings.",
      sections: [
        {
          heading: "Our Services Include:",
          subheading: "Preparation and filing of Income Tax Returns for:",
          items: [
            "Individuals",
            "Hindu Undivided Families (HUF)",
            "Firms and Limited Liability Partnerships (LLPs)",
            "Companies",
            "Association of Persons (AOP) / Body of Individuals (BOI)",
            "Local Authorities and Other Artificial Juridical Persons",
          ],
        },
        {
          heading: "Additional Tax Services:",
          items: [
            
            "Tax Planning & Advisory",
            "Advance Tax Calculations",
            
          ],
        },
      ],
    },
  },
  {
    icon: "📊",
    title: "GST & Indirect Tax Services",
    desc: "We offer end-to-end GST and Indirect Tax services to ensure your business remains compliant while optimizing tax efficiency.",
    accentColor: "#3b9eff",
    bgGradient: "linear-gradient(135deg, #0a1e38 0%, #0f2f5a 100%)",
    details: {
      intro: "GST Compliance & Advisory Services. We offer end-to-end GST and Indirect Tax services to ensure your business remains compliant while optimizing tax efficiency. Our expert team assists with registration, filing, advisory, and representation before tax authorities.",
      sections: [
        {
          heading: "✔ GST Registration & Amendments",
          items: [
            "New GST registration for businesses",
            "Amendments in GST details (address, business structure, etc.)",
          ],
        },
        {
          heading: "✔ GST Return Filing & Compliance",
          items: [
            "Monthly, quarterly, and annual return filing",
            "Timely compliance with GST regulations",
            "Reconciliation of GST returns",
          ],
        },
        {
          heading: "✔ Input Tax Credit (ITC) Advisory",
          items: [
            "ITC eligibility analysis",
            "Maximizing input credit benefits",
            "ITC reconciliation and error correction",
          ],
        },
        {
          heading: "✔ GST Assessments & Departmental Notices",
          items: [
            "Handling GST notices and queries",
            "Assessment support and documentation",
            "Reply drafting and submission",
          ],
        },
        {
          heading: "✔ GST Refund Services",
          items: [
            "Refund application processing",
            "Export refunds and inverted duty refunds",
            "Follow-up with departments for faster processing",
          ],
        },
      ],
    },
  },
  {
    icon: "🏦",
    title: "Financial & Accounting Outsourcing",
    desc: "We provide end-to-end accounting and financial outsourcing services to help you manage your finances efficiently.",
    accentColor: "#9b59b6",
    bgGradient: "linear-gradient(135deg, #1a0a2e 0%, #2e1060 100%)",
    details: {
      intro: "Smart Accounting Support for Growing Businesses. We provide end-to-end accounting and financial outsourcing services to help you manage your finances efficiently while focusing on your core business operations. Our expert team ensures accuracy, compliance, and timely reporting at every stage.",
      sections: [
        {
          heading: "Our Services Include:",
          items: [
            "Bookkeeping & day-to-day accounting",
            "Financial reporting & MIS",
            "GST Process",
            "Bank reconciliation",
            "Payroll support",
            "Compliance & documentation",
          ],
        },
        
      ],
    },
  },
  {
    icon: "🏢",
    title: "Business Registration & Liaison Services",
    desc: "We provide complete business registration and legal setup services to help you establish your entity smoothly and compliantly.",
    accentColor: "#e74c3c",
    bgGradient: "linear-gradient(135deg, #2e0a0a 0%, #5a1010 100%)",
    details: {
      intro: "Start Your Business with Confidence. We provide complete business registration and legal setup services to help you establish your entity smoothly and compliantly. From choosing the right structure to final registration, we handle everything end-to-end.",
      sections: [
        {
          heading: "Our Registration Services Include:",
          items: [
            "Private Limited Company Registration",
            "One Person Company (OPC) Registration",
            "Limited Liability Partnership (LLP) Registration",
            "Partnership Firm Registration",
          ],
        },
        {
          heading: "Business & Tax Registrations:",
          items: [
            "MSME Registration",
            "PAN Registration & Corrections",
            "TAN Registration",
            "Professional Tax Registration",
          ],
        },
        {
          heading: "Licenses & Certifications:",
          items: [
            "FSSAI (Food & Catering License)",
            "Import Export Code (IEC)",
            "Shop & Establishment License",
            "Factory License",
            "Fire License",
            "Trade Mark License",
          ],
        },
        {
          heading: "Additional Services:",
          items: ["Digital Signature (DSC)"],
        },
      ],
    },
  },
  {
    icon: "🏢",
    title: "Loan Support Services",
    desc: "We provide comprehensive loan support services to help you navigate the borrowing process with ease and confidence.",
    accentColor: "#3498db",
    bgGradient: "linear-gradient(135deg, #0d2b45 0%, #1e5a8c 100%)",
    details: {
      intro: "Secure Your Financial Future. We offer tailored loan support services to assist you in securing the financing you need for your business or personal goals. Our team provides guidance throughout the application process, ensuring a smooth and successful outcome.",
      sections: [
        {
          heading: "Our Loan Support Services Include:",
          items: [
            "Personal Loan Assistance",
            "Business Loan Consultation",
            "Home Loan Guidance",
            "Working Capital Loan",
          ],
        },
      ],
    },
  }
];

/* ══════════════════════════════════════════════════════════════════════════════
   SERVICE ITEM DETAILS
   Keyed by the exact item string. Each entry powers a full detail page.
══════════════════════════════════════════════════════════════════════════════ */
export const SERVICE_ITEM_DETAILS = {

  /* ── Income Tax ─────────────────────────────────────────────────────────── */
  "Individuals": {
    photo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    photoAlt: "Individual tax filing",
    badge: "Income Tax Filing",
    heading: "Income Tax Filing for Individuals",
    subheading: "Hassle-free ITR filing tailored to your income profile",
    intro: "Filing your Income Tax Return is a legal obligation and a financial opportunity. At Finlorax Associates, we make individual ITR filing simple, accurate, and stress-free — ensuring you claim every deduction you are entitled to while staying fully compliant.",
    sections: [
      { heading: "Who Needs to File?", items: ["Salaried employees earning above the basic exemption limit","Freelancers and self-employed professionals","Investors with capital gains from stocks or property","Individuals with foreign income or assets","Those seeking tax refunds on excess TDS deducted"] },
      { heading: "What We Do for You", items: ["Collect and review all income documents (Form 16, bank statements, etc.)","Identify eligible deductions under 80C, 80D, HRA, LTA, and more","Prepare and e-file the correct ITR form on your behalf","Respond to any income tax notices or queries","Follow up on your refund status until credited"] },
    ],
    cta: "Get your ITR filed today — accurately and on time.",
  },

  "Hindu Undivided Families (HUF)": {
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    photoAlt: "HUF tax filing",
    badge: "HUF Tax Filing",
    heading: "HUF Income Tax Returns",
    subheading: "Maximize your family's tax benefits through the HUF structure",
    intro: "A Hindu Undivided Family (HUF) is a unique tax entity that allows families to save significant tax by splitting income between the individual and the HUF. Finlorax Associates specialises in setting up and managing HUF accounts with complete compliance.",
    sections: [
      { heading: "Benefits of HUF Tax Filing", items: ["Separate basic exemption limit for the HUF entity","Additional 80C deductions of up to ₹1.5 Lakh","Effective income splitting to reduce overall tax burden","Separate PAN and bank account for the family unit"] },
      { heading: "Our HUF Services", items: ["HUF deed drafting and PAN registration","Annual ITR filing for the HUF","Advisory on income allocation between HUF and members","Handling capital gains from HUF assets","Compliance with HUF-specific tax provisions"] },
    ],
    cta: "Talk to our experts about structuring your HUF for maximum savings.",
  },

  "Firms and Limited Liability Partnerships (LLPs)": {
    photo: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
    photoAlt: "LLP tax filing",
    badge: "Firm & LLP Filing",
    heading: "Tax Filing for Firms & LLPs",
    subheading: "Complete income tax compliance for partnership firms and LLPs",
    intro: "Partnership firms and LLPs have distinct tax obligations compared to individual taxpayers. Our team handles your annual return filing, partner remuneration, and capital gains reporting with precision and timeliness.",
    sections: [
      { heading: "Our Filing Services Cover", items: ["ITR-5 preparation and e-filing for firms and LLPs","Partner remuneration and interest on capital calculations","Tax audit support (if applicable under Section 44AB)","Capital gains on dissolution or reconstitution","Advance tax estimation and challan payments"] },
      { heading: "Why Choose Finlorax?", items: ["Dedicated relationship manager for your firm","Proactive reminders for all deadlines","Secure document management and record keeping","Year-round advisory support for tax planning"] },
    ],
    cta: "Ensure your firm's tax compliance is handled by experts.",
  },

  "Companies": {
    photo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    photoAlt: "Corporate tax filing",
    badge: "Corporate Tax",
    heading: "Corporate Income Tax Filing",
    subheading: "End-to-end tax compliance for Private Limited and Public Companies",
    intro: "Corporate tax compliance in India involves stringent deadlines and complex calculations. Finlorax Associates provides comprehensive corporate tax services — from return filing to advance tax planning — ensuring your company meets every statutory requirement.",
    sections: [
      { heading: "Corporate Tax Services", items: ["ITR-6 preparation and e-filing","MAT (Minimum Alternate Tax) computation","Deferred tax computation and disclosure","TDS compliance and reconciliation","Transfer pricing documentation (if applicable)"] },
      { heading: "Value-Added Services", items: ["Tax-efficient structuring of director remuneration","Tax planning for dividend distribution","Assistance with tax assessments and appeals","Representation before income tax authorities"] },
    ],
    cta: "Keep your company tax-compliant and penalty-free.",
  },

  "Association of Persons (AOP) / Body of Individuals (BOI)": {
    photo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    photoAlt: "AOP BOI filing",
    badge: "AOP / BOI Filing",
    heading: "ITR Filing for AOP & BOI",
    subheading: "Specialised tax filing for collective entities",
    intro: "Associations of Persons and Bodies of Individuals are taxed as separate entities under the Income Tax Act. Our specialists ensure proper income allocation, tax computation at the applicable slab rates, and timely e-filing for these unique structures.",
    sections: [
      { heading: "Key Compliance Areas", items: ["Determination of residential status for AOP/BOI","Computation of income and applicable tax rates","Applicability of AMT (Alternative Minimum Tax)","Return filing and self-assessment tax payment","Compliance with section 167B provisions"] },
    ],
    cta: "Get expert help with your AOP or BOI tax return.",
  },

  "Local Authorities and Other Artificial Juridical Persons": {
    photo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    photoAlt: "Institutional tax filing",
    badge: "Institutional Tax",
    heading: "Tax Filing for Institutional Entities",
    subheading: "Compliance solutions for local bodies and juridical persons",
    intro: "Local authorities, trusts, municipalities, and other juridical persons have specific tax obligations. Finlorax Associates provides expert guidance to navigate complex provisions and ensure accurate, compliant returns for these entities.",
    sections: [
      { heading: "Services for Institutional Entities", items: ["Assessment of taxability and exemptions available","ITR-7 preparation for trusts and charitable bodies","Compliance with Section 10(20), 10(23) and related provisions","Handling assessments and departmental queries","Advisory on income application and accumulation rules"] },
    ],
    cta: "Ensure compliance for your institutional entity.",
  },

  "Tax Planning & Advisory": {
    photo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    photoAlt: "Tax planning",
    badge: "Tax Advisory",
    heading: "Strategic Tax Planning & Advisory",
    subheading: "Legally minimize your tax liability with expert planning",
    intro: "Tax planning is not just about saving money — it is about making smart financial decisions throughout the year. Our advisors analyse your complete financial picture to design strategies that are fully compliant with Indian tax laws while maximising your after-tax returns.",
    sections: [
      { heading: "Tax Planning Strategies We Offer", items: ["Investment planning under Section 80C, 80D, 80CCD","HRA, LTA, and salary structuring for employees","Capital gains planning — short-term vs long-term","Real estate transaction advisory","Business expense optimisation and deduction planning"] },
      { heading: "Year-Round Advisory Support", items: ["Quarterly tax review meetings","Advance tax calculation and timely payment","Changes in law — impact analysis and restructuring","Representation if assessments are triggered"] },
    ],
    cta: "Start planning your taxes early — every rupee saved matters.",
  },

  "Advance Tax Calculations": {
    photo: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
    photoAlt: "Advance tax",
    badge: "Advance Tax",
    heading: "Advance Tax Calculation & Payment",
    subheading: "Avoid interest and penalties with accurate advance tax management",
    intro: "Advance tax must be paid in instalments throughout the year if your estimated tax liability exceeds ₹10,000. Our team calculates the precise amount due at each instalment date and ensures timely payment to avoid Section 234B/234C interest charges.",
    sections: [
      { heading: "Our Advance Tax Services", items: ["Estimation of annual taxable income","Computation of advance tax instalments (June, Sept, Dec, March)","Challan generation and payment assistance","Adjustment of TDS credits before calculation","Reconciliation at year-end to minimise final tax dues"] },
    ],
    cta: "Never face a surprise tax bill — plan your advance tax with us.",
  },

  /* ── GST ────────────────────────────────────────────────────────────────── */
  "New GST registration for businesses": {
    photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    photoAlt: "GST registration",
    badge: "GST Registration",
    heading: "New GST Registration",
    subheading: "Get your GSTIN quickly and correctly",
    intro: "GST registration is mandatory for businesses exceeding the turnover threshold or engaged in inter-state supply. Finlorax Associates handles your entire registration process — from document preparation to GSTIN activation — ensuring zero errors and fast approval.",
    sections: [
      { heading: "Who Needs GST Registration?", items: ["Businesses with turnover above ₹40 lakh (₹20 lakh for services)","All e-commerce operators and sellers","Businesses making inter-state supplies","Importers and exporters","Casual taxable persons"] },
      { heading: "Documents Required", items: ["PAN card of business / proprietor","Aadhar card and photograph","Proof of business address","Bank account statement or cancelled cheque","Partnership deed / MOA / AOA (if applicable)"] },
      { heading: "Our Process", items: ["Document collection and verification","Application preparation on GST portal","ARN generation and tracking","GSTIN certificate download and delivery","Post-registration compliance guidance"] },
    ],
    cta: "Get your GST registration done in 3–7 working days.",
  },

  "Amendments in GST details (address, business structure, etc.)": {
    photo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    photoAlt: "GST amendments",
    badge: "GST Amendments",
    heading: "GST Registration Amendments",
    subheading: "Update your GST details accurately and on time",
    intro: "Any change in your business details — address, partners, business name, or nature — must be updated in your GST registration within 15 days. Our team handles all amendment applications swiftly to keep your registration current and compliant.",
    sections: [
      { heading: "Types of Amendments We Handle", items: ["Change of business address (principal or additional place)","Addition or deletion of partners / directors","Change in business name or trade name","Addition of new business verticals","Cancellation of GST registration"] },
    ],
    cta: "Update your GST details before it becomes a compliance issue.",
  },

  "Monthly, quarterly, and annual return filing": {
    photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    photoAlt: "GST return filing",
    badge: "GST Returns",
    heading: "GST Return Filing & Compliance",
    subheading: "On-time filing of all GST returns — GSTR-1, 3B, 9 and more",
    intro: "GST return filing is a monthly, quarterly, and annual obligation. Missing deadlines invites late fees and interest. Our dedicated GST team manages your complete return filing calendar so you never miss a due date.",
    sections: [
      { heading: "Returns We File", items: ["GSTR-1 (Outward supplies) — monthly or quarterly","GSTR-3B (Summary return) — monthly or quarterly","GSTR-9 (Annual return)","GSTR-9C (Reconciliation statement if applicable)","GSTR-4 (Composition scheme annual return)","CMP-08 (Composition quarterly statement)"] },
      { heading: "Our Filing Process", items: ["Purchase and sales data collection from you","Reconciliation with GSTR-2B for ITC verification","Preparation and review of return drafts","Filing on the GST portal before due date","Acknowledgement and summary shared with you"] },
    ],
    cta: "Never pay a GST late fee again — let us handle it.",
  },
  "Timely compliance with GST regulations": {
    photo: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?w=800&q=80",
    photoAlt: "GST compliance",
    badge: "GST Compliance",
    heading: "Timely GST Compliance Management",
    subheading: "Stay ahead of every GST deadline — without the stress",
    intro: "GST compliance is an ongoing obligation that goes far beyond filing returns. It requires constant monitoring of due dates, regulatory updates, and portal changes. Finlorax Associates acts as your dedicated compliance partner — tracking every deadline, communicating changes, and ensuring your business is always in good standing with the GST authorities.",
    sections: [
      {
        heading: "What Timely Compliance Covers",
        items: [
          "Monitoring and tracking of all applicable GST due dates",
          "Proactive alerts before filing deadlines",
          "Ensuring accurate outward and inward supply reporting",
          "Compliance with e-invoicing and e-way bill requirements",
          "Maintaining audit-ready GST records throughout the year",
        ],
      },
      {
        heading: "Benefits of Staying Compliant",
        items: [
          "Zero late fees and interest charges",
          "Uninterrupted Input Tax Credit claims",
          "Reduced risk of GST notices and scrutiny",
          "Better financial credibility with banks and partners",
          "Seamless annual return filing at year-end",
        ],
      },
      {
        heading: "Our Compliance Calendar Management",
        items: [
          "Custom compliance calendar tailored to your business",
          "Dedicated GST manager assigned to your account",
          "Real-time updates on GST law changes",
          "Monthly compliance health-check report",
        ],
      },
    ],
    cta: "Let us manage your GST compliance calendar — completely.",
  },

  "Reconciliation of GST returns": {
    photo: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    photoAlt: "GST reconciliation",
    badge: "GST Reconciliation",
    heading: "GST Return Reconciliation",
    subheading: "Identify and correct mismatches before they become penalties",
    intro: "GST reconciliation ensures that your filed returns match your books of accounts and the data reported by your suppliers. Unreconciled mismatches can lead to denial of Input Tax Credit, notices from the department, and financial losses. Finlorax Associates performs thorough reconciliation to keep your GST position accurate and clean.",
    sections: [
      {
        heading: "Types of Reconciliation We Perform",
        items: [
          "GSTR-1 vs GSTR-3B reconciliation (outward supplies)",
          "GSTR-2B vs purchase register reconciliation (ITC matching)",
          "Books of accounts vs GST portal data reconciliation",
          "Annual reconciliation for GSTR-9 and GSTR-9C preparation",
          "TDS/TCS reconciliation under GST (GSTR-7 / GSTR-8)",
        ],
      },
      {
        heading: "Our Reconciliation Process",
        items: [
          "Download of portal data (GSTR-1, GSTR-2B, GSTR-3B)",
          "Comparison with your purchase and sales register",
          "Identification of mismatches and missing invoices",
          "Communication with vendors for correction",
          "Filing amendments or adjustments in subsequent returns",
          "Final reconciliation report shared with you",
        ],
      },
      {
        heading: "Why Reconciliation Matters",
        items: [
          "Prevents wrongful ITC claims that attract penalties",
          "Ensures GSTR-9 annual return accuracy",
          "Reduces exposure to department scrutiny",
          "Helps recover genuine ITC that may have been missed",
        ],
      },
    ],
    cta: "Get your GST returns reconciled accurately — avoid costly mismatches.",
  },

  /* ─────────────────────────────────────────────────────────────────────────
     GST — INPUT TAX CREDIT (ITC) ADVISORY
  ───────────────────────────────────────────────────────────────────────── */
  "ITC eligibility analysis": {
    photo: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    photoAlt: "ITC eligibility",
    badge: "ITC Advisory",
    heading: "Input Tax Credit (ITC) Eligibility Analysis",
    subheading: "Claim only what you are entitled to — accurately and legally",
    intro: "Input Tax Credit (ITC) is one of the most significant benefits of GST — but it comes with complex eligibility conditions. Claiming ineligible ITC can result in reversal demands, interest, and penalties. Our GST specialists conduct a thorough eligibility analysis to ensure you claim every rupee of legitimate credit while avoiding any exposure.",
    sections: [
      {
        heading: "What ITC Eligibility Analysis Covers",
        items: [
          "Review of all purchases and expenses for ITC admissibility",
          "Identification of blocked credits under Section 17(5)",
          "Assessment of ITC on capital goods and their reversal rules",
          "Proportional ITC calculation for mixed-use supplies",
          "Compliance with Section 16 conditions (payment, receipt, return filing)",
        ],
      },
      {
        heading: "Common ITC Errors We Prevent",
        items: [
          "Claiming ITC on personal-use or non-business expenses",
          "Claiming ITC without matching supplier GSTR-1 filing",
          "ITC on goods and services used for exempt supplies",
          "ITC on motor vehicles and food expenses (blocked credits)",
          "Missing ITC due to non-reconciliation with GSTR-2B",
        ],
      },
    ],
    cta: "Get an ITC eligibility review done before your next GST filing.",
  },

  "Maximizing input credit benefits": {
    photo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    photoAlt: "Maximize ITC",
    badge: "ITC Optimization",
    heading: "Maximizing Your Input Tax Credit",
    subheading: "Recover every rupee of eligible ITC legally and efficiently",
    intro: "Many businesses unknowingly leave significant ITC unclaimed due to procedural gaps, poor vendor compliance, or lack of awareness. Finlorax Associates helps you build a systematic ITC maximization strategy — reducing your net GST outflow and improving cash flow.",
    sections: [
      {
        heading: "ITC Maximization Strategies",
        items: [
          "Vendor compliance monitoring — ensuring suppliers file GSTR-1 on time",
          "Timely reconciliation with GSTR-2B to claim all available credits",
          "Identification of overlooked ITC on capital goods and services",
          "Structuring procurements to maximize eligible ITC",
          "Advisory on transitional credits and special situations",
        ],
      },
      {
        heading: "Vendor Management for ITC",
        items: [
          "Tracking non-compliant vendors whose ITC is at risk",
          "Communication templates to chase vendor filings",
          "Reporting on vendor GST compliance health",
          "Recommendations on vendor replacement if persistently non-compliant",
        ],
      },
    ],
    cta: "Stop leaving ITC on the table — let us maximise your credits.",
  },

  "ITC reconciliation and error correction": {
    photo: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&q=80",
    photoAlt: "ITC reconciliation",
    badge: "ITC Reconciliation",
    heading: "ITC Reconciliation & Error Correction",
    subheading: "Fix mismatches and incorrect ITC claims before they escalate",
    intro: "ITC mismatches between your books and the GST portal are one of the leading causes of GST notices. Whether due to supplier non-filing, data entry errors, or timing differences — unresolved mismatches invite scrutiny and penalties. Finlorax Associates identifies, investigates, and corrects ITC errors systematically.",
    sections: [
      {
        heading: "Types of ITC Errors We Correct",
        items: [
          "Excess ITC claimed beyond GSTR-2B availability",
          "ITC claimed on invoices not uploaded by suppliers",
          "Duplicate ITC claims on the same invoice",
          "ITC claimed in wrong tax period",
          "ITC reversal shortfalls on exempt or non-business supplies",
        ],
      },
      {
        heading: "Our Correction Process",
        items: [
          "Month-wise GSTR-2B vs purchase register comparison",
          "Root cause identification for each mismatch",
          "Supplier follow-up for missing GSTR-1 entries",
          "Filing GSTR-3B amendments wherever applicable",
          "Documentation maintained for audit trail",
        ],
      },
    ],
    cta: "Correct your ITC position before a notice arrives.",
  },

  /* ─────────────────────────────────────────────────────────────────────────
     GST — ASSESSMENTS & DEPARTMENTAL NOTICES
  ───────────────────────────────────────────────────────────────────────── */
  "Handling GST notices and queries": {
    photo: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    photoAlt: "GST notice handling",
    badge: "GST Notices",
    heading: "GST Notice Handling & Query Resolution",
    subheading: "Respond to GST notices accurately and on time",
    intro: "Receiving a GST notice can be stressful — but the right response can resolve most issues without penalty. Finlorax Associates provides prompt, professional handling of all types of GST notices and queries, ensuring your responses are accurate, well-documented, and submitted within due dates.",
    sections: [
      {
        heading: "Types of Notices We Handle",
        items: [
          "ASMT-10: Scrutiny of returns",
          "DRC-01: Summary of demand for tax and interest",
          "DRC-01A: Pre-show cause notice for voluntary payment",
          "GSTR mismatch notices (ITC reversal demands)",
          "Cancellation of registration show cause notices",
          "Audit notices under Section 65 and 66",
        ],
      },
      {
        heading: "Our Response Process",
        items: [
          "Thorough analysis of the notice and underlying data",
          "Gathering supporting documents and evidence",
          "Drafting a detailed, legally sound reply",
          "Submission within the stipulated time",
          "Follow-up until the notice is closed or resolved",
        ],
      },
    ],
    cta: "Received a GST notice? Contact us immediately — we will handle it.",
  },

  "Assessment support and documentation": {
    photo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    photoAlt: "GST assessment",
    badge: "GST Assessment",
    heading: "GST Assessment Support & Documentation",
    subheading: "Expert representation and documentation during GST assessments",
    intro: "GST assessments — whether self-assessment, scrutiny, or departmental audit — require meticulous documentation and accurate data. Finlorax Associates provides comprehensive support throughout the assessment process, ensuring your records are in order and your position is well-defended.",
    sections: [
      {
        heading: "Types of Assessments We Support",
        items: [
          "Provisional assessment (Section 60)",
          "Scrutiny of returns (Section 61)",
          "Best judgment assessment (Section 62 & 63)",
          "Summary assessment (Section 64)",
          "GST audit by department (Section 65 & 66)",
        ],
      },
      {
        heading: "Documentation We Prepare",
        items: [
          "Reconciliation statements for all return periods",
          "Explanation for differences in turnover or ITC",
          "Supporting invoices and purchase records",
          "Bank statements and payment proofs",
          "Detailed written submissions and replies",
        ],
      },
    ],
    cta: "Face your GST assessment with confidence — we will prepare you.",
  },

  "Reply drafting and submission": {
    photo: "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=800&q=80",
    photoAlt: "Reply drafting",
    badge: "GST Reply",
    heading: "GST Reply Drafting & Submission",
    subheading: "Professionally drafted replies that protect your interests",
    intro: "A poorly worded reply to a GST notice can worsen your situation. Finlorax Associates drafts clear, legally sound, and evidence-backed replies to all GST notices, show cause notices, and audit queries — ensuring your position is communicated effectively to the authorities.",
    sections: [
      {
        heading: "Replies We Draft For",
        items: [
          "Show cause notices (SCN) for tax demand",
          "ASMT-10 scrutiny reply with supporting data",
          "DRC-01A voluntary compliance response",
          "ITC mismatch and reversal objections",
          "Departmental audit query responses",
          "E-way bill discrepancy explanations",
        ],
      },
      {
        heading: "Our Reply Drafting Approach",
        items: [
          "In-depth review of notice and applicable provisions",
          "Collection of all supporting evidence",
          "Clear, structured reply with legal backing",
          "Filing on the GST portal with acknowledgement",
          "Personal hearing representation if required",
        ],
      },
    ],
    cta: "Do not respond to a GST notice without expert help — contact us.",
  },

  /* ─────────────────────────────────────────────────────────────────────────
     GST — REFUND SERVICES
  ───────────────────────────────────────────────────────────────────────── */
  "Refund application processing": {
    photo: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80",
    photoAlt: "GST refund",
    badge: "GST Refund",
    heading: "GST Refund Application Processing",
    subheading: "Recover your blocked GST credits and excess tax paid",
    intro: "GST refunds can arise from excess tax payments, zero-rated exports, inverted duty structures, or deemed exports. The refund process involves precise documentation and portal filings. Finlorax Associates manages the entire refund application lifecycle — from eligibility assessment to credit receipt.",
    sections: [
      {
        heading: "Situations Where Refund Arises",
        items: [
          "Exports of goods or services (zero-rated supply)",
          "Inverted duty structure (ITC accumulation)",
          "Excess balance in electronic cash ledger",
          "Tax paid on supplies later held exempt",
          "Deemed exports and supply to SEZ units",
        ],
      },
      {
        heading: "Our Refund Process",
        items: [
          "Eligibility check and refund amount calculation",
          "Preparation of refund application (RFD-01)",
          "Supporting documents compilation and upload",
          "Tracking application status on the GST portal",
          "Response to any deficiency memo (RFD-03) from the officer",
          "Follow-up until refund order (RFD-06) is issued and credited",
        ],
      },
    ],
    cta: "Do not let your GST refund stay stuck — let us process it.",
  },

  "Export refunds and inverted duty refunds": {
    photo: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    photoAlt: "Export GST refund",
    badge: "Export / Inverted Duty",
    heading: "Export Refunds & Inverted Duty Structure Refunds",
    subheading: "Specialized refund services for exporters and manufacturers",
    intro: "Exporters and businesses with inverted duty structures (where input tax rate exceeds output tax rate) accumulate significant ITC that cannot be utilised — leading to blocked working capital. Finlorax Associates specialises in recovering these refunds quickly and accurately.",
    sections: [
      {
        heading: "Export Refund Options",
        items: [
          "Refund of IGST paid on goods exported out of India",
          "Refund of accumulated ITC on zero-rated services",
          "Refund for supplies to Special Economic Zones (SEZ)",
          "LUT (Letter of Undertaking) filing for export without tax payment",
        ],
      },
      {
        heading: "Inverted Duty Structure Refunds",
        items: [
          "Identification of inverted duty situations in your supply chain",
          "Calculation of maximum eligible refund under Rule 89(5)",
          "RFD-01 filing with all supporting schedules",
          "Reconciliation of ITC ledger and turnover data",
          "Handling CA certificate requirements where applicable",
        ],
      },
    ],
    cta: "Unlock your blocked GST credits — file your refund claim today.",
  },

  "Follow-up with departments for faster processing": {
    photo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    photoAlt: "GST department follow-up",
    badge: "Refund Follow-Up",
    heading: "Departmental Follow-Up for GST Refunds",
    subheading: "Persistent and professional follow-up until your refund is credited",
    intro: "Filing a refund application is just the first step. GST refunds often get delayed due to pending verification, deficiency memos, or officer queries. Finlorax Associates provides active follow-up with the GST department — both online and offline — to ensure your refund moves through the process as quickly as possible.",
    sections: [
      {
        heading: "Our Follow-Up Activities",
        items: [
          "Regular tracking of refund application status on the GST portal",
          "Timely response to RFD-03 deficiency memos",
          "Submission of additional documents requested by officer",
          "Scheduling and attending personal hearings",
          "Escalation to senior officers if refund is unjustifiably delayed",
          "Coordination with jurisdictional GST office where required",
        ],
      },
      {
        heading: "Timelines We Target",
        items: [
          "Provisional refund (60%): within 7 days of application",
          "Final refund order: within 60 days as per GST law",
          "Deficiency memo response: within 15 days",
          "Interest claim if refund is delayed beyond 60 days",
        ],
      },
    ],
    cta: "Stop chasing the department yourself — we will do it for you.",
  },

  /* ── Business Registration ──────────────────────────────────────────────── */
  "Private Limited Company Registration": {
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    photoAlt: "Private Limited Company Registration",
    badge: "Company Registration",
    heading: "Private Limited Company Registration",
    subheading: "Incorporate your Pvt Ltd company with complete end-to-end support",
    intro: "A Private Limited Company is the most preferred business structure in India for startups and growing businesses. It offers limited liability protection, easier access to funding, and professional credibility. Our Finlorax Associates helps you register your company under the Companies Act, 2013 — handling everything from name approval to Certificate of Incorporation.",
    sections: [
      {
        heading: "Private Limited Company under Companies Act, 2013",
        body: "A private limited company serves as an appropriate structure for starting a family or small-scale business. The company does not impose a minimum paid-up share capital requirement. Incorporating your business grants you professional stature, and registering your company's trademark allows you to protect your name and prevent others from using it.",
        items: ["Minimum 2 directors (maximum 15)","Minimum 2 shareholders (maximum 200)","At least one director must be a resident of India","Registered office address required in India","Digital Signature Certificates (DSC) for all directors"],
      },
      {
        heading: "Documents Required",
        items: ["PAN card and Aadhar of all directors and shareholders","Passport-size photographs","Proof of registered office address (utility bill + NOC)","Bank statement or latest utility bill of directors","Memorandum of Association (MoA) and Articles of Association (AoA)"],
      },
      {
        heading: "Our Registration Process",
        items: ["Name approval via RUN (Reserve Unique Name)","DSC and DIN (Director Identification Number) application","MoA and AoA drafting","SPICe+ form filing with MCA","PAN, TAN, GST, and bank account opening assistance"],
      },
      {
        heading: "Post-Registration Compliance",
        items: ["Annual filing of ROC forms (AOC-4, MGT-7)","Board meeting and AGM compliance","Statutory registers maintenance","Director KYC (DIR-3 KYC) annually","Share certificate issuance"],
      },
    ],
    cta: "Start your company registration today — certificates in 7–10 working days.",
  },

  "One Person Company (OPC) Registration": {
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    photoAlt: "OPC Registration",
    badge: "OPC Registration",
    heading: "One Person Company (OPC) Registration",
    subheading: "The perfect structure for solo entrepreneurs seeking limited liability",
    intro: "A One Person Company allows a single entrepreneur to operate a corporate entity with limited liability protection. It combines the benefits of a sole proprietorship with the legal protection of a private limited company — the best of both worlds for individual business owners.",
    sections: [
      { heading: "Key Features of OPC", items: ["Only one member / shareholder required","Nominee director mandatory at the time of incorporation","Limited liability protection for the sole owner","Separate legal entity from the owner","Lower compliance burden compared to Pvt Ltd"] },
      { heading: "Registration Process", items: ["Name reservation via RUN","DSC and DIN application for the sole director","MoA and AoA preparation with nominee details","SPICe+ form filing","Certificate of Incorporation issued by MCA"] },
      { heading: "Conversion Rules", items: ["Mandatory conversion to Pvt Ltd if turnover exceeds ₹2 crore","Voluntary conversion permitted after 2 years of incorporation"] },
    ],
    cta: "Register your OPC and protect your personal assets today.",
  },

  "Limited Liability Partnership (LLP) Registration": {
    photo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    photoAlt: "LLP Registration",
    badge: "LLP Registration",
    heading: "LLP Registration",
    subheading: "Flexible partnership with the protection of limited liability",
    intro: "A Limited Liability Partnership combines the operational flexibility of a partnership with the limited liability protection of a company. It is ideal for professionals, consultants, and small businesses who want a formal structure without the heavy compliance burden of a Private Limited Company.",
    sections: [
      { heading: "Advantages of LLP", items: ["Partners' personal assets are protected from business debts","No minimum capital requirement","Lower ROC compliance compared to Pvt Ltd","Flexible profit-sharing arrangement between partners","No requirement for audits if turnover below ₹40 lakh"] },
      { heading: "Registration Requirements", items: ["Minimum 2 designated partners required","At least one partner must be a resident of India","LLP Agreement defining rights and duties of partners","DPIN (Designated Partner Identification Number) for all designated partners"] },
      { heading: "Post-Registration Filings", items: ["Annual return (Form 11) filing","Statement of accounts (Form 8) filing","LLP Agreement filing if amended","Income tax return filing (ITR-5)"] },
    ],
    cta: "Set up your LLP with Finlorax — done in 10–15 working days.",
  },

  "Partnership Firm Registration": {
    photo: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80",
    photoAlt: "Partnership Firm",
    badge: "Partnership Registration",
    heading: "Partnership Firm Registration",
    subheading: "Formalise your business partnership with a legally binding deed",
    intro: "A partnership firm is one of the oldest and simplest forms of business organisation in India. Governed by the Indian Partnership Act, 1932, it allows two or more individuals to share profits and manage a business together. Registration provides legal recognition and enforceability of the partnership deed.",
    sections: [
      { heading: "Key Features", items: ["Minimum 2 partners, maximum 20 partners","Governed by a Partnership Deed","Partners share unlimited liability (unless LLP)","Relatively simple formation and dissolution process","Income taxed in the hands of the firm at flat 30%"] },
      { heading: "Registration Process", items: ["Drafting of Partnership Deed on stamp paper","Filing application with the Registrar of Firms","Submission of required documents and fees","Certificate of Registration issued by RoF"] },
    ],
    cta: "Get your partnership firm registered today.",
  },

  " MSME Registration": {
    photo: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    photoAlt: "MSME Registration",
    badge: "MSME / Udyam",
    heading: " MSME Registration",
    subheading: "Unlock government benefits and schemes for your small business",
    intro: "MSME Registration (formerly Udyog Aadhar) is mandatory for businesses seeking MSME status under the Micro, Small and Medium Enterprises Development Act. It unlocks access to government subsidies, priority lending, tax exemptions, and tender preferences.",
    sections: [
      { heading: "Benefits of MSME Registration", items: ["Collateral-free loans under CGTMSE scheme","Lower interest rates on business loans","Priority sector lending from banks","Subsidies on ISO certification and patent fees","Protection against delayed payments (MSME Samadhaan)","Eligibility for government tenders reserved for MSMEs"] },
      { heading: "Eligibility Criteria", items: ["Micro: Investment ≤ ₹1 Cr & Turnover ≤ ₹5 Cr","Small: Investment ≤ ₹10 Cr & Turnover ≤ ₹50 Cr","Medium: Investment ≤ ₹50 Cr & Turnover ≤ ₹250 Cr"] },
      { heading: "Our Registration Process", items: ["PAN and Aadhar-based online registration","Classification as Micro, Small, or Medium","Udyam Registration Certificate issued instantly","GST and bank account integration guidance"] },
    ],
    cta: "Register your business as MSME and access government support today.",
  },
  "PAN Registration & Corrections": {
    photo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    photoAlt: "PAN Registration",
    badge: "PAN Card",
    heading: "PAN Registration & Corrections",
    subheading: "Apply for a new PAN or correct errors in your existing one",
    intro: "A Permanent Account Number (PAN) is a mandatory requirement for all financial and tax-related transactions in India. Whether you need a new PAN for yourself, your business, or your company — or you need to correct errors in an existing PAN — Finlorax Associates handles the entire process accurately and quickly.",
    sections: [
      {
        heading: "New PAN Applications",
        items: [
          "PAN for individuals (Indian residents and NRIs)",
          "PAN for Hindu Undivided Families (HUF)",
          "PAN for Partnership Firms and LLPs",
          "PAN for Private Limited Companies and OPCs",
          "PAN for Trusts, AOPs, and other entities",
        ],
      },
      {
        heading: "PAN Corrections & Updates",
        items: [
          "Correction of name, date of birth, or father's name",
          "Address update in PAN records",
          "Change of signature or photograph",
          "Linking of PAN with Aadhar",
          "Duplicate PAN surrender and amalgamation",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "Identity proof (Aadhar card / Passport / Voter ID)",
          "Address proof (utility bill / bank statement)",
          "Date of birth proof",
          "Photograph (passport size)",
          "Business registration proof (for entity PAN)",
        ],
      },
    ],
    cta: "Get your PAN applied or corrected — processed in 7–15 working days.",
  },
  "TAN Registration": {
    photo: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=800&q=80",
    photoAlt: "TAN Registration",
    badge: "TAN Registration",
    heading: "TAN Registration",
    subheading: "Get your Tax Deduction Account Number for TDS compliance",
    intro: "A Tax Deduction Account Number (TAN) is mandatory for any person or entity responsible for deducting Tax at Source (TDS) or collecting Tax at Source (TCS). Without a valid TAN, TDS payments and returns cannot be filed, exposing the deductor to penalties. Finlorax Associates handles your TAN application swiftly.",
    sections: [
      {
        heading: "Who Needs a TAN?",
        items: [
          "Employers deducting TDS on salaries (Section 192)",
          "Businesses deducting TDS on contractor, professional, or rent payments",
          "Companies deducting TDS on interest, dividends, or royalties",
          "Buyers of immovable property deducting TDS under Section 194IA",
          "Any entity required to file TDS or TCS returns",
        ],
      },
      {
        heading: "Our TAN Registration Process",
        items: [
          "Form 49B preparation and verification",
          "Online application on NSDL / UTI portal",
          "TAN allotment in 7–10 working days",
          "Registration on TRACES portal for TDS filing",
          "Guidance on first TDS challan payment",
        ],
      },
      {
        heading: "Post-TAN Compliance",
        items: [
          "Quarterly TDS return filing (Form 24Q / 26Q / 27Q / 27EQ)",
          "Issuance of TDS certificates (Form 16 / 16A)",
          "Reconciliation with 26AS of deductees",
          "Correction of TDS returns if required",
        ],
      },
    ],
    cta: "Register your TAN and stay compliant with TDS obligations.",
  },
  "Professional Tax Registration": {
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    photoAlt: "Professional Tax",
    badge: "Professional Tax",
    heading: "Professional Tax Registration",
    subheading: "Comply with state-level Professional Tax obligations",
    intro: "Professional Tax is a state-level tax levied on individuals engaged in professions, trades, callings, and employment. It is mandatory for employers to deduct Professional Tax from employee salaries and remit it to the state government. Finlorax Associates handles registration, deduction, payment, and return filing for businesses across Tamil Nadu and other states.",
    sections: [
      {
        heading: "Who Needs to Register?",
        items: [
          "All employers with salaried staff in applicable states",
          "Self-employed professionals (doctors, lawyers, CAs, etc.)",
          "Freelancers and consultants earning above threshold",
          "All companies, LLPs, and firms with employees",
        ],
      },
      {
        heading: "Our Professional Finlorax Services",
        items: [
          "Professional Finlorax Employer Registration (PTEC & PTRC)",
          "Monthly or quarterly PT deduction from employee salaries",
          "Challan generation and online PT payment",
          "Annual return filing with the PT department",
          "Enrolment certificate for self-employed professionals",
        ],
      },
      {
        heading: "Tamil Nadu PT Slab (Illustrative)",
        items: [
          "Up to ₹21,000/month: Nil",
          "₹21,001 to ₹30,000/month: ₹135 per half-year",
          "₹30,001 to ₹45,000/month: ₹315 per half-year",
          "₹45,001 to ₹60,000/month: ₹690 per half-year",
          "Above ₹60,000/month: ₹1,095 per half-year",
        ],
      },
    ],
    cta: "Register for Professional Tax and stay compliant with state obligations.",
  },

  "FSSAI (Food & Catering License)": {
    photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    photoAlt: "FSSAI License",
    badge: "FSSAI License",
    heading: "FSSAI Food License",
    subheading: "Mandatory compliance for all food businesses in India",
    intro: "The FSSAI (Food Safety and Standards Authority of India) license is mandatory for all businesses engaged in food manufacturing, processing, storage, distribution, and catering. Operating without a valid FSSAI license can result in heavy penalties and business closure.",
    sections: [
      { heading: "Types of FSSAI License", items: ["Basic Registration: Annual turnover below ₹12 lakh","State License: Turnover ₹12 lakh to ₹20 crore","Central License: Turnover above ₹20 crore or multi-state operations"] },
      { heading: "Who Needs It?", items: ["Restaurants, hotels, and cloud kitchens","Food manufacturers and processors","Importers and exporters of food products","Catering businesses and canteens","Online food delivery platforms and aggregators"] },
      { heading: "Documents Required", items: ["Identity and address proof of proprietor/partners/directors","Business registration proof","List of food products to be handled","Proof of premises (rent agreement / NOC)","Food safety management system plan (for central license)"] },
    ],
    cta: "Get your FSSAI license and operate your food business legally.",
  },

  "Import Export Code (IEC)": {
    photo: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    photoAlt: "Import Export Code",
    badge: "IEC Registration",
    heading: "Import Export Code (IEC) Registration",
    subheading: "Your gateway to global trade",
    intro: "The Import Export Code (IEC) is a 10-digit code issued by the DGFT (Directorate General of Foreign Trade) and is mandatory for any business or individual importing goods into India or exporting goods from India. Without an IEC, customs clearance and foreign remittances cannot be processed.",
    sections: [
      { heading: "Key Facts About IEC", items: ["One-time registration — valid for the lifetime of the business","No renewal required (annual update on DGFT portal)","Required for customs clearance of imports and exports","Needed for receiving foreign currency payments","Mandatory for availing export incentives like MEIS / RoDTEP"] },
      { heading: "Documents Required", items: ["PAN card of business entity","Aadhar card of proprietor / authorised signatory","Cancelled cheque or bank certificate","Digital signature (for online application)","Business registration proof"] },
    ],
    cta: "Register your IEC and start trading globally.",
  },

  "Trade Mark License": {
    photo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    photoAlt: "Trademark Registration",
    badge: "Trademark",
    heading: "Trademark Registration",
    subheading: "Protect your brand identity across India",
    intro: "Your brand is your most valuable asset. Trademark registration gives you the exclusive legal right to use your brand name, logo, or tagline — preventing others from copying or misusing your identity. Finlorax Associates handles the complete trademark application and follow-up process.",
    sections: [
      { heading: "What Can Be Trademarked?", items: ["Brand name and business name","Company logo and design","Product names and packaging","Slogans and taglines","Domain names and characters"] },
      { heading: "Registration Process", items: ["Trademark search to check for conflicts","Application filing on IP India portal","Examination by the Trade Marks Registry","Publication in the Trade Marks Journal","Certificate of Registration issued after no opposition period"] },
      { heading: "Benefits of Trademark Registration", items: ["Legal protection against infringement","Right to sue for damages if copied","Brand credibility and market exclusivity","Licensing and franchising rights","Asset value for fundraising and acquisitions"] },
    ],
    cta: "Protect your brand — file your trademark today.",
  },

  "Digital Signature (DSC)": {
    photo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    photoAlt: "Digital Signature",
    badge: "DSC",
    heading: "Digital Signature Certificate (DSC)",
    subheading: "Authenticate your digital documents legally and securely",
    intro: "A Digital Signature Certificate (DSC) is the electronic equivalent of a physical signature. It is mandatory for filing MCA forms, income tax returns, GST applications, and many other government portal submissions. Finlorax Associates provides Class 2 and Class 3 DSC with quick delivery.",
    sections: [
      { heading: "Types of DSC", items: ["Class 2 DSC: For income tax and ROC filings","Class 3 DSC: For e-tendering, e-procurement, and court filings","DGFT DSC: For import/export code applications"] },
      { heading: "Uses of DSC", items: ["MCA21 company and LLP filings","Income Tax e-filing and TDS returns","GST registration and filings","E-tendering on government portals","EPFO and ESIC filings"] },
    ],
    cta: "Get your DSC delivered in 1–2 working days.",
  },
  "Shop & Establishment License": {
    photo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    photoAlt: "Shop Establishment License",
    badge: "Shop & Establishment",
    heading: "Shop & Establishment License",
    subheading: "Mandatory registration for all commercial establishments",
    intro: "The Shop and Establishment Act License is one of the first legal registrations required when you start a business or open a physical office or shop. It is governed by state laws and is mandatory for all commercial establishments — including offices, shops, restaurants, hotels, and entertainment venues. Finlorax Associates handles the entire registration process seamlessly.",
    sections: [
      {
        heading: "Who Needs This License?",
        items: [
          "All shops, retail outlets, and commercial establishments",
          "Offices and corporate workplaces",
          "Restaurants, hotels, and eateries",
          "Warehouses and storage facilities",
          "Entertainment and recreational establishments",
          "Any business employing workers at a commercial premises",
        ],
      },
      {
        heading: "Benefits of Registration",
        items: [
          "Legal proof of business existence at the premises",
          "Required to open a current bank account",
          "Mandatory for obtaining other business licenses",
          "Ensures compliance with state labour laws",
          "Protects employer and employee rights",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "PAN card and Aadhar of proprietor / authorised signatory",
          "Business registration proof (if available)",
          "Proof of business address (rent agreement / NOC from owner)",
          "Details of employees (number and categories)",
          "Photograph of the establishment / shop front",
        ],
      },
      {
        heading: "Our Registration Process",
        items: [
          "Preparation and filing of application with the Labour Department",
          "Submission of required documents online or physically",
          "Follow-up with department for certificate issuance",
          "Annual renewal assistance",
        ],
      },
    ],
    cta: "Get your Shop & Establishment License — start operating legally.",
  },

  "Factory License": {
    photo: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
    photoAlt: "Factory License",
    badge: "Factory License",
    heading: "Factory License Registration",
    subheading: "Mandatory compliance under the Factories Act, 1948",
    intro: "Any premises employing 10 or more workers with power, or 20 or more workers without power, in a manufacturing process is classified as a factory under the Factories Act, 1948. A Factory License is mandatory before commencing operations and must be renewed annually. Finlorax Associates assists you through the entire licensing process.",
    sections: [
      {
        heading: "Who Needs a Factory License?",
        items: [
          "Manufacturing units employing 10+ workers (with power)",
          "Manufacturing units employing 20+ workers (without power)",
          "Any premises involved in a manufacturing process covered under the Factories Act",
          "Units processing raw materials into finished goods",
        ],
      },
      {
        heading: "Approvals Involved",
        items: [
          "Plan approval from the Chief Inspector of Factories",
          "Site approval for the proposed factory premises",
          "Factory Registration Certificate under the Factories Act",
          "Annual renewal of the factory license",
          "Amendment approval for change of occupier or manager",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "Application form duly filled by the occupier",
          "Site plan and factory layout drawings",
          "List of machinery and plant details",
          "Proof of ownership or lease of premises",
          "Details of manufacturing process and products",
          "Stability certificate from a licensed structural engineer",
        ],
      },
      {
        heading: "Ongoing Compliance",
        items: [
          "Annual renewal before expiry",
          "Maintenance of statutory registers under the Factories Act",
          "Compliance with health, safety, and welfare provisions",
          "Factory Inspector visit compliance and record-keeping",
        ],
      },
    ],
    cta: "Get your Factory License and commence manufacturing legally.",
  },

  "Fire License": {
    photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    photoAlt: "Fire NOC License",
    badge: "Fire NOC",
    heading: "Fire License (Fire NOC)",
    subheading: "Mandatory fire safety clearance for commercial and industrial premises",
    intro: "A Fire License or Fire NOC (No Objection Certificate) is issued by the State Fire Department and is mandatory for hotels, hospitals, schools, shopping malls, factories, warehouses, and large commercial buildings. It certifies that the premises comply with fire safety standards — protecting lives, property, and ensuring legal operation.",
    sections: [
      {
        heading: "Who Needs a Fire NOC?",
        items: [
          "Hotels, lodges, and guest houses",
          "Hospitals, nursing homes, and clinics",
          "Schools, colleges, and educational institutions",
          "Shopping malls, multiplexes, and theatres",
          "Factories and industrial units",
          "Warehouses and large storage facilities",
          "High-rise residential and commercial buildings",
        ],
      },
      {
        heading: "Fire Safety Requirements",
        items: [
          "Installation of fire extinguishers as per IS standards",
          "Fire alarm and detection systems",
          "Sprinkler systems (for high-risk premises)",
          "Emergency exit signage and lighting",
          "Fire hose reels and hydrant systems",
          "Fire safety evacuation plan displayed prominently",
        ],
      },
      {
        heading: "Our Fire NOC Process",
        items: [
          "Fire safety audit and gap assessment of your premises",
          "Guidance on mandatory fire safety equipment installation",
          "Preparation and submission of Fire NOC application",
          "Coordination with the Fire Department for inspection",
          "Follow-up until NOC is issued",
          "Annual renewal assistance",
        ],
      },
    ],
    cta: "Get your Fire NOC and ensure your premises are legally compliant.",
  },

  /* ── Financial Outsourcing ──────────────────────────────────────────────── */
  "Bookkeeping & day-to-day accounting": {
    photo: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&q=80",
    photoAlt: "Bookkeeping",
    badge: "Bookkeeping",
    heading: "Bookkeeping & Day-to-Day Accounting",
    subheading: "Accurate financial records maintained by certified accountants",
    intro: "Proper bookkeeping is the foundation of a healthy business. Our certified accountants maintain accurate, up-to-date financial records using leading accounting software — giving you real-time visibility into your finances and ensuring you are always audit-ready.",
    sections: [
      { heading: "What We Handle", items: ["Recording of sales, purchases, receipts, and payments","Accounts payable and receivable management","Ledger maintenance and trial balance preparation","Vendor and customer reconciliation","Expense categorisation for tax optimisation"] },
      
    ],
    cta: "Hand over your books to us — focus on running your business.",
  },"Financial reporting & MIS": {
    photo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    photoAlt: "Financial reporting MIS",
    badge: "Financial Reporting",
    heading: "Financial Reporting & MIS",
    subheading: "Timely, accurate management reports to drive better decisions",
    intro: "Numbers tell the story of your business — but only if presented clearly and on time. Finlorax Associates prepares comprehensive financial reports and Management Information System (MIS) statements that give business owners and management a clear view of performance, cash flow, and profitability.",
    sections: [
      {
        heading: "Reports We Prepare",
        items: [
          "Monthly Profit & Loss (P&L) statement",
          "Balance Sheet and Net Worth statement",
          "Cash Flow statement and cash position report",
          "Debtor and creditor ageing reports",
          "Budget vs actual variance analysis",
          "Department-wise or product-wise profitability reports",
        ],
      },
      
      {
        heading: "Delivery & Frequency",
        items: [
          "Monthly, quarterly, or as-needed reporting",
          "Delivered in Excel, PDF, or dashboard formats",
          "Video walkthrough or call available for complex reports",
        ],
      },
    ],
    cta: "Get clear financial visibility — request a sample MIS report.",
  },

  "GST Process": {
    photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    photoAlt: "GST process outsourcing",
    badge: "GST Outsourcing",
    heading: "GST Process Outsourcing",
    subheading: "End-to-end GST management as part of your accounting package",
    intro: "For businesses that outsource their accounting to us, we handle the full GST process as an integrated part of financial management — ensuring that every transaction is correctly classified for GST, ITC is maximized, and returns are filed on time.",
    sections: [
      {
        heading: "What the GST Process Includes",
        items: [
          "GST-compliant invoice and billing format setup",
          "Classification of all transactions under correct GST heads",
          "Monthly input-output register preparation",
          "GSTR-1 and GSTR-3B preparation and filing",
          "ITC reconciliation with GSTR-2B every month",
          "GST payable calculation and challan generation",
        ],
      },
      {
        heading: "Integration with Your Books",
        items: [
          "GST data flows directly from your accounting software",
          "No duplicate data entry — single source of truth",
          "Real-time GST liability visibility",
          "Year-end data readiness for GSTR-9 annual return",
        ],
      },
    ],
    cta: "Simplify your GST — outsource the entire process to us.",
  },

  "Bank reconciliation": {
    photo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    photoAlt: "Bank reconciliation",
    badge: "Bank Reconciliation",
    heading: "Bank Reconciliation",
    subheading: "Ensure your books match your bank — every month, without fail",
    intro: "Bank reconciliation is the process of matching your cashbook or accounting records with your bank statement to identify discrepancies, outstanding entries, and errors. Regular bank reconciliation is a fundamental control that prevents fraud, catches mistakes, and ensures accurate financial reporting.",
    sections: [
      {
        heading: "What We Reconcile",
        items: [
          "Current account and savings account statements",
          "Multiple bank account reconciliation",
          "Identification of outstanding cheques and deposits",
          "Detection of bank charges, interest, and error entries",
          "Reconciliation of UPI, NEFT, RTGS, and online payment entries",
          "Cash flow reconciliation across accounts",
        ],
      },
      {
        heading: "Frequency & Deliverables",
        items: [
          "Monthly reconciliation as standard",
          "Weekly reconciliation for high-volume businesses",
          "Bank reconciliation statement (BRS) provided each month",
          "Discrepancy report with explanations",
          "Unresolved items tracked and followed up",
        ],
      },
    ],
    cta: "Never have a reconciliation backlog again — we keep it current.",
  },


  "Payroll support": {
    photo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    photoAlt: "Payroll",
    badge: "Payroll",
    heading: "Payroll Processing & Support",
    subheading: "Accurate and compliant payroll management for your team",
    intro: "Managing payroll involves far more than just paying salaries. Finlorax Associates handles complete payroll processing — from salary computation to PF, ESI, and professional tax compliance — ensuring your employees are paid correctly and on time, every time.",
    sections: [
      { heading: "Our Payroll Services Cover", items: ["Monthly salary calculation including allowances and deductions","TDS on salary (Form 16 at year-end)","PF (EPF) and ESI contribution computation and filing","Professional Tax deduction and payment","Payslip generation and distribution","Full-and-final settlement for exiting employees"] },
    ],
    cta: "Let us handle your payroll so you can focus on your people.",
  },
  "Compliance & documentation": {
    photo: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    photoAlt: "Compliance documentation",
    badge: "Compliance",
    heading: "Accounting Compliance & Documentation",
    subheading: "Stay audit-ready with properly maintained financial records",
    intro: "Compliance in accounting goes beyond filing returns — it means maintaining proper books, retaining records for the statutory period, and ensuring every financial document is correctly prepared and preserved. Finlorax Associates manages your compliance documentation as part of our outsourced accounting service.",
    sections: [
      {
        heading: "Compliance We Manage",
        items: [
          "Statutory books of accounts maintenance (Cash Book, Ledger, Journal)",
          "TDS deduction, payment, and return filing (Form 24Q, 26Q)",
          "Professional Tax compliance and payment",
          "Audit support — preparation of schedules and supporting documents",
          "Retention of financial records as per Companies Act / IT Act requirements",
        ],
      },
      {
        heading: "Documentation We Maintain",
        items: [
          "Invoice register (sales and purchase)",
          "Expense vouchers and approval records",
          "Asset register and depreciation schedule",
          "Employee expense claims and reimbursement records",
          "Statutory payment challans and acknowledgements",
        ],
      },
    ],
    cta: "Keep your compliance in order — let us maintain your records.",
  },

  /* ── Loan Support ───────────────────────────────────────────────────────── */
  "Personal Loan Assistance": {
    photo: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80",
    photoAlt: "Personal Loan",
    badge: "Personal Loan",
    heading: "Personal Loan Assistance",
    subheading: "Get the funds you need with the right lender at the right rate",
    intro: "Whether it's a medical emergency, wedding expenses, travel, or home renovation — a personal loan can bridge your financial gaps instantly. Finlorax Associates helps you identify the best lender, prepare your documents, and get approval faster.",
    sections: [
      { heading: "How We Help", items: ["Assessment of your loan eligibility and credit score","Comparison of interest rates across top banks and NBFCs","Document preparation and application submission","Follow-up with lenders for faster processing","Guidance on repayment planning and EMI structuring"] },
      { heading: "Top Lenders We Work With", items: ["SBI, HDFC Bank, ICICI Bank","Bajaj Finserv, Tata Capital","Kotak Mahindra Bank, Axis Bank","NBFC partners for self-employed and non-salaried applicants"] },
    ],
    cta: "Apply through Finlorax and get better rates.",
  },

  "Business Loan Consultation": {
    photo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    photoAlt: "Business Loan",
    badge: "Business Loan",
    heading: "Business Loan Consultation",
    subheading: "Fund your growth with the right business financing",
    intro: "Every business needs capital to grow. Whether you need funds for working capital, equipment purchase, office expansion, or new product launch — our loan specialists help you identify the best-fit financing option and navigate the approval process smoothly.",
    sections: [
      { heading: "Loan Types We Support", items: ["Term loans for capital expenditure","Working capital loans and overdraft facilities","Equipment and machinery finance","Invoice discounting and factoring","CGTMSE-backed collateral-free loans for MSMEs","Startup loans under government schemes (MUDRA, Stand-Up India)"] },
      { heading: "Our Consultation Process", items: ["Analysis of your business financial statements","Identification of eligible loan products","Preparation of business plan and projections","Application submission and follow-up","Loan documentation and disbursement coordination"] },
    ],
    cta: "Get expert guidance on your business loan today.",
  },

  "Home Loan Guidance": {
    photo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    photoAlt: "Home Loan",
    badge: "Home Loan",
    heading: "Home Loan Guidance",
    subheading: "Navigate the home buying process with confidence",
    intro: "Buying a home is one of the biggest financial decisions of your life. Our home loan advisors guide you through every step — from choosing the right lender to understanding tax benefits on your EMIs — ensuring you get the best deal available.",
    sections: [
      { heading: "Our Home Loan Services", items: ["Eligibility assessment based on income and credit score","Comparison of rates from SBI, HDFC, LIC HFL, and others","Documentation support for salaried and self-employed buyers","Processing fee negotiation with lenders","Guidance on Section 80C and Section 24 tax deductions on home loan"] },
    ],
    cta: "Make your dream home a reality — talk to our advisor today.",
  },

  
};

export const STATS = [
  { icon: "support_icon.png", num: "200+", label: "Happy Customers" },
  { icon: "review.png", num: "4.6",  label: "Google Rating"   },
  { icon: "customer.png", num: "5+",  label: "Expert Staff"    },
  { icon: "achievement.png", num: "5+",  label: "Years Experience"},
];

export const TESTIMONIALS = [
  {
    quote:
      "Finlorax Associates handled our Income Tax filing with complete accuracy and professionalism. Their guidance helped us save significantly while ensuring full compliance with current tax regulations.",
    name: "Ramesh Kumar",
    role: " ",
    initial: "R",
  },
  {
    quote:
      "We rely on Finlorax for all our GST compliance and filings. Their team is highly responsive, keeps us updated with changes, and ensures everything is submitted on time without errors.",
    name: "Priya Sharma",
    role: " ",
    initial: "A",
  },
  {
    quote:
      "Their accounting and financial outsourcing services have streamlined our operations. From bookkeeping to payroll, everything is handled efficiently, allowing us to focus on growing our business.",
    name: "Arun Raj",
    role: "",
    initial: "K",
  },
];

export const EXP_ITEMS = [
  {
    num:   "01",
    icon:  "🧑‍💼",
    title: "Customer-First Policy",
    desc:  "We prioritize understanding our clients’ needs and provide clear, practical solutions—ensuring every query is addressed with attention and care.",
  },
  {
    num:   "02",
    icon:  "📰",
    title: "Updated Developments",
    desc:  "Our professionals stay aligned with the latest tax laws, GST updates, and regulatory changes to ensure complete compliance and zero risk.",
  },
  {
    num:   "03",
    icon:  "🔄",
    title: "Continuous Improvement",
    desc:  "We continuously refine our processes based on client feedback and industry developments to deliver better, faster, and more reliable services.",
  },
];

export const WHY_FEATURES = [
  {
    icon:  "💸",
    title: "Cost-Effective Solutions",
    desc:  "Expert services at competitive rates — quality solutions that fit your budget without compromise.",
  },
  {
    icon:  "📈",
    title: "Client-Centric Approach ",
    desc:  "Personalized investment strategies tailored to your financial goals with optimal returns and risk management.",
  },
  {
    icon:  "🏦",
    title: "Save Your Money",
    desc:  "Smart tax-saving strategies today lead to a secure financial future and a solid safety net for tomorrow.",
  },
  {
    icon:  "⏱️",
    title: "Timely & Accurate Delivery ",
    desc:  "We pride ourselves on meeting every deadline — filings and compliance always submitted on time.",
  },
];

export const WHY_STATS = [
  ["200+", "Happy Clients Served"   ],
  ["4.6 ★",   "Google Rating"          ],
  ["5+ Years","Industry Experience"   ],
  ["100%",     "On-Time Filing Rate"   ],
];

export const PARTNER_TAGS = ["GSTN", "MCA21", "FSSAI", "ISO", "MSME", "IEC"];

export const QUICK_LINKS = [
  "About Us",
  "Contact Us",
  "GST Registration",
  "Income Tax E-Filing",
  "TDS Return Filing",
  "ESI & PF Registration",
  "MSME Registration",
];

export const FOOTER_SERVICES = [
  "Private Limited Co.",
  "Proprietorship",
  "Professional Tax",
  "ISO Registration",
  "FSSAI Registration",
  "Trust Registration",
  "Society Registration",
];

export const CONTACT_INFO = [
  { icon: "📍", text: "1st Main St, Y Block, Anna Nagar, Chennai, Tamil Nadu 600040" },
  { icon: "📞", text: "9597927469" },
  { icon: "✉️", text: "finloraxassociates@gmail.com" },
];
