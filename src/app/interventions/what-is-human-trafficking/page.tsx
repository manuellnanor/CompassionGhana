import type { Metadata } from "next";
import HumanTraffickingStoryPage from "../../../components/HumanTraffickingStoryPage";

export const metadata: Metadata = {
  title: "What Is Human Trafficking?",
  description:
    "Learn how human trafficking affects children, why poverty increases risk, and how Compassion's local church partners help protect children.",
  alternates: {
    canonical: "/interventions/what-is-human-trafficking",
  },
  openGraph: {
    title: "What Is Human Trafficking?",
    description:
      "A Compassion Ghana intervention story about child protection, trafficking prevention, and local church care.",
    images: [
      {
        url: "/assets/human-trafficking-header.jpg",
        width: 1920,
        height: 1080,
        alt: "Young person standing in silhouette",
      },
    ],
  },
};

export default function HumanTrafficking() {
  return <HumanTraffickingStoryPage />;
}
