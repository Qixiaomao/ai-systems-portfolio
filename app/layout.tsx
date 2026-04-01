import type { Metadata } from "next";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yiming Huang | AI Systems Researcher and Engineer",
  description: "Bilingual portfolio for Yiming Huang, focused on AI systems, efficient inference, CUDA, and hardware-aware execution.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  themeColor: "#0b1220",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
