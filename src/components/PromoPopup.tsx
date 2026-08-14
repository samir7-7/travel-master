import React, { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import offerImage from "@/assets/thailand-to-nepal-offer.jpg";

interface PromoPopupProps {
  /** Delay in ms before showing popup on page load. Defaults to 500ms */
  delay?: number;
  /** Force show regardless of session storage */
  forceShow?: boolean;
}

export const PromoPopup: React.FC<PromoPopupProps> = ({
  delay = 500,
  forceShow = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasSeenPopup = sessionStorage.getItem("has_seen_nepal_promo");

    if (!hasSeenPopup || forceShow) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, forceShow]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("has_seen_nepal_promo", "true");
  }, []);

  // Listen for Escape key to close popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in-0"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Promotion Offer"
    >
      {/* Container wrapper */}
      <div
        className="relative max-w-lg sm:max-w-xl md:max-w-2xl max-h-[90vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cross / Close button above/top right */}
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-20 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-red-500 hover:text-white shadow-xl border-2 border-white/80 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Close"
        >
          <X className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Pure Image Display */}
        <img
          src={offerImage}
          alt="Thailand to Nepal Tour Package Flyer"
          className="w-auto h-auto max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/20 select-none"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default PromoPopup;
