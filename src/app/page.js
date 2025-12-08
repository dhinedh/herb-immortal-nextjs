import HeroSection from '@/components/HeroSection';
import StickyNav from '@/components/StickyNav';
import FeaturesSection from '@/components/FeaturesSection';
import ServicesSection from '@/components/ServicesSection';
import MedicationSection from '@/components/MedicationSection';
import HealthcareSection from '@/components/HealthcareSection';
import CommunitySection from '@/components/CommunitySection';
import VendorPartnership from '@/components/VendorPartnership';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      <div id="hero-section">
        <HeroSection />
      </div>
      <StickyNav />
      <div id="services-section">
        <FeaturesSection />
        <ServicesSection />
        <MedicationSection />
        <HealthcareSection />
      </div>
      <div id="vendor-section">
        <VendorPartnership />
      </div>
      <div id="waitlist-section">
        <CommunitySection />
      </div>
      <Footer />
    </div>
  );
}