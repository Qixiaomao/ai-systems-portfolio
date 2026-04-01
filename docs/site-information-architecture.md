# Site Information Architecture

## Positioning

Primary title:

`AI Systems Researcher and Engineer`

Positioning statement:

I study and build efficient AI systems across the stack, from model behavior and inference pipelines to compiler/runtime optimization and hardware-aware execution.

Alternative short expression:

Research and engineering for efficient AI systems, spanning models, inference systems, compiler/runtime layers, and hardware-aware execution.

## Audience

Primary audiences:

- PhD supervisors and research groups
- Hiring managers and technical interviewers
- Collaborators who want to evaluate research depth and engineering ability

What each audience should understand quickly:

- I have a clear long-term research direction in AI systems
- I can translate research ideas into working systems and tools
- My background is not only model-facing, but also system- and hardware-aware

## Site Goals

The site should do four jobs:

1. Establish a clear identity as an AI systems researcher-engineer.
2. Present a coherent research narrative across CV, resume, and proposal materials.
3. Showcase selected projects as evidence of both research thinking and implementation ability.
4. Provide structured access to public-safe materials, GitHub, blog, and future publications.

## Top-Level Navigation

Recommended top-level routes:

- `Home`
- `Research`
- `Projects`
- `Resume`

Optional future route:

- `Writing`

Reason for excluding `Writing` from v1 navigation:

Your blog is already a strong asset, but the first version should focus on unifying your identity. Writing can be added once the core narrative is stable.

## Language Strategy

Recommended v1 language behavior:

- Default to English for first-time visitors
- Provide a visible language switcher in the top navigation
- Mirror the main content in both English and Chinese on key pages

Why this works:

- English supports PhD applications and international research visibility
- Chinese supports local recruiters, collaborators, and easier self-expression
- A language switcher makes the site feel intentional rather than like a translated afterthought

Recommended v1 translation scope:

- Homepage
- Research page
- Resume page
- Navigation and CTA labels

Items that can stay English-first in v1:

- Project technical details
- Paper titles
- Some external links and publication metadata

## Page Architecture

### 1. Home

Purpose:

Create a fast first impression and communicate your long-term direction in under 30 seconds.

Recommended sections:

1. Hero
2. Research Focus
3. Selected Projects
4. Evidence / Highlights
5. Contact / Links

What this page must communicate:

- You are not a generic AI candidate
- Your core interest is efficient AI systems
- Your work sits at the intersection of models, systems, and hardware

### 2. Research

Purpose:

Translate your research proposal and academic direction into a concise, readable research profile.

Recommended sections:

1. Research Overview
2. Current Interests
3. Research Questions
4. Ongoing / Proposed Work
5. Publications and Manuscripts
6. Research Materials

Content sources:

- RP title and abstract
- CV publication section
- Resume self-assessment and project themes

Key themes to foreground:

- Efficient inference
- Memory wall bottlenecks
- Quantization and operator fusion
- Runtime scheduling
- Edge deployment
- AI systems co-optimization

### 3. Projects

Purpose:

Present concrete proof of technical depth.

Recommended structure:

- Featured projects first
- Each project gets a consistent card or detail template

Recommended project order:

1. CUDA GEMM optimization
2. LLM + RAG code architecture analysis system
3. Multi-modal video captioning system
4. Transformer-based LLM from scratch
5. Etshark network packet analysis system

Project template:

- Problem
- Why it matters
- What I built
- Technical stack
- Key implementation details
- Results / metrics
- Links

Why this order:

The first two projects best support the AI systems identity. The rest broaden your profile without diluting the narrative.

### 4. Resume

Purpose:

Provide a formal, structured profile for academic and hiring evaluation.

Recommended sections:

1. Snapshot
2. Education
3. Research Experience
4. Work Experience
5. Skills
6. Honors / Publications / Links
7. Public Materials and External Links

Recommended public materials:

- GitHub profile
- Technical blog
- Contact email
- WeChat technical channel / QR entry

Private materials such as resume PDFs or research plans should be shared manually when needed, rather than exposed directly in `public/`.

## Content Hierarchy

The site should prioritize content in this order:

1. Research direction
2. Selected technical evidence
3. Formal background
4. External materials and links

This prevents the homepage from feeling like a long chronological resume.

## Narrative Spine

The whole site should follow one narrative:

From model understanding to system optimization to hardware-aware execution.

This lets different materials fit naturally:

- Resume proves engineering depth
- CV proves academic intent
- RP proves research direction
- Projects prove execution ability

## Recommended Content Model

Suggested content folders for a future Next.js build:

```text
content/
  en/
    profile/
    research/
    projects/
    resume/
  zh/
    profile/
    research/
    projects/
    resume/
```

## Visual Translation Rules

The visual system should feel like:

- research lab portfolio
- systems engineering dossier
- modern but serious technical identity

It should not feel like:

- startup landing page
- generic frontend portfolio
- overly animated product showcase

Design principles:

1. Strong hero typography with restrained supporting motion
2. Dense but readable information blocks
3. Clear hierarchy between research themes and supporting experience
4. Subtle systems-inspired motifs such as grids, traces, pipelines, and technical annotations
5. Dark visual base with controlled highlight color usage

## V1 Scope

Recommended v1 deliverables:

- One polished bilingual homepage
- One structured bilingual research page
- One selected projects page
- One formal bilingual resume page

Anything beyond this should be deferred unless it directly improves narrative clarity.


