"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  getArticleBySlug,
  getArticleContent,
  getCoverAlt,
} from "@/shared/config/articles";
import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";
import { useAppSelector } from "@/shared/lib/store";

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const article = getArticleBySlug(slug);
  const locale = useAppSelector((s) => s.locale.locale);
  const { t } = useTranslation();

  if (!article) {
    notFound();
  }

  const c = getArticleContent(article, locale);
  const alt = getCoverAlt(article, locale);

  return (
    <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, sm: 3 } }}>
      <RevealOnScroll>
        <Button
          component={Link}
          href="/articles"
          startIcon={<ArrowBackIcon />}
          color="inherit"
          sx={{ mb: 3 }}
        >
          {t("pages.articles.backToList")}
        </Button>
      </RevealOnScroll>

      <RevealOnScroll>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: 2,
            overflow: "hidden",
            mb: 3,
            boxShadow: (theme) => (theme.palette.mode === "light" ? 2 : 6),
          }}
        >
          <Image
            src={article.coverSrc}
            alt={alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </RevealOnScroll>

      <RevealOnScroll delayMs={40}>
        <Typography variant="overline" color="primary">
          {article.readMin} {t("pages.articles.readTime")}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{ mt: 0.5, mb: 2, color: (theme) => theme.palette.brand.heading }}
        >
          {c.title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ mb: 4, lineHeight: 1.6 }}
        >
          {c.excerpt}
        </Typography>
      </RevealOnScroll>

      <Stack spacing={4} component="article">
        {c.sections.map((section, index) => (
          <RevealOnScroll key={section.heading} delayMs={Math.min(index * 35, 120)}>
            <Stack spacing={1.5}>
              <Typography variant="h5" component="h2" sx={{ fontSize: "1.25rem" }}>
                {section.heading}
              </Typography>
              {section.paragraphs.map((para) => (
                <Typography
                  key={para.slice(0, 60)}
                  variant="body1"
                  color="text.secondary"
                  lineHeight={1.75}
                >
                  {para}
                </Typography>
              ))}
            </Stack>
          </RevealOnScroll>
        ))}
      </Stack>
    </Container>
  );
}
