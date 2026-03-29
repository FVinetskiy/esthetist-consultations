"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { getAllArticles } from "@/shared/config/articles";
import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";
import { useAppSelector } from "@/shared/lib/store";
import { ArticleCard } from "@/widgets/articles";

export default function ArticlesPage() {
  const { t } = useTranslation();
  const locale = useAppSelector((s) => s.locale.locale);
  const articles = getAllArticles();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 3 } }}>
      <RevealOnScroll>
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ color: (theme) => theme.palette.brand.heading }}
          >
            {t("pages.articles.title")}
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 640 }}>
            {t("pages.articles.lead")}
          </Typography>
        </Stack>
      </RevealOnScroll>
      <Grid container spacing={{ xs: 3, md: 4 }} columns={12} alignItems="flex-start">
        {articles.map((article, index) => (
          <Grid
            key={article.slug}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              display: "flex",
              pt: {
                xs: 0,
                sm: (index % 2) * 2.5,
                md: (index % 3) * 3.25,
              },
            }}
          >
            <RevealOnScroll
              delayMs={index * 45}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                minHeight: 0,
              }}
            >
              <ArticleCard article={article} locale={locale} />
            </RevealOnScroll>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
