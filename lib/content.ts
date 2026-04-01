export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

type LinkMaterial = {
  type: "link";
  label: string;
  href: string;
};

type ModalMaterial = {
  type: "modal";
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  mobileHint: string;
};

type ProjectItem = {
  title: string;
  period: string;
  role: string;
  summary: string;
  bullets: string[];
  repoHref?: string;
};

export type MaterialItem = LinkMaterial | ModalMaterial;

export const navItems = {
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/research", label: "Research" },
    { href: "/en/projects", label: "Projects" },
    { href: "/en/resume", label: "Resume" },
  ],
  zh: [
    { href: "/zh", label: "首页" },
    { href: "/zh/research", label: "研究" },
    { href: "/zh/projects", label: "项目" },
    { href: "/zh/resume", label: "简历" },
  ],
} as const;

export const uiText = {
  en: {
    theme: "Theme",
    agenda: "Agenda",
    outputs: "Outputs",
    section: "Section",
    caseLabel: "Case",
    linksKicker: "Links",
    modalClose: "Close",
  },
  zh: {
    theme: "主题",
    agenda: "主轴",
    outputs: "产出",
    section: "板块",
    caseLabel: "项目",
    linksKicker: "相关入口",
    modalClose: "关闭",
  },
} as const;

export const homeContent = {
  en: {
    eyebrow: "AI Systems / Efficient Inference / Hardware-Aware Execution",
    name: "Yiming Huang",
    title: "AI Systems Researcher and Engineer",
    intro:
      "I study and build efficient AI systems across models, inference pipelines, and hardware-aware execution. My current interests include multimodal learning, CUDA optimization, runtime scheduling, and edge-oriented AI infrastructure.",
    support:
      "From CUDA kernel optimization and RAG-based code analysis to multimodal research and system-level inference thinking.",
    ctas: [
      { href: "/en/research", label: "View Research" },
      { href: "/en/resume", label: "Open Resume" },
    ],
    tags: ["Efficient Inference", "CUDA & Systems", "Multimodal AI"],
    metrics: [
      { value: "5+", label: "Selected technical projects" },
      { value: "1", label: "Manuscript in preparation" },
      { value: "50+", label: "Technical blog posts" },
      { value: "3.7/4.0", label: "Master's CAP" },
    ],
    focusTitle: "Research Focus",
    focusIntro:
      "My current focus is how modern AI models can run more efficiently in real systems, especially under constraints of memory, latency, and hardware resources.",
    focusCards: [
      {
        title: "Efficient AI Inference",
        body: "I care about real deployment behavior, not only benchmark numbers. That includes latency, memory movement, and inference efficiency under practical constraints.",
      },
      {
        title: "Compiler and Runtime Co-optimization",
        body: "I am interested in treating quantization, operator fusion, code generation, and runtime scheduling as one connected systems problem.",
      },
      {
        title: "Hardware-Aware Systems Thinking",
        body: "My perspective is shaped by memory hierarchy, data locality, register pressure, instruction throughput, and the realities of edge and GPU platforms.",
      },
    ],
    projectsTitle: "Selected Projects",
    projectsIntro:
      "These projects show how I approach AI systems problems through both research reasoning and hands-on implementation.",
    projects: [
      {
        title: "CUDA GEMM Optimization and Architectural Analysis",
        body: "Implemented and optimized GEMM kernels with shared memory tiling, register blocking, and profiling-guided analysis to improve arithmetic intensity and execution performance.",
        tags: ["CUDA", "Profiling", "Memory Hierarchy"],
      },
      {
        title: "LLM + RAG Code Architecture Analysis System",
        body: "Built a repository analysis system that combines LLMs, AST-based chunking, vector retrieval, and CUDA-aware parsing for structured code understanding.",
        tags: ["LLM", "RAG", "AST"],
      },
      {
        title: "Multimodal Video Captioning Research",
        body: "Designed a multimodal video-to-text pipeline with transformer-based alignment and efficiency-oriented system thinking.",
        tags: ["Multimodal", "ViT", "Inference"],
      },
    ],
    backgroundTitle: "Background",
    backgroundIntro:
      "My background combines research-oriented study with practical engineering experience across data systems, maintenance, networking, and technical tool building.",
    backgroundPoints: [
      "Master's research in multimodal AI and efficient inference",
      "Publication manuscript under preparation",
      "Engineering experience in data pipelines and automation",
      "Earlier systems and network operations experience",
      "Ongoing study in CSAPP, system programming, and performance analysis",
    ],
    materialsTitle: "Materials",
    materialsIntro:
      "Currently focused on machine learning systems, low-level operator optimization, GPU programming, and AI infrastructure engineering.",
    materials: [
      {
        type: "modal",
        label: "Tech Insights",
        title: "Tech Insights",
        description:
          "A small window into my ongoing technical notes, system-level observations, and engineering reflections. Scan the QR code to follow the account.",
        imageSrc: "/images/qr/wechat-tech-insights.jpg",
        mobileHint: "On mobile, tap to open the panel and long-press the QR code to scan.",
      },
      { type: "link", label: "GitHub", href: "https://github.com/Qixiaomao" },
      { type: "link", label: "Blog", href: "https://www.cnblogs.com/7xiaomao/" },
      { type: "link", label: "Email", href: "mailto:7xiaomao@gmail.com" },
    ] satisfies readonly MaterialItem[],
  },
  zh: {
    eyebrow: "AI Systems / Efficient Inference / Hardware-Aware Execution",
    name: "黄奕铭",
    title: "AI 系统研究者与工程师",
    intro:
      "我关注高效 AI 系统的研究与工程实践，兴趣集中在多模态学习、CUDA 优化、运行时调度以及面向边缘场景的 AI 基础设施。我希望把模型理解、推理优化和底层硬件执行连接起来。",
    support:
      "从 CUDA 内核优化、基于 RAG 的代码分析，到多模态研究与系统级推理优化，我希望持续构建兼具研究深度和工程落地能力的 AI 系统。",
    ctas: [
      { href: "/zh/research", label: "查看研究方向" },
      { href: "/zh/resume", label: "查看简历" },
    ],
    tags: ["高效推理", "CUDA 与系统", "多模态 AI"],
    metrics: [
      { value: "5+", label: "代表性技术项目" },
      { value: "1", label: "在准备中的论文" },
      { value: "50+", label: "技术博客文章" },
      { value: "3.7/4.0", label: "硕士 CAP" },
    ],
    focusTitle: "研究聚焦",
    focusIntro:
      "我目前主要关注一个问题：在真实系统里，尤其是在显存、带宽、延迟和硬件资源受限的条件下，怎样让现代 AI 模型运行得更高效。",
    focusCards: [
      {
        title: "高效 AI 推理",
        body: "我关心的不只是模型在 benchmark 上的表现，更关心它们在实际部署中的延迟、访存和推理效率，尤其是 Transformer 与多模态任务。",
      },
      {
        title: "编译器与运行时协同优化",
        body: "我希望把量化、算子融合、代码生成和运行时调度看作一个相互耦合的系统问题，而不是彼此割裂的独立优化环节。",
      },
      {
        title: "面向硬件的系统视角",
        body: "我的思考方式受到内存层次、数据局部性、寄存器压力、指令吞吐以及边缘设备和 GPU 平台实际约束的影响。",
      },
    ],
    projectsTitle: "代表项目",
    projectsIntro:
      "这些项目体现了我如何把研究问题意识和动手实现能力结合起来，去处理 AI 系统中的实际问题。",
    projects: [
      {
        title: "CUDA GEMM 性能优化与体系结构分析",
        body: "围绕共享内存分块、寄存器分块和 profiling 驱动分析，对 GEMM 内核进行了实现与优化，重点关注算术强度提升和整体执行性能改进。",
        tags: ["CUDA", "Profiling", "访存优化"],
      },
      {
        title: "基于 LLM 与 RAG 的代码架构分析系统",
        body: "构建了一个结合 LLM、AST 切块、向量检索和 CUDA 专项解析的仓库分析系统，用于结构化理解源码和进行交互式推理。",
        tags: ["LLM", "RAG", "AST"],
      },
      {
        title: "多模态视频描述研究",
        body: "设计了一个面向视频到文本生成的多模态系统，在 Transformer 对齐机制之外，也关注其部署效率和系统层面的可行性。",
        tags: ["多模态", "ViT", "推理"],
      },
    ],
    backgroundTitle: "背景与积累",
    backgroundIntro:
      "我的背景并不局限于单一方向，而是把研究训练与工程实践结合起来，覆盖数据系统、系统维护、网络和技术工具构建。",
    backgroundPoints: [
      "硕士阶段持续聚焦多模态 AI 与高效推理",
      "正在准备学术论文投稿",
      "具有数据管道与自动化工程经验",
      "具备早期系统与网络运维背景",
      "持续深入学习 CSAPP、系统编程与性能分析",
    ],
    materialsTitle: "相关材料",
    materialsIntro:
      "目前专注于机器学习系统（MLSys）与底层算子优化研究。致力于探索高性能计算、GPU 编程及 AI 基础设施领域的工程挑战，寻求能发挥系统级开发能力的技术岗位，长期深耕分布式系统与 AI 部署优化。",
    materials: [
      {
        type: "modal",
        label: "技术洞察",
        title: "个人公众号",
        description:
          "这里会分享我在 MLSys、GPU 编程、底层优化和工程实践中的一些观察与思考。欢迎扫码关注。",
        imageSrc: "/images/qr/wechat-tech-insights.jpg",
        mobileHint: "在手机端点击后，可长按二维码进行识别。",
      },
      { type: "link", label: "GitHub", href: "https://github.com/Qixiaomao" },
      { type: "link", label: "博客", href: "https://www.cnblogs.com/7xiaomao/" },
      { type: "link", label: "邮箱", href: "mailto:7xiaomao@gmail.com" },
    ] satisfies readonly MaterialItem[],
  },
} as const;

