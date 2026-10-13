"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScheduleBanner from "@/components/ScheduleBanner";
import Services from "@/components/Services";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import WorkflowSteps from "@/components/WorkflowSteps";
import BookingForm from "@/components/BookingForm";
import Reviews from "@/components/Reviews";
import AboutAndCoverage from "@/components/AboutAndCoverage";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState("standar");

  const handleSelectPackageFromPricing = (pkgId) => {
    setSelectedPackage(pkgId);
    // Smooth scroll to booking section
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16 md:pb-0">
      <Navbar />

      <main>
        <Hero />
        <ScheduleBanner />
        <Services onSelectPackage={handleSelectPackageFromPricing} />
        <BeforeAfterSlider />
        <WorkflowSteps />
        <BookingForm preselectedPackage={selectedPackage} />
        <Reviews />
        <AboutAndCoverage />
        <FAQ />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
