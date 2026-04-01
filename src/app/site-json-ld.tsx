import { getSiteUrl } from "@/shared/config/site-url";

const SITE_NAME = "Консультации по подбору ухода за кожей";
const DESCRIPTION =
  "Персональные схемы ухода без универсальных рекомендаций и перегруза: консультации косметолога-эстетиста, разбор составов (INCI), спокойный формат.";

export function SiteJsonLd() {
  const url = getSiteUrl();
  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: SITE_NAME,
        description: DESCRIPTION,
        url,
        inLanguage: "ru-RU",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#business`,
        name: SITE_NAME,
        description: DESCRIPTION,
        url,
        areaServed: { "@type": "Country", name: "Россия" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
