import { updates } from "@/data/site";

const fullDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});
const monthDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function UpdatesList() {
  return (
    <ol className="updates">
      {updates.map((update) => (
        <li key={`${update.date}-${update.title}`}>
          <time dateTime={update.date}>
            {(update.date.length === 10 ? fullDate : monthDate).format(
              new Date(
                `${update.date.length === 7 ? update.date + "-01" : update.date}T00:00:00Z`,
              ),
            )}
          </time>
          <span>
            {update.href ? (
              <a href={update.href}>{update.title}</a>
            ) : (
              update.title
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}
