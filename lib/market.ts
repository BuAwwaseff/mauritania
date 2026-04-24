import type { Metadata } from "next";

export const marketBrand = {
  parent: "Melbet",
  name: "MR Partner",
  network: "Mauritania Partnership Network",
} as const;

export const marketRoutes = {
  home: "/",
  homeSports: "/#sports",
  homeCasino: "/#casino",
  homePromos: "/#promos",
  partnership: "/partnership",
  benefits: "/partnership#benefits",
  steps: "/partnership#how-it-works",
  partnershipPaths: "/partnership#partnership",
  cta: "/partnership#cta",
} as const;

export const marketContactLinks = {
  telegram: "https://t.me/MRPartner",
  whatsapp: "https://wa.me/22200000000",
} as const;

export const marketMetadata: Metadata = {
  title: `${marketBrand.name} - ${marketBrand.network}`,
  description:
    "Join Mauritania's leading financial partnership network. Earn commissions as an agent or grow your business as a partner.",
  openGraph: {
    title: `${marketBrand.name} - ${marketBrand.network}`,
    description: "Join Mauritania's leading financial partnership network.",
    locale: "ar_MR",
    alternateLocale: ["en_US", "fr_MR"],
  },
};

export const homeMetadata: Metadata = {
  title: "Melbet Mauritania - Sports, Casino, Promos and Gifts",
  description:
    "Explore the Mauritania player hub for sports, casino games, weekly promos, and player gifts.",
  openGraph: {
    title: "Melbet Mauritania - Player Hub",
    description: "Sports, casino games, promos, and gifts for players in Mauritania.",
    locale: "ar_MR",
    alternateLocale: ["en_US", "fr_MR"],
  },
};
