import Link from "next/link";
import { Languages } from "lucide-react";
import { type Locale, locales } from "@/lib/content";

export function LanguageSwitcher({ locale, pathname }: { locale: Locale; pathname: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
        <Languages className="h-3.5 w-3.5" />
      </span>
      {locales.map((value) => {
        const href = pathname.replace(`/${locale}`, `/${value}`);
        const active = value === locale;

        return (
          <Link
            key={value}
            href={href}
            replace
            scroll={false}
            prefetch
            className={
              active
                ? "rounded-full bg-white/10 px-2 py-1 text-xs font-semibold tracking-[0.14em] text-amber-300"
                : "rounded-full px-2 py-1 text-xs font-semibold tracking-[0.14em] text-white/58 transition hover:bg-white/5 hover:text-white"
            }
          >
            {value === "en" ? "EN" : "中文"}
          </Link>
        );
      })}
    </div>
  );
}
