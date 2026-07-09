import type { Metadata } from "next";
import ReportsPage from "../../components/ReportsPage";

export const metadata: Metadata = {
  title: "Reports",
  description:
    "Download Compassion International Ghana annual reports, newsletters, policy briefs, and research publications.",
  alternates: {
    canonical: "/reports",
  },
};

export default function Reports() {
  return <ReportsPage />;
}
