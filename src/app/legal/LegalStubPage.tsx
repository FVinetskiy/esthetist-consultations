"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

type LegalStubPageProps = {
  titleKey: string;
};

export function LegalStubPage({ titleKey }: LegalStubPageProps) {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, sm: 3 } }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 2, color: (th) => th.palette.brand.heading }}
      >
        {t(titleKey)}
      </Typography>
      <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
        {t("pages.legalStub.body")}
      </Typography>
    </Container>
  );
}
