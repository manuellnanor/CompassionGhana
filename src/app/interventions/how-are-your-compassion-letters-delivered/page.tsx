import type { Metadata } from "next";
import LettersDeliveredStoryPage from "../../../components/LettersDeliveredStoryPage";

export const metadata: Metadata = {
  title: "How Are Your Compassion Letters Delivered?",
  description:
    "Follow the journey of sponsor letters in Ghana, from office checks and collation centers to motorbike rides, river crossings, and children receiving encouragement.",
  alternates: {
    canonical: "/interventions/how-are-your-compassion-letters-delivered",
  },
  openGraph: {
    title: "How Are Your Compassion Letters Delivered?",
    description:
      "A Compassion Ghana story about sponsor correspondence, local staff dedication, and the journey letters take to reach children.",
    images: [
      {
        url: "/assets/letters-delivered-children.jpg",
        width: 1600,
        height: 1067,
        alt: "Children gathered as a Compassion letter is delivered",
      },
    ],
  },
};

export default function LettersDelivered() {
  return <LettersDeliveredStoryPage />;
}
