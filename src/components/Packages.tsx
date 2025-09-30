import { useState } from 'react';
import { travelPackages, packageCategories } from "@/data/packages";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  MapPin, 
  Star, 
  Globe, 
  Building2, 
  Waves, 
  Mountain,
  ArrowRight 
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import packageBangkok from "@/assets/package-bangkok.jpg";
import packageIslands from "@/assets/package-islands.jpg";
import packageTemple from "@/assets/package-temple.jpg";

const iconMap = {
  Globe,
  Building2,
  Waves,
  Mountain
};

const imageMap = {
  'package-bangkok': packageBangkok,
  'package-islands': packageIslands,
  'package-temple': packageTemple
};

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { elementRef, shouldAnimate } = useIntersectionObserver();

  const filteredPackages = activeCategory === 'all' 
    ? travelPackages 
    : travelPackages.filter(pkg => pkg.category === activeCategory);

  return (
    <section 
      ref={elementRef}
      id="packages" 
      className="py-24 bg-background"
      aria-labelledby="packages-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${shouldAnimate ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 id="packages-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">
            Our Thailand Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully crafted experiences that showcase the best of Thailand, 
            from bustling cities to pristine beaches and ancient temples.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${shouldAnimate ? 'animate-fade-in' : 'opacity-0'}`}>
          {packageCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const isActive = activeCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-medium' 
                    : 'hover:bg-accent hover:shadow-soft'
                }`}
                aria-pressed={isActive}
                aria-label={`Filter by ${category.name}`}
              >
                <IconComponent className="h-4 w-4" aria-hidden="true" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className={`group overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border-0 shadow-medium ${
                shouldAnimate ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Package Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={imageMap[pkg.image as keyof typeof imageMap]} 
                  alt={`${pkg.title} - ${pkg.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
                
                {/* Category Badge */}
                <Badge 
                  className="absolute top-4 left-4 bg-primary text-primary-foreground capitalize"
                  aria-label={`Category: ${pkg.category}`}
                >
                  {pkg.category}
                </Badge>

                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="text-lg font-bold text-primary">{pkg.price}</div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title & Duration */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Highlights:</h4>
                  <ul className="space-y-1" role="list">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <Star className="h-3 w-3 text-sunset mr-2 flex-shrink-0" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <li className="text-sm text-primary font-medium">
                        +{pkg.highlights.length - 3} more highlights
                      </li>
                    )}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground group-hover:shadow-medium transition-all duration-300"
                  aria-label={`View details for ${pkg.title}`}
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No packages found in this category. Try selecting a different filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Packages;