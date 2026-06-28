/**
 * Single source of truth for all portfolio copy.
 * Facts come from Rein Duran's resume — keep accurate, never fabricate.
 */

export const profile = {
  name: 'Rein Duran',
  role: 'Cloud / DevOps Engineer',
  location: 'Manila / Pasig, PH',
  eyebrow: 'Cloud / DevOps Engineer · Manila, PH · AWS',
  headline: 'I build the AWS foundations\nother teams ship on.',
  valueProp:
    "Cloud / DevOps Engineer focused on AWS landing zones, container platforms, and Terraform. I cut a 13-account AWS estate's spend 26% and co-built my company's first Well-Architected multi-account foundation — 100% as code, zero drift.",
  email: 'reineirsamonteduran@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rein-duran',
  github: 'https://github.com/rsduran-agsx',
  resumeUrl: '/Rein_Duran_Resume.pdf',
} as const

export type HeroStat = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  sub?: string
}

export const heroStats: HeroStat[] = [
  { value: 26, prefix: '−', suffix: '%', label: 'AWS spend cut', sub: '$36.5k → $27k / mo' },
  { value: 100, suffix: '%', label: 'infra as code', sub: 'landing zone, zero drift' },
  { value: 13, label: 'AWS accounts', sub: 'governed estate' },
  { value: 15, label: 'microservices migrated', sub: 'GitLab → GitHub Actions' },
]

export const about = {
  paragraphs: [
    "I'm a Cloud DevOps Engineer at NMBLR AI, where I've spent the last ~2 years building and running the AWS platform the company's products ship on — multi-account landing zones, EKS / ECS container platforms, CI/CD, and the cost and security guardrails around them.",
    'I came to infrastructure from electronics engineering — I placed 3rd nationally in the Philippine ECE licensure exam before pivoting into the cloud. That background is why I treat infrastructure the way I do: as a system with real constraints, tradeoffs, and failure modes worth designing for.',
  ],
  now: 'Currently going deeper on EKS, Terraform module design, and FinOps.',
} as const

export type SkillGroup = {
  key: string
  label: string
  icon: 'cloud' | 'code' | 'box' | 'gitbranch' | 'terminal'
  items: string[]
  caption?: string
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'cloud',
    label: 'Cloud — AWS',
    icon: 'cloud',
    items: [
      'EC2', 'ECS / Fargate', 'EKS', 'Lambda', 'RDS / Aurora', 'S3', 'VPC',
      'ALB', 'Route 53', 'IAM', 'CloudWatch', 'API Gateway', 'EFS',
      'Step Functions', 'Bedrock', 'WAF',
    ],
    caption: 'I reach for ECS Fargate when a team wants containers without owning nodes.',
  },
  {
    key: 'iac',
    label: 'IaC & Config',
    icon: 'code',
    items: ['Terraform', 'AFT', 'Helm'],
    caption: 'Terraform for everything that can be code — which is nearly everything.',
  },
  {
    key: 'containers',
    label: 'Containers & Orchestration',
    icon: 'box',
    items: ['Docker', 'Kubernetes', 'ECS Fargate'],
  },
  {
    key: 'cicd',
    label: 'CI/CD & GitOps',
    icon: 'gitbranch',
    items: ['GitHub Actions', 'GitLab CI', 'ArgoCD'],
  },
  {
    key: 'lang',
    label: 'Languages & Scripting',
    icon: 'terminal',
    items: ['Python (Boto3)', 'Bash', 'SQL'],
  },
]

export type Experience = {
  company: string
  companyNote?: string
  title: string
  dates: string
  location: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: 'NMBLR AI',
    companyNote: 'formerly Talino Labs / Amihan Global Strategies',
    title: 'Cloud DevOps Engineer',
    dates: 'Oct 2024 — Present',
    location: 'Ortigas, Pasig · PH',
    bullets: [
      'Cut monthly AWS spend 26% ($36.5k → $27k) across 13 accounts — closed unused accounts, migrated 7 EKS clusters off Extended Support, and rightsized over-provisioned compute.',
      "Co-engineered the company's first Well-Architected multi-account landing zone with AFT + a hub-and-spoke network, reaching 100% IaC coverage to eliminate manual config and drift.",
      'Led the EKS → ECS Fargate migration as primary technical POC — removed 6× Extended Support cost and node patching, and trained TechOps + Dev on the first serverless container strategy.',
      'Provisioned 10+ AWS services (Bedrock, API Gateway, Lambda, Fargate, EFS, RDS, Step Functions, VPC, IAM, CloudWatch) for the AI Engine + Data Platform — enabling LLM streaming, ML orchestration, and data pipelines.',
      'Standardized infrastructure for 6 product ventures (Helm, GitHub Actions, Route 53, ALB, RDS/Aurora, S3, TLS) across shared and isolated environments.',
      'Hardened security: remediated VAPT findings, deployed AWS WAF (managed + custom rules) for bot/fraud protection, and enforced path-based access control at the ALB.',
    ],
  },
]

