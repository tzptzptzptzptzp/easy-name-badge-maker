import { useConfig } from "@/hooks/useConfig";
import Image from "next/image";

export const PreviewHeader = () => {
  const { scale } = useConfig();
  return (
    <div
      className="flex items-center relative w-full bg-[var(--theme-main-color)]"
      style={{ height: scale(57) }}
    >
      <Image
        src="/images/logo.png"
        alt="リベシティ"
        width={scale(146) * 2}
        height={scale(35) * 2}
        className="absolute h-auto select-none pointer-events-none"
        style={{
          left: scale(17),
          width: scale(146),
          transform: `translateY(-${scale(2)}px)`,
        }}
      />
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="absolute opacity-50 rotate-45"
          style={{
            top: scale(-30),
            left: scale(-12 + index * 36),
            width: scale(18.5),
            height: scale(120),
            border: `${scale(6)}px solid rgba(255,255,255,.2) `,
          }}
        />
      ))}
    </div>
  );
};
