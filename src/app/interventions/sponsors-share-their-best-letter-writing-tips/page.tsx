import type { Metadata } from "next";
import LetterWritingTipsStoryPage from "../../../components/LetterWritingTipsStoryPage";

export const metadata: Metadata = {
  title: "Sponsors Share Their Best Letter Writing Tips",
  description:
    "Practical sponsor letter writing tips that help children feel remembered, encouraged, and connected through Compassion sponsorship.",
  alternates: {
    canonical: "/interventions/sponsors-share-their-best-letter-writing-tips",
  },
  openGraph: {
    title: "Sponsors Share Their Best Letter Writing Tips",
    description:
      "A Compassion story about sponsor correspondence, encouragement, photos, prayer, and simple ways to write meaningful letters.",
    images: [
      {
        url: "/assets/letter-writing-tips-unexpected-gift.jpeg",
        width: 2048,
        height: 1371,
        alt: "Child holding a sponsor photo frame",
      },
    ],
  },
};

export default function LetterWritingTips() {
  return <LetterWritingTipsStoryPage />;
}
