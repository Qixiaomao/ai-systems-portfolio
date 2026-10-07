export const profile = {
  name: "Lucas Huang",
  title: "Lucas Huang — AI Systems",
  subtitle: "Researcher · Builder · Lifelong Learner",
  description:
    "Exploring AI systems that can understand, coordinate and execute in the real world.",
  location: "Shenzhen, China",
  education: "Master in Information Technology",
  currentRole: "Research Assistant",
  avatar: "/profile/wechat-avatar.jpeg",
  quote: "A calmer mind builds better systems.",
  about:
    "I like useful systems, interesting papers, books, fitness, photography and leaving enough room to think.",
  tagline: "Curiosity today, better systems tomorrow.",
};

// Add verified personal links here. The CV link points to the public About page.
export const contact: { github: string; email: string; cv: string; x: string } =
  {
    github: "https://github.com/Qixiaomao/ai-systems-portfolio",
    email: "",
    cv: "/about#cv",
    x: "",
  };

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

export const portals = [
  {
    title: "Research",
    description: "Multi-agent systems, AI safety, LLM routing, and more.",
    href: "/writing#research",
    pose: "read" as const,
  },
  {
    title: "Projects",
    description: "From research prototypes to practical systems.",
    href: "/projects",
    pose: "laptop" as const,
  },
  {
    title: "Writing",
    description: "Notes, thoughts, and the occasional life logs.",
    href: "/writing",
    pose: "sleep" as const,
  },
];

type ResearchTopic = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};
type Project = {
  title: string;
  description: string;
  meta: string;
  href?: string;
};
type Update = { date: string; title: string; href?: string };

export const research: ResearchTopic[] = [
  {
    title: "Layered LLM Routing",
    description:
      "Hierarchical routing for capable, cost-aware and reliable model serving.",
    tags: ["Routing", "Evaluation", "LLM Systems"],
  },
  {
    title: "Agent Evaluation",
    description:
      "Evaluation methods for agents, tools, long-horizon behavior and system reliability.",
    tags: ["Agents", "Benchmarking", "Evals"],
  },
  {
    title: "AI Systems & Control",
    description:
      "Systems-oriented research on orchestration, multi-agent control and practical AI infrastructure.",
    tags: ["AI Infra", "Control", "MAS"],
  },
];

export const projects: Project[] = [
  {
    title: "CUDA GEMM",
    description:
      "GPU kernel optimization around tiling, memory movement and profiling.",
    meta: "SYSTEMS",
  },
  {
    title: "Enterprise RAG",
    description:
      "Retrieval, reranking and evaluation for a practical knowledge assistant.",
    meta: "AI ENGINEERING",
  },
  {
    title: "ViT–GPT-2 Video Captioning",
    description:
      "End-to-end multimodal captioning with a vision encoder and language decoder.",
    meta: "MULTIMODAL",
  },
];

// Transcribed from the user-provided design reference; links are still optional.
export const updates: Update[] = [
  { date: "2026-10-02", title: "Notes on Stanford CS329z (Day 1)" },
  { date: "2026-09-30", title: "Exploring Layered LLM Routing for Legal QA" },
  { date: "2026-09-24", title: "Contract Review Pipeline Optimization" },
  { date: "2026-09-17", title: "Agent Evaluation Notes (Phoenix / Span)" },
  {
    date: "2026-09-08",
    title: "Research Direction: Scaling AI Safety for a MAS World",
  },
];

export const interests = [
  "AI Systems & Agents",
  "Evaluation & Reasoning",
  "Machine Learning / Vision",
  "AI Safety (MAS)",
  "Books / Fitness / A calmer life",
];
