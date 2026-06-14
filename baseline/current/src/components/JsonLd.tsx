import Script from "next/script";

export function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nemo Agent",
    url: "https://nemoagent.ru",
    logo: "https://nemoagent.ru/logo-mark.svg",
    description: "Подписочный ИИ-агент на базе Hermes Agent для бизнеса. Работает на вашем VPS, общается через Telegram.",
    sameAs: [
      "https://t.me/nemo_agent_bot",
      "https://t.me/nemo_agent_news",
      "https://github.com/shekelstrong",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@nemoagent.ru",
      availableLanguage: ["Russian"],
    },
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Nemo Agent",
    description: "ИИ-агент для автоматизации бизнес-процессов в Telegram. Продажи, поддержка, маркетинг, HR, аналитика.",
    brand: { "@type": "Brand", name: "Nemo Agent" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "RUB",
      lowPrice: "2990",
      highPrice: "12990",
      offerCount: "5",
      offers: [
        { "@type": "Offer", name: "Start", price: "2990", priceCurrency: "RUB" },
        { "@type": "Offer", name: "Pro", price: "5990", priceCurrency: "RUB" },
        { "@type": "Offer", name: "Business", price: "12990", priceCurrency: "RUB" },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nemo Agent",
    url: "https://nemoagent.ru",
    inLanguage: "ru-RU",
  };

  return (
    <Script id="json-ld" type="application/ld+json" strategy="beforeInteractive">
      {JSON.stringify([org, product, website])}
    </Script>
  );
}
