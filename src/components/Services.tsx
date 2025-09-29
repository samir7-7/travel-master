import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Users, 
  Car, 
  Building2, 
  Compass, 
  Phone 
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const iconMap = {
  MapPin,
  Users,
  Car,
  Building2,
  Compass,
  Phone
};

const Services = () => {
  const { elementRef, shouldAnimate } = useIntersectionObserver();

  return (
    <section 
      ref={elementRef}
      id="services" 
      className="py-24 bg-secondary/30"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${shouldAnimate ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive travel services designed to make your Thailand experience 
            seamless, authentic, and unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card 
                key={service.id}
                className={`group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft ${
                  shouldAnimate ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent 
                      className="h-8 w-8 text-white" 
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2" role="list">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="text-sm text-primary font-medium flex items-center justify-center"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" aria-hidden="true"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${shouldAnimate ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-lg text-muted-foreground mb-6">
            Ready to plan your perfect Thailand adventure?
          </p>
          <a 
            href="https://wa.me/REPLACE_WITH_WHATSAPP_NUMBER" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-success text-success-foreground rounded-lg font-semibold text-lg hover:bg-success/90 transition-colors duration-300 shadow-medium hover:shadow-strong"
            aria-label="Contact us on WhatsApp"
          >
            Contact Our Travel Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;