import type { Metadata } from "next";
import ChurchPartnersPage from "../../components/ChurchPartnersPage";

export const metadata: Metadata = {
  title: "Church Partners",
  description:
    "Learn how churches can partner with Compassion International Ghana and explore participating denominations.",
  alternates: {
    canonical: "/church-partners",
  },
};

export default function ChurchPartners() {
  return <ChurchPartnersPage />;
}
