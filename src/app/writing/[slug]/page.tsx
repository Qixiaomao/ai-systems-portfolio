import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getWritingPost, getWritingPosts } from "@/lib/writing";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getWritingPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getWritingPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | Lucas Huang`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
    },
  };
}

export default async function WritingArticle({ params }: Props) {
  const post = getWritingPost((await params).slug);
  if (!post) notFound();
  return (
    <main id="content" tabIndex={-1} className="article-page">
      <Link href="/writing" className="back-link">
        <ArrowLeft aria-hidden="true" /> All writing
      </Link>
      <article>
        <div className="article-meta">
          <time dateTime={post.date}>{post.date}</time>
          <span>Research notes</span>
        </div>
        <div className="article-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
        <div className="article-tags tags">
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>
      <Link href="/writing" className="back-link article-end-link">
        <ArrowLeft aria-hidden="true" /> Back to writing
      </Link>
    </main>
  );
}
