import { alpha, type Theme } from "@mui/material/styles";
import type { SxProps } from "@mui/system";

export function premiumAccordionSx(theme: Theme): SxProps {
  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";
  return {
    borderRadius: 2.5,
    bgcolor: "background.paper",
    overflow: "hidden",
    border: `1px solid ${alpha(h, light ? 0.14 : 0.22)}`,
    boxShadow: light
      ? `0 4px 22px ${alpha(h, 0.085)}, 0 0 0 1px ${alpha(h, 0.05)}`
      : `0 6px 26px rgba(0,0,0,0.34), 0 0 0 1px ${alpha("#fff", 0.06)}`,
    "&:before": { display: "none" },
    transition: "box-shadow 0.28s ease, border-color 0.28s ease",
    "&.Mui-expanded": {
      margin: 0,
      borderColor: alpha(theme.palette.primary.main, light ? 0.38 : 0.45),
      boxShadow: light
        ? `0 10px 40px ${alpha(h, 0.12)}, 0 0 0 1px ${alpha(theme.palette.primary.main, 0.2)}`
        : `0 12px 36px rgba(0,0,0,0.48)`,
    },
    "&:hover": {
      borderColor: alpha(h, light ? 0.22 : 0.32),
      boxShadow: light
        ? `0 6px 26px ${alpha(h, 0.1)}, 0 0 0 1px ${alpha(h, 0.08)}`
        : `0 8px 28px rgba(0,0,0,0.4)`,
    },
  };
}
