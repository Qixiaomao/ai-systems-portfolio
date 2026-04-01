import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { PageHero } from "@/components/sections/page-hero";
import { locales, researchContent, type Locale, uiText } from "@/lib/content";

export default async function ResearchPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  if (!locales.includes(lang)) notFound();
  const content = researchContent[lang];
  const copy = uiText[lang];

  return (
    <main>
      <SiteHeader locale={lang} pathname={`/${lang}/research`} />
      <PageHero
        locale={lang}
        eyebrow={content.heroLabel}
        title={content.title}
        intro={content.intro}
        asideTitle={content.asideTitle}
        asideBody={content.asideBody}
        chips={content.agenda}
      />

      <section className="page-shell py-8 md:py-10">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
          {content.themes.map((theme) => (
            <article key={theme.title} className="panel rounded-[1.5rem] p-5 md:rounded-[1.75rem] md:p-6">
              <p className="section-kicker">{copy.theme}</p>
              <h2 className="mt-4 text-[1.35rem] leading-tight text-white md:text-2xl">{theme.title}</h2>
              <p className="mt-4 text-[15px] leading-7 text-white/68 md:text-base">{theme.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:mt-8 md:gap-6 lg:grid-cols-2">
          <article className="panel rounded-[1.5rem] p-5 md:rounded-[1.75rem] md:p-6">
            <p className="section-kicker">{copy.agenda}</p>
            <h2 className="mt-4 text-2xl text-white md:text-3xl">{content.agendaTitle}</h2>
            <ul className="mt-5 space-y-3.5 text-[15px] text-white/72 md:mt-6 md:space-y-4 md:text-base">
              {content.agenda.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="panel rounded-[1.5rem] p-5 md:rounded-[1.75rem] md:p-6">
            <p className="section-kicker">{copy.outputs}</p>
            <h2 className="mt-4 text-2xl text-white md:text-3xl">{content.outputsTitle}</h2>
            <ul className="mt-5 space-y-3.5 text-[15px] text-white/72 md:mt-6 md:space-y-4 md:text-base">
              {content.outputs.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
