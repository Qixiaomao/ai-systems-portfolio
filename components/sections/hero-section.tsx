import { ButtonLink } from "@/components/ui/button";
import { homeContent, type Locale } from "@/lib/content";

export function HeroSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const isZh = locale === "zh";
  const heroTopLabel = isZh ? "研究主页 / 研究型工程师" : "Research Portfolio / Systems-Oriented Builder";
  const liveLabel = isZh ? "当前主线：AI Systems" : "Current Track: AI Systems";
  const cardTitle = isZh ? "研究型工程师，不只是做模型。" : "Beyond model usage, toward systems thinking.";
  const cardBody = isZh
    ? "我更关注模型如何真正运行起来，包括推理效率、访存行为、运行时调度，以及模型与硬件之间的实际耦合。"
    : "I am interested in how AI models actually run in practice, including inference efficiency, memory behavior, runtime scheduling, and the coupling between models and hardware.";
  const primaryWord = "AI";
  const secondaryWord = "SYSTEMS";

  return (
    <section className="hero-shell surface-grid">
      <div className="hero-media" />
      <div className="relative z-10 page-shell flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:min-h-screen md:pb-16 md:pt-28">
        <div className="absolute right-0 top-24 hidden rounded-xl border border-white/10 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90 shadow-xl backdrop-blur-md md:flex md:items-center md:gap-3">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          {liveLabel}
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/68 sm:text-xs md:tracking-[0.3em]">
              <span className="h-px w-7 bg-white/45 md:w-8" />
              <span className="max-w-[26ch] leading-4 sm:max-w-none">{heroTopLabel}</span>
            </div>

            <h1 className="hero-wordmark max-w-5xl font-semibold text-white">
              <span className="block text-[20vw] sm:text-[18vw] md:text-[10rem] lg:text-[11rem]">{primaryWord}</span>
              <div className="-mt-1 flex items-baseline gap-2 sm:gap-3 md:-mt-6 md:gap-6">
                <span className="hero-accent text-[15vw] sm:text-[12vw] md:text-[9rem] lg:text-[10rem]">&amp;</span>
                <span className="text-[11vw] sm:text-[8.5vw] md:text-[6.2rem] lg:text-[7.8rem]">{secondaryWord}</span>
              </div>
            </h1>

            <div className="mt-8 max-w-[34rem] md:mt-8 md:max-w-3xl">
              <p className="max-w-[30ch] text-[11px] uppercase tracking-[0.18em] text-white/56 sm:max-w-none sm:text-xs sm:tracking-[0.24em] md:text-sm md:tracking-[0.28em]">
                {content.eyebrow}
              </p>
              <h2 className="mt-5 max-w-[16ch] text-[1.8rem] leading-[1.08] text-white/95 sm:max-w-none sm:text-2xl md:max-w-[18ch] md:text-[3rem] md:leading-[1.02]">
                {content.title}
              </h2>
              <p className="mt-6 max-w-[32ch] text-[1.02rem] leading-[1.95] text-white/76 sm:max-w-[36ch] sm:text-base sm:leading-8 md:mt-6 md:max-w-[36rem] md:text-[1.08rem] md:leading-8">
                {content.intro}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5 md:gap-3">
              {content.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3 md:mt-10 md:gap-4">
              <ButtonLink href={content.ctas[0].href}>{content.ctas[0].label}</ButtonLink>
              <ButtonLink href={content.ctas[1].href} variant="outline">
                {content.ctas[1].label}
              </ButtonLink>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pb-4">
            <div className="glass-card overflow-hidden rounded-[1.5rem] p-5 md:rounded-[1.8rem] md:p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45 md:text-sm md:tracking-[0.24em]">{cardTitle}</p>
              <p className="mt-4 text-base leading-7 text-white/92 md:text-lg md:leading-8">{cardBody}</p>
              <p className="mt-6 text-sm leading-7 text-white/64 md:mt-6">{content.support}</p>

              <div className="soft-divider mt-7 md:mt-8" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-8">
                {content.metrics.map((metric) => (
                  <div key={metric.label} className="metric">
                    <span className="metric-value">{metric.value}</span>
                    <span className="mt-2 block text-sm leading-6 text-white/58">{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-b border-white/20 pb-3 text-sm text-white/84 md:mt-8">
                <span>{isZh ? "查看更多研究与项目" : "Explore research and selected work"}</span>
                <span className="text-white/45">01</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 flex justify-center md:mt-6">
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/42 md:tracking-[0.25em]">
            <span>{isZh ? "向下滚动" : "Scroll"}</span>
            <span className="h-10 w-px bg-gradient-to-b from-white to-transparent md:h-12" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-xs md:tracking-[0.18em]">
          <span>{content.name}</span>
          <span>{isZh ? "研究与工程并重" : "Research + Engineering"}</span>
          <span>{isZh ? "模型到底层硬件" : "Model to Hardware"}</span>
        </div>
      </div>
    </section>
  );
}
