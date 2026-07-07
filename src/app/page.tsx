import App from "../App";

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Compassion International Ghana",
    url: "https://compassiongh.org",
    logo: "https://compassiongh.org/assets/logo-header.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st & 2nd Floors, Seed House, 33 Westland Boulevard, Madina - New Road",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    email: "info.compassionghana@gh.ci.org",
    telephone: "+233202642506",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <App />
    </>
  );
}
