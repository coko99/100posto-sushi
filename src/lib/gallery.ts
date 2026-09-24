export type GalleryCategory = {
  id: string;
  label: string;
  images: { src: string; alt: string }[];
};

const ambijent = [
  "COK01621",
  "COK01625",
  "COK01630",
  "COK01634",
  "COK01638",
  "COK01642",
  "COK01646",
  "COK01650",
  "COK01654",
  "COK01658",
  "COK01662",
  "COK01666",
  "COK01670",
].map((id) => ({
  src: `/images/gallery/ambijent/${id}.jpg`,
  alt: "Ambijent 100% Sushi Bar",
}));

const basta = [
  "COK01759",
  "COK01760",
  "COK01761",
  "COK01762",
  "COK01763",
  "COK01764",
].map((id) => ({
  src: `/images/gallery/basta/${id}.jpg`,
  alt: "Bašta 100% Sushi Bar",
}));

const hrana = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/gallery/hrana/hrana-${n}.jpg`,
    alt: "Jelo iz 100% Sushi Bar",
  };
});

const susi = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/gallery/susi/susi-${n}.jpg`,
    alt: "Suši iz 100% Sushi Bar",
  };
});

export const galleryCategories: GalleryCategory[] = [
  { id: "susi", label: "Suši", images: susi },
  { id: "hrana", label: "Hrana", images: hrana },
  { id: "ambijent", label: "Ambijent", images: ambijent },
  { id: "basta", label: "Bašta", images: basta },
];

/** Rolling strip on Početna — prava jela iz menija */
export const homeFoodStrip = [
  { src: "/images/menu/dragon-roll.jpg", alt: "Dragon roll" },
  { src: "/images/menu/chicken-teriyaki-bao.jpg", alt: "Bao bun" },
  { src: "/images/menu/beef-ramen.jpg", alt: "Beef ramen" },
  { src: "/images/menu/beef-teriyaki.jpg", alt: "Beef teriyaki" },
  { src: "/images/menu/philadelphia-roll.jpg", alt: "Philadelphia roll" },
  { src: "/images/menu/spicy-beef-bao.jpg", alt: "Spicy beef bao" },
  { src: "/images/menu/tori-katsu.jpg", alt: "Tori katsu" },
  { src: "/images/menu/rainbow-roll.jpg", alt: "Rainbow roll" },
  { src: "/images/menu/mango-shrimp-bao.jpg", alt: "Mango shrimp bao" },
  { src: "/images/menu/thai-yellow-curry.jpg", alt: "Thai yellow curry" },
  { src: "/images/menu/crispy-shrimps.jpg", alt: "Crispy shrimps" },
  { src: "/images/menu/volcano-roll.jpg", alt: "Volcano roll" },
];
