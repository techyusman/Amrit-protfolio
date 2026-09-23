import type { SiteConfig } from "@/types/content";
import { images } from "./images";

export const site: SiteConfig = {
  name: "Chef Amrit Pal Singh",
  shortName: "Amrit Pal Singh",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://chefamritpalsingh.com",
  description:
    "Chef Amrit Pal Singh, owner and head chef of Michelin Bib Gourmand–awarded Angel Indian Restaurant in Jackson Heights, Queens. Private dining, tasting menus and bespoke culinary experiences rooted in India.",
  locale: "en_US",
  restaurant: {
    name: "Angel Indian Restaurant",
    address: {
      street: "75-18 37th Ave",
      city: "Jackson Heights",
      region: "NY",
      postal: "11372",
      country: "US",
    },
    // TODO: confirm the exact Resy listing URL with the chef.
    resyUrl: "https://resy.com/cities/new-york-ny/venues/angel-indian-restaurant",
    menuUrl: "https://www.angelindianrestaurant.com/menu",
    mapsUrl: "https://maps.google.com/?q=Angel+Indian+Restaurant+75-18+37th+Ave+Jackson+Heights+NY+11372",
    hours: "Dinner only",
    notes: ["Predominantly vegetarian", "100% Halal", "Full bar", "Chef's tasting menu"],
  },
  social: {
    // TODO: add verified handles.
  },
  cta: { label: "Book a Private Experience", href: "/contact" },
  thankYou: {
    // TODO: record a 20–30 second clip of Chef Amrit and drop it at public/video/chef-thank-you.mp4
    videoUrl: "/video/chef-thank-you.mp4",
    poster: images.chefPlating,
    headline: "A message from Chef Amrit",
    message:
      "Thank you for thinking of me for your occasion. I read every enquiry myself, and I will be in touch within two working days to talk about your guests, your setting and the menu I would love to cook for you.",
  },
};
