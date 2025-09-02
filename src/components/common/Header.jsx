import React, { useState } from "react";
import Button from "../ui/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="w-full bg-global-11 fixed top-0 left-0 z-50 shadow-md">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo on left */}
          <div className="w-[68px] sm:w-[100px] lg:w-[136px]">
            <img
              src="/images/img_1624540525734_1.png"
              alt="Company Logo"
              className="w-[68px] h-[38px] sm:w-[100px] sm:h-[56px] lg:w-[136px] lg:h-[76px] object-contain"
            />
          </div>

          {/* Navigation + Contact aligned right */}
          <div className="flex items-center gap-[38px]">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-[38px]">
              <span className="cursor-pointer text-[18px] font-proxima font-normal leading-[18px] text-global-1 hover:text-global-3 transition-colors">
                Home
              </span>

              <span className="cursor-pointer text-[18px] font-proxima font-normal leading-[18px] text-global-1 hover:text-global-3 transition-colors">
                About us
              </span>

              {/* Listing Dropdown */}
              <div className="relative">
                <button
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === "listing"}
                  className="flex items-center gap-[8px] text-[18px] font-proxima font-normal leading-[18px] text-global-1 hover:text-global-3 transition-colors"
                  onClick={() => toggleDropdown("listing")}
                >
                  Listing
                  <img
                    src="/images/img_arrow_down.svg"
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </button>
                {activeDropdown === "listing" && (
                  <ul
                    role="menu"
                    className="absolute top-full left-0 mt-2 bg-global-11 border border-global-8 rounded-md shadow-lg py-2 min-w-[150px] z-50"
                  >
                    <li>
                      <span className="block px-4 py-2 text-[16px] text-global-1 hover:bg-global-9 cursor-pointer">
                        Property Listings
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 text-[16px] text-global-1 hover:bg-global-9 cursor-pointer">
                        Featured Properties
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 text-[16px] text-global-1 hover:bg-global-9 cursor-pointer">
                        Recent Listings
                      </span>
                    </li>
                  </ul>
                )}
              </div>

              {/* Agents Dropdown */}
              <div className="relative">
                <button
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === "agents"}
                  className="flex items-center gap-[8px] text-[18px] font-proxima font-normal leading-[18px] text-global-1 hover:text-global-3 transition-colors"
                  onClick={() => toggleDropdown("agents")}
                >
                  Agents
                  <img
                    src="/images/img_arrow_down.svg"
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </button>
                {activeDropdown === "agents" && (
                  <ul
                    role="menu"
                    className="absolute top-full left-0 mt-2 bg-global-11 border border-global-8 rounded-md shadow-lg py-2 min-w-[150px] z-50"
                  >
                    <li>
                      <span className="block px-4 py-2 text-[16px] text-global-1 hover:bg-global-9 cursor-pointer">
                        Find Agents
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 text-[16px] text-global-1 hover:bg-global-9 cursor-pointer">
                        Top Agents
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 text-[16px] text-global-1 hover:bg-global-9 cursor-pointer">
                        Agent Directory
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            </nav>

            {/* Contact Button (Desktop) */}
            <a href="#contact">
              <Button
                variant="outline"
                className="text-[18px] font-proxima font-semibold leading-[18px] rounded-[24px] pt-[14px] pr-[24px] pb-[14px] pl-[24px] border border-global-1 text-global-1 transition-colors hover:bg-blue-500 hover:text-white hover:border-blue-500 cursor-pointer"
              >
                Contact us
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-global-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden pb-4 border-t border-global-8 mt-4 pt-4`}
        >
          <div className="flex flex-col gap-4">
            <span className="text-left text-[18px] py-2 cursor-pointer">
              Home
            </span>
            <span className="text-left text-[18px] py-2 cursor-pointer">
              About us
            </span>
            <span className="text-left text-[18px] py-2 cursor-pointer">
              Listing
            </span>
            <span className="text-left text-[18px] py-2 cursor-pointer">
              Agents
            </span>
            <a href="#contact">
              <Button
                variant="outline"
                className="mt-2 text-[18px] font-proxima font-semibold rounded-[24px] pt-[14px] pr-[24px] pb-[14px] pl-[24px] border border-global-1 text-global-1 transition-colors hover:bg-blue-500 hover:text-white hover:border-blue-500 cursor-pointer"
              >
                Contact us
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;