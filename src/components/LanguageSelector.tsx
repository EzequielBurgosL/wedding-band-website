import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "ca", name: "Català" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {languages.find((lang) => lang.code === i18n.language)?.name}
          {/* Replacing the ChevronDownIcon with a simple down arrow using Tailwind's built-in arrow */}
          {/* <span className="ml-2 text-gray-400">&#x2193;</span>{" "} */}
          {/* Unicode down arrow */}
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{
            transition: "opacity 0.3s ease-out",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  i18n.changeLanguage(language.code);
                  setIsOpen(false); // Close dropdown after selection
                }}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
