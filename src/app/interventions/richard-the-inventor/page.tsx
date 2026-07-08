import type { Metadata } from "next";
import RichardInventorStoryPage from "../../../components/RichardInventorStoryPage";

export const metadata: Metadata = {
  title: "Richard the Inventor",
  description:
    "Read how Richard, an innovative teenager in Ghana, is developing his God-given talent through encouragement, mentoring, and technical education.",
  alternates: {
    canonical: "/interventions/richard-the-inventor",
  },
  openGraph: {
    title: "Richard the Inventor",
    description:
      "A Compassion Ghana youth development story about innovation, mentoring, and technical education.",
    images: [
      {
        url: "/assets/richard-inventor-radio.jpg",
        width: 1366,
        height: 768,
        alt: "Richard smiling beside a handmade radio",
      },
    ],
  },
};

export default function RichardTheInventor() {
  return <RichardInventorStoryPage />;
}
