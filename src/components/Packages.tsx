import { useState } from "react";
import { travelPackages, packageCategories, TravelPackage } from "@/data/packages";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Star,
  Globe,
  Building2,
  Waves,
  Mountain,
  ArrowRight,
  Plane,
  Car,
  Ship,
  Utensils,
  X,
  CheckCircle2,
  XCircle,
  MessageCircle,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import packageBangkok from "@/assets/package-bangkok.jpg";
import packageIslands from "@/assets/package-islands.jpg";
import packageTemple from "@/assets/ancient-temple.jpeg";
import ancientTemple from "@/assets/package-temple.jpg";

const iconMap = {
  Globe,
  Plane,
  Building2,
  Waves,
  Mountain,
};

const imageMap: Record<string, string> = {
  "package-bangkok": packageBangkok,
  "package-islands": packageIslands,
  "package-temple": packageTemple,
  "package-nepal": ancientTemple,
};

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { elementRef, shouldAnimate } = useIntersectionObserver();
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  const whatsappNumber = "66661355426";

  const filteredPackages =
    activeCategory === "all"
      ? travelPackages
      : travelPackages.filter((pkg) => pkg.category === activeCategory);

  const handleWhatsAppBooking = (pkgTitle: string) => {
    const msg = encodeURIComponent(
      `Hello Travel Master! I am interested in booking "${pkgTitle}". Please provide more details and assistance.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={elementRef}
      id="packages"
      className="py-16 sm:py-24 bg-background overflow-hidden"
      aria-labelledby="packages-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-16 ${
            shouldAnimate ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2
            id="packages-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-sans"
          >
            Our Travel Packages
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Carefully crafted experiences showcasing Thailand & premium outbound destinations like Nepal.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-12 ${
            shouldAnimate ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {packageCategories.map((category) => {
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap] || Globe;
            const isActive = activeCategory === category.id;

            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full sm:rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-medium"
                    : "hover:bg-accent hover:shadow-soft"
                }`}
                aria-pressed={isActive}
                aria-label={`Filter by ${category.name}`}
              >
                <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                <span>{category.name}</span>
              </Button>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg, index) => {
            const isOutbound = pkg.category === "outbound";
            const isRecommended = pkg.category === "recommended";

            return (
              <Card
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`group overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-1.5 border-0 shadow-medium cursor-pointer flex flex-col justify-between rounded-2xl ${
                  shouldAnimate ? "animate-scale-in" : "opacity-0"
                } ${
                  isOutbound
                    ? "bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white ring-2 ring-blue-400/50"
                    : isRecommended
                    ? "bg-[#3B8AB8] text-white"
                    : "bg-card"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div>
                  {/* Package Image */}
                  <div className="relative h-52 sm:h-64 overflow-hidden">
                    <img
                      src={
                        pkg.id === "temple-heritage"
                          ? ancientTemple
                          : imageMap[pkg.image] || packageBangkok
                      }
                      alt={`${pkg.title} - ${pkg.description}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                      aria-hidden="true"
                    />

                    {/* Category / Badge */}
                    <Badge
                      className={`absolute top-3 left-3 sm:top-4 sm:left-4 font-semibold px-2.5 py-1 text-[11px] sm:text-xs capitalize ${
                        isOutbound
                          ? "bg-amber-400 text-black font-bold shadow-md"
                          : isRecommended
                          ? "bg-yellow-500 text-black font-bold"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {pkg.badgeText || pkg.category}
                    </Badge>
                  </div>

                  <CardContent className="p-5 sm:p-6">
                    {/* Title & Duration */}
                    <div className="mb-3.5 sm:mb-4">
                      <h3
                        className={`text-lg sm:text-xl font-bold mb-1.5 leading-snug transition-colors duration-300 ${
                          isOutbound || isRecommended
                            ? "text-white"
                            : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {pkg.title}
                      </h3>
                      <div
                        className={`flex items-center text-xs sm:text-sm ${
                          isOutbound || isRecommended
                            ? "text-blue-100/90"
                            : "text-muted-foreground"
                        }`}
                      >
                        <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 shrink-0" aria-hidden="true" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3 ${
                        isOutbound || isRecommended
                          ? "text-blue-100/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {pkg.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4 sm:mb-6">
                      <h4
                        className={`font-semibold text-xs sm:text-sm mb-2 ${
                          isOutbound || isRecommended ? "text-white" : "text-foreground"
                        }`}
                      >
                        Highlights:
                      </h4>
                      <ul className="space-y-1.5" role="list">
                        {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                          <li
                            key={idx}
                            className={`text-xs flex items-start ${
                              isOutbound || isRecommended ? "text-blue-100" : "text-foreground"
                            }`}
                          >
                            <Star
                              className="h-3.5 w-3.5 text-amber-400 mr-2 mt-0.5 shrink-0"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <li
                            className={`text-xs font-semibold ${
                              isOutbound || isRecommended ? "text-amber-300" : "text-primary"
                            }`}
                          >
                            +{pkg.highlights.length - 3} more highlights
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  {/* CTA Button */}
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackage(pkg);
                    }}
                    className={`w-full text-xs sm:text-sm font-bold py-5 transition-all duration-300 ${
                      isOutbound
                        ? "bg-amber-400 hover:bg-amber-500 text-black shadow-md"
                        : isRecommended
                        ? "bg-white text-blue-900 hover:bg-gray-100"
                        : "bg-primary hover:bg-primary-dark text-primary-foreground"
                    }`}
                  >
                    View Details & Itinerary
                    <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base sm:text-lg text-muted-foreground">
              No packages found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Package Detail Modal - Fully Responsive Overlay */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[9999] p-3 sm:p-4 overflow-y-auto">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-[96%] sm:w-[90%] max-w-4xl max-h-[92vh] sm:max-h-[85vh] flex flex-col my-auto overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-4 sm:p-6 text-white relative">
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-1.5 sm:p-2 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <div className="pr-8 sm:pr-10">
                <Badge className="bg-amber-400 text-black font-bold mb-1.5 text-[11px] sm:text-xs">
                  {selectedPackage.badgeText || selectedPackage.category}
                </Badge>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                  {selectedPackage.title}
                </h2>
                <div className="flex items-center text-blue-100 text-xs sm:text-sm mt-1">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 text-amber-300 shrink-0" />
                  <span>{selectedPackage.duration}</span>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
              {/* Description */}
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                {selectedPackage.description}
              </p>

              {/* Day-by-Day Itinerary (if available) */}
              {selectedPackage.itinerary && selectedPackage.itinerary.length > 0 ? (
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                    <Plane className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0" />
                    Day-by-Day Itinerary
                  </h3>
                  <div className="space-y-2.5 sm:space-y-3">
                    {selectedPackage.itinerary.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row gap-1.5 sm:gap-4 items-start"
                      >
                        <span className="bg-blue-600 text-white font-bold text-[11px] sm:text-xs px-2.5 py-1 rounded-md shrink-0">
                          {item.day}
                        </span>
                        <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : selectedPackage.id === "bangkok-adventure-1" ? (
                /* Legacy itinerary for recommended package */
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                    <Plane className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0" /> Itinerary Overview
                  </h3>
                  <ul className="space-y-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                    <li className="flex gap-2">
                      <Car className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span><strong>Day 1:</strong> Airport Pickup → Transfer to Pattaya hotel (Private car)</span>
                    </li>
                    <li className="flex gap-2">
                      <Ship className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span><strong>Day 2:</strong> Coral Island tour by speed boat with lunch (SIC)</span>
                    </li>
                    <li className="flex gap-2">
                      <Car className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span><strong>Day 3:</strong> Check out Pattaya hotel → Transfer to Bangkok + City Tour</span>
                    </li>
                    <li className="flex gap-2">
                      <Utensils className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span><strong>Day 4:</strong> Leisure day in Bangkok</span>
                    </li>
                    <li className="flex gap-2">
                      <Plane className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span><strong>Day 5:</strong> Check out → Airport drop → Fly home</span>
                    </li>
                  </ul>
                </div>
              ) : null}

              {/* Inclusions & Exclusions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-1">
                {/* Included */}
                <div className="bg-emerald-50/70 p-4 sm:p-5 rounded-2xl border border-emerald-200">
                  <h4 className="font-bold text-emerald-900 text-sm sm:text-base mb-2.5 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 shrink-0" />
                    Package Inclusions
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedPackage.included.map((inc, i) => (
                      <li key={i} className="text-xs sm:text-sm text-emerald-950 flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                {selectedPackage.excluded && selectedPackage.excluded.length > 0 && (
                  <div className="bg-rose-50/70 p-4 sm:p-5 rounded-2xl border border-rose-200">
                    <h4 className="font-bold text-rose-900 text-sm sm:text-base mb-2.5 flex items-center gap-2">
                      <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600 shrink-0" />
                      Package Exclusions
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {selectedPackage.excluded.map((exc, i) => (
                        <li key={i} className="text-xs sm:text-sm text-rose-950 flex items-start gap-2">
                          <XCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer / WhatsApp Booking Button */}
            <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] sm:text-xs text-gray-500 text-center sm:text-left">
                * Customized travel schedules & quotes can be confirmed via WhatsApp.
              </div>
              <Button
                onClick={() => handleWhatsAppBooking(selectedPackage.title)}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 sm:px-6 py-4 sm:py-5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 fill-current shrink-0" />
                <span>Book This Package on WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;