export const researchContent = {
  en: {
    heroLabel: "Research",
    title: "Research Direction",
    intro:
      "My current research direction centers on efficient AI inference, especially how model-level choices interact with compiler passes, runtime policies, and hardware realities.",
    themes: [
      {
        title: "Memory Wall in Edge Inference",
        body: "I am interested in how transformer-based perception modules suffer from memory bandwidth and locality bottlenecks on edge devices such as Jetson-class platforms.",
      },
      {
        title: "Quantization and Operator Fusion",
        body: "Rather than treating quantization and fusion as isolated stages, I want to study them as a shared search space shaped by instruction-level and hardware-level constraints.",
      },
      {
        title: "Runtime Scheduling",
        body: "I care about how runtime policies, especially CPU-GPU coordination and dynamic scheduling, affect deterministic inference behavior in resource-constrained systems.",
      },
    ],
    agendaTitle: "Current Agenda",
    agenda: [
      "Hardware-aware co-optimization of quantization and runtime scheduling",
      "Efficient inference for embodied AI and vision agents on edge devices",
      "Bridging the semantic gap between model abstractions and low-level execution",
    ],
    outputsTitle: "Outputs and Materials",
    outputs: [
      "One manuscript in preparation on multimodal video captioning",
      "Research proposal on hardware-aware AI systems optimization",
      "Project portfolio spanning CUDA, RAG systems, and multimodal inference",
    ],
    asideTitle: "Research Overview",
    asideBody:
      "This page captures the current technical direction behind the site: efficient inference, system optimization, and hardware-aware execution.",
  },
  zh: {
    heroLabel: "研究",
    title: "研究方向",
    intro:
      "我当前的研究方向聚焦高效 AI 推理，尤其关注模型层选择如何与编译优化、运行时策略以及底层硬件现实相互耦合。",
    themes: [
      {
        title: "边缘推理中的 Memory Wall",
        body: "我关注 Transformer 类感知模块在 Jetson 等边缘设备上的访存瓶颈、带宽限制与数据局部性问题。",
      },
      {
        title: "量化与算子融合",
        body: "我希望不再把量化和融合视作彼此独立的步骤，而是把它们看作受到指令级和硬件级约束共同影响的联合搜索空间。",
      },
      {
        title: "运行时调度",
        body: "我关注 CPU-GPU 协同和动态调度策略如何影响资源受限系统中的确定性推理行为。",
      },
    ],
    agendaTitle: "当前研究主轴",
    agenda: [
      "面向量化与运行时调度的硬件感知协同优化",
      "面向 embodied AI 与视觉代理的边缘高效推理",
      "缩小模型抽象与底层执行之间的语义鸿沟",
    ],
    outputsTitle: "研究产出与材料",
    outputs: [
      "一篇多模态视频描述方向论文正在准备中",
      "一份关于硬件感知 AI 系统优化的研究计划",
      "涵盖 CUDA、RAG 系统与多模态推理的项目组合",
    ],
    asideTitle: "方向概览",
    asideBody:
      "这里更集中地展示我在高效推理、系统优化和硬件执行层面的关注点，而不是做额外的身份说明。",
  },
} as const;

