import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { navItems, type Locale } from "@/lib/content";

function getGreeting(locale: Locale) {
  return locale === "en" ? "Hi, I'm Lucas." : "你好，我是黄奕铭。";
}

export function SiteHeader({ locale, pathname }: { locale: Locale; pathname: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-[90]">
      <div className="page-shell pt-3 md:pt-5">
        <div className="md:hidden">
          <details className="group mobile-nav relative">
            <summary className="flex list-none items-center justify-between rounded-xl border border-white/12 bg-[#0b1119] px-4 py-3 shadow-lg marker:content-none">
              <span className="pr-3 text-sm font-semibold text-white">{getGreeting(locale)}</span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/12 bg-white/5 text-white">
                <Menu className="h-5 w-5 group-open:hidden" />
                <X className="hidden h-5 w-5 group-open:block" />
              </span>
            </summary>

            <div className="mt-2 rounded-2xl border border-white/12 bg-[#0b1119] p-4 shadow-2xl">
              <div className="mb-4">
                <LanguageSwitcher locale={locale} pathname={pathname} />
              </div>

              <nav className="grid gap-2.5">
                {navItems[locale].map((item) => {
                  const active =
                    item.href === `/${locale}`
                      ? pathname === `/${locale}`
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-base font-semibold text-amber-300"
                          : "rounded-xl border border-transparent px-4 py-4 text-base font-medium text-white/85"
                      }
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </details>
        </div>

        <div className="hidden items-center justify-between gap-3 rounded-[1.35rem] border border-white/10 bg-black/28 px-5 py-3 shadow-2xl backdrop-blur-xl md:flex">
          <Link
            href={`/${locale}`}
            className="shrink-0 text-base font-semibold tracking-[-0.02em] text-white transition hover:text-amber-200 md:text-[1.2rem]"
          >
            {getGreeting(locale)}
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems[locale].map((item) => {
              const active =
                item.href === `/${locale}`
                  ? pathname === `/${locale}`
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300"
                      : "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/68 transition hover:bg-white/5 hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 md:block">
            <LanguageSwitcher locale={locale} pathname={pathname} />
          </div>
        </div>
      </div>
    </header>
  );
}
