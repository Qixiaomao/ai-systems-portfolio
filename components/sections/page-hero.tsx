import { type Locale } from "@/lib/content";

export function PageHero({
  eyebrow,
  title,
  intro,
  asideTitle,
  asideBody,
  chips,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  asideTitle: string;
  asideBody: string;
  chips: readonly string[];
}) {
  return (
    <section className="page-shell pt-20 md:pt-24">
      <div className="inner-hero-shell">
        <div className="inner-hero-media" />
        <div className="relative z-10 grid gap-6 px-5 py-14 sm:px-6 md:px-10 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-10">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-white/70 sm:text-xs md:mb-6 md:tracking-[0.3em]">
              <span className="h-px w-7 bg-white/55 md:w-8" />
              <span>{eyebrow}</span>
            </div>
            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:max-w-[14ch] md:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/78 sm:text-base md:mt-6 md:max-w-[42rem] md:text-lg md:leading-8">{intro}</p>
            <div className="mt-7 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">
              {chips.map((chip) => (
                <span key={chip} className="info-chip">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-[1.5rem] p-5 md:rounded-[1.75rem] md:p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45 md:text-sm md:tracking-[0.24em]">{asideTitle}</p>
            <p className="mt-4 text-base leading-7 text-white/92 md:text-lg md:leading-8">{asideBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
