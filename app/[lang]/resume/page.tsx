import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { PageHero } from "@/components/sections/page-hero";
import { locales, resumePageContent, type Locale, uiText } from "@/lib/content";

export default async function ResumePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  if (!locales.includes(lang)) notFound();
  const content = resumePageContent[lang];
  const copy = uiText[lang];

  return (
    <main>
      <SiteHeader locale={lang} pathname={`/${lang}/resume`} />
      <PageHero
        locale={lang}
        eyebrow={content.heroLabel}
        title={content.title}
        intro={content.intro}
        asideTitle={content.asideTitle}
        asideBody={content.asideBody}
        chips={content.sections.map((section) => section.title)}
      />

      <section className="page-shell py-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {content.sections.map((block) => (
            <article key={block.title} className="panel rounded-[1.5rem] p-5 md:rounded-[1.75rem] md:p-6">
              <p className="section-kicker">{copy.section}</p>
              <h2 className="mt-4 text-[1.35rem] leading-tight text-white md:text-2xl">{block.title}</h2>
              <ul className="mt-5 space-y-3.5 text-[15px] text-white/72 md:space-y-4 md:text-base">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
