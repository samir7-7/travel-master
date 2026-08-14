import React from "react";
import { MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const OurOffice: React.FC = () => {
  const whatsappNumber = "66661355426";
  const whatsappMessage = encodeURIComponent(
    "Hello Travel Master! I saw your office on the website and would like to get in touch regarding my travel plans."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const officeImages = [
    {
      src: "/images/office/office-exterior.jpg",
      title: "Storefront & Main Entrance",
      tag: "Main Storefront",
      description: "Conveniently located storefront with easy street access.",
    },
    {
      src: "/images/office/office-interior.jpg",
      title: "Reception & Consultation Desk",
      tag: "Welcome Lounge",
      description: "Our modern, air-conditioned office ready to welcome all travelers.",
    },
    {
      src: "/images/office/office-sign.jpg",
      title: "Illuminated Branch Signboard",
      tag: "Official Branch",
      description: "Look for our iconic blue Travel Master sign on your visit.",
    },
  ];

  return (
    <section id="office" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-amber-50/40 via-white to-sky-50/30 relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100/50 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-amber-100/40 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            Official Office
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 sm:mb-4 font-sans">
            Visit Our <span className="text-blue-600">Office</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-2">
            Step into our official Travel Master branch! Meet our experienced travel advisors, explore custom itineraries, and let us plan your perfect journey in person.
          </p>
        </div>

        {/* 3-Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
          {officeImages.map((img, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-gray-100"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden bg-gray-100">
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Tag Badge */}
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-md text-gray-900 text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {img.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {img.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive WhatsApp Contact Button */}
        <div className="flex justify-center items-center px-2">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="flex items-center justify-center gap-2.5 sm:gap-3"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current shrink-0" />
              <span>Contact on WhatsApp</span>
              <ExternalLink className="w-4 h-4 opacity-80 shrink-0" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
