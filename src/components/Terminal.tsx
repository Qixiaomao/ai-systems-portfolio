import { interests, profile } from "@/data/site";
import { PixelCat } from "./PixelCat";

export function Terminal() {
  return (
    <section className="terminal" aria-label="About Lucas, terminal style">
      <div className="terminal-bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="terminal-body">
        <div className="terminal-copy">
          <p>
            <b>lucas</b>@lab:~$ whoami
          </p>
          <p>{profile.name}</p>
          <p>
            <b>lucas</b>@lab:~$ cat interests.txt
          </p>
          <ul>
            {interests.map((interest) => (
              <li key={interest}>- {interest}</li>
            ))}
          </ul>
          <p className="terminal-prompt" aria-hidden="true">
            <b>lucas</b>@lab:~$ <span className="cursor" />
          </p>
        </div>
        <PixelCat pose="sit" className="terminal-cat" />
        <span className="scribble" aria-hidden="true">
          Keep
          <br />
          Building
          <br />
          :)<span>⤵</span>
        </span>
      </div>
    </section>
  );
}
