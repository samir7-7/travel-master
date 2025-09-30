import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Show tooltip periodically
  useEffect(() => {
    if (!isVisible) return;

    const tooltipTimer = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 15000);

    return () => clearInterval(tooltipTimer);
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    // REPLACE_WITH_WHATSAPP_NUMBER - User should replace with actual WhatsApp number
    const whatsappNumber = '9844600098'; 
    const message = encodeURIComponent(
      'Hello! I\'m interested in learning more about your Thailand travel packages. Can you help me plan my trip?'
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 w-64 animate-slide-up">
            <div className="bg-white rounded-lg shadow-strong p-4 relative border border-border">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                aria-label="Close tooltip"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="pr-6">
                <h4 className="font-semibold text-foreground mb-1">
                  Need Help Planning?
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Chat with our travel experts for personalized recommendations!
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  size="sm"
                  className="bg-success hover:bg-success/90 text-success-foreground w-full"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat Now
                </Button>
              </div>
              {/* Arrow */}
              <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="w-16 h-16 rounded-full bg-success hover:bg-success/90 text-success-foreground shadow-strong hover:shadow-strong hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-8 w-8" aria-hidden="true" />
        </Button>

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-success/30 animate-ping"></div>
      </div>

      {/* Screen Reader Alternative */}
      <div className="sr-only">
        <a 
          href={`https://wa.me/REPLACE_WITH_WHATSAPP_NUMBER`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us on WhatsApp for travel assistance
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;