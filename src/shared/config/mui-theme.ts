import {
  alpha,
  createTheme,
  type Theme,
  type ThemeOptions,
} from "@mui/material/styles";
import type { ColorMode } from "@/entities/theme";

function modalScrollbarStyles(theme: Theme) {
  const track = alpha(
    theme.palette.brand.heading,
    theme.palette.mode === "light" ? 0.08 : 0.16,
  );
  const thumb = alpha(
    theme.palette.primary.main,
    theme.palette.mode === "light" ? 0.42 : 0.48,
  );
  const thumbHover = alpha(
    theme.palette.primary.dark,
    theme.palette.mode === "light" ? 0.58 : 0.62,
  );
  const pad = theme.palette.background.paper;

  return {
    scrollbarWidth: "thin" as const,
    scrollbarColor: `${thumb} ${track}`,
    "&::-webkit-scrollbar": {
      width: 9,
      height: 9,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: track,
      borderRadius: 8,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: thumb,
      borderRadius: 8,
      border: `2px solid ${pad}`,
      backgroundClip: "padding-box",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: thumbHover,
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: "transparent",
    },
  };
}

const brandLight = {
  bg: "#FBF5EE",
  bgAlt: "#F7EFE7",
  paper: "#E8D8C8",
  accent: "#D8A5A0",
  accentHover: "#C98F8A",
  heading: "#5A3E2B",
  headingSoft: "#6A4A3A",
  body: "#4A3A33",
  divider: "#E3D3C4",
};

const brandDark = {
  bg: "#1a1614",
  bgAlt: "#221c19",
  paper: "#2a221e",
  accent: "#c99590",
  accentHover: "#d8a5a0",
  heading: "#e8d5c4",
  headingSoft: "#c4a99a",
  body: "#e3d6cc",
  divider: "#3d332c",
};

declare module "@mui/material/styles" {
  interface Palette {
    brand: typeof brandLight;
  }
  interface PaletteOptions {
    brand?: typeof brandLight;
  }
}

export function cardShadowLight(theme: {
  palette: { mode: string; brand: typeof brandLight };
}) {
  if (theme.palette.mode !== "light") {
    return "0 8px 28px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06)";
  }
  const h = brandLight.heading;
  return `0 6px 24px ${alpha(h, 0.08)}, 0 0 0 1px ${alpha(h, 0.07)}`;
}

export function cardShadowHoverLight(theme: { palette: { mode: string } }) {
  if (theme.palette.mode !== "light") {
    return "0 12px 36px rgba(0,0,0,0.35)";
  }
  return `0 12px 32px ${alpha(brandLight.heading, 0.12)}, 0 0 0 1px ${alpha(brandLight.heading, 0.1)}`;
}

const baseOptions: ThemeOptions = {
  typography: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontFamily: "var(--font-inter), system-ui, sans-serif",
    },
    h1: {
      fontWeight: 700,
      fontFamily: "var(--font-lora), Georgia, serif",
      letterSpacing: "-0.02em",
      fontSize: "clamp(1.35rem, 0.5rem + 3.8vw, 2.35rem)",
    },
    h2: {
      fontWeight: 700,
      fontFamily: "var(--font-lora), Georgia, serif",
      letterSpacing: "-0.01em",
      fontSize: "clamp(1.25rem, 0.45rem + 3.2vw, 2rem)",
    },
    h3: {
      fontWeight: 600,
      fontFamily: "var(--font-lora), Georgia, serif",
      fontSize: "clamp(1.15rem, 0.4rem + 2.6vw, 1.75rem)",
    },
    h4: {
      fontWeight: 600,
      fontFamily: "var(--font-lora), Georgia, serif",
      fontSize: "clamp(1.08rem, 0.35rem + 2.2vw, 1.5rem)",
    },
    h5: {
      fontWeight: 600,
      fontFamily: "var(--font-lora), Georgia, serif",
      fontSize: "clamp(1.02rem, 0.3rem + 1.8vw, 1.25rem)",
    },
    h6: {
      fontWeight: 600,
      fontFamily: "var(--font-lora), Georgia, serif",
      fontSize: "clamp(0.98rem, 0.25rem + 1.5vw, 1.125rem)",
    },
  },
  shape: {
    borderRadius: 10,
  },
};

export function createAppTheme(colorMode: ColorMode) {
  const b = colorMode === "light" ? brandLight : brandDark;
  return createTheme({
    ...baseOptions,
    palette: {
      mode: colorMode,
      primary: {
        main: b.accent,
        dark: b.accentHover,
        contrastText: colorMode === "light" ? "#fff" : "#1a1614",
      },
      background: {
        default: b.bg,
        paper: b.paper,
      },
      text: {
        primary: b.body,
        secondary: b.headingSoft,
      },
      divider: b.divider,
      brand: b,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: "auto",
            overflowX: "hidden",
          },
          body: {
            overflowX: "hidden",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: "max(12px, env(safe-area-inset-left))",
            paddingRight: "max(12px, env(safe-area-inset-right))",
            "@media (min-width: 600px)": {
              paddingLeft: 24,
              paddingRight: 24,
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            boxShadow: `0 1px 0 ${alpha(theme.palette.brand.heading, theme.palette.mode === "light" ? 0.08 : 0.15)}`,
          }),
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            touchAction: "manipulation",
            transition:
              "transform 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease, border-color 0.22s ease",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            transition: "transform 0.25s ease, box-shadow 0.28s ease",
            boxShadow: cardShadowLight(theme),
            border: "none",
            "&:hover": {
              boxShadow: cardShadowHoverLight(theme),
            },
          }),
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: ({ theme }) => modalScrollbarStyles(theme),
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: ({ theme }) => modalScrollbarStyles(theme),
        },
      },
    },
  });
}

export { brandLight, brandDark };
