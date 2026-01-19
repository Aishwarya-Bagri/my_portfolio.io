/* ============================================
   PORTFOLIO DATA - Aishwarya's Portfolio
   ============================================ */

// Personal Information
export const personalInfo = {
  name: "Aishwarya",
  nickname: null,
  title: "MBA Candidate | Aspiring Product Manager",
  subtitle: "Driving operational excellence and product growth through data-driven insights and cross-functional collaboration.",
  email: "aishwarya.mba25125@iimkashipur.ac.in",
  location: "Kashipur, India",
  resumeLink: "/documents/resume.pdf",
  avatarImage: null,
};

// Social Media Links
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Aishwarya-Bagri",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aishwarya-iim",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:aishwarya.mba25125@iimkashipur.ac.in",
    icon: "email",
  },
];

// Skills Categories
export const skillCategories = [
  {
    id: 1,
    title: "Product Strategy & Vision",
    icon: "target",
    color: "#3b82f6",
    skills: [
      "Product Roadmapping",
      "Market Analysis",
      "Competitive Research",
      "Go-to-Market Strategy",
      "Monetization Planning"
    ]
  },
  {
    id: 2,
    title: "Product Execution & Delivery",
    icon: "puzzle",
    color: "#3b82f6",
    skills: [
      "PRD Writing",
      "User Story Mapping",
      "A/B Testing",
      "Agile Development",
      "Release Management"
    ]
  },
  {
    id: 3,
    title: "User Research & Analytics",
    icon: "chart",
    color: "#3b82f6",
    skills: [
      "User Interviews",
      "Data Analysis",
      "Metrics Definition",
      "Usability Testing",
      "Customer Journey Mapping"
    ]
  },
  {
    id: 4,
    title: "Technical Skills",
    icon: "code",
    color: "#3b82f6",
    skills: [
      "Python",
      "R",
      "SQL",
      "Excel",
      "PowerBI",
      "Data Analysis"
    ]
  }
];

// Projects (PDF/PPT Documents) - Thumbnails auto-generated from first page
export const projects = [
  {
    id: 1,
    name: "Data Analytics Report on Intelligent Multi-Order Batching",
    description: "• Problem: Peak hour demand hits 1,034 orders/hr, creating bottlenecks and a high Cost Per Delivery of ₹108.20.\n• Solution: Simulated a 'Naive Greedy' batching algorithm on historical data to group spatially compatible orders.\n• Impact: Validated an 11.3% reduction in delivery costs (to ₹96.01) and saved 926 fleet trips during stress tests.",
    pdfUrl: "/documents/data-analytics-batching.pdf",
    type: "pdf",
    tags: ["Data Analytics", "Logistics Optimization", "Unit Economics", "Zomato"],
    color: "#06b6d4",
    featured: true,
  },
  {
    id: 2,
    name: "Blinkit Predictive Inventory & Auto-Replenishment",
    description: "• Problem: Users frequently run out of daily staples, leading to churn and expensive single-item rush deliveries.\n• Solution: Designed 'The Infinite Fridge,' a feature triggering auto-replenishment notifications based on consumption velocity.\n• Impact: Projected to reduce user stockouts by 40% and increase Average Order Value by 15% via scheduled batching.",
    pdfUrl: "/documents/blinkit-inventory.pdf",
    type: "pdf",
    tags: ["ML", "Inventory", "Quick Commerce", "Blinkit"],
    color: "#f7b500",
    featured: true,
  },
  {
    id: 3,
    name: "Zomato Intelligent Multi-Order Batching",
    description: "• Problem: Inefficient 'One Order = One Driver' routing creates high 'dead miles' and drags down unit economics.\n• Solution: Proposed a 'Multi-Pick, Multi-Drop' batching engine with strict 7-minute freshness guardrails.\n• Impact: Strategy designed to increase Rider Utilization and boost the Batch Rate to 25% without compromising NPS.",
    pdfUrl: "/documents/zomato-batching.pdf",
    type: "pdf",
    tags: ["PRD", "Logistics", "Optimization", "Zomato"],
    color: "#e23744",
    featured: true,
  },
  {
    id: 4,
    name: "GTM Strategy for Electronics Brand in Nepal",
    description: "• Problem: A lack of quality, affordable mid-range TWS audio products for Nepal's digitally active youth demographic.\n• Solution: Developed a digital-first launch strategy for 'SonicPods' leveraging campus ambassadors and influencer marketing.\n• Impact: Launch plan targeted 100k digital reach in 30 days and 500+ initial conversions via penetration pricing.",
    pdfUrl: "/documents/gtm-nepal.pdf",
    type: "pdf",
    tags: ["Strategy", "Market Entry", "Electronics"],
    color: "#667eea",
    featured: true,
  },
  {
    id: 5,
    name: "GTM Strategy for JIO Expansion in Africa",
    description: "• Problem: Africa has low internet penetration (38%) but a massive youth population needing affordable data.\n• Solution: Formulated a low-cost entry strategy ($2.50 ARPU) bundling connectivity with fintech and education ecosystems.\n• Impact: Defined a strategic roadmap to acquire 30 million subscribers in 3 years across Nigeria, Kenya, and South Africa.",
    pdfUrl: "/documents/gtm-jio-africa.pdf",
    type: "pdf",
    tags: ["Strategy", "Telecom", "Africa"],
    color: "#0a3d91",
    featured: true,
  },
];

