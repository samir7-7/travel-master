import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const message =
    "Hello! I'm interested in learning more about your Thailand travel packages. Can you help me plan my trip?";

  return (
    <footer className="bg-foreground text-white" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-tropical-light font-sans">
              Travel Master Thailand
            </h3>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner for authentic Thailand experiences. We create
              unforgettable journeys that showcase the beauty, culture, and
              spirit of Thailand.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://facebook.com/travelmasterthailand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/travelmasterthailand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.tiktok.com/@travelmasterthailand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <FaTiktok className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-tropical-light">
              Quick Links
            </h4>
            <nav>
              <ul className="space-y-2" role="list">
                <li>
                  <a
                    href="#services"
                    className="text-white/80 hover:text-tropical-light transition-colors duration-300"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#packages"
                    className="text-white/80 hover:text-tropical-light transition-colors duration-300"
                  >
                    Tour Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose-us"
                    className="text-white/80 hover:text-tropical-light transition-colors duration-300"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-white/80 hover:text-tropical-light transition-colors duration-300"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-tropical-light">
              Popular Destinations
            </h4>
            <nav>
              <ul className="space-y-2" role="list">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-tropical-light transition-colors duration-300"
                  >
                    Bangkok
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-tropical-light transition-colors duration-300"
                  >
                    Phuket
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-tropical-light transition-colors duration-300"
                  >
                    Pattaya
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-tropical-light transition-colors duration-300"
                  >
                    Krabi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-tropical-light transition-colors duration-300"
                  >
                    Hua Hin
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-tropical-light font-sans">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="h-5 w-5 text-tropical-light mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-white/80 text-sm">Bangkok, Thailand</p>
                  <p className="text-white/60 text-xs">
                    Serving all of Thailand
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone
                  className="h-5 w-5 text-tropical-light flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="tel:+66 6-6135-5426"
                  className="text-white/80 hover:text-tropical-light transition-colors duration-300 text-sm"
                >
                  +66 6-6135-5426
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail
                  className="h-5 w-5 text-tropical-light flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:Ssarpkotar@gmail.com"
                  className="text-white/80 hover:text-tropical-light transition-colors duration-300 text-sm"
                >
                  Ssarpkotar@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              onClick={() =>
                window.open(
                  `https://wa.me/66661355426?text=${message}`,
                  "_blank"
                )
              }
              className="w-full bg-success hover:bg-success/90 text-success-foreground mt-4"
              aria-label="Contact us on WhatsApp"
            >
              <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm text-center md:text-left">
              <p>
                © {currentYear} Travel Master Thailand. All rights reserved.
              </p>
            </div>

            <nav>
              <ul className="flex space-x-6 text-sm" role="list">
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-tropical-light transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-tropical-light transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-tropical-light transition-colors duration-300"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
