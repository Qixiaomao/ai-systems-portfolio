import { homeContent, type Locale } from "@/lib/content";

export function BackgroundSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const kicker = locale === "zh" ? "背景" : "Profile";
  const listTitle = locale === "zh" ? "能力脉络" : "Capability Thread";

  return (
    <section className="page-shell py-10 md:py-14">
      <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
        <div className="panel rounded-[1.5rem] p-5 md:rounded-[1.75rem] md:p-6">
          <p className="section-kicker">{kicker}</p>
          <h3 className="mt-4 text-2xl text-white sm:text-3xl md:text-5xl">{content.backgroundTitle}</h3>
          <p className="mt-4 text-[15px] leading-7 text-white/70 sm:text-base md:text-lg md:leading-8">{content.backgroundIntro}</p>
        </div>
        <div className="panel rounded-[1.5rem] p-5 md:rounded-[1.75rem] md:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className="section-kicker">{listTitle}</p>
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/32">01-05</span>
          </div>
          <ul className="space-y-4 text-[15px] text-white/74 md:text-base">
            {content.backgroundPoints.map((point, index) => (
              <li key={point} className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/8 pt-4 leading-7 first:border-t-0 first:pt-0">
                <span className="text-[11px] uppercase tracking-[0.22em] text-amber-300/78">0{index + 1}</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
