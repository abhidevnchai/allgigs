import { useState, useEffect } from "react";
import { MenuButton } from "./MenuButton";
import { NavLink } from "./NavLink";
import { UserMenu } from "../UserMenu";
import { useAuth } from "../../contexts/AuthContext";

import logo from "../../assets/logo.png";
console.log(logo);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { href: "/", text: "Home", delay: 100 },
    { href: "#services", text: "Services", delay: 200 },
    { href: "#about", text: "About", delay: 300 },
    { href: "#contact", text: "Contact", delay: 400 },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-sage-800/95 backdrop-blur-sm py-1"
            : "bg-transparent py-1"
        }`}
      >
        <div className="max-w-7xl mx-auto px-1 flex justify-between items-center h-12">
          <a
            href="/"
            className={`transition-colors duration-300 ${
              isScrolled || isOpen ? "text-white" : "text-white"
            }`}
          >
            <img
              src={logo}
              alt="All Gigs Logo"
              className="w-40 h-40px object-contain"
            />
          </a>

          <div className="flex items-center space-x-6">
            <UserMenu />
            <div className={isScrolled || isOpen ? "text-white" : "text-white"}>
              <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-30 bg-sage-800 transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.text}
                href={link.href}
                delay={link.delay}
                isOpen={isOpen}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
