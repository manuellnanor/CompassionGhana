import type { Metadata } from "next";
import AboutPage from "../../components/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Compassion International Ghana's church-driven, child-focused ministry and holistic development work across Ghana.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return <AboutPage />;
}
