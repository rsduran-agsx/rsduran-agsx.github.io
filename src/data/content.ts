/**
 * Single source of truth for all portfolio copy.
 * Facts come from Rein Duran's resume. Keep accurate. Never fabricate.
 * Style rules: short, confident sentences. No em dashes.
 */

export const profile = {
  name: 'Rein Duran',
  role: 'Cloud / DevOps Engineer',
  location: 'Manila, PH',
  eyebrow: 'Cloud / DevOps Engineer · AWS · Manila',
  headline: 'I build the AWS\nother teams ship on.',
  valueProp:
    'Cloud / DevOps Engineer focused on AWS landing zones, containers, and Terraform. I cut a 13-account AWS bill 26% and co-built our first Well-Architected foundation at 100% as code.',
  email: 'reineirsamonteduran@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rein-duran',
  github: 'https://github.com/rsduran-agsx',
  resumeUrl: '/Rein_Duran_Resume.pdf',
  heroBg: '/hero-core.jpg',
  aboutBg: '/bg-aurora.jpg',
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
  { value: 13, label: 'AWS accounts', sub: 'one governed estate' },
  { value: 15, label: 'microservices moved', sub: 'GitLab → GitHub Actions' },
]

export const about = {
  paragraphs: [
    "I'm a Cloud DevOps Engineer at NMBLR AI. For two years I've run the AWS platform our products ship on: landing zones, EKS and ECS, CI/CD, and the cost and security guardrails around them.",
    'I came from electronics engineering. I placed 3rd nationally in the Philippine licensure exam before moving into cloud. That is how I treat infrastructure: a system with real constraints and failure modes worth designing for.',
  ],
  now: 'Right now: going deeper on EKS, Terraform modules, and FinOps.',
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
    label: 'Cloud · AWS',
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
    caption: 'Terraform for anything that can be code, which is nearly everything.',
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
    dates: 'Oct 2024 to Present',
    location: 'Ortigas, Pasig · PH',
    bullets: [
      'Cut monthly AWS spend 26% ($36.5k to $27k) across 13 accounts. Closed dead accounts, moved 7 EKS clusters off Extended Support, and rightsized compute.',
      "Co-built the company's first Well-Architected landing zone with AFT and a hub-and-spoke network. Hit 100% IaC coverage and killed config drift.",
      'Led the EKS to ECS Fargate migration as primary POC. Removed 6x Extended Support cost and all node patching, then trained TechOps and Dev on it.',
      'Provisioned 10+ AWS services for the AI Engine and Data Platform: Bedrock, API Gateway, Lambda, Fargate, EFS, RDS, Step Functions. Powered LLM streaming and ML pipelines.',
      'Standardized infrastructure for 6 product ventures: Helm, GitHub Actions, Route 53, ALB, RDS, S3, TLS.',
      'Hardened security: fixed VAPT findings, deployed AWS WAF with custom rules, and locked down access at the ALB.',
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
      'A 13-account AWS estate had drifted. Unused accounts kept billing, EKS clusters slid onto premium Extended Support, and compute was sized for peaks that never came.',
    action:
      'Audited spend across all 13 accounts. Closed dead accounts, moved 7 EKS clusters back to Standard Support, and rightsized the over-provisioned resources.',
    impact:
      'Monthly AWS spend dropped 26%, from $36.5k to $27k, with zero hit to any product SLA.',
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
      'The company vended AWS accounts by hand. No governed foundation, inconsistent networking, and config drift nobody could fully see.',
    action:
      'Co-built the first Well-Architected landing zone: AFT for account vending, a hub-and-spoke network, and Terraform over every resource.',
    impact:
      'Account provisioning became repeatable and reviewable. IaC coverage hit 100% and drift was gone.',
    tech: ['AFT', 'Terraform', 'AWS Organizations', 'Transit Gateway', 'IAM'],
    diagram: 'hubspoke',
  },
  {
    id: 'fargate',
    category: 'Modernization',
    title: 'EKS to ECS Fargate, no nodes left',
    badge: '0 nodes',
    badgeSub: 'left to patch',
    problem:
      'Several EKS clusters were stuck on Extended Support at 6x the cost, and every node still needed patching. Pure toil, no product value.',
    action:
      'Re-platformed the workloads to ECS Fargate as lead POC. Documented the pattern and trained TechOps and Dev on the first serverless container strategy.',
    impact:
      'Extended Support cost and node patching disappeared. No nodes left to own.',
    tech: ['EKS', 'ECS', 'Fargate', 'Docker', 'Helm'],
    diagram: 'fargate',
  },
  {
    id: 'aiplatform',
    category: 'AI / Data Platform',
    title: 'Production infra for an AI engine',
    badge: '10+',
    badgeSub: 'AWS services wired',
    problem:
      'A new AI Engine and Data Platform needed infra for LLM streaming, ML orchestration, and heavy data pipelines, across sandbox and production.',
    action:
      'Provisioned and wired 10+ AWS services into one observable platform: Bedrock, API Gateway, Lambda, Fargate, EFS, RDS, Step Functions.',
    impact:
      "Shipped the foundation the product's AI and data features run on today.",
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
    desc: 'Migrated BayaniPay off legacy GitLab CI. Refactored old pipelines and standardized every deploy.',
    tags: ['GitHub Actions', 'GitLab CI', 'CI/CD'],
  },
  {
    title: 'Zero-downtime SSL for BDO Unibank',
    desc: "Renewed certs for the bank's RPT and Payroll systems, Prod and UAT, with full regulatory compliance.",
    tags: ['TLS / ACM', 'Compliance', 'Fintech'],
  },
  {
    title: 'WAF and VAPT remediation',
    desc: 'Deployed AWS WAF with managed and custom rules, plus path-based access control at the ALB.',
    tags: ['AWS WAF', 'Security', 'ALB'],
  },
]

export const credentials = {
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      dates: '2024 to 2027',
      verifyUrl:
        'https://www.credly.com/badges/c6b9b65c-6c54-4b50-8d04-2f1225735e3c/public_url',
    },
  ],
  honor: {
    title: 'ECE Licensure Exam · Rank 3 Nationally',
    metric: '3rd',
    metricSub: 'of 3,130 examinees · 90.70%',
    framing:
      'Placed 3rd nationally in the Philippine Electronics Engineering Licensure Exam. Top 0.1% of 3,130 examinees. Same rigor, now pointed at cloud architecture.',
  },
  education: {
    degree: 'B.S. Electronics Engineering',
    school: 'Polytechnic University of the Philippines, Manila',
    dates: '2019 to 2023',
  },
} as const

export const contact = {
  headline: 'Open to Cloud / DevOps / SRE roles.',
  blurb:
    "Building on AWS, modernizing a platform, or just want to talk infrastructure? Say hello.",
  availability: 'Available · Manila, PH · open to remote',
} as const

export type NavItem = { id: string; label: string }

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

// Cinematic copy for the full-bleed sections.
export const cinematic = {
  heroLine: 'Calm under any load.',
  roleLine: 'Cloud / DevOps Engineer at NMBLR AI, since 2024.',
  manifesto: [
    'Behind every product that just works,',
    'there is infrastructure no one sees.',
    'Multi-account AWS, defined entirely as code.',
    'Landing zones that vend themselves.',
    'Clusters that scale and stay silent.',
    'That silence is the work.',
  ],
} as const
