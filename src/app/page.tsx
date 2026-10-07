import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  GraduationCap,
  Coffee,
  FileText,
} from "lucide-react";
import { PixelCat } from "@/components/PixelCat";
import { Terminal } from "@/components/Terminal";
import { HeroWorkspace } from "@/components/HeroWorkspace";
import { ProfileLinks } from "@/components/ProfileLinks";
import { UpdatesList } from "@/components/UpdatesList";
import { profile, portals } from "@/data/site";

export default function Home() {
  return (
    <main id="content" tabIndex={-1}>
      <section className="hero" aria-labelledby="intro-title">
        <Image
          className="avatar"
          src={profile.avatar}
          width={174}
          height={174}
          alt={`${profile.name} avatar`}
          preload
        />
        <div className="hero-copy">
          <h1 id="intro-title">{profile.name}</h1>
          <p className="subtitle">{profile.subtitle}</p>
          <p className="lead">{profile.description}</p>
          <div className="facts">
            <span>
              <MapPin aria-hidden="true" />
              {profile.location}
            </span>
            <span>
              <GraduationCap aria-hidden="true" />
              {profile.education}
            </span>
            <span>
              <Coffee aria-hidden="true" />
              Currently: {profile.currentRole}
            </span>
          </div>
          <ProfileLinks />
        </div>
        <div className="hero-art">
          <HeroWorkspace />
        </div>
      </section>

      <div className="quote">
        <blockquote>“ {profile.quote} ”</blockquote>
        <small>
          <span aria-hidden="true">●</span> Always a work in progress ...
        </small>
      </div>

      <section
        className="portal-grid"
        aria-label="Explore research, projects and writing"
      >
        {portals.map((portal) => (
          <Link className="portal-card" href={portal.href} key={portal.title}>
            <div className="portal-sprite">
              <PixelCat pose={portal.pose} />
            </div>
            <h2>{portal.title}</h2>
            <p>{portal.description}</p>
            <ArrowRight className="portal-arrow" aria-hidden="true" />
          </Link>
        ))}
      </section>

      <section className="activity-grid" aria-labelledby="updates-title">
        <div className="activity-copy">
          <h2 id="updates-title">
            <FileText aria-hidden="true" />
            Recent Updates
          </h2>
          <UpdatesList />
          <Link className="text-link" href="/writing">
            View all updates <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <Terminal />
      </section>
    </main>
  );
}
