"use client";

import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

type SiteLogoProps = {
  sx?: SxProps<Theme>;
};

export function SiteLogo({ sx }: SiteLogoProps) {
  const theme = useTheme();
  const logoSrc =
    theme.palette.mode === "dark"
      ? "/logos/logo-dark.svg"
      : "/logos/logo.svg";

  return (
    <Box
      component="img"
      src={logoSrc}
      alt=""
      aria-hidden
      sx={{
        display: "block",
        width: { xs: 164, sm: 206, md: 236 },
        height: "auto",
        flexShrink: 0,
        ...sx,
      }}
    />
  );
}
