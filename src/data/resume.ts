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
];

export const skills = {
  "Test Architecture & Automation": ["Playwright", "End-to-end testing", "Test data engineering", "Regression strategy"],
  "AI & Agents": ["Claude Code", "Agent/skill design", "Prompt engineering", "AI-assisted test generation"],
  "Infrastructure & DevOps": ["CI/CD pipelines", "Test sharding & agent fleets", "Release versioning", "Pre-flight health checks"],
  "Data & APIs": ["SQL", "REST API testing", "Data provisioning & staging"],
  Languages: ["TypeScript", "JavaScript", "Python", "PowerShell", "C#", "Kotlin"],
};
