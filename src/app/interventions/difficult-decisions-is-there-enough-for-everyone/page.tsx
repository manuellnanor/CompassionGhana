import type { Metadata } from "next";
import DifficultDecisionsStoryPage from "../../../components/DifficultDecisionsStoryPage";

export const metadata: Metadata = {
  title: "Difficult Decisions: Is There Enough For Everyone?",
  description:
    "Read how emergency food packs support Ghanaian families facing rising food costs through Compassion's local church partners.",
  alternates: {
    canonical: "/interventions/difficult-decisions-is-there-enough-for-everyone",
  },
  openGraph: {
    title: "Difficult Decisions: Is There Enough For Everyone?",
    description:
      "A Compassion Ghana intervention story about emergency food packs, family resilience, and local church support.",
    images: [
      {
        url: "/assets/difficult-decisions-header.jpg",
        width: 1200,
        height: 800,
        alt: "Mother and child standing together in Ghana",
      },
    ],
  },
};

export default function DifficultDecisions() {
  return <DifficultDecisionsStoryPage />;
}
