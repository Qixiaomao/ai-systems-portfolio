import Image from "next/image";

export function LucasLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      className={`lucas-brand ${compact ? "lucas-brand--compact" : ""}`}
      src="/pixel/lucas-logo.png"
      width={144}
      height={54}
      alt="Lucas, with a cat outline and paw print"
      unoptimized
    />
  );
}
