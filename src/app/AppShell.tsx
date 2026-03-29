"use client";

import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ScrollToTopFab } from "@/widgets/scroll-to-top";
import { SiteFooter } from "@/widgets/site-footer";
import { SiteHeader } from "@/widgets/site-header";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <SiteHeader />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          maxWidth: "100%",
          px: isHome ? 0 : { xs: 1.25, sm: 2 },
          py: isHome ? 0 : { xs: 2, sm: 3 },
        }}
      >
        {children}
      </Box>
      <SiteFooter />
      <ScrollToTopFab />
    </Box>
  );
}
