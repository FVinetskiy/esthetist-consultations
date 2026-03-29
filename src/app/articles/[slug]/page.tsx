import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
} from "@/shared/config/articles";
import { ArticleDetailPageClient } from "./ArticleDetailPageClient";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getArticleBySlug(slug)) {
    notFound();
  }
  return <ArticleDetailPageClient slug={slug} />;
}
