import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Noto_Sans_JP, Outfit } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
});

const jp = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "100% Sushi Bar — Uskoro",
  description:
    "100% Sushi Bar. Sveže. Precizno. Uskoro otvaramo — coming soon.",
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "100% Sushi Bar — Uskoro",
    description: "Sveže. Precizno. Uskoro otvaramo.",
    type: "website",
    images: [{ url: "/images/logo.jpg" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${display.variable} ${body.variable} ${mono.variable} ${jp.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
