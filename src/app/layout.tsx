import type { Metadata } from "next";
import { Comic_Neue, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "../index.css";

const comicNeue = Comic_Neue({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://compassiongh.org"),
  title: {
    default: "Compassion International Ghana",
    template: "%s | Compassion International Ghana",
  },
  description:
    "Compassion International Ghana partners with local churches to release children from poverty through education, healthcare, clean water, family support, and spiritual care.",
  keywords: [
    "Compassion Ghana",
    "Compassion International Ghana",
    "child sponsorship Ghana",
    "Ghana charity",
    "church partnerships Ghana",
    "child development Ghana",
  ],
  openGraph: {
    title: "Compassion International Ghana",
    description:
      "Releasing children from poverty in Jesus' name through church-driven, child-focused care across Ghana.",
    type: "website",
    locale: "en_GH",
    siteName: "Compassion International Ghana",
    images: [
      {
        url: "/assets/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "Compassion International Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compassion International Ghana",
    description:
      "Transforming children's lives in Ghana through holistic development and local church partnerships.",
    images: ["/assets/hero-1.webp"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-GH">
      <body className={`${comicNeue.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
