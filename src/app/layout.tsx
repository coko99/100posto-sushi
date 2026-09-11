import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "100% Sushi Bar — Uskoro",
  description:
    "100% Sushi Bar. Sveže. Precizno. Uskoro otvaramo — coming soon.",
  openGraph: {
    title: "100% Sushi Bar — Uskoro",
    description: "Sveže. Precizno. Uskoro otvaramo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
