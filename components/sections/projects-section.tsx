import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeContent, type Locale } from "@/lib/content";

export function ProjectsSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const kicker = locale === "zh" ? "作品" : "Work";
  const ctaLabel = locale === "zh" ? "查看完整项目" : "View Full Projects";

  return (
    <section className="page-shell py-10 md:py-14">
      <div className="section-header-grid mb-8 md:mb-12">
        <div className="max-w-3xl">
          <p className="section-kicker">{kicker}</p>
          <h3 className="mt-4 text-2xl text-white sm:text-3xl md:text-5xl">{content.projectsTitle}</h3>
          <p className="mt-4 text-[15px] leading-7 text-white/70 sm:text-base md:text-lg md:leading-8">{content.projectsIntro}</p>
        </div>
        <div className="hidden md:flex md:items-end md:justify-end">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78 transition hover:border-amber-300/40 hover:text-white"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {content.projects.map((project, index) => (
          <article key={project.title} className="panel card-hover rounded-[1.5rem] p-5 md:rounded-[1.75rem] md:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">0{index + 1}</p>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/28">AI Systems</span>
            </div>
            <h4 className="mt-4 text-xl text-white md:text-2xl">{project.title}</h4>
            <p className="mt-4 text-[15px] leading-7 text-white/68 md:text-base">{project.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 md:hidden">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78"
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
