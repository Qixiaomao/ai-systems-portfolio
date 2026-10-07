import type { Metadata } from "next";
import { SectionPage } from "@/components/SectionPage";
import { UpdatesList } from "@/components/UpdatesList";
import { research } from "@/data/site";
import Link from "next/link";
import { getWritingPosts } from "@/lib/writing";

export const metadata: Metadata = { title: "Writing — Lucas Huang" };

export default function WritingPage() {
  const posts = getWritingPosts();
  return (
    <SectionPage
      title="Writing"
      description="Selected essays, observations, and research in progress."
      pose="sleep"
    >
      <section className="writing-posts" aria-label="Published writing">
        {posts.map((post) => (
          <article className="writing-post" key={post.slug}>
            <time dateTime={post.date}>{post.date}</time>
            <h2>
              <Link href={`/writing/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.summary}</p>
            <div className="tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
      <div className="writing-archive">
        <h2>Recent updates</h2>
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
