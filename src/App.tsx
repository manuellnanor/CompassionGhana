"use client";

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FoundationalChoices from './components/FoundationalChoices';
import AboutUs from './components/AboutUs';
import Interventions from './components/Interventions';
import StrategicGoal from './components/StrategicGoal';
import VideoSection from './components/VideoSection';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import ConsentBanner from './components/ConsentBanner';

export default function App() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [selectedCauseId, setSelectedCauseId] = useState<string | undefined>(undefined);

  const handleOpenDonate = () => {
    window.open('https://www.compassion.com/sponsor-a-child/', '_blank', 'noopener,noreferrer');
  };

  const handleOpenDonateWithCause = (causeId: string) => {
    setSelectedCauseId(causeId);
    setIsDonateOpen(true);
  };

  const handleCloseDonate = () => {
    setIsDonateOpen(false);
    setSelectedCauseId(undefined);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 select-none flex flex-col justify-between overflow-x-hidden">
      {/* Navigation Header */}
      <Header onOpenDonate={handleOpenDonate} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero banner */}
        <Hero onOpenDonate={handleOpenDonate} />

        {/* Foundational Choices (The 3Cs) */}
        <FoundationalChoices />

        {/* About Us section */}
        <AboutUs />

        {/* Program Interventions with filter hooks */}
        <Interventions onOpenDonateWithCause={handleOpenDonateWithCause} />

        {/* Strategic Target 2030 cards */}
        <StrategicGoal />

        {/* Video spotlight documentaries */}
        <VideoSection />

        {/* Strategic partner collages */}
        <Partners />

        {/* Frequently Asked Questions accordion */}
        <FAQ />
      </main>

      {/* Footer layout */}
      <Footer />

      {/* Pop-up Donation flow */}
      <DonationModal 
        isOpen={isDonateOpen} 
        onClose={handleCloseDonate} 
        selectedCauseId={selectedCauseId} 
      />
      <ConsentBanner />
    </div>
  );
}
