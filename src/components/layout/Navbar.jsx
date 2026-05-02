import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
    { label: 'About', href: '#about' },
  ];

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3">
          <img
            src="https://media.base44.com/images/public/user_69f379236c11024e68028bf9/a83a15e3d_logo2.jpg"
            alt="Phago Media"
            className="h-10 w-10 rounded-full object-cover flex-shrink-0"
          />
          <span className="font-grotesk font-bold text-white text-lg tracking-tight hidden sm:block">
            PHAGO <span className="text-signal-red">MEDIA</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollTo(link.href)}
                className="font-inter text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-signal-red transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:flex items-center gap-2 px-5 py-2 border border-signal-red text-signal-red hover:bg-signal-red hover:text-white transition-all duration-300 font-grotesk font-semibold text-sm tracking-wide"
        >
          GET A QUOTE
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left font-inter text-white/80 hover:text-white py-2 text-sm border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full mt-3 py-2 bg-signal-red text-white font-grotesk font-semibold text-sm"
          >
            GET A QUOTE
          </button>
        </div>
      )}
    </nav>
  );
}          <img
            src="https://media.base44.com/images/public/user_69f379236c11024e68028bf9/a83a15e3d_logo2.jpg"
            alt="Phago Media"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-grotesk font-700 text-white text-lg tracking-tight hidden sm:block">
            PHAGO <span className="text-signal-red">MEDIA</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollTo(link.href)}
                className="font-inter text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-signal-red transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:flex items-center gap-2 px-5 py-2 border border-signal-red text-signal-red hover:bg-signal-red hover:text-white transition-all duration-300 font-grotesk font-semibold text-sm tracking-wide"
        >
          GET A QUOTE
        </button>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left font-inter text-white/80 hover:text-white py-2 text-sm"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full mt-2 py-2 border border-signal-red text-signal-red font-grotesk font-semibold text-sm"
          >
            GET A QUOTE
          </button>
        </div>
      )}
    </nav>
  );
}
