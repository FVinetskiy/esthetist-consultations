"use client";

import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useId, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export type HomeCareAnketaModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmitted?: () => void;
};

type HomeCareFormValues = {
  name: string;
  contact: string;
  ageRange: string;
  skinType: string;
  concerns: string;
  allergies: string;
  budget: string;
};

export function HomeCareAnketaModal({
  open,
  onClose,
  onSubmitted,
}: HomeCareAnketaModalProps) {
  const { t } = useTranslation();
  const titleId = useId();
  const p = "pages.ankety.homeForm";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HomeCareFormValues>({
    defaultValues: {
      name: "",
      contact: "",
      ageRange: "",
      skinType: "",
      concerns: "",
      allergies: "",
      budget: "",
    },
  });

  const ageOptions = ["under25", "25_35", "35_45", "45plus"] as const;
  const skinOptions = ["dry", "oily", "combo", "sensitive", "unsure"] as const;

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data: HomeCareFormValues) => {
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
            <Controller
              name="ageRange"
              control={control}
              rules={{ required: t("pages.ankety.validation.required") }}
              render={({ field }) => (
                <FormControl fullWidth required error={!!errors.ageRange} disabled={isSubmitting}>
                  <InputLabel id={`${titleId}-age`}>{t(`${p}.ageRange`)}</InputLabel>
                  <Select
                    {...field}
                    labelId={`${titleId}-age`}
                    label={t(`${p}.ageRange`)}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      <em>{t(`${p}.selectPlease`)}</em>
                    </MenuItem>
                    {ageOptions.map((key) => (
                      <MenuItem key={key} value={key}>
                        {t(`${p}.age.${key}`)}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.ageRange && (
                    <FormHelperText>{errors.ageRange.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
            <Controller
              name="skinType"
              control={control}
              rules={{ required: t("pages.ankety.validation.required") }}
              render={({ field }) => (
                <FormControl fullWidth required error={!!errors.skinType} disabled={isSubmitting}>
                  <InputLabel id={`${titleId}-skin`}>{t(`${p}.skinType`)}</InputLabel>
                  <Select
                    {...field}
                    labelId={`${titleId}-skin`}
                    label={t(`${p}.skinType`)}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      <em>{t(`${p}.selectPlease`)}</em>
                    </MenuItem>
                    {skinOptions.map((key) => (
                      <MenuItem key={key} value={key}>
                        {t(`${p}.skin.${key}`)}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.skinType && (
                    <FormHelperText>{errors.skinType.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
            <TextField
              {...register("concerns", {
                required: t("pages.ankety.validation.required"),
                minLength: { value: 10, message: t("pages.ankety.validation.minLength", { n: 10 }) },
              })}
              label={t(`${p}.concerns`)}
              required
              fullWidth
              multiline
              minRows={3}
              disabled={isSubmitting}
              error={!!errors.concerns}
              helperText={errors.concerns?.message}
            />
            <TextField
              {...register("allergies")}
              label={t(`${p}.allergies`)}
              fullWidth
              multiline
              minRows={2}
              disabled={isSubmitting}
            />
            <TextField {...register("budget")} label={t(`${p}.budget`)} fullWidth disabled={isSubmitting} />
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
