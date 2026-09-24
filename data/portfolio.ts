import { Project, Certification, Education, SkillCategory, MetricCard } from "@/types";

export const portfolio = {
  person: {
    name: "Muhammad Khuzaima",
    eyebrow: "FRONTEND DEVELOPER",
    role: "Frontend Developer",
    secondaryRole: "Data Analytics & Business Intelligence",
    tagline: "I build responsive experiences for the web.",
    bio: "I'm a BSCS student and aspiring Frontend Developer focused on building responsive, user-friendly web experiences with modern web technologies, backed by strong analytical foundations.",
    location: "Lahore, Pakistan",
    phone: "+92 332 4700225",
    email: "khuzaimam335@gmail.com",
    cvPath: "/Muhammad-Khuzaima-CV.pdf",
    profileImage: "/profile.png",
    availability: "Available for internship, freelance, and remote opportunities",
  },

  links: {
    linkedin: "https://linkedin.com/in/muhammadkhuzaimadev",
    github: "https://github.com/MUHAMMAD-KHUZAIMA18",
    website: "https://muhammadkhuzaima.dev",
    email: "mailto:khuzaimam335@gmail.com",
    phone: "tel:+923324700225",
  },

  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],

  metrics: [
    { value: "3.36", label: "Current CGPA", description: "BSCS Academic Excellence" },
    { value: "4th", label: "Semester", description: "Punjab University" },
    { value: "2028", label: "Graduation", description: "Expected Completion" },
    { value: "3", label: "Featured Projects", description: "Web & Analytics Showcases" },
  ] as MetricCard[],

  technologiesStrip: [
    { name: "HTML", category: "Markup" },
    { name: "CSS", category: "Styling" },
    { name: "JavaScript", category: "Core Language" },
    { name: "Bootstrap", category: "Framework" },
    { name: "Power BI", category: "Analytics" },
    { name: "Excel", category: "Data Analysis" },
    { name: "SQL", category: "Database Query" },
    { name: "Git", category: "Version Control" },
    { name: "GitHub", category: "Collaboration" },
    { name: "Vercel", category: "Cloud Deployment" },
  ],

  skills: [
    {
      title: "Frontend",
      description: "Building structured, responsive, and cross-browser accessible interfaces.",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Web Design"],
    },
    {
      title: "Data Analytics",
      description: "Transforming raw data into actionable dashboards and business insights.",
      skills: ["Power BI", "Microsoft Excel", "Power Query", "Google Analytics"],
    },
    {
      title: "Databases",
      description: "Relational modeling, querying, and structured database operations.",
      skills: ["SQL", "MySQL", "MongoDB"],
    },
    {
      title: "Programming",
      description: "Strong foundation in object-oriented and algorithmic development.",
      skills: ["C++", "Python", "Java"],
    },
    {
      title: "Tools & Workflow",
      description: "Modern developer tooling, version control, and AI-accelerated dev workflows.",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "ChatGPT", "Claude Code", "GitHub Copilot"],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 1,
      title: "CRM/ERP SaaS Website",
      category: "Frontend Development",
      description:
        "Comprehensive web platform designed for SaaS operations. Features clean modular landing sections, services showcase, industry-specific solutions, an interactive contact channel, and a responsive login UI.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel"],
      image: "/projects/crm-erp-saas.svg",
      highlights: [
        "Modular landing page with high conversion focus",
        "Responsive desktop, tablet, and mobile layouts",
        "Custom authentication UI and contact flows",
        "Optimized layout architecture deployed on Vercel",
      ],
      liveUrl: undefined, // TODO: Add live URL
      githubUrl: undefined, // TODO: Add GitHub URL
    },
    {
      id: 2,
      title: "Power BI Business Dashboards",
      category: "Business Intelligence",
      description:
        "Suite of analytical business dashboards focusing on Pizza Sales, Chocolate Sales, and SaaS performance. Implements dynamic KPI cards, interactive slicers, profit margin analyses, and monthly trend forecasting.",
      technologies: ["Power BI", "DAX", "Data Analytics"],
      image: "/projects/power-bi-dashboards.svg",
      highlights: [
        "Interactive KPI monitoring: revenue, expenses, and net profit",
        "Custom DAX calculated columns and dynamic time-intelligence measures",
        "Multi-dimensional slicers for product categories and monthly performance",
        "Data storytelling with clean executive visual design",
      ],
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: 3,
      title: "Nike Sales Dashboard",
      category: "Sales Analytics",
      description:
        "Focused sales analytics dashboard built to monitor footwear and apparel performance. Analyzes operating profits, units sold, regional geographic distributions, and historical sales trends.",
      technologies: ["Power BI", "Excel"],
      image: "/projects/nike-sales-dashboard.svg",
      highlights: [
        "Regional sales breakdown and geographic margin mapping",
        "Volume vs. profit margin correlation analytics",
        "Monthly and seasonal sales pattern visualizations",
        "Clean, brand-aligned modern dashboard aesthetics",
      ],
      liveUrl: undefined,
      githubUrl: undefined,
    },
  ] as Project[],

  certifications: [
    {
      title: "Data Science and Analytics",
      provider: "HP LIFE",
      date: "Sep 2025",
    },
    {
      title: "Data Analytics and Business Intelligence",
      provider: "DigiSkills",
      date: "Nov 2025",
    },
    {
      title: "WordPress Development",
      provider: "Hadi E-Learning",
      date: "Jan 2026",
    },
    {
      title: "Microsoft Power BI",
      provider: "Hadi E-Learning",
      date: "Sep 2025",
    },
  ] as Certification[],

  education: [
    {
      institution: "Punjab University",
      degree: "Bachelor of Science in Computer Science",
      location: "Lahore, Pakistan",
      period: "2024 — 2028 (Expected)",
      status: "4th Semester",
      cgpaOrMarks: "CGPA: 3.36",
      coursework: [
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Web Development",
        "Statistics & Probability",
        "Data Analytics",
      ],
    },
    {
      institution: "Govt Islamia Graduate College Civil Lines",
      degree: "ICS — Intermediate in Computer Science",
      location: "Lahore, Pakistan",
      period: "2022 — 2024",
      status: "Completed",
      cgpaOrMarks: "944 / 1200 (78.6%)",
      coursework: ["Computer Science", "Mathematics", "Physics", "Statistics"],
    },
  ] as Education[],
};
