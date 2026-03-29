import { ARTICLES } from "./data";
import type { Article, ArticleLocaleContent } from "./types";
import type { AppLocale } from "@/entities/locale";

export type { Article, ArticleLocaleContent, ArticleSection } from "./types";
export { ARTICLES } from "./data";

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticleContent(
  article: Article,
  locale: AppLocale,
): ArticleLocaleContent {
  return locale === "en" ? article.en : article.ru;
}

export function getCoverAlt(article: Article, locale: AppLocale): string {
  return locale === "en" ? article.coverAltEn : article.coverAltRu;
}