export const projectPageContent = {
  en: {
    heroLabel: "Projects",
    title: "Selected Projects",
    intro:
      "A selected set of projects spanning CUDA optimization, multimodal AI, code intelligence, and systems tooling.",
    asideTitle: "Project Lens",
    asideBody:
      "These projects are organized to show the progression from model understanding to system optimization and hardware-aware execution.",
    items: [
      {
        title: "CUDA GEMM Optimization and Architectural Analysis",
        period: "Mar 2026",
        role: "Independent Researcher",
        summary:
          "Implemented and systematically optimized GEMM kernels while studying how memory hierarchy and arithmetic intensity shape end-to-end execution performance.",
        bullets: [
          "Used 2D block tiling and shared memory to improve data reuse within a thread block.",
          "Applied register blocking to raise arithmetic intensity from 7.2 to 14.1 FLOPs/Byte.",
          "Used Nsight Compute to confirm major DRAM traffic reduction and 3.57x overall speedup.",
        ],
        repoHref: "https://github.com/Qixiaomao/CUDA-GEMM-Optimization-Journey",
      },
      {
        title: "LLM + RAG Code Architecture Analysis System",
        period: "Mar 2026",
        role: "Independent Developer",
        summary:
          "Built a repository analysis tool that combines LLM reasoning, AST-based chunking, vector retrieval, and CUDA-aware parsing for structured source code understanding.",
        bullets: [
          "Automated GitHub repository ingestion and function-level source chunking.",
          "Added CUDA-specific parsing rules to inspect kernels, shared memory, and memory access patterns.",
          "Used vector search and LLM inference for cross-file reasoning and documentation generation.",
        ],
        repoHref: "https://github.com/Qixiaomao/GitHub-Project-Analyzer",
      },
      {
        title: "Multimodal Video Captioning Research",
        period: "Aug 2025 - Dec 2025",
        role: "Core Researcher",
        summary:
          "Designed a multimodal system that translates video information into structured text while exploring efficient deployment behavior.",
        bullets: [
          "Used a ViT-style visual encoder with patch projection and positional embeddings.",
          "Built transformer-based cross-modal alignment between visual and textual representations.",
          "Prepared the work for manuscript submission and connected model design to system efficiency concerns.",
        ],
        repoHref: "https://github.com/Qixiaomao/video-caption-algorithm",
      },
      {
        title: "Transformer-based LLM from Scratch",
        period: "Jul 2025 - Aug 2025",
        role: "Independent Developer",
        summary:
          "Built a small generative language model from scratch to better understand tokenization, attention, pre-training, and fine-tuning dynamics.",
        bullets: [
          "Implemented data preprocessing and tokenizer pipeline independently.",
          "Completed pre-training and domain-specific fine-tuning workflow.",
          "Focused on training strategy, memory control, and domain generation quality.",
        ],
        repoHref: "https://github.com/Qixiaomao/LLMs-Generate-text-seven",
      },
      {
        title: "Etshark Packet Analysis System",
        period: "Feb 2025 - May 2025",
        role: "Independent Developer",
        summary:
          "Developed a full-stack packet capture and protocol analysis tool inspired by tshark, with C++ backend parsing and a localized frontend experience.",
        bullets: [
          "Implemented offline and online packet parsing with protocol tree translation.",
          "Integrated C++ backend with Electron and JavaScript packaging workflow.",
          "Improved accessibility for Chinese-speaking developers through interface localization.",
        ],
      },
    ] satisfies readonly ProjectItem[],
  },
  zh: {
    heroLabel: "项目",
    title: "代表项目",
    intro:
      "这里整理了我在 CUDA 优化、多模态 AI、代码智能和系统工具方面的代表性工作。",
    asideTitle: "项目概览",
    asideBody:
      "这些项目主要展示我如何从模型理解逐步延伸到系统优化与硬件执行层面的实现能力。",
    items: [
      {
        title: "CUDA GEMM 性能优化与体系结构分析",
        period: "2026 年 3 月",
        role: "独立研究者",
        summary:
          "围绕 GEMM 内核实现与系统化优化，研究内存层次结构与算术强度如何共同影响整体执行性能。",
        bullets: [
          "使用二维分块与共享内存提升线程块内部的数据复用率。",
          "通过寄存器分块把算术强度从 7.2 提升到 14.1 FLOPs/Byte。",
          "借助 Nsight Compute 验证 DRAM 流量下降并实现 3.57 倍整体加速。",
        ],
        repoHref: "https://github.com/Qixiaomao/CUDA-GEMM-Optimization-Journey",
      },
      {
        title: "基于 LLM 与 RAG 的代码架构分析系统",
        period: "2026 年 3 月",
        role: "独立开发者",
        summary:
          "构建了一个结合 LLM 推理、AST 切块、向量检索与 CUDA 专项解析的仓库分析工具，用于结构化理解源码。",
        bullets: [
          "实现 GitHub 仓库自动化拉取和函数级源码切块。",
          "增加了对 CUDA kernel、共享内存和访存模式的专项解析规则。",
          "利用向量检索与大模型推理实现跨文件依赖分析与文档生成。",
        ],
        repoHref: "https://github.com/Qixiaomao/GitHub-Project-Analyzer",
      },
      {
        title: "多模态视频描述研究",
        period: "2025 年 8 月 - 12 月",
        role: "核心研究者",
        summary:
          "设计了一个将视频信息转化为结构化文本的多模态系统，同时关注其部署效率与系统行为。",
        bullets: [
          "采用 ViT 风格视觉编码器处理视频帧特征。",
          "构建了基于 Transformer 的跨模态语义对齐机制。",
          "推进论文准备工作，并将模型设计与系统效率问题连接起来。",
        ],
        repoHref: "https://github.com/Qixiaomao/video-caption-algorithm",
      },
      {
        title: "从零实现 Transformer 文本大模型",
        period: "2025 年 7 月 - 8 月",
        role: "独立开发者",
        summary:
          "从零构建小型生成式语言模型，以深入理解 tokenizer、attention、预训练与微调流程。",
        bullets: [
          "独立实现数据预处理和 tokenizer 管道。",
          "完成预训练与垂直场景微调流程。",
          "重点关注训练策略、显存控制和垂直领域生成质量。",
        ],
        repoHref: "https://github.com/Qixiaomao/LLMs-Generate-text-seven",
      },
      {
        title: "Etshark 网络协议抓包解析系统",
        period: "2025 年 2 月 - 5 月",
        role: "独立开发者",
        summary:
          "开发了一套对标 tshark 思路的全栈抓包与协议解析工具，以 C++ 负责底层解析，并强化本地化体验。",
        bullets: [
          "实现离线与在线数据包解析以及协议树翻译。",
          "完成 C++ 后端与 Electron / JavaScript 打包流程整合。",
          "通过中文界面优化提升国内开发者的使用体验。",
        ],
      },
    ] satisfies readonly ProjectItem[],
  },
} as const;

