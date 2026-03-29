export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type ArticleLocaleContent = {
  title: string;
  excerpt: string;
  sections: ArticleSection[];
};

export type Article = {
  slug: string;
  coverSrc: string;
  coverAltRu: string;
  coverAltEn: string;
  readMin: number;
  ru: ArticleLocaleContent;
  en: ArticleLocaleContent;
};
