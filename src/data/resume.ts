export type Role = {
  title: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const roles: Role[] = [
  {
    title: "QA Automation Engineer → Software Engineer in Test",
    org: "Healthcare analytics company",
    period: "2024 — Present",
    summary:
      "Own the test platform end to end: the automation framework, the AI-assisted QA tooling that runs on top of it, and the infrastructure both run on.",
    highlights: [
      "Designed and built an internal, AI-driven QA platform from scratch — ~137k lines of code, 120 releases, 2,500+ automated tests of its own — taking a feature ticket from requirements through test plan, test run, and sign-off.",
      "Built a SQL/API data layer so automated tests can stage their own data (patients, users, roles) instead of depending on whatever happened to exist in an environment — cutting data-related test failures sharply.",
      "Shipped 13 AI agent skills (built on Claude Code) that collapse multi-step QA chores — writing tests, triaging failures, fixing broken tests — into one or two human approvals, down from as many as 6-16.",
      "Took full regression run time from 7-8 hours down to under an hour by moving onto a sharded fleet of test-runner agents with pre-flight health checks.",
      "Grew verified, honest test coverage from ~135 to 224 tests while raising the regression pass rate from 24% to 68%, after removing ~368 inflated 'automated' labels that overstated real coverage.",
      "Hand-built a REST API test suite from API documentation that has since caught real product defects, and extended it with AI-assisted pattern matching for write/mutation endpoints.",
      "Retired a paid third-party testing SaaS subscription by replacing it with the in-house platform, while also enabling an offshore team to automate roughly 100 test cases using the shared tooling.",
      "Estimated 190-320 person-hours saved in a single year through automation, faster regressions, and AI-assisted triage — measured conservatively against on-record manual baselines.",
    ],
  },
  {
    title: "Quality Assurance Analyst",
    org: "Healthcare analytics company",
    period: "Nov 2022 — 2024",
    summary:
      "Owned quality control for the company's population health platform and led the move from manual to automated testing.",
    highlights: [
      "Identified and reported defects, verified fixes, and performed data validation across the population health solution.",
      "Championed and led the introduction of automated testing for the web application, then sustained and expanded it as a core part of the QA process.",
    ],
  },
  {
    title: "Telehealth Support Specialist III (OTTO)",
    org: "NextGen Healthcare",
    period: "Mar 2020 — Nov 2022",
    summary:
      "Provided technical support that kept patients and providers connected to telehealth visits through the shift to virtual care.",
    highlights: [
      "Diagnosed and resolved device compatibility and configuration issues across smartphones, tablets, and PCs.",
      "Authored Confluence knowledge-base articles and workflow documentation used by the support team.",
    ],
  },
  {
    title: "eRx Client Support Specialist II",
    org: "NextGen Healthcare",
    period: "Oct 2018 — Mar 2020",
    summary: "Supported electronic prescribing integrations within NextGen's proprietary EMR platform.",
    highlights: [
      "Investigated and resolved failed inbound and outbound electronic prescription (eRx) XML messages.",
      "Partnered with third-party vendors, including Appriss and Surescripts, to implement integrated services for clients.",
      "Configured Prescription Drug Monitoring Program (PDMP) and Electronic Prescribing of Controlled Substances (EPCS) features for client practices.",
    ],
  },
  {
    title: "SEMS Specialist",
    org: "SICOM Systems, Inc.",
    period: "Jan 2016 — Oct 2018",
    summary:
      "Implemented and supported SICOM's cloud-based Enterprise Management Service for restaurant clients. Returned part-time from Feb to Nov 2022.",
    highlights: [
      "Implemented and maintained cloud-based modules for labor scheduling, employee management, timekeeping, inventory, and sales data.",
      "Delivered product walkthroughs and reporting guidance to client stakeholders from store managers to executives.",
      "Maintained Enterprise Management Service servers using MySQL, reducing resolution time for customer issues.",
      "Trained team members and balanced workloads across teams to improve throughput on inbound support and projects.",
    ],
  },
  {
    title: "Menu Maintenance Specialist",
    org: "SICOM Systems, Inc.",
    period: "Jul 2014 — Jan 2016",
    summary:
      "Managed point-of-sale menu databases for multinational franchise brands, including Burger King, Popeyes, and Cosi.",
    highlights: [
      "Maintained inventory, recipe, product, and POS key configurations across franchise databases.",
      "Collaborated with cross-functional teams to define requirements and deployment plans for monthly limited-time-offer (LTO) rollouts.",
      "Built Excel-based tooling that streamlined LTO releases, improving efficiency by 70% and reducing production time.",
      "Audited client inventory orders to identify variances and standardized them to a consistent PLU scheme.",
    ],
  },
  {
    title: "Digital Menu Board Install Coordinator",
    org: "SICOM Systems, Inc.",
    period: "Oct 2013 — Jul 2014",
    summary:
      "Coordinated remote support for on-site installations of POS systems, displays, and digital menu board controllers.",
    highlights: [
      "Established network connectivity for POS terminals, displays, and menu board controllers in partnership with field technicians.",
      "Installed service packs and troubleshot hardware and software issues for an average of 12–15 locations per day.",
      "Wrote scripts to automate key installation steps, saving nearly two hours of labor per install.",
      "Created installation procedure documentation used for training and quality assurance.",
    ],
  },
];

export const skills = {
  "Test Architecture & Automation": ["Playwright", "End-to-end testing", "Test data engineering", "Regression strategy"],
  "AI & Agents": ["Claude Code", "Agent/skill design", "Prompt engineering", "AI-assisted test generation"],
  "Infrastructure & DevOps": ["CI/CD pipelines", "Test sharding & agent fleets", "Release versioning", "Pre-flight health checks"],
  "Data & APIs": ["SQL", "REST API testing", "Data provisioning & staging"],
  Languages: ["TypeScript", "JavaScript", "Python", "PowerShell", "C#", "Kotlin"],
};
