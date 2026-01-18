/*
  Synthwave Maximalism Navigation
  - Glassmorphism with backdrop blur
  - Neon border with glow effects
  - Orbitron font for logo with text shadow
  - Smooth transitions with glow amplification on hover
*/

import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/apps", label: "Apps" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 bg-card/40 backdrop-blur-xl">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-bold text-primary glow-text font-['Orbitron'] tracking-wider hover:scale-105 transition-transform duration-300">
              CyberSolutionsOhio
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a
                      className={`font-['Exo_2'] font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_var(--neon-cyan)] ${
                        location === link.href
                          ? "text-primary drop-shadow-[0_0_8px_var(--neon-cyan)]"
                          : "text-foreground/80"
                      }`}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_var(--neon-cyan)]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary hover:bg-primary/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-primary/20 py-4 animate-in slide-in-from-top-2 duration-300">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a
                      className={`block font-['Exo_2'] font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_var(--neon-cyan)] ${
                        location === link.href
                          ? "text-primary drop-shadow-[0_0_8px_var(--neon-cyan)]"
                          : "text-foreground/80"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
