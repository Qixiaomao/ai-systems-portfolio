import Image from "next/image";

export function HeroWorkspace() {
  return (
    <Image
      className="hero-workspace"
      src="/pixel/hero-workspace.png"
      width={490}
      height={454}
      alt="Detailed pixel art: a calico cat at a laptop, books, a coffee mug and an open notebook beside a sunny window"
      unoptimized
      preload
    />
  );
}
