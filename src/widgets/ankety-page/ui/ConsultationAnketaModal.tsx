"use client";

import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export type ConsultationAnketaModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmitted?: () => void;
};

type ConsultFormValues = {
  name: string;
  contact: string;
  goals: string;
  routine: string;
  extra: string;
};

export function ConsultationAnketaModal({
  open,
  onClose,
  onSubmitted,
}: ConsultationAnketaModalProps) {
  const { t } = useTranslation();
  const titleId = useId();
  const p = "pages.ankety.consultForm";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultFormValues>({
    defaultValues: {
      name: "",
      contact: "",
      goals: "",
      routine: "",
      extra: "",
    },
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data: ConsultFormValues) => {
    void data;
    setIsSubmitting(true);
    try {
      reset();
      onClose();
      onSubmitted?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby={titleId}
      scroll="paper"
    >
      <DialogTitle
        id={titleId}
        sx={{
          pr: 5,
          color: (theme) => theme.palette.brand.heading,
          typography: "h6",
          fontWeight: 600,
        }}
      >
        {t(`${p}.title`)}
        <IconButton
          aria-label={t(`${p}.closeAria`)}
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
          disabled={isSubmitting}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogContent dividers>
          <Stack spacing={2.25}>
            <Alert severity="info" variant="outlined" sx={{ borderRadius: 2 }}>
              <Typography variant="body2">{t(`${p}.hint`)}</Typography>
            </Alert>
            <TextField
              {...register("name", {
                required: t("pages.ankety.validation.required"),
                minLength: { value: 2, message: t("pages.ankety.validation.minLength", { n: 2 }) },
              })}
              label={t(`${p}.name`)}
              required
              fullWidth
              autoComplete="name"
              disabled={isSubmitting}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              {...register("contact", {
                required: t("pages.ankety.validation.required"),
                minLength: { value: 3, message: t("pages.ankety.validation.minLength", { n: 3 }) },
              })}
              label={t(`${p}.contact`)}
              required
              fullWidth
              autoComplete="tel"
              placeholder={t(`${p}.contactPlaceholder`)}
              disabled={isSubmitting}
              error={!!errors.contact}
              helperText={errors.contact?.message}
            />
            <TextField
              {...register("goals", {
                required: t("pages.ankety.validation.required"),
                minLength: { value: 10, message: t("pages.ankety.validation.minLength", { n: 10 }) },
              })}
              label={t(`${p}.goals`)}
              required
              fullWidth
              multiline
              minRows={3}
              disabled={isSubmitting}
              error={!!errors.goals}
              helperText={errors.goals?.message}
            />
            <TextField
              {...register("routine")}
              label={t(`${p}.routine`)}
              fullWidth
              multiline
              minRows={2}
              disabled={isSubmitting}
            />
            <TextField
              {...register("extra")}
              label={t(`${p}.extra`)}
              fullWidth
              multiline
              minRows={2}
              disabled={isSubmitting}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2, gap: 1 }}>
          <Button type="button" color="inherit" onClick={handleClose} disabled={isSubmitting}>
            {t(`${p}.cancel`)}
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            loading={isSubmitting}
            loadingPosition="start"
          >
            {t(`${p}.submit`)}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
