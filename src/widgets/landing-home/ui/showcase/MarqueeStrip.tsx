"use client";

import Box from "@mui/material/Box";
import Image from "next/image";

type MarqueeStripProps = {
  images: readonly string[];
  durationSec: number;
  reverse?: boolean;
  cellSize?: number;
  gapPx?: number;
};

export function MarqueeStrip({
  images,
  durationSec,
  reverse,
  cellSize = 52,
  gapPx = 8,
}: MarqueeStripProps) {
  const row = [...images, ...images];

  return (
    <Box
      sx={{
        overflow: "hidden",
        borderRadius: 2,
        height: cellSize,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: `${gapPx}px`,
          width: "max-content",
          height: cellSize,
          alignItems: "center",
          animation: `showcase-marquee ${durationSec}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
          transform: "translate3d(0,0,0)",
          backfaceVisibility: "hidden",
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}
      >
        {row.map((src, i) => (
          <Box
            key={`${src}-${i}`}
            sx={{
              width: cellSize,
              height: cellSize,
              flexShrink: 0,
              borderRadius: 1.5,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes={`${cellSize}px`}
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
