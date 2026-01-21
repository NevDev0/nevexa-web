// data/results.ts

export type ResultItem = {
  id: number;
  image: string;
  caption: string;
  tag?: string;
};

export const results: ResultItem[] = [
  {
    id: 1,
    image: "/hero-poster.jpg", // placeholder
    tag: "Inspection — Canada",
    caption: "Pre-delivery inspection completed in Toronto, Canada",
  },
  {
    id: 2,
    image: "/hero-poster.jpg", // placeholder
    tag: "Shipping — Canada to Africa",
    caption: "Cadillac coordinated from Montreal, Canada to Abidjan, Ivory Coast",
  },
  {
    id: 3,
    image: "/hero-poster.jpg", // placeholder
    tag: "B2C — Nigeria",
    caption:
      "Lexus RX delivered to a client in Lagos, Nigeria",
  },
];

  