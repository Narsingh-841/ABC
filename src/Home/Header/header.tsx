import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import Capabiliqlogo from "../../assets/Capabiliqlogo.png";
import { useNavigate } from "react-router-dom";

interface SubmenuItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

interface NavItem {
  label: string;
  href?: string;
  submenu: SubmenuItem[];
}

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [nestedOpenDropdown, setNestedOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const nestedDropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const servicesItems: SubmenuItem[] = [
    { label: "Cyber Security", href: "/cyber-security" },
    { label: "SalesForce", href: "/salesforce" },
    { label: "AI & Data Analytics", href: "/data-analytics" },
    { label: "Digital Tech Solutions", href: "/digital-tech-solutions" }
  ];

  const navItems: NavItem[] = [
    {
      label: "Company",
      submenu: [
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Hire Developers", href: "/hire-developer" },
      ],
    },
    {
      label: "Solutions",
      submenu: [
        { label: "Staffing", href: "/staffing" },
        { label: "Startup", href: "/startups" },
        { label: "GCC", href: "/gcc" },
        { label: "RPO", href: "/rpo" },
      ],
    },
    {
      label: "Case Studies",
      href: "/case-study",
      submenu: [],
    },
    {
      label: "Resources",
      submenu: [
        { label: "Blog", href: "/blog" },
        {
          label: "Services",
          href: "#",
          submenu: servicesItems,
        },
      ],
    },
  ];

  const handleLogoClick = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setNestedOpenDropdown(null);
  };

  const handleContactClick = () => {
    navigate("/contact-us");
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setNestedOpenDropdown(null);
  };

  const handleCaseStudiesClick = () => {
    navigate("/case-study");
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setNestedOpenDropdown(null);
  };

  const handleMouseEnter = (label: string) => {
    if (label !== "Case Studies") {
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setNestedOpenDropdown(null);
  };

  const handleNestedMouseEnter = (label: string) => setNestedOpenDropdown(label);

  const handleNestedMouseLeave = () => setNestedOpenDropdown(null);

  const toggleDropdown = (label: string) => {
    if (label !== "Case Studies") {
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };

  const toggleNestedDropdown = (label: string) => {
    const isMobile = window.innerWidth < 1024;

    if (isMobile && label === "Services") {
      setNestedOpenDropdown("mobile-services");
      return;
    }

    setNestedOpenDropdown(nestedOpenDropdown === label ? null : label);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isMobile = window.innerWidth < 1024;

      const isClickInsideDesktopDropdown = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target as Node)
      );
      const isClickInsideNestedDropdown = Object.values(nestedDropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target as Node)
      );
      const isClickInsideMobileMenu =
        mobileMenuRef.current && mobileMenuRef.current.contains(event.target as Node);

      if (!isMobile) {
        if (!isClickInsideDesktopDropdown && !isClickInsideNestedDropdown) {
          setOpenDropdown(null);
          setNestedOpenDropdown(null);
        }

        if (!isClickInsideMobileMenu && isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setNestedOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="relative top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 py-3 lg:py-4 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center cursor-pointer flex-shrink-0" onClick={handleLogoClick}>
            <div className="w-36 h-9 lg:w-44 lg:h-11">
              <img src={Capabiliqlogo} alt="Capabiliq Logo" className="w-full h-full object-contain" />
            </div>
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
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.label === "Case Studies" ? (
                  <button
                    onClick={handleCaseStudiesClick}
                    className="flex items-center gap-1 px-3 py-2 text-base text-gray-700 hover:text-purple-600 transition font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center gap-1 px-3 py-2 text-base text-gray-700 hover:text-purple-600 transition font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Desktop Dropdown */}
                    {item.submenu.length > 0 && (
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg transition-all duration-200 z-50 ${
                          openDropdown === item.label
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        <div className="py-2">
                          {item.submenu.map((subitem) => (
                            <div
                              key={subitem.label}
                              className="relative group"
                              ref={(el) => {
                                nestedDropdownRefs.current[subitem.label] = el;
                              }}
                              onMouseEnter={() => subitem.submenu && handleNestedMouseEnter(subitem.label)}
                              onMouseLeave={handleNestedMouseLeave}
                            >
                              {subitem.submenu ? (
                                <>
                                  <button className="flex items-center justify-between w-full px-4 py-2 text-base text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition">
                                    <span>{subitem.label}</span>
                                    <ChevronRight size={16} />
                                  </button>

                                  {/* Nested Desktop */}
                                  <div
                                    className={`absolute left-full top-0 ml-1 w-56 bg-white border border-gray-100 rounded-lg shadow-lg transition-all duration-200 z-50 ${
                                      nestedOpenDropdown === subitem.label
                                        ? "opacity-100 visible translate-x-0"
                                        : "opacity-0 invisible -translate-x-2"
                                    }`}
                                  >
                                    <div className="py-2 max-h-80 overflow-y-auto">
                                      {subitem.submenu.map((nestedItem) => (
                                        <a
                                          key={nestedItem.label}
                                          href={nestedItem.href}
                                          className="block px-4 py-2 text-base text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
                                        >
                                          {nestedItem.label}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <a
                                  href={subitem.href}
                                  className="block px-4 py-2 text-base text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
                                >
                                  {subitem.label}
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Contact */}
          <button
            className="hidden lg:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition flex-shrink-0 text-base"
            onClick={handleContactClick}
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 z-50 ${
            isMobileMenuOpen ? "opacity-100 visible max-h-[80vh] overflow-y-auto" : "opacity-0 invisible max-h-0"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-b-0">
                {item.label === "Case Studies" ? (
                  <button
                    onClick={handleCaseStudiesClick}
                    className="flex items-center justify-between w-full py-3 text-left text-base text-gray-700 hover:text-purple-600 transition font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full py-3 text-left text-base text-gray-700 hover:text-purple-600 transition font-medium"
                    >
                      {item.label}
                      {item.submenu.length > 0 && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      )}
                    </button>

                    {/* Mobile Submenu */}
                    {item.submenu.length > 0 && (
                      <div
                        className={`pl-4 space-y-2 transition-all duration-200 ${
                          openDropdown === item.label ? "opacity-100 visible max-h-96 pb-3" : "opacity-0 invisible max-h-0"
                        }`}
                      >
                        {item.submenu.map((subitem) => (
                          <div key={subitem.label}>
                            {subitem.submenu ? (
                              <>
                                <button
                                  onClick={() => toggleNestedDropdown(subitem.label)}
                                  className="flex items-center justify-between w-full py-2 text-left text-base text-gray-600 hover:text-purple-600 transition font-medium"
                                >
                                  <span>{subitem.label}</span>
                                  <ChevronDown
                                    size={16}
                                    className={`transition-transform ${
                                      (subitem.label === "Services"
                                        ? nestedOpenDropdown === "mobile-services"
                                        : nestedOpenDropdown === subitem.label)
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>

                                {/* Nested Mobile */}
                                <div
                                  className={`pl-4 space-y-2 transition-all duration-200 ${
                                    (subitem.label === "Services"
                                      ? nestedOpenDropdown === "mobile-services"
                                      : nestedOpenDropdown === subitem.label)
                                      ? "opacity-100 visible max-h-80 pb-2"
                                      : "opacity-0 invisible max-h-0"
                                  }`}
                                >
                                  {subitem.submenu.map((nestedItem) => (
                                    <a
                                      key={nestedItem.label}
                                      href={nestedItem.href}
                                      className="block py-2 text-base text-gray-600 hover:text-purple-600 transition"
                                      onClick={() => {
                                        setOpenDropdown(null);
                                        setNestedOpenDropdown(null);
                                        setIsMobileMenuOpen(false);
                                      }}
                                    >
                                      {nestedItem.label}
                                    </a>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <a
                                href={subitem.href}
                                className="block py-2 text-base text-gray-600 hover:text-purple-600 transition"
                                onClick={() => {
                                  setOpenDropdown(null);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {subitem.label}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* Mobile Contact Button */}
            <button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition mt-4"
              onClick={handleContactClick}
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