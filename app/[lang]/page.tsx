import { notFound } from "next/navigation";
import { BackgroundSection } from "@/components/sections/background-section";
import { FocusSection } from "@/components/sections/focus-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MaterialsSection } from "@/components/sections/materials-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/layout/site-header";
import { locales, type Locale } from "@/lib/content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  if (!locales.includes(lang)) {
    notFound();
  }

  return (
    <main>
      <SiteHeader locale={lang} pathname={`/${lang}`} />
      <HeroSection locale={lang} />
      <FocusSection locale={lang} />
      <ProjectsSection locale={lang} />
      <BackgroundSection locale={lang} />
      <MaterialsSection locale={lang} />
    </main>
  );
}
