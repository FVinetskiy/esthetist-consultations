import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
} from "@/shared/config/articles";
import { getCanonicalPath, getSiteUrl } from "@/shared/config/site-url";
import { ArticleDetailPageClient } from "./ArticleDetailPageClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {};
  }
  const title = article.ru.title;
  const description = article.ru.excerpt;
  const url = `${getSiteUrl()}/articles/${slug}`;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: getCanonicalPath(`/articles/${slug}`),
    },
    openGraph: {
      type: "article",
      locale: "ru_RU",
      url,
      title,
      description,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getArticleBySlug(slug)) {
    notFound();
  }
  return <ArticleDetailPageClient slug={slug} />;
}
