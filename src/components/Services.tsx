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
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">
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
                      className="h-8 w-8 text-gray-800 group-hover:text-blue-800" 
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
      </div>
    </section>
  );
};

export default Services;