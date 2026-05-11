"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";

type WorkStep = {
  title: string;
  body?: string;
};

function BulletItem({ text }: { text: string }) {
  const theme = useTheme();

  return (
    <ListItem disableGutters sx={{ alignItems: "flex-start", gap: 1.15, py: 0.45 }}>
      <Box
        aria-hidden
        sx={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          bgcolor: "primary.main",
          boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.12)}`,
          mt: 0.85,
          flexShrink: 0,
        }}
      />
      <Typography variant="body2" sx={{ lineHeight: 1.62 }}>
        {text}
      </Typography>
    </ListItem>
  );
}

function WorkStepItem({ index, step }: { index: number; step: WorkStep }) {
  const theme = useTheme();
  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "30px 1fr",
        columnGap: 1.25,
        alignItems: "flex-start",
        borderRadius: 2,
        border: `1px solid ${alpha(h, light ? 0.1 : 0.18)}`,
        bgcolor: "#FBF7F1",
        py: "26px",
        px: "12px",
      }}
    >
      <Box
        sx={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          color: "primary.main",
          fontSize: 13,
          fontWeight: 700,
          lineHeight: 1,
          mt: 0.1,
        }}
        aria-hidden
      >
        {index + 1}
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ color: h, lineHeight: 1.45 }}>
          {step.title}
        </Typography>
        {step.body ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.75, lineHeight: 1.65, whiteSpace: "pre-line" }}
          >
            {step.body}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}

function StepConnector() {
  return (
    <Box
      aria-hidden
      sx={{
        display: "flex",
        justifyContent: "center",
        color: "primary.main",
        fontSize: 18,
        lineHeight: 1,
        mt: -0.25,
        mb: -1.2,
      }}
    >
      ↓
    </Box>
  );
}

type InfoPanelCardProps = {
  title: string;
  subtitle?: string;
  titleNoWrap?: boolean;
  children: ReactNode;
  sx?: object;
};

function InfoPanelCard({
  title,
  subtitle,
  titleNoWrap = false,
  children,
  sx,
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
    ...sx,
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
          pb: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: h,
            fontWeight: 600,
            mb: subtitle ? 1 : 1.5,
            lineHeight: 1.3,
            whiteSpace: titleNoWrap ? "nowrap" : "normal",
            letterSpacing: titleNoWrap ? "0" : undefined,
          }}
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
      </CardContent>
    </Card>
  );
}

export function InfoSections() {
  const { t } = useTranslation();

  const rawSteps = t("landing.workCard.steps", { returnObjects: true }) as Array<
    WorkStep | string
  >;
  const fullItems = t("landing.audienceCard.fullItems", {
    returnObjects: true,
  }) as string[];
  const notForItems = t("landing.audienceCard.notForItems", {
    returnObjects: true,
  }) as string[];
  const steps = rawSteps.map((step) =>
    typeof step === "string" ? { title: step } : step,
  );

  return (
    <Section id="how-it-works">
      <Grid
        container
        spacing={3}
        columns={12}
        alignItems={{ xs: "stretch", md: "flex-start" }}
      >
        <Grid size={{ xs: 12 }}>
          <InfoPanelCard title={t("landing.workCard.title")} sx={{ bgcolor: "#F7EFE8" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2.25, lineHeight: 1.65 }}
            >
              {t("landing.workCard.lead")}
            </Typography>
            <Stack spacing={0}>
              {steps.map((step, index) => (
                <Box key={`${index}-${step.title}`} sx={{ mt: index === 0 ? 0 : "30px" }}>
                  <WorkStepItem index={index} step={step} />
                  {index < steps.length - 1 ? <StepConnector /> : null}
                </Box>
              ))}
            </Stack>
          </InfoPanelCard>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <InfoPanelCard title={t("landing.audienceCard.title")}>
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: (theme) => theme.palette.brand.heading,
                    mb: 1,
                    lineHeight: 1.45,
                  }}
                >
                  {t("landing.audienceCard.fullTitle")}
                </Typography>
                <List disablePadding>
                  {fullItems.map((item) => (
                    <BulletItem key={item} text={item} />
                  ))}
                </List>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: (theme) =>
                      alpha(
                        theme.palette.brand.heading,
                        theme.palette.mode === "light" ? 0.1 : 0.18,
                      ),
                    bgcolor: (theme) =>
                      alpha(
                        theme.palette.background.paper,
                        theme.palette.mode === "light" ? 0.44 : 0.3,
                      ),
                    p: 2,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: (theme) => theme.palette.brand.heading,
                      mb: 1,
                      lineHeight: 1.45,
                    }}
                  >
                    {t("landing.audienceCard.notForTitle")}
                  </Typography>
                  <List disablePadding>
                    {notForItems.map((item) => (
                      <BulletItem key={item} text={item} />
                    ))}
                  </List>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1.5, lineHeight: 1.65, whiteSpace: "pre-line" }}
                  >
                    {t("landing.audienceCard.notForNote")}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </InfoPanelCard>
        </Grid>
      </Grid>
    </Section>
  );
}
