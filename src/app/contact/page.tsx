import type { Metadata } from "next";
import ContactPage from "../../components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Compassion International Ghana for sponsorship, donations, church partnerships, media requests, and program enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
