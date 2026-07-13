"use client";

import { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DonationModal from "./DonationModal";
import ConsentBanner from "./ConsentBanner";

interface RoutePageShellProps {
  children: ReactNode;
}

export default function RoutePageShell({ children }: RoutePageShellProps) {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const handleCloseDonate = () => {
    setIsDonateOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 select-none flex flex-col justify-between overflow-x-hidden">
      <Header onOpenDonate={() => { window.open('https://www.compassion.com/sponsor-a-child/', '_blank', 'noopener,noreferrer'); }} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <DonationModal isOpen={isDonateOpen} onClose={handleCloseDonate} />
      <ConsentBanner />
    </div>
  );
}
