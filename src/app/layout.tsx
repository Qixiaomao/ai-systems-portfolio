import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { profile } from "@/data/site";
import "@fontsource/comic-mono/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.title,
  description: profile.description,
  openGraph: {
    title: profile.title,
    description: profile.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: profile.title,
    description: profile.description,
  },
};
const initializeTheme =
  "try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')==='dark'?'dark':'light'}catch{document.documentElement.dataset.theme='light'}";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      </head>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <div id="top" className="shell">
          <Header />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
