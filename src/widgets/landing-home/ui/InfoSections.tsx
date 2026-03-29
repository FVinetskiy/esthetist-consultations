"use client";

import type { ReactNode } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";

function DashItem({ text }: { text: string }) {
  return (
    <ListItem disableGutters sx={{ alignItems: "flex-start", py: 0.35 }}>
      <ListItemIcon sx={{ minWidth: 28, mt: 0.35 }}>
        <Typography component="span" color="primary">
          ⁃
        </Typography>
      </ListItemIcon>
      <ListItemText
        primary={text}
        primaryTypographyProps={{ variant: "body2", lineHeight: 1.55 }}
      />
    </ListItem>
  );
}

type InfoPanelCardProps = {
  title: string;
  subtitle?: string;
  toggleLabel: string;
  children: ReactNode;
  accordionChildren: ReactNode;
};

function InfoPanelCard({
  title,
  subtitle,
  toggleLabel,
  children,
  accordionChildren,
}: InfoPanelCardProps) {
  const theme = useTheme();
  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";

  const cardSx = {
    height: { xs: "100%", md: "auto" },
    display: "flex",
    flexDirection: "column" as const,
    borderRadius: 2.5,
    border: "1px solid",
    borderColor: alpha(h, light ? 0.14 : 0.22),
    bgcolor: light
      ? alpha(theme.palette.brand.bg, 0.75)
      : alpha(theme.palette.background.paper, 0.55),
    boxShadow: "none",
    overflow: "hidden",
    transition: "transform 0.28s ease, border-color 0.25s ease",
    "@media (hover: hover)": {
      "&:hover": {
        transform: "translateY(-3px)",
        borderColor: alpha(theme.palette.primary.main, light ? 0.4 : 0.45),
      },
    },
    "@media (prefers-reduced-motion: reduce)": {
      "&:hover": { transform: "none" },
    },
  };

  const accordionRailSx = {
    mt: { xs: "auto", md: 2 },
    pt: 2,
    mx: -2.5,
    mb: 0,
    borderTop: `1px solid ${alpha(h, light ? 0.12 : 0.2)}`,
    bgcolor: alpha(theme.palette.primary.main, light ? 0.05 : 0.1),
  };

  const accordionSx = {
    bgcolor: "transparent",
    "&:before": { display: "none" },
    boxShadow: "none",
    "&.Mui-expanded": { margin: 0 },
  };

  const summarySx = {
    px: 2.5,
    py: 1.25,
    minHeight: 52,
    transition: "background-color 0.2s ease",
    "@media (hover: hover)": {
      "&:hover": { bgcolor: alpha(theme.palette.primary.main, light ? 0.07 : 0.12) },
    },
    "& .MuiAccordionSummary-content": { my: 1 },
  };

  return (
    <Card elevation={0} sx={cardSx}>
      <CardContent
        sx={{
          flex: { xs: 1, md: "none" },
          flexGrow: { xs: 1, md: 0 },
          display: "flex",
          flexDirection: "column",
          p: 2.5,
          pt: 3,
          pb: 0,
          "&:last-child": { pb: 0 },
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: h, fontWeight: 600, mb: subtitle ? 1 : 1.5, lineHeight: 1.3 }}
        >
          {title}
        </Typography>
        {subtitle ? (
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ mb: 1.5, lineHeight: 1.5 }}
          >
            {subtitle}
          </Typography>
        ) : null}
        <Box
          sx={{ flex: { xs: 1, md: "none" }, minHeight: 0, flexGrow: { xs: 1, md: 0 } }}
        >
          {children}
        </Box>
        <Box sx={accordionRailSx}>
          <Accordion disableGutters elevation={0} sx={accordionSx}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
              sx={summarySx}
            >
              <Typography fontWeight={600} sx={{ color: h }}>
                {toggleLabel}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
              {accordionChildren}
            </AccordionDetails>
          </Accordion>
        </Box>
      </CardContent>
    </Card>
  );
}

