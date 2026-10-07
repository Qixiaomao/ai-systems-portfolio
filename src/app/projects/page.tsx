import type { Metadata } from "next";
import { SectionPage } from "@/components/SectionPage";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Projects — Lucas Huang" };

export default function ProjectsPage() {
  return (
    <SectionPage
      title="Projects"
      description="From research prototypes to practical systems."
      pose="laptop"
    >
      <div className="detail-list">
        {projects.map((project, index) => (
          <article key={project.title}>
            <span className="entry-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <span className="entry-category">{project.meta}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.href && (
                <a className="text-link" href={project.href}>
                  Explore project ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}
