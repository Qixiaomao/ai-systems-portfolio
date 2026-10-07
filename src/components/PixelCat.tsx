import Image from "next/image";

type Pose = "laptop" | "read" | "sleep" | "sit";
const sprites = {
  read: { width: 85, height: 69, alt: "Calico pixel cat reading a book" },
  laptop: {
    width: 91,
    height: 67,
    alt: "Calico pixel cat working on a laptop",
  },
  sleep: { width: 102, height: 53, alt: "Sleeping calico pixel cat" },
  sit: { width: 144, height: 94, alt: "Sitting calico pixel cat" },
};

export function PixelCat({
  pose = "laptop",
  className = "",
}: {
  pose?: Pose;
  className?: string;
}) {
  const sprite = sprites[pose];
  return (
    <Image
      className={`pixel-sprite pixel-sprite--${pose} ${className}`}
      src={`/pixel/cat-${pose}.png`}
      width={sprite.width}
      height={sprite.height}
      alt={sprite.alt}
      unoptimized
    />
  );
}