export function InfoSections() {
  const { t } = useTranslation();

  const steps = t("landing.workCard.steps", { returnObjects: true }) as string[];
  const afterItems = t("landing.workCard.afterItems", {
    returnObjects: true,
  }) as string[];
  const supportBullets = t("landing.workCard.supportBullets", {
    returnObjects: true,
  }) as string[];
  const shortBullets = t("landing.audienceCard.shortBullets", {
    returnObjects: true,
  }) as string[];
  const fullItems = t("landing.audienceCard.fullItems", {
    returnObjects: true,
  }) as string[];
  const notForItems = t("landing.audienceCard.notForItems", {
    returnObjects: true,
  }) as string[];
  const teasers = t("landing.principlesCard.teasers", {
    returnObjects: true,
  }) as string[];
  const principlesBody = t("landing.principlesCard.body", {
    returnObjects: true,
  }) as string[];

  return (
    <Section id="how-it-works">
      <Grid
        container
        spacing={3}
        columns={12}
        alignItems={{ xs: "stretch", md: "flex-start" }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <InfoPanelCard
            title={t("landing.workCard.title")}
            subtitle={t("landing.workCard.subtitle")}
            toggleLabel={t("landing.workCard.detailsToggle")}
            accordionChildren={
              <>
                <Typography variant="subtitle2" sx={{ mb: 0.75 }}>
                  {t("landing.workCard.formatTitle")}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, lineHeight: 1.65 }}
                >
                  {t("landing.workCard.formatText")}
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                  {t("landing.workCard.afterTitle")}
                </Typography>
                <List dense disablePadding>
                  {afterItems.map((s) => (
                    <DashItem key={s} text={s} />
                  ))}
                </List>
                <Typography variant="subtitle2" sx={{ mt: 2, mb: 0.5 }}>
                  {t("landing.workCard.supportTitle")}
                </Typography>
                <List dense disablePadding>
                  {supportBullets.map((s) => (
                    <DashItem key={s} text={s} />
                  ))}
                </List>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2, lineHeight: 1.65 }}
                >
                  {t("landing.workCard.supportNote")}
                </Typography>
              </>
            }
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.65 }}
            >
              {t("landing.workCard.stepsIntro")}
            </Typography>
            <List dense disablePadding>
              {steps.map((s) => (
                <DashItem key={s} text={s} />
              ))}
            </List>
          </InfoPanelCard>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <InfoPanelCard
            title={t("landing.audienceCard.title")}
            toggleLabel={t("landing.audienceCard.moreBtn")}
            accordionChildren={
              <>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  {t("landing.audienceCard.fullTitle")}
                </Typography>
                <List dense disablePadding>
                  {fullItems.map((s) => (
                    <DashItem key={s} text={s} />
                  ))}
                </List>
                <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
                  {t("landing.audienceCard.notForTitle")}
                </Typography>
                <List dense disablePadding>
                  {notForItems.map((s) => (
                    <DashItem key={s} text={s} />
                  ))}
                </List>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2, lineHeight: 1.65 }}
                >
                  {t("landing.audienceCard.notForNote")}
                </Typography>
              </>
            }
          >
            <List dense disablePadding>
              {shortBullets.map((s) => (
                <DashItem key={s} text={s} />
              ))}
            </List>
          </InfoPanelCard>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <InfoPanelCard
            title={t("landing.principlesCard.title")}
            toggleLabel={t("landing.principlesCard.moreToggle")}
            accordionChildren={
              <Stack spacing={2}>
                {principlesBody.map((para) => (
                  <Typography key={para.slice(0, 40)} variant="body2" lineHeight={1.65}>
                    {para}
                  </Typography>
                ))}
              </Stack>
            }
          >
            <List dense disablePadding>
              {teasers.map((s) => (
                <DashItem key={s} text={s} />
              ))}
            </List>
          </InfoPanelCard>
        </Grid>
      </Grid>
    </Section>
  );
}
