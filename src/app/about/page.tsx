import type { Metadata } from "next";
import { SectionPage } from "@/components/SectionPage";
import { Terminal } from "@/components/Terminal";
import { ProfileLinks } from "@/components/ProfileLinks";
import { profile } from "@/data/site";

export const metadata: Metadata = { title: "About — Lucas Huang" };

export default function AboutPage() {
  return (
    <SectionPage title="About" description={profile.subtitle} pose="sit">
      <div className="about-grid">
        <div className="about-copy">
          <h2>Curiosity, systems, and a calmer life.</h2>
          <p>{profile.about}</p>
          <section id="cv" className="cv-overview" aria-labelledby="cv-title">
            <h3 id="cv-title">CV at a glance</h3>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>{profile.education}</dd>
              </div>
              <div>
                <dt>Current role</dt>
                <dd>{profile.currentRole}</dd>
              </div>
            </dl>
          </section>
          <ProfileLinks />
        </div>
        <Terminal />
      </div>
    </SectionPage>
  );
}
