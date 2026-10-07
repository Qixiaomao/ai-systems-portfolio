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
          <h2>Working on control for multi-agent systems.</h2>
          <p>{profile.researchFocus}</p>
          <section id="cv" className="cv-overview" aria-labelledby="cv-title">
            <h3 id="cv-title">CV at a glance</h3>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  {profile.education}
                  <small>{profile.educationSchool}</small>
                </dd>
              </div>
              <div>
                <dt>Current role</dt>
                <dd>
                  Research Assistant
                  <small>{profile.organization}</small>
                </dd>
              </div>
            </dl>
          </section>
          <p>{profile.about}</p>
          <ProfileLinks />
        </div>
        <Terminal />
      </div>
    </SectionPage>
  );
}
