import type { Metadata } from "next";
import LeadersPage from "../../components/LeadersPage";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the Compassion International Ghana management team and governing council members.",
  alternates: {
    canonical: "/leaders",
  },
};

export default function Leaders() {
  return <LeadersPage />;
}
