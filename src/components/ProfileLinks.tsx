import Link from "next/link";
import type { SVGProps } from "react";
import { ArrowUpRight, BookOpen, Mail } from "lucide-react";
import { contact } from "@/data/site";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.59c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...props}
    >
      <path d="m4 3 13 18h3L7 3H4ZM20 3 4 21" />
    </svg>
  );
}

export function ProfileLinks({ compact = false }: { compact?: boolean }) {
  const email = contact.email ? `mailto:${contact.email}` : "";
  const links = compact
    ? [
        { label: "GitHub", href: contact.github, icon: GitHubIcon },
        { label: "Writing", href: "/writing", icon: BookOpen },
        { label: "X", href: contact.x, icon: XIcon },
        { label: "Email", href: email, icon: Mail },
      ]
    : [
        { label: "GitHub", href: contact.github, icon: GitHubIcon },
        { label: "Email", href: email, icon: Mail },
        { label: "CV", href: contact.cv, icon: null },
      ];

  return (
    <div className={compact ? "footer-links" : "actions"}>
      {links.map(({ label, href, icon: Icon }) => {
        const className =
          !compact && label === "GitHub" ? "primary" : undefined;
        const contents = compact ? (
          Icon && <Icon aria-hidden="true" />
        ) : (
          <>
            {label === "GitHub" && Icon && <Icon aria-hidden="true" />}
            <span>{label}</span>
            <ArrowUpRight aria-hidden="true" />
          </>
        );
        const ariaLabel = compact ? label : undefined;
        if (!href)
          return (
            <button
              key={label}
              className={className}
              disabled
              type="button"
              title={`${label} link coming soon`}
              aria-label={`${label} link coming soon`}
            >
              {contents}
            </button>
          );
        return href.startsWith("/") ? (
          <Link
            key={label}
            href={href}
            className={className}
            aria-label={ariaLabel}
          >
            {contents}
          </Link>
        ) : (
          <a
            key={label}
            className={className}
            href={href}
            aria-label={ariaLabel}
            {...(/^https?:\/\//.test(href)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {contents}
          </a>
        );
      })}
    </div>
  );
}