// Experience
export const experiences = [
  {
    id: "internshala-ops",
    company: "Internshala",
    role: "Associate - Product Operations",
    date: "Apr 2024 – Jun 2025",
    themeColor: "#00a5ec",
    logo: "/logos/internshala.png",
    description: "Managed end-to-end business operations and program delivery, streamlining workflows to drive process efficiency.",
    highlights: [
      "Designed and developed 10+ interactive dashboards to track program performance metrics, user engagement, and operational KPIs",
      "Mentored a team of three interns to drive measurable gains in process efficiency and shorten cycle times",
      "Enhanced customer retention by conducting process diagnostics and implementing targeted PLM improvements, maintaining a sustained NPS of 4.5/5"
    ]
  },
  {
    id: "internshala-sales",
    company: "Internshala",
    role: "Associate - Sales",
    date: "Jul 2023 – Mar 2024",
    themeColor: "#0088cc",
    logo: "/logos/internshala.png",
    description: "Led sales initiatives and collected consumer insights to influence product improvements and revenue growth.",
    highlights: [
      "Conducted cold calls and created pitch decks, improving conversion ratios and leading to ₹45 lakhs in revenue",
      "Collected consumer insights through discovery calls to identify customer needs and product gaps, directly influencing product improvements",
      "Utilized user feedback and performance data to enhance personalized multichannel outreach"
    ]
  },
  {
    id: "webnnel",
    company: "Webnnel",
    role: "Creative Content Intern",
    date: "Apr 2021 – May 2021",
    themeColor: "#6366f1",
    logo: "/logos/webnnel.png",
    description: "Managed storytelling and campaign strategy to increase user engagement and ROI for the brand's digital presence.",
    highlights: [
      "Created short-form content focused on brand-driven narratives, contributing to an increase in user engagement rate",
      "Developed creative Instagram captions that boosted interaction by 7% while reinforcing a consistent brand voice"
    ]
  }
];

// Education
export const education = [
  {
    id: "iim-kashipur",
    university: "IIM Kashipur",
    degree: "MBA",
    logo: "/logos/iim-kashipur.png",
    date: "2025 - 2027",
    description: "Pursuing MBA with focus on Product Management and Business Strategy.",
    highlights: [
      "Score: 80.0%"
    ]
  },
  {
    id: "du-bsc",
    university: "University of Delhi",
    degree: "Bachelor of Science",
    logo: "/logos/du.png",
    date: "2020 - 2023",
    description: "Completed undergraduate studies with strong academic performance.",
    highlights: [
      "Score: 81.2%"
    ]
  }
];

// Navigation Links
export const navLinks = [
  { name: "Home", href: "#intro" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

// Resume
export const resumeLink = "/documents/resume.pdf";

// Footer
export const footerText = "Designed & Built with ❤️";
