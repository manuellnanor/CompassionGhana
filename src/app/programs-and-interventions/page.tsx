import type { Metadata } from "next";
import ProgramsInterventionsPage from "../../components/ProgramsInterventionsPage";

export const metadata: Metadata = {
  title: "Programs & Interventions",
  description:
    "Explore Compassion International Ghana's program interventions and stories of holistic child development through local church partners.",
  alternates: {
    canonical: "/programs-and-interventions",
  },
};

export default function ProgramsAndInterventions() {
  return <ProgramsInterventionsPage />;
}
