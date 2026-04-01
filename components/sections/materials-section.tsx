import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { homeContent, type Locale, uiText } from "@/lib/content";

export function MaterialsSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const copy = uiText[locale];
  const modalItem = content.materials.find((item) => item.type === "modal");

  return (
    <section className="page-shell py-10 pb-16 md:py-14 md:pb-20">
      <div className="panel rounded-[1.6rem] p-5 md:rounded-[2rem] md:p-8">
        <div className="section-header-grid mb-8 md:mb-10">
          <div className="max-w-3xl">
            <p className="section-kicker">{copy.linksKicker}</p>
            <h3 className="mt-4 text-2xl text-white sm:text-3xl md:text-5xl">{content.materialsTitle}</h3>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/70 sm:text-base md:text-lg md:leading-8">{content.materialsIntro}</p>
          </div>
          <div className="section-aside hidden md:block">
            <p>{locale === "zh" ? "保留正式材料入口，也让技术输出有可见度。" : "Keep formal materials accessible while making technical output visible."}</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {content.materials
            .filter((item) => item.type === "link")
            .map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="material-link rounded-[1.1rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/78 transition hover:border-amber-300/40 hover:bg-white/8 md:rounded-[1.25rem]"
              >
                <span>{item.label}</span>
                <ExternalLink className="h-4 w-4 text-white/35 transition group-hover:text-amber-300/70" />
              </Link>
            ))}

          {modalItem ? (
            <details className="group rounded-[1.1rem] border border-white/10 bg-white/5 transition open:border-amber-300/35 open:bg-white/8 md:rounded-[1.25rem] md:col-span-2 xl:col-span-3">
              <summary className="cursor-pointer list-none px-4 py-4 text-sm text-white/78 marker:content-none">
                <div className="flex items-center justify-between gap-3">
                  <span>{modalItem.label}</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/35 group-open:text-amber-300/80">
                    {locale === "zh" ? "展开" : "Open"}
                  </span>
                </div>
              </summary>
              <div className="grid gap-6 border-t border-white/10 px-4 pb-4 pt-4 md:grid-cols-[0.9fr_1.1fr] md:items-start md:px-5 md:pb-5">
                <div>
                  <p className="section-kicker">WeChat</p>
                  <h4 className="mt-3 text-xl text-white md:text-2xl">{modalItem.title}</h4>
                  <p className="mt-3 text-[15px] leading-7 text-white/72 md:text-base">{modalItem.description}</p>
                  <p className="mt-4 text-sm leading-6 text-white/58">{modalItem.mobileHint}</p>
                </div>

                <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-white p-3 md:justify-self-end md:max-w-sm md:rounded-[1.5rem] md:p-4">
                  <Image
                    src={modalItem.imageSrc}
                    alt={modalItem.title}
                    width={640}
                    height={640}
                    className="h-auto w-full rounded-xl"
                    priority={false}
                  />
                </div>
              </div>
            </details>
          ) : null}
        </div>
      </div>
    </section>
  );
}
