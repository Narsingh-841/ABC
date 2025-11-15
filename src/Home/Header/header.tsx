import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

interface SubmenuItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  submenu: SubmenuItem[];
}

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    {
      label: "Company",
      submenu: [
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
      ],
    },
    {
      label: "Solutions",
      submenu: [
        { label: "Enterprise", href: "/enterprise" },
        { label: "SMB", href: "/smb" },
        { label: "Startup", href: "/startup" },
        { label: "Custom", href: "/custom" },
      ],
    },

    {
      label: "Case Studies",
      submenu: [
        { label: "Technology", href: "/case-studies/tech" },
        { label: "Finance", href: "/case-studies/finance" },
        { label: "Healthcare", href: "/case-studies/healthcare" },
        { label: "Retail", href: "/case-studies/retail" },
      ],
    },
    {
      label: "Resources",
      submenu: [
        { label: "Blog", href: "/blog" },
        { label: "Documentation", href: "/docs" },
        { label: "Webinars", href: "/webinars" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      label: "Services",
      submenu: [{ label: "Cyber Security", href: "/cyber-security" }],
    },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside desktop dropdowns
      const isClickInsideAnyDropdown = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target as Node)
      );

      // Check if click is outside mobile menu
      const isClickInsideMobileMenu =
        mobileMenuRef.current &&
        mobileMenuRef.current.contains(event.target as Node);

      if (!isClickInsideAnyDropdown) {
        setOpenDropdown(null);
      }

      if (!isClickInsideMobileMenu && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 py-3 lg:py-4 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer flex-shrink-0">
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg transform rotate-12"></div>
            <span className="text-lg lg:text-xl font-bold text-black">
              CAPABILIQ
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                ref={(el) => {
                  dropdownRefs.current[item.label] = el;
                }}
              >
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-purple-600 transition font-medium"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg transition-all duration-200 ${
                    openDropdown === item.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="py-2">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <button className="hidden lg:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition flex-shrink-0 text-sm">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 visible max-h-[80vh] overflow-y-auto"
              : "opacity-0 invisible max-h-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-gray-100 last:border-b-0"
              >
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center justify-between w-full py-3 text-left text-gray-700 hover:text-purple-600 transition font-medium"
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`pl-4 space-y-2 transition-all duration-200 ${
                    openDropdown === item.label
                      ? "opacity-100 visible max-h-96 pb-3"
                      : "opacity-0 invisible max-h-0"
                  }`}
                >
                  {item.submenu.map((subitem) => (
                    <a
                      key={subitem.label}
                      href={subitem.href}
                      className="block py-2 text-sm text-gray-600 hover:text-purple-600 transition"
                      onClick={() => {
                        setOpenDropdown(null);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {subitem.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Contact Button */}
            <button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
