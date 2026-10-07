import Link from "next/link";
import { LucasLogo } from "./LucasLogo";
import { ProfileLinks } from "./ProfileLinks";
import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" aria-label="Lucas home">
        <LucasLogo compact />
      </Link>
      <p>{profile.tagline}</p>
      <ProfileLinks compact />
    </footer>
  );
}