export type CaseStudy = {
  id: string
  category: string
  title: string
  badge: string
  badgeSub: string
  problem: string
  action: string
  impact: string
  tech: string[]
  diagram: 'cost' | 'hubspoke' | 'fargate' | 'aiflow'
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'finops',
    category: 'FinOps',
    title: '26% off a 13-account AWS bill',
    badge: '−26%',
    badgeSub: '$36.5k → $27k / mo',
    problem:
      'A 13-account AWS estate had drifted: unused accounts still billing, EKS clusters sliding onto premium Extended Support, and compute sized for peaks that never came.',
    action:
      'Audited spend across all 13 accounts, closed dead accounts, migrated 7 EKS clusters from Extended back to Standard Support, and rightsized over-provisioned resources.',
    impact:
      'Monthly AWS spend dropped 26% — from $36.5k to $27k — without touching a single product SLA.',
    tech: ['Cost Explorer', 'EKS', 'Terraform', 'CloudWatch'],
    diagram: 'cost',
  },
  {
    id: 'landingzone',
    category: 'Platform / IaC',
    title: 'A landing zone, 100% as code',
    badge: '100%',
    badgeSub: 'IaC coverage · 0 → 100%',
    problem:
      'The company vended AWS accounts by hand — no governed foundation, inconsistent networking, and configuration drift no one could fully see.',
    action:
      'Co-built the first Well-Architected multi-account landing zone: AFT for account vending, a hub-and-spoke network topology, and Terraform covering every resource.',
    impact:
      'Account provisioning became repeatable and reviewable, and IaC coverage hit 100% — manual setup and drift, gone.',
    tech: ['AFT', 'Terraform', 'AWS Organizations', 'Transit Gateway', 'IAM'],
    diagram: 'hubspoke',
  },
  {
    id: 'fargate',
    category: 'Modernization',
    title: 'Killing Extended Support: EKS → ECS Fargate',
    badge: '0 nodes',
    badgeSub: 'left to patch',
    problem:
      'Several EKS clusters were stuck on Extended Support (6× the cost) and demanded constant node patching — toil with no product value.',
    action:
      'Re-platformed workloads from EKS to ECS Fargate as lead technical POC, then documented the pattern and trained TechOps + Dev on the first serverless container strategy.',
    impact:
      'Extended Support cost and node patching were eliminated entirely — no nodes left to own.',
    tech: ['EKS', 'ECS', 'Fargate', 'Docker', 'Helm'],
    diagram: 'fargate',
  },
  {
    id: 'aiplatform',
    category: 'AI / Data Platform',
    title: 'Production infra for an AI engine',
    badge: '10+',
    badgeSub: 'AWS services orchestrated',
    problem:
      'A new AI Engine + Data Platform needed cloud infrastructure for LLM streaming, ML orchestration, and high-throughput data pipelines — across sandbox and production.',
    action:
      'Provisioned and wired 10+ AWS services — Bedrock, API Gateway, Lambda, Fargate, EFS, RDS, Step Functions, VPC, IAM, CloudWatch — into a coherent, observable platform.',
    impact:
      "Shipped the foundation the product's LLM and data features run on today.",
    tech: ['Bedrock', 'API Gateway', 'Lambda', 'Step Functions', 'RDS', 'EFS'],
    diagram: 'aiflow',
  },
]

export type SelectedWork = {
  title: string
  desc: string
  tags: string[]
}

export const selectedWork: SelectedWork[] = [
  {
    title: '15 fintech microservices → GitHub Actions',
    desc: 'Migrated BayaniPay from legacy GitLab CI, refactoring outdated pipelines and standardizing deployment workflows.',
    tags: ['GitHub Actions', 'GitLab CI', 'CI/CD'],
  },
  {
    title: 'Zero-downtime SSL for BDO Unibank',
    desc: "Performed critical certificate renewals for the bank's RPT & Payroll systems (Prod / UAT) with full regulatory compliance.",
    tags: ['TLS / ACM', 'Compliance', 'Fintech'],
  },
  {
    title: 'WAF + VAPT remediation',
    desc: 'Deployed AWS WAF with managed and custom rule sets for bot/fraud protection and path-based access control at the ALB.',
    tags: ['AWS WAF', 'Security', 'ALB'],
  },
]

export const credentials = {
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      dates: '2024 — 2027',
      verifyUrl:
        'https://www.credly.com/badges/c6b9b65c-6c54-4b50-8d04-2f1225735e3c/public_url',
    },
  ],
  honor: {
    title: 'ECE Licensure Exam — Rank 3 Nationally',
    metric: '3rd',
    metricSub: 'of 3,130 examinees · 90.70%',
    framing:
      'Placed 3rd nationally in the Philippine Electronics Engineering Licensure Exam — the top 0.1% of 3,130 examinees. The same systems rigor I now bring to cloud architecture.',
  },
  education: {
    degree: 'B.S. Electronics Engineering',
    school: 'Polytechnic University of the Philippines — Manila',
    dates: '2019 — 2023',
  },
} as const

export const contact = {
  headline: 'Open to Cloud / DevOps / SRE roles.',
  blurb:
    "Building something on AWS, modernizing a platform, or just want to talk infrastructure? I'd like to hear about it.",
  availability: 'Available · Manila / Pasig, PH · open to remote',
} as const

export type NavItem = { id: string; label: string }

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Case Studies' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]
