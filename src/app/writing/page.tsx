import type { Metadata } from "next";
import { SectionPage } from "@/components/SectionPage";
import { UpdatesList } from "@/components/UpdatesList";
import { research } from "@/data/site";

export const metadata: Metadata = { title: "Writing — Lucas Huang" };

export default function WritingPage() {
  return (
    <SectionPage
      title="Writing"
      description="Selected essays, observations, and research in progress."
      pose="sleep"
    >
      <div className="writing-archive">
        <UpdatesList />
      </div>
      <section
        id="research"
        className="research-notes"
        aria-labelledby="research-title"
      >
        <h2 id="research-title">Research in progress</h2>
        <p>Questions and directions I am currently exploring.</p>
        <div className="detail-list">
          {research.map((topic, index) => (
            <article key={topic.title}>
              <span className="entry-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <div className="tags">
                  {topic.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SectionPage>
  );
}
