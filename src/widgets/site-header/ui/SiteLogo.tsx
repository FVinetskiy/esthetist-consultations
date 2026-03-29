"use client";

import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

type SiteLogoProps = {
  sx?: SxProps<Theme>;
};

export function SiteLogo({ sx }: SiteLogoProps) {
  return (
    <Box
      component="svg"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      sx={{
        display: "block",
        width: { xs: 34, sm: 38 },
        height: { xs: 34, sm: 38 },
        flexShrink: 0,
        color: "currentColor",
        ...sx,
      }}
    >
      <path
        d="M24 7.5C18.5 15.2 13 20.4 13 27.5c0 6.1 4.9 11 11 11s11-4.9 11-11c0-7.1-5.5-12.3-11-20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.85}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M17.5 28.5c1.8 3.2 5.6 5.2 9.6 4.8 2.9-.3 5.4-2 6.7-4.3"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.45}
        strokeLinecap="round"
        opacity={0.42}
      />
      <circle cx="24" cy="24" r="2.25" fill="currentColor" opacity={0.22} />
    </Box>
  );
}