export const resumePageContent = {
  en: {
    heroLabel: "Resume",
    title: "Resume Overview",
    intro:
      "A structured summary of my education, research, engineering experience, and technical profile.",
    asideTitle: "Resume Overview",
    asideBody:
      "This page provides a more formal and structured view of my background for both hiring teams and technical evaluators.",
    sections: [
      {
        title: "Education",
        items: [
          "INTI International University, Master of Information Technology, Jan 2025 - Jul 2026 (expected), CAP 3.7/4.0 with distinction",
          "Hezhou University, Bachelor of Internet of Things Engineering, Sep 2015 - Jun 2019",
        ],
      },
      {
        title: "Research and Technical Direction",
        items: [
          "Research interests: multimodal models, efficient inference, AI systems infrastructure, and hardware-aware optimization",
          "Publication in preparation: multimodal video captioning system based on ViT and GPT-2",
          "Current long-term focus includes machine learning systems, GPU programming, and deployment optimization",
        ],
      },
      {
        title: "Engineering Experience",
        items: [
          "Data engineering and automation work using Python, ETL pipelines, OCR correction, and Docker-enabled workflows",
          "Earlier experience in systems, networking, NAS deployment, and operational infrastructure maintenance",
          "Hands-on project work across CUDA, C++, RAG systems, and full-stack tooling",
        ],
      },
      {
        title: "Technical Skills",
        items: [
          "Languages: Python, C++, C, JavaScript",
          "AI and systems: PyTorch, CUDA, profiling, RAG, AST processing, performance analysis",
          "Engineering tools: Docker, Git, Pandas, MySQL, networking fundamentals, Linux and CSAPP-oriented systems study",
        ],
      },
    ],
  },
  zh: {
    heroLabel: "简历",
    title: "简历概览",
    intro:
      "以结构化方式概览我的教育背景、技术方向、工程经历和能力画像。",
    asideTitle: "简历概览",
    asideBody:
      "这一页提供更正式、结构化的背景信息，适合招聘方和技术团队快速了解我的教育、项目与工程能力。",
    sections: [
      {
        title: "教育经历",
        items: [
          "INTI 国际大学，信息技术硕士，2025 年 1 月至 2026 年 7 月（预计），CAP 3.7/4.0，Distinction",
          "贺州学院，物联网工程学士，2015 年 9 月至 2019 年 6 月",
        ],
      },
      {
        title: "研究与技术方向",
        items: [
          "长期关注多模态模型、高效推理、机器学习系统与硬件感知优化",
          "正在准备一篇基于 ViT 与 GPT-2 的多模态视频描述论文",
          "当前更聚焦 MLSys、GPU 编程、底层算子优化与 AI 部署方向",
        ],
      },
      {
        title: "工程经历",
        items: [
          "具有 Python、ETL 流水线、OCR 修正和 Docker 化数据工程经验",
          "早期积累了系统、网络、NAS 部署和运维保障经验",
          "在 CUDA、C++、RAG 系统和全栈工具构建方面有持续实践",
        ],
      },
      {
        title: "技术能力",
        items: [
          "编程语言：Python、C++、C、JavaScript",
          "AI 与系统：PyTorch、CUDA、profiling、RAG、AST 处理、性能分析",
          "工程工具：Docker、Git、Pandas、MySQL、网络基础、Linux 与 CSAPP 方向系统学习",
        ],
      },
    ],
  },
} as const;


