"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

export type TariffTier = "lite" | "pro" | "proPlus";

type TariffCardProps = {
  tier: TariffTier;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <List dense disablePadding sx={{ pl: 0 }}>
      {items.map((item) => (
        <ListItem key={item} disableGutters sx={{ alignItems: "flex-start", py: 0.35 }}>
          <ListItemIcon sx={{ minWidth: 28, mt: 0.35 }}>
            <Typography
              component="span"
              color="primary.main"
              sx={{ fontSize: "1.1rem" }}
            >
              ⁃
            </Typography>
          </ListItemIcon>
          <ListItemText
            primary={item}
            primaryTypographyProps={{
              variant: "body2",
              lineHeight: 1.55,
              whiteSpace: "pre-line",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}

function TextBlocks({ items }: { items: string[] }) {
  return (
    <Box>
      {items.map((item) => (
        <Typography
          key={item}
          variant="body2"
          sx={{ lineHeight: 1.6, whiteSpace: "pre-line", mb: 1.1 }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}

export function TariffCard({ tier }: TariffCardProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const p = `landing.tariffs.${tier}`;
  const sep = alpha(
    theme.palette.brand.heading,
    theme.palette.mode === "light" ? 0.12 : 0.2,
  );

  const markers = t(`${p}.markers`, { returnObjects: true }) as string[];
  const analyticsItems = t(`${p}.analyticsItems`, { returnObjects: true }) as string[];
  const recItems = t(`${p}.recItems`, { returnObjects: true }) as string[];
  const materialsItems = t(`${p}.materialsItems`, { returnObjects: true }) as string[];
  const bonusTitleKey = `${p}.bonusTitle`;
  const bonusTitle = t(bonusTitleKey, { defaultValue: "" });
  const bonusItems = t(`${p}.bonusItems`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];
  const hasBonus = bonusTitle && bonusTitle !== bonusTitleKey && bonusItems.length > 0;
  const supportText = t(`${p}.supportText`);
  const fitItems = t(`${p}.fitItems`, { returnObjects: true }) as string[];
  const fitNoteKey = `${p}.fitNote`;
  const fitNote = t(fitNoteKey, { defaultValue: "" });
  const hasFitNote = fitNote && fitNote !== fitNoteKey;

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-3px)",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "&:hover": { transform: "none" },
        },
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          pt: 2,
          px: 2,
          minHeight: 0,
        }}
      >
        <Box sx={{ flex: "1 1 auto", minWidth: 0 }}>
          <Typography
            variant="h5"
            color="primary"
            fontWeight={800}
            textAlign="center"
            sx={{ mb: 0.5 }}
          >
            {t(`${p}.name`)}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, textAlign: "center" }}>
            {t(`${p}.tagline`)}
          </Typography>
          <Typography
            variant="h4"
            component="p"
            sx={{
              color: (th) => th.palette.brand.heading,
              fontWeight: 700,
              mb: 0.75,
              textAlign: "center",
            }}
          >
            {t(`${p}.price`)}
          </Typography>
          {markers.map((marker) => (
            <Typography
              key={marker}
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", lineHeight: 1.55 }}
            >
              {marker}
            </Typography>
          ))}

          <Box sx={{ borderTop: `1px solid ${sep}`, mt: 2, pt: 1.75 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {t("landing.tariffs.includesTitle")}
            </Typography>

            <Typography variant="subtitle2" sx={{ mb: 0.75 }}>
              {t(`${p}.analyticsTitle`)}
            </Typography>
            <BulletList items={analyticsItems} />

            <Typography variant="subtitle2" sx={{ mb: 0.75, mt: 1.5 }}>
              {t(`${p}.recTitle`)}
            </Typography>
            {tier === "lite" ? <BulletList items={recItems} /> : <TextBlocks items={recItems} />}

            {tier !== "lite" ? (
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 0.75, mt: 1.5 }}>
                  {t(`${p}.materialsTitle`)}
                </Typography>
                <BulletList items={materialsItems} />
                {hasBonus ? (
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 0.75, mt: 1.5 }}>
                      {bonusTitle}
                    </Typography>
                    <BulletList items={bonusItems} />
                  </Box>
                ) : null}
              </Box>
            ) : null}

            <Typography variant="subtitle2" sx={{ mb: 0.75, mt: 1.5 }}>
              {t(`${p}.supportTitle`)}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6, mb: 1, whiteSpace: "pre-line" }}
            >
              {supportText}
            </Typography>
          </Box>
          <Box sx={{ borderTop: `1px solid ${sep}`, mt: 1.75, pt: 1.5 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {t(`${p}.fitTitle`)}
            </Typography>
            <BulletList items={fitItems} />
            {hasFitNote ? (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1.5, lineHeight: 1.6 }}
              >
                {fitNote}
              </Typography>
            ) : null}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
