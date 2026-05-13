import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MarketplacePreview } from "@/components/MarketplacePreview";
import { AngolaQuotes } from "@/components/AngolaQuotes";
import { ImpactStories } from "@/components/ImpactStories";
import { DeliverySimulator } from "@/components/DeliverySimulator";
import { TrackingMap } from "@/components/TrackingMap";
import { Testimonials } from "@/components/Testimonials";
import { Mission } from "@/components/Mission";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Mission />
        <HowItWorks />
        <AngolaQuotes />
        <ImpactStories />
        <MarketplacePreview />
        <DeliverySimulator />
        <TrackingMap />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
