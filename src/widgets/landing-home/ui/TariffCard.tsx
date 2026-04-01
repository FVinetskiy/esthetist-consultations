"use client";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useId, useState } from "react";
import { useTranslation } from "react-i18next";

export type TariffTier = "lite" | "pro" | "proPlus";

type TariffCardProps = {
  tier: TariffTier;
};

type Panel = "fit" | null;

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
            primaryTypographyProps={{ variant: "body2", lineHeight: 1.55 }}
          />
        </ListItem>
      ))}
    </List>
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
  const [panel, setPanel] = useState<Panel>(null);
  const titleId = useId();

  const markers = t(`${p}.markers`, { returnObjects: true }) as string[];
  const analyticsItems = t(`${p}.analyticsItems`, { returnObjects: true }) as string[];
  const recItems = t(`${p}.recItems`, { returnObjects: true }) as string[];
  const materialsItems = t(`${p}.materialsItems`, { returnObjects: true }) as string[];
  const supportText = t(`${p}.supportText`);
  const fitItems = t(`${p}.fitItems`, { returnObjects: true }) as string[];
  const fitNoteKey = `${p}.fitNote`;
  const fitNote = t(fitNoteKey, { defaultValue: "" });
  const hasFitNote = fitNote && fitNote !== fitNoteKey;

  const close = () => setPanel(null);

  return (
    <>
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
            pb: 0,
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
                mb: 2,
                textAlign: "center",
              }}
            >
              {t(`${p}.price`)}
            </Typography>

            <Typography variant="subtitle2" sx={{ mb: 0.75 }}>
              {t(`${p}.analyticsTitle`)}
            </Typography>
            <BulletList items={analyticsItems} />

            <Typography variant="subtitle2" sx={{ mb: 0.75, mt: 1.5 }}>
              {t(`${p}.recTitle`)}
            </Typography>
            <BulletList items={recItems} />

            {tier !== "lite" ? (
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 0.75, mt: 1.5 }}>
                  {t(`${p}.materialsTitle`)}
                </Typography>
                <BulletList items={materialsItems} />
              </Box>
            ) : null}

            <Typography variant="subtitle2" sx={{ mb: 0.75, mt: 1.5 }}>
              {t(`${p}.supportTitle`)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 1 }}>
              {supportText}
            </Typography>

            <BulletList items={markers} />
          </Box>

          <Stack
            sx={{
              flexShrink: 0,
              mt: 2,
              mx: -2,
              borderTop: `1px solid ${sep}`,
            }}
          >
            <Button
              type="button"
              fullWidth
              color="inherit"
              onClick={() => setPanel("fit")}
              endIcon={<ChevronRightIcon sx={{ fontSize: 18, opacity: 0.65 }} />}
              sx={{
                justifyContent: "space-between",
                py: 1.35,
                px: 2,
                borderRadius: 0,
                textAlign: "left",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  bgcolor: alpha(
                    theme.palette.primary.main,
                    theme.palette.mode === "light" ? 0.06 : 0.12,
                  ),
                },
              }}
            >
              {t("landing.tariffs.fitToggle")}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Dialog
        open={panel !== null}
        onClose={close}
        maxWidth="sm"
        fullWidth
        scroll="paper"
        aria-labelledby={titleId}
        sx={{
          minHeight: "100dvh",
          "@supports (height: 100lvh)": {
            minHeight: "calc(100lvh + env(safe-area-inset-bottom, 0px))",
          },
          "& .MuiBackdrop-root": {
            touchAction: "none",
            minHeight: "100dvh",
            "@supports (height: 100lvh)": {
              minHeight: "calc(100lvh + env(safe-area-inset-bottom, 0px))",
            },
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          },
          "& .MuiDialog-container": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100dvh",
            "@supports (height: 100lvh)": {
              minHeight: "calc(100lvh + env(safe-area-inset-bottom, 0px))",
            },
            paddingTop: "env(safe-area-inset-top, 0px)",
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
            paddingLeft: "max(16px, env(safe-area-inset-left, 0px))",
            paddingRight: "max(16px, env(safe-area-inset-right, 0px))",
            overscrollBehavior: "contain",
            boxSizing: "border-box",
          },
        }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: { xs: 2, sm: 3 },
              maxHeight: { xs: "min(86dvh, 780px)", sm: "min(82vh, 640px)" },
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            },
          },
        }}
      >
        <DialogTitle id={titleId} sx={{ pr: 6, pt: 2.5, pb: 1 }}>
          {t("landing.tariffs.fitToggle")}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.75, fontWeight: 400, lineHeight: 1.5 }}
          >
            {t(`${p}.name`)} · {t(`${p}.tagline`)}
          </Typography>
        </DialogTitle>
        <IconButton
          type="button"
          onClick={close}
          aria-label={t("landing.tariffs.closeDialogAria")}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          sx={{
            px: 2.5,
            py: 2,
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {t(`${p}.fitTitle`)}
            </Typography>
            <BulletList items={fitItems} />
            {hasFitNote ? (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, lineHeight: 1.6 }}
              >
                {fitNote}
              </Typography>
            ) : null}
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 2.5, py: 1.5 }}>
          <Button type="button" variant="contained" onClick={close} fullWidth={false}>
            {t("landing.tariffs.dialogClose")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
