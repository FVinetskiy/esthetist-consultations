"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/shared/config/articles";
import { getArticleContent, getCoverAlt } from "@/shared/config/articles";
import type { AppLocale } from "@/entities/locale";

type ArticleCardProps = {
  article: Article;
  locale: AppLocale;
};

export function ArticleCard({ article, locale }: ArticleCardProps) {
  const c = getArticleContent(article, locale);
  const alt = getCoverAlt(article, locale);

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",
        minHeight: { xs: "auto", sm: 400, md: 428 },
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-4px)",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "&:hover": { transform: "none" },
        },
      }}
    >
      <CardActionArea
        component={Link}
        href={`/articles/${article.slug}`}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          minHeight: 0,
        }}
      >
        <BoxImage src={article.coverSrc} alt={alt} />
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: 2.5,
            minHeight: 0,
          }}
        >
          <Typography
            variant="overline"
            color="primary"
            sx={{ mb: 0.5, flexShrink: 0 }}
          >
            {article.readMin} {locale === "ru" ? "мин" : "min"}
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              mb: 1,
              flexShrink: 0,
              color: (theme) => theme.palette.brand?.heading ?? "text.primary",
              fontSize: "1.1rem",
              lineHeight: 1.35,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
            }}
          >
            {c.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.55,
              flex: 1,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
            }}
          >
            {c.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function BoxImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Box sx={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
