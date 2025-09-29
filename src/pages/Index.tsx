import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import WhyChoose from "@/components/WhyChoose";
import MasterAcrossThailand from "@/components/MasterAcrossThailand";
import Testimonials from "@/components/Testimonials";
import Counters from "@/components/Counters";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Connect from "@/components/Connect";
import { useEffect } from "react";

const Index = () => {
  // SEO and performance optimizations
  useEffect(() => {
    // Preload critical images
    const heroImage = new Image();
    heroImage.src = '/src/assets/hero-thailand.jpg';
    
    // Set page title for better SEO
    document.title = 'Travel Master Thailand | Expert Thailand Travel & Tour Packages';
    
    // Add skip to content link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    return () => {
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main id="main-content" role="main">
        <Hero />
        <WhyChoose />
        <Services />
        <Packages />
        <MasterAcrossThailand />
        <Counters />
        <Connect/>
        <Testimonials />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
