import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PixelCat } from "./PixelCat";
import type { ReactNode } from "react";

export function SectionPage({
  title,
  description,
  pose,
  children,
}: {
  title: string;
  description: string;
  pose: "read" | "laptop" | "sleep" | "sit";
  children: ReactNode;
}) {
  return (
    <main id="content" tabIndex={-1} className="section-page">
      <Link href="/" className="back-link">
        <ArrowLeft aria-hidden="true" /> Back home
      </Link>
      <div className="page-intro">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <PixelCat pose={pose} />
      </div>
      {children}
    </main>
  );
}
