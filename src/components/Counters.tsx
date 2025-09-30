import { Trophy, Users, MapPin, Calendar } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCountUp } from "@/hooks/useCountUp";

const counterData = [
  {
    id: 'travelers',
    icon: Users,
    number: 500,
    suffix: '+',
    label: 'Happy Travelers',
    description: 'Satisfied customers who experienced Thailand with us'
  },
  {
    id: 'experience',
    icon: Calendar,
    number: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'Decades of expertise in Thailand tourism'
  },
  {
    id: 'destinations',
    icon: MapPin,
    number: 6,
    suffix: '+',
    label: 'Destinations',
    description: 'Amazing locations across Thailand'
  },
  {
    id: 'rating',
    icon: Trophy,
    number: 4.9,
    suffix: '★',
    label: 'Average Rating',
    description: 'Consistently excellent customer reviews'
  }
];

const Counters = () => {
  const { elementRef, shouldAnimate } = useIntersectionObserver();

  return (
    <section 
      ref={elementRef}
      id="counters" 
      className="py-20 bg-secondary/50"
      aria-labelledby="counters-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${shouldAnimate ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 id="counters-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sans">
            Trusted by Travelers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our numbers speak for themselves - join thousands of satisfied travelers 
            who have discovered Thailand with us.
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counterData.map((counter, index) => {
            const IconComponent = counter.icon;
            const count = useCountUp({ 
              end: counter.number, 
              duration: 2500,
              isActive: shouldAnimate 
            });

            return (
              <div
                key={counter.id}
                className={`text-center group ${
                  shouldAnimate ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-medium">
                  <IconComponent 
                    className="h-10 w-10 text-[#257EB1]" 
                    aria-hidden="true"
                  />
                </div>

                {/* Counter */}
                <div className="mb-4">
                  <div 
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    aria-live="polite"
                    aria-label={`${counter.number}${counter.suffix} ${counter.label}`}
                  >
                    {shouldAnimate ? count : 0}
                    <span className="text-tropical">{counter.suffix}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 font-sans">
                    {counter.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {counter.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counters;