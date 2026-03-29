"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { siteContacts } from "@/shared/config/site-contacts";
import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";
import {
  IconChevronRightSolid,
  IconInstagram,
  IconMailSolid,
  IconPhoneSolid,
  IconTelegram,
  IconViber,
  IconWhatsApp,
} from "@/shared/ui/icons/SolidIcons";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import type { ComponentType } from "react";

type Channel = {
  id: string;
  href: string;
  labelKey: string;
  value: string;
  Icon: ComponentType<SvgIconProps>;
  external?: boolean;
};

function ContactsDecorLines() {
  const theme = useTheme();
  const p = theme.palette.primary.main;
  const h = theme.palette.brand.heading;
  return (
    <Box
      aria-hidden
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 380,
        mx: "auto",
        aspectRatio: "1 / 1.05",
        opacity: theme.palette.mode === "light" ? 0.9 : 0.55,
      }}
    >
      <svg
        viewBox="0 0 320 340"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 280 Q 90 200 160 220 T 280 160"
          stroke={alpha(p, 0.55)}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 120 Q 120 60 200 100 T 300 40"
          stroke={alpha(h, 0.35)}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="248"
          cy="228"
          r="36"
          stroke={alpha(p, 0.4)}
          strokeWidth="2"
          fill={alpha(p, 0.06)}
        />
        <circle
          cx="92"
          cy="96"
          r="22"
          stroke={alpha(h, 0.3)}
          strokeWidth="1.5"
          fill={alpha(h, 0.05)}
        />
        <path
          d="M180 48 L 210 88 L 170 78 Z"
          fill={alpha(p, 0.12)}
          stroke={alpha(p, 0.35)}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}

