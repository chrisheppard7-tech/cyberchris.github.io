/*
  Synthwave Maximalism Footer
  - Glassmorphism with neon border
  - Social links with glow effects
  - Copyright with monospace font
*/

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-primary/30 bg-card/40 backdrop-blur-xl mt-20">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-['Share_Tech_Mono']">
            © 2026 CyberSolutionsOhio. Chris Heppard. All Systems Nominal.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/heppard87"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_var(--neon-cyan)] hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_var(--neon-cyan)] hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_var(--neon-cyan)] hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
