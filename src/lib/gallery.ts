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

/** Rolling strip on Početna — food + sushi mix */
export const homeFoodStrip = [
  susi[0],
  hrana[0],
  susi[2],
  hrana[5],
  susi[5],
  hrana[2],
  susi[8],
  hrana[8],
  susi[3],
  hrana[10],
  susi[10],
  hrana[3],
];
