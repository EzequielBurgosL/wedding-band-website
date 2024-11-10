import { Menu, Music, X } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { label: t("nav.home"), href: "#" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.testimonials"), href: "#testimonials" },
    { label: t("nav.contact"), href: "#booking" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Music className="h-8 w-8 text-rose-400" />
            <span className="ml-2 text-xl font-serif">The Wedding Vibes</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${
                  item.highlight
                    ? "bg-rose-400 text-white px-4 py-2 rounded-full hover:bg-rose-500 transition"
                    : "text-gray-600 hover:text-rose-400 transition"
                }`}
              >
                {item.label}
              </a>
            ))}
            <LanguageSelector />
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-rose-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
