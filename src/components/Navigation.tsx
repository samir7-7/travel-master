import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const message =
    "Hello! I'm interested in learning more about your Thailand travel packages. Can you help me plan my trip?";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", isInternal: false },
    { href: "#services", label: "Services", isInternal: true },
    { href: "#packages", label: "Packages", isInternal: true },
    { href: "/blog", label: "Blogs", isInternal: false },
    { href: "/about", label: "About", isInternal: false },
    { href: "#testimonials", label: "Testimonials", isInternal: true },
  ];

  const handleNavClick = (href: string, isInternal: boolean) => {
    if (isInternal) {
      if (location.pathname === "/") {
        // Expect only section IDs (like "about" or "#about")
        const targetId = href.startsWith("#") ? href : `#${href}`;
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsMobileMenuOpen(false);
        }
      } else {
        // Navigate to homepage and pass the section ID
        const targetId = href.startsWith("#") ? href : `#${href}`;
        navigate("/", { state: { scrollTo: targetId } });
      }
    } else {
      navigate(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-medium" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-white hover:text-tropical-light transition-colors duration-300"
              aria-label="Travel Master Thailand - Home"
            >
              <img
                src="/travelmasterlogo.svg"
                width={110}
                alt="travel master logo"
                loading="lazy"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.isInternal)}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white/90 hover:text-tropical-light"
                }`}
              >
                {link.label}
              </button>
            ))}

            <Button
              onClick={() =>
                window.open(
                  `https://wa.me/66661355426?text=${message}`,
                  "_blank"
                )
              }
              className="bg-primary hover:bg-primary/90 text-success-foreground"
              aria-label="Contact us on Whats App"
            >
              <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black hover:text-tropical-light transition-colors duration-300"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isInternal)}
                  className="block w-full text-left px-3 py-2 text-black hover:text-tropical-light hover:bg-white/10 rounded-md transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => {
                    window.open(
                      `https://wa.me/66661355426?text=${message}`,
                      "_blank"
                    );
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-success hover:bg-success/90 text-success-foreground"
                  aria-label="Contact us on WhatsApp"
                >
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