export function ContactsView() {
  const { t } = useTranslation();
  const theme = useTheme();
  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";

  const channels: Channel[] = [
    {
      id: "telegram",
      href: siteContacts.telegram,
      labelKey: "pages.contacts.labelTelegram",
      value: siteContacts.telegram.replace(/^https?:\/\//, ""),
      Icon: IconTelegram,
      external: true,
    },
    {
      id: "viber",
      href: siteContacts.viber,
      labelKey: "pages.contacts.labelViber",
      value: siteContacts.phoneDisplay,
      Icon: IconViber,
      external: true,
    },
    {
      id: "whatsapp",
      href: siteContacts.whatsapp,
      labelKey: "pages.contacts.labelWhatsapp",
      value: siteContacts.phoneDisplay,
      Icon: IconWhatsApp,
      external: true,
    },
    {
      id: "instagram",
      href: siteContacts.instagram,
      labelKey: "pages.contacts.labelInstagram",
      value: siteContacts.instagram.replace(/^https?:\/\/(www\.)?/, ""),
      Icon: IconInstagram,
      external: true,
    },
    {
      id: "phone",
      href: siteContacts.phoneTel,
      labelKey: "pages.contacts.labelPhone",
      value: siteContacts.phoneDisplay,
      Icon: IconPhoneSolid,
    },
    {
      id: "email",
      href: siteContacts.emailMailto,
      labelKey: "pages.contacts.labelEmail",
      value: siteContacts.emailDisplay,
      Icon: IconMailSolid,
    },
  ];

  return (
    <Box sx={{ maxWidth: 1040, mx: "auto" }}>
      <RevealOnScroll>
        <Box
          sx={{
            mb: 4,
            pb: 3,
            position: "relative",
            background: (th) =>
              `linear-gradient(180deg, ${alpha(th.palette.primary.main, light ? 0.06 : 0.12)} 0%, transparent 100%)`,
            borderRadius: 2,
            px: { xs: 0, sm: 1 },
            pt: { xs: 0, sm: 0.5 },
            "&::after": {
              content: '""',
              position: "absolute",
              left: "8%",
              right: "8%",
              bottom: 0,
              height: 2,
              borderRadius: 2,
              background: `linear-gradient(90deg, transparent, ${alpha(h, 0.25)}, ${alpha(theme.palette.primary.main, 0.45)}, ${alpha(h, 0.25)}, transparent)`,
            },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: h,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              mb: 1,
            }}
          >
            {t("pages.contacts.title")}
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 560, lineHeight: 1.7 }}>
            {t("pages.contacts.lead")}
          </Typography>
        </Box>
      </RevealOnScroll>

      <Grid container spacing={{ xs: 4, md: 5 }} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 2, md: 1 } }}>
          <RevealOnScroll>
            <Typography
              variant="overline"
              sx={{ color: "primary.main", letterSpacing: "0.22em", fontWeight: 700 }}
            >
              {t("pages.contacts.channelsTitle")}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 1.5, mb: 3, lineHeight: 1.75 }}
            >
              {t("pages.contacts.intro")}
            </Typography>

            <Stack spacing={1.5}>
              {channels.map((ch) => {
                const ChannelIcon = ch.Icon;
                return (
                  <Link
                    key={ch.id}
                    href={ch.href}
                    underline="none"
                    {...(ch.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={`${t(ch.labelKey)}: ${ch.value}`}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      borderRadius: 2.5,
                      border: "1px solid",
                      borderColor: alpha(h, light ? 0.14 : 0.22),
                      bgcolor: (th) =>
                        alpha(th.palette.background.paper, light ? 0.75 : 0.4),
                      color: "text.primary",
                      transition:
                        "transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.28s ease",
                      "@media (hover: hover)": {
                        "&:hover": {
                          borderColor: alpha(
                            theme.palette.primary.main,
                            light ? 0.55 : 0.5,
                          ),
                          bgcolor: (th) =>
                            alpha(th.palette.primary.main, light ? 0.08 : 0.14),
                          transform: "translateX(6px)",
                          boxShadow: light
                            ? `0 10px 32px ${alpha(h, 0.1)}`
                            : `0 8px 28px rgba(0,0,0,0.35)`,
                          "& .contacts-channel-icon": {
                            color: "primary.main",
                            bgcolor: (th) =>
                              alpha(th.palette.primary.main, light ? 0.18 : 0.22),
                            transform: "scale(1.06)",
                          },
                          "& .contacts-chevron": {
                            color: "primary.main",
                            transform: "translateX(4px)",
                          },
                        },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        transition:
                          "border-color 0.2s ease, background-color 0.2s ease",
                        "&:hover": { transform: "none" },
                      },
                    }}
                  >
                    <Box
                      className="contacts-channel-icon"
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        bgcolor: (th) =>
                          alpha(th.palette.primary.main, light ? 0.12 : 0.16),
                        color: h,
                        transition:
                          "transform 0.28s ease, background-color 0.25s ease, color 0.25s ease",
                      }}
                    >
                      <ChannelIcon sx={{ fontSize: 26 }} />
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ textTransform: "uppercase", letterSpacing: "0.12em" }}
                      >
                        {t(ch.labelKey)}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{ wordBreak: "break-word", lineHeight: 1.4 }}
                      >
                        {ch.value}
                      </Typography>
                    </Box>
                    <IconChevronRightSolid
                      className="contacts-chevron"
                      sx={{
                        fontSize: 22,
                        color: alpha(h, 0.35),
                        flexShrink: 0,
                        transition: "transform 0.28s ease, color 0.25s ease",
                      }}
                    />
                  </Link>
                );
              })}
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 3.5, lineHeight: 1.7, maxWidth: 480 }}
            >
              {t("pages.contacts.footnote")}
            </Typography>
          </RevealOnScroll>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 2 } }}>
          <RevealOnScroll delayMs={70}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid",
                borderColor: alpha(h, light ? 0.12 : 0.2),
                bgcolor: (th) => alpha(th.palette.brand.paper, light ? 0.5 : 0.25),
                p: { xs: 3, sm: 4 },
                minHeight: { md: 360 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: (th) =>
                    `radial-gradient(ellipse 70% 60% at 80% 20%, ${alpha(th.palette.primary.main, light ? 0.14 : 0.2)}, transparent),
                   radial-gradient(ellipse 50% 50% at 10% 90%, ${alpha(h, light ? 0.08 : 0.12)}, transparent)`,
                  pointerEvents: "none",
                }}
              />
              <Stack
                spacing={2}
                sx={{ position: "relative", textAlign: "center", maxWidth: 400 }}
              >
                <ContactsDecorLines />
                <Typography variant="h6" sx={{ color: h, fontWeight: 600, px: 1 }}>
                  {t("pages.contacts.decorTitle")}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.75, px: 1 }}
                >
                  {t("pages.contacts.decorText")}
                </Typography>
              </Stack>
            </Box>
          </RevealOnScroll>
        </Grid>
      </Grid>
    </Box>
  );
}
