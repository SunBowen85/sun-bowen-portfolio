import type { ProfileData } from "@/types/profile";

export const profileData: ProfileData = {
  person: {
    name: "孙博文",
    role: "Software Engineering / PMP / Project & Product Assistant",
    email: "2918492508@qq.com",
    secondaryEmail: "sunbowen85@gmail.com",
    phone: "17727858310",
    github: "https://github.com/SunBowen85",
    resumeUrl: "/resume.pdf",
  },
  navItems: [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ],
  hero: {
    eyebrow: "Sun Bowen Portfolio 2026",
    title: "I build bridges between software, projects, and products.",
    subtitle: "软件工程背景 × PMP 项目管理思维 × 产品与项目协作能力",
    description:
      "我希望把技术理解、项目管理方法和产品思维结合起来，参与从需求分析、项目推进到交付落地的全过程。",
    actions: [
      { label: "View My Work", href: "#projects", variant: "primary" },
      { label: "Download Resume", href: "/resume.pdf", variant: "secondary" },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Where software thinking meets project execution.",
    body: "我是软件工程专业应届生，具备基础开发思维，同时系统学习过项目管理知识，通过 PMP，了解敏捷开发、瀑布模型、Jira 和 Project。希望从项目助理、产品助理或项目实施方向切入，积累真实业务和交付经验。",
    stats: [
      { label: "Certified", value: "PMP" },
      { label: "Major", value: "Software Engineering" },
      { label: "Graduation Project", value: "Spring Boot Project" },
      { label: "Workflow", value: "Jira / Project" },
      { label: "Strength", value: "Cross-functional Communication" },
      { label: "AI Workflow", value: "Vibe Coding + GitHub" },
    ],
  },
  skills: [
    {
      icon: "coordination",
      bentoSpan: "large",
      title: "Project Coordination",
      description: "会议纪要、进度跟踪、跨部门沟通，帮助团队保持节奏和信息同步。",
      tags: ["会议纪要", "进度跟踪", "跨部门沟通"],
    },
    {
      icon: "product",
      bentoSpan: "wide",
      title: "Product Understanding",
      description: "理解需求背景、用户体验和功能拆解，把业务目标转化为可执行事项。",
      tags: ["需求理解", "用户体验", "功能拆解"],
    },
    {
      icon: "technical",
      bentoSpan: "tall",
      title: "Technical Foundation",
      description: "具备 Java、Spring Boot、数据库和 Git 基础，能与研发团队高效沟通。",
      tags: ["Java", "Spring Boot", "Mysql", "Git"],
    },
    {
      icon: "tools",
      bentoSpan: "compact",
      title: "Tools",
      description: "熟悉项目协作和办公工具，支持任务流转、计划管理和材料整理。",
      tags: ["Jira", "Microsoft Project", "Office", "Markdown", "GitHub"],
    },
    {
      icon: "docs",
      bentoSpan: "wide",
      title: "Documentation",
      description: "维护项目文档、需求说明和汇报材料，让关键信息清晰可追踪。",
      tags: ["项目文档", "需求说明", "汇报材料"],
    },
    {
      icon: "visualization",
      bentoSpan: "compact",
      title: "Data Visualization",
      description: "围绕问卷统计、图表展示和结果导出，辅助数据理解和决策表达。",
      tags: ["问卷统计", "图表展示", "结果导出"],
    },
    {
      icon: "vibe",
      bentoSpan: "wide",
      title: "Vibe Coding / AI-assisted Development",
      description:
        "能使用 AI 协作完成需求拆解、页面实现、报错定位、测试验证和持续迭代，并通过 GitHub 管理代码与项目沉淀。",
      tags: ["AI 协作开发", "Prompt", "快速原型", "GitHub", "构建验证"],
    },
  ],
  experience: [
    {
      company: "北京飞渡科技股份有限公司",
      role: "项目助理",
      period: "2025.10 - 2025.12",
      summary: "参与真实项目协作和交付流程，支持项目会议、沟通同步与文档管理。",
      bullets: [
        "参与项目会议记录与会议纪要整理",
        "协助跨部门沟通，跟进任务状态",
        "维护项目文档，提升项目信息同步效率",
        "学习真实项目交付流程和团队协作方式",
      ],
    },
  ],
  projects: [
    {
      title: "基于 Spring Boot 的问卷调查与数据可视化平台",
      visualLabel: "Featured System",
      visualCaption: "Survey flow, response data, analytics, and export pipeline in one delivery story.",
      description:
        "围绕问卷创建、发布、填写和结果分析的毕业设计项目，重点关注数据管理、统计展示与结果导出。",
      bullets: [
        "支持问卷创建、发布、填写、结果统计",
        "使用 Spring Boot 构建后端",
        "使用数据库管理问卷与答卷数据",
        "使用图表展示调查结果",
        "支持结果导出",
      ],
      tech: ["Spring Boot", "Java", "Mysql", "Data Visualization", "Export"],
      metrics: [
        { label: "Core Modules", value: "5" },
        { label: "Stack", value: "Spring Boot" },
        { label: "Output", value: "Charts + Export" },
      ],
      actions: [
        { label: "View Project", href: "#projects", variant: "primary" },
        { label: "Project Notes", href: "#contact", variant: "secondary" },
      ],
    },
    {
      title: "Vibe Coding 个人求职主页项目",
      visualLabel: "AI-assisted Portfolio",
      visualCaption:
        "A premium dark portfolio built through AI-assisted requirement shaping, component iteration, debugging, and production verification.",
      description:
        "基于 Next.js + TypeScript 的高级暗黑风个人主页项目，通过 Vibe Coding 方式完成视觉方向拆解、组件实现、动效增强、响应式调试和构建验证。",
      bullets: [
        "使用 AI 协作完成需求拆解、页面结构规划和组件迭代",
        "使用 Next.js、TypeScript、Tailwind CSS 构建响应式个人主页",
        "使用 Framer Motion、GSAP 和 Three.js 增强高级创意工作室风格",
        "通过测试、Lint、Build 和浏览器检查验证交付质量",
        "使用 GitHub 思维管理项目代码、版本沉淀和后续展示",
      ],
      tech: [
        "Vibe Coding",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "Three.js",
        "GitHub",
      ],
      metrics: [
        { label: "Workflow", value: "AI + Human" },
        { label: "Delivery", value: "Build Verified" },
        { label: "Code Host", value: "GitHub Ready" },
      ],
      actions: [
        { label: "View Site", href: "#top", variant: "primary" },
        {
          label: "GitHub",
          href: "https://github.com/SunBowen85",
          variant: "secondary",
        },
      ],
    },
  ],
  process: [
    {
      step: "01",
      anchorId: "process-understand",
      title: "Understand",
      description: "理解需求、业务背景和目标，先确认问题本身和预期成果。",
    },
    {
      step: "02",
      anchorId: "process-plan",
      title: "Plan",
      description: "拆解任务、明确优先级和时间节点，让执行路径可视化。",
    },
    {
      step: "03",
      anchorId: "process-coordinate",
      title: "Coordinate",
      description: "推动沟通、同步进度、解决阻塞，保持多人协作中的信息流动。",
    },
    {
      step: "04",
      anchorId: "process-deliver",
      title: "Deliver",
      description: "整理成果、沉淀文档、辅助交付，让过程和结果都可追踪。",
    },
    {
      step: "05",
      anchorId: "process-review",
      title: "Review",
      description: "复盘问题、优化流程、提升效率，把经验转化为下一次的改进。",
    },
  ],
  contact: {
    title: "Let’s build something reliable, useful, and well-managed.",
    subtitle:
      "如果你正在寻找一名具备技术理解能力、项目管理意识和学习能力的应届生，我很期待与你交流。",
    actions: [
      { label: "Email Me", href: "mailto:2918492508@qq.com", variant: "primary" },
      { label: "Download Resume", href: "/resume.pdf", variant: "secondary" },
      { label: "View Projects", href: "#projects", variant: "secondary" },
    ],
  },
};
