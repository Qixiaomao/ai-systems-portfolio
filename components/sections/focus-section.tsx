import Link from "next/link";
import { homeContent, type Locale } from "@/lib/content";

export function FocusSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const kicker = locale === "zh" ? "聚焦" : "Focus";
  const aside =
    locale === "zh"
      ? "从推理效率、编译优化到硬件现实，我更关心系统整体如何落地。"
      : "From inference efficiency to compiler passes and hardware realities, I focus on how systems actually land.";

  return (
    <section className="page-shell py-10 md:py-14">
      <div className="section-header-grid mb-8 md:mb-12">
        <div className="max-w-3xl">
          <p className="section-kicker">{kicker}</p>
          <h3 className="mt-4 text-2xl text-white sm:text-3xl md:text-5xl">{content.focusTitle}</h3>
          <p className="mt-4 text-[15px] leading-7 text-white/70 sm:text-base md:text-lg md:leading-8">{content.focusIntro}</p>
        </div>
        <div className="section-aside hidden md:block">
          <p>{aside}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {content.focusCards.map((card, index) => (
          <article key={card.title} className="panel card-hover rounded-[1.5rem] p-5 md:rounded-[1.75rem] md:p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/38">0{index + 1}</p>
            <h4 className="mt-4 text-xl text-white md:text-2xl">{card.title}</h4>
            <p className="mt-4 text-[15px] leading-7 text-white/68 md:text-base">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
