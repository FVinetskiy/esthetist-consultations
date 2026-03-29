"use client";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { IconBookSolid, IconCheckSolid } from "@/shared/ui/icons/SolidIcons";
import { Section } from "./Section";

export function FreeGuideSection() {
  const { t } = useTranslation();
  const points = t("landing.freeGuide.points", { returnObjects: true }) as string[];

  return (
    <Section id="free-guide" tinted>
      <Card
        elevation={0}
        sx={{
          maxWidth: 720,
          mx: "auto",
          bgcolor: (th) =>
            th.palette.mode === "light"
              ? th.palette.brand.bg
              : th.palette.background.paper,
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack spacing={2.5}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                sx={{
                  color: "primary.main",
                  display: "flex",
                  transition: "transform 0.28s ease",
                  "@media (hover: hover)": {
                    "&:hover": { transform: "rotate(-4deg) scale(1.05)" },
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    "&:hover": { transform: "none" },
                  },
                }}
                aria-hidden
              >
                <IconBookSolid sx={{ fontSize: 36 }} />
              </Box>
              <Typography
                variant="h3"
                sx={{ color: (theme) => theme.palette.brand.heading }}
              >
                {t("landing.freeGuide.title")}
              </Typography>
            </Stack>
            <Typography variant="subtitle1" fontWeight={600}>
              {t("landing.freeGuide.insideTitle")}
            </Typography>
            <List dense>
              {points.map((pt) => (
                <ListItem key={pt} disableGutters>
                  <ListItemIcon sx={{ minWidth: 36, color: "primary.main" }}>
                    <IconCheckSolid sx={{ fontSize: 22 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={pt}
                    primaryTypographyProps={{ variant: "body1" }}
                  />
                </ListItem>
              ))}
            </List>
            <Button
              component={Link}
              href="/contacts"
              variant="contained"
              size="large"
              sx={{
                alignSelf: { xs: "stretch", sm: "flex-start" },
                "&:hover": { transform: "translateY(-1px)" },
              }}
            >
              {t("landing.freeGuide.cta")}
            </Button>
            <Typography
              variant="body2"
              color="text.secondary"
              lineHeight={1.7}
              sx={{ pt: 0.5 }}
            >
              {t("landing.freeGuide.promoNote")}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Section>
  );
}
