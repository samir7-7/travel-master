import { useState, useEffect } from 'react';
import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { elementRef, shouldAnimate } = useIntersectionObserver();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={elementRef}
      id="testimonials" 
      className="py-24 bg-gradient-primary"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${shouldAnimate ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Real experiences from real travelers who discovered the magic of Thailand with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`max-w-4xl mx-auto ${shouldAnimate ? 'animate-fade-in' : 'opacity-0'}`}>
          <Card className="border-0 shadow-strong bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-center">
              {/* Quote Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6" aria-label={`${currentTestimonial.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < currentTestimonial.rating 
                        ? 'text-sunset fill-current' 
                        : 'text-muted-foreground'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                "{currentTestimonial.comment}"
              </blockquote>

              {/* Author Info */}
              <div className="space-y-2">
                <cite className="text-xl font-bold text-foreground not-italic">
                  {currentTestimonial.name}
                </cite>
                <div className="text-muted-foreground">{currentTestimonial.location}</div>
                <div className="text-sm text-primary font-medium">
                  {currentTestimonial.package}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2" role="group" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-white/70 hover:text-white text-sm transition-colors duration-300"
              aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            >
              {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Click to {isAutoPlaying ? 'pause' : 'resume'}
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${shouldAnimate ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-xl text-white/90 mb-6">
            Ready to create your own amazing Thailand story?
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-strong hover:shadow-strong transition-all duration-300 hover:scale-105"
            aria-label="Start planning your trip"
          >
            Start Planning Your Trip
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;