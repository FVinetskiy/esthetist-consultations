"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  sx?: object;
  tinted?: boolean;
};

export function Section({ id, children, sx, tinted }: SectionProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        scrollMarginTop: 72,
        "@keyframes landingFadeUp": {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        animation: "landingFadeUp 0.55s ease-out both",
        "@media (prefers-reduced-motion: reduce)": {
          animation: "none",
        },
        ...(tinted && {
          bgcolor: (theme) =>
            theme.palette.mode === "light" ? theme.palette.brand.paper : "action.hover",
        }),
        ...sx,
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
