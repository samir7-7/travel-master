import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-thailand.webp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Hero = () => {
  const { elementRef, shouldAnimate } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed parallax-slow"
        style={
          {
            backgroundImage: `url(${heroImage})`,
          } as React.CSSProperties
        }
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-slate-900 opacity-65"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div
          className={`max-w-4xl mx-auto space-y-8 ${
            shouldAnimate ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-20 md:mt-0 lg:mt-0 font-sans">
              Discover the
              <span className="block bg-gradient-to-r from-tropical-light to-sunset bg-clip-text text-transparent">
                Magic of Thailand
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Experience authentic Thai culture, pristine beaches, and
              unforgettable adventures with our expert-guided tour packages.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#packages">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg shadow-strong transition-all duration-300 hover:scale-105"
                aria-label="Explore tour packages"
              >
                Explore Packages
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:text-white"
              aria-label="Watch destination video"
            >
              <Play className="mr-2 h-5 w-5" aria-hidden="true" />
              Watch Video
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-tropical-light">
                5000+
              </div>
              <div className="text-white/80">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tropical-light">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tropical-light">6+</div>
              <div className="text-white/80">Destinations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
