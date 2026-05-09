"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";

type WorkStep = {
  title: string;
  body?: string;
};

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
        bgcolor: light
          ? alpha(theme.palette.background.paper, 0.58)
          : alpha(theme.palette.background.paper, 0.36),
        p: 1.5,
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
};

function InfoPanelCard({
  title,
  subtitle,
  titleNoWrap = false,
  children,
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
          <InfoPanelCard title={t("landing.workCard.title")}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2.25, lineHeight: 1.65 }}
            >
              {t("landing.workCard.lead")}
            </Typography>
            <Stack spacing={1.5}>
              {steps.map((step, index) => (
                <Box key={`${index}-${step.title}`}>
                  <WorkStepItem index={index} step={step} />
                  {index < steps.length - 1 ? <StepConnector /> : null}
                </Box>
              ))}
            </Stack>
          </InfoPanelCard>
        </Grid>
      </Grid>
    </Section>
  );
}
