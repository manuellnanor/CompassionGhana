import type { Metadata } from "next";
import InterventionStoryPage from "../../../components/InterventionStoryPage";

export const metadata: Metadata = {
  title: "A Sponsor's Gift Changed This Family's Life",
  description:
    "Read how sponsor generosity helped a Ghanaian family rebuild stability through a small store and practical family support.",
  alternates: {
    canonical: "/interventions/a-sponsors-gift-changed-this-familys-life",
  },
  openGraph: {
    title: "A Sponsor's Gift Changed This Family's Life",
    description:
      "A Compassion Ghana intervention story about family resilience, sponsor generosity, and practical support.",
    images: [
      {
        url: "/assets/sponsor-gift-story-header.jpg",
        width: 1200,
        height: 800,
        alt: "Young girl standing in a family grocery store in Ghana",
      },
    ],
  },
};

export default function SponsorGiftStory() {
  return <InterventionStoryPage />;
}
