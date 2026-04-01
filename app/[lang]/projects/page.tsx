import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { PageHero } from "@/components/sections/page-hero";
import { locales, projectPageContent, type Locale, uiText } from "@/lib/content";

export default async function ProjectsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  if (!locales.includes(lang)) notFound();
  const content = projectPageContent[lang];
  const copy = uiText[lang];

  return (
    <main>
      <SiteHeader locale={lang} pathname={`/${lang}/projects`} />
      <PageHero
        locale={lang}
        eyebrow={content.heroLabel}
        title={content.title}
        intro={content.intro}
        asideTitle={content.asideTitle}
        asideBody={content.asideBody}
        chips={content.items.slice(0, 3).map((item) => item.role)}
      />

      <section className="page-shell py-8 md:py-10">
        <div className="space-y-4 md:space-y-6">
          {content.items.map((project, index) => (
            <article key={project.title} className="panel rounded-[1.5rem] p-5 md:rounded-[1.75rem] md:p-8">
              <div className="grid gap-5 md:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40 md:text-sm md:tracking-[0.2em]">
                    {copy.caseLabel} 0{index + 1}
                  </p>
                  {project.repoHref ? (
                    <Link
                      href={project.repoHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-4 inline-block rounded-xl outline-none transition focus-visible:ring-2 focus-visible:ring-amber-300/80"
                    >
                      <h2 className="text-[1.55rem] leading-tight text-white transition duration-200 group-hover:text-amber-300 group-hover:underline group-hover:decoration-amber-300/60 group-hover:underline-offset-6 group-focus-visible:text-amber-300 md:text-3xl">
                        {project.title}
                      </h2>
                    </Link>
                  ) : (
                    <h2 className="mt-4 text-[1.55rem] leading-tight text-white md:text-3xl">{project.title}</h2>
                  )}
                  <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-amber-300/80 md:mt-4 md:text-sm md:tracking-[0.15em]">
                    {project.role} / {project.period}
                  </p>
                  <p className="mt-5 text-[15px] leading-7 text-white/70 md:mt-6 md:text-base">{project.summary}</p>
                </div>
                <ul className="space-y-3.5 text-[15px] text-white/72 md:space-y-4 md:text-base">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
