import { useEffect } from 'react';
import { ArrowLeft, Check, Images } from 'lucide-react';
import PortfolioManager from './PortfolioManager';

function PricingCard({ pkg }) {
  return (
    <div className={`relative flex flex-col border ${pkg.highlight ? 'border-signal-red bg-navy text-white shadow-xl' : 'border-navy/10 bg-white'}`}>
      {pkg.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-signal-red text-white font-inter text-xs tracking-widest uppercase px-4 py-1">Most Popular</span>
        </div>
      )}
      <div className={`p-5 border-b ${pkg.highlight ? 'border-white/10' : 'border-navy/10'}`}>
        <p className="font-inter text-signal-red text-xs tracking-[0.2em] uppercase mb-1">{pkg.tier}</p>
        <h3 className={`font-grotesk font-bold text-xl mb-2 ${pkg.highlight ? 'text-white' : 'text-navy'}`}>{pkg.name}</h3>
        <span className={`font-grotesk font-bold text-3xl ${pkg.highlight ? 'text-white' : 'text-navy'}`}>{pkg.price}</span>
      </div>
      <div className="p-5 flex-1">
        <ul className="space-y-2">
          {pkg.features.map(f => (
            <li key={f} className="flex items-start gap-2">
              <Check size={13} className="text-signal-red mt-0.5 flex-shrink-0" />
              <span className={`font-inter text-xs leading-snug ${pkg.highlight ? 'text-white/80' : 'text-navy/70'}`}>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 pt-0">
        
          href="https://wa.me/270126430131?text=Hi%20Phago%20Media%2C%20I%20would%20like%20to%20book%20a%20package."
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full py-3 text-center font-grotesk font-semibold text-sm tracking-[0.1em] transition-all duration-300 ${
            pkg.highlight ? 'bg-signal-red text-white hover:bg-red-700' : 'border border-navy text-navy hover:bg-navy hover:text-white'
          }`}
        >
          BOOK THIS PACKAGE
        </a>
      </div>
    </div>
  );
}

export default function EventPageLayout({ title, subtitle, heroImage, packages, pricingTitle, eventType }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToPortfolio = () => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToPricing = () => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-studio-white">
      {/* Hero */}
      <div className="relative h-52 md:h-72 overflow-hidden">
        <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute top-5 left-6">
          <button
            onClick={() => { window.location.href = '/'; }}
            className="flex items-center gap-2 text-white/80 hover:text-white font-inter text-sm transition-colors bg-navy/40 px-3 py-1.5 hover:bg-navy/70"
          >
            <ArrowLeft size={15} /> Home
          </button>
        </div>
        <div className="absolute inset-0 flex items-end p-6 md:p-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-px bg-signal-red" />
              <span className="font-inter text-signal-red text-xs tracking-[0.3em] uppercase">Phago Media</span>
            </div>
            <h1 className="font-grotesk font-bold text-white text-3xl md:text-5xl leading-tight">{title}</h1>
            <p className="font-inter text-white/70 mt-1 text-sm">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Quick nav */}
      <div className="bg-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex gap-0">
          <button
            onClick={scrollToPortfolio}
            className="flex items-center gap-2 px-6 py-3 font-inter text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors border-r border-white/10"
          >
            <Images size={15} />
            View Portfolio
          </button>
          <button
            onClick={scrollToPricing}
            className="flex items-center gap-2 px-6 py-3 font-inter text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
          >
            View Pricing
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        {/* Portfolio */}
        <div className="mb-16">
          <PortfolioManager eventType={eventType} />
        </div>

        {/* Pricing */}
        <div id="pricing-section">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-signal-red" />
            <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">Packages & Pricing</span>
          </div>
          <h2 className="font-grotesk font-bold text-navy text-3xl md:text-4xl mb-8">{pricingTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map(pkg => <PricingCard key={pkg.name} pkg={pkg} />)}
          </div>
          <p className="font-inter text-navy/40 text-xs text-center mt-6">
            Prices exclude travel outside Gauteng. Custom packages available — contact us to discuss.
          </p>
        </div>
      </div>
    </div>
  );
}
