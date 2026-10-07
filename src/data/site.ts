export const profile = {
  name: "Lucas Huang",
  title: "Lucas Huang — AI Systems",
  subtitle: "Researcher · Builder · Lifelong Learner",
  description:
    "Researching control in multi-agent systems, with a current focus on routing and AI infrastructure.",
  location: "Shenzhen, China",
  education: "MSc in Computer Science and Technology",
  educationSchool: "INTI International University, Malaysia",
  currentRole: "Research Assistant at SIAT",
  organization:
    "Large Model Center, Shenzhen Institutes of Advanced Technology",
  researchFocus:
    "I study how multi-agent systems are routed, coordinated, and checked. Harness design is one practical expression of that control layer. Right now I am exploring routing strategies and AI infrastructure optimization.",
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
    email: "7xiaomao@gmail.com",
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
    description: "Multi-agent control, routing, and AI infrastructure.",
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
    description: "English essays and notes on research in progress.",
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
  href: string;
};
type Update = { date: string; title: string; href?: string };

export const research: ResearchTopic[] = [
  {
    title: "Routing Strategies",
    description:
      "How to assign models, tools, and work across agents while balancing quality, cost, and reliability.",
    tags: ["Routing", "MAS", "Evaluation"],
  },
  {
    title: "Multi-Agent Control",
    description:
      "The control layer around agents: coordination, feedback, verification, and the harnesses that put these ideas into practice.",
    tags: ["Agents", "Control", "Harness"],
  },
  {
    title: "AI Infrastructure",
    description:
      "Making the systems that run agent workloads more efficient and easier to observe.",
    tags: ["AI Infra", "Optimization", "Systems"],
  },
];

export const projects: Project[] = [
  {
    title: "MiniBot",
    description:
      "A small MiMo-powered agent with tool calls, context compression, and file-backed memory. It is a practical place to test how an agent's control loop is organized.",
    meta: "AGENTS",
    href: "https://github.com/Qixiaomao/minibot",
  },
  {
    title: "Enterprise RAG Assistant",
    description:
      "A local knowledge-base assistant built with Next.js and FastAPI. It combines dense and keyword retrieval, lightweight reranking, and source-linked answers.",
    meta: "AI ENGINEERING",
    href: "https://github.com/Qixiaomao/enterprise-rag",
  },
  {
    title: "CUDA GEMM",
    description:
      "A custom PyTorch CUDA extension for matrix multiplication. The repository documents tiling, shared-memory reuse, register tiling, and profiler-based comparison.",
    meta: "SYSTEMS",
    href: "https://github.com/Qixiaomao/CUDA-GEMM-Optimization-Journey",
  },
  {
    title: "ViT–GPT-2 Video Captioning",
    description:
      "My master's project: a ViT-based visual encoder and GPT-2 decoder for video captioning, with local inference, benchmarking, and profiling tools.",
    meta: "MULTIMODAL",
    href: "https://github.com/Qixiaomao/video-caption-algorithm",
  },
];

// Public repository update dates, checked on 2026-10-07. Keep these in sync manually.
export const updates: Update[] = [
  {
    date: "2026-06-03",
    title: "MiniBot: tools and memory for a small agent",
    href: "https://github.com/Qixiaomao/minibot",
  },
  {
    date: "2026-04-30",
    title: "Enterprise RAG Assistant",
    href: "https://github.com/Qixiaomao/enterprise-rag",
  },
  {
    date: "2026-04-24",
    title: "Video Captioning Transformer",
    href: "https://github.com/Qixiaomao/video-caption-algorithm",
  },
  {
    date: "2026-03-22",
    title: "CUDA GEMM optimization",
    href: "https://github.com/Qixiaomao/CUDA-GEMM-Optimization-Journey",
  },
];

export const interests = [
  "AI Systems & Agents",
  "Routing & Control",
  "AI Infrastructure",
  "Books / Fitness / Photography",
];
