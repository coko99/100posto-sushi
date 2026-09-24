/** Central contact / delivery links */
export const siteContact = {
  phoneDisplay: "065 560 50 16",
  phoneHref: "tel:+381655605016",
  whatsappHref: "https://wa.me/381655605016",
  whatsappMessage: "Zdravo! Interesuje me rezervacija / porudžbina.",
  /** Swap to restaurant-specific pages when confirmed */
  woltHref: "https://wolt.com/",
  dingDongHref: "https://dingdong.rs/",
  hours: "Svaki dan: 08:00 – 00:00",
  hoursLines: ["Svaki dan: 08:00 – 00:00"] as const,
  address: "Kosančićeva 25, Kruševac",
  email: "info@100posto-sushi.rs",
} as const;

export function whatsappUrl(): string {
  const text = encodeURIComponent(siteContact.whatsappMessage);
  return `${siteContact.whatsappHref}?text=${text}`;
}
