import { useState } from 'react';
import { Check } from 'lucide-react';

const pricingData = {
  wedding: {
    label: 'Wedding',
    subtitle: 'Capture Every Moment',
    packages: [
      {
        tier: 'Tier 1 · Essential',
        name: 'The Classic',
        price: 'R8,500',
        features: [
          'Minimum 2 Photographers',
          '6 Hours Coverage',
          '300–400 Edited Images',
          'Online Gallery',
          'Colour Grading',
        ],
        highlight: false,
      },
      {
        tier: 'Tier 2 · Signature',
        name: 'The Luxe',
        price: 'R12,000',
        features: [
          'Minimum 3 Photographers',
          '1 Videographer',
          '10 Hours Coverage',
          '500–700 Edited Images',
          'Engagement Shoot',
          'Drone Shots Included',
        ],
        highlight: true,
      },
      {
        tier: 'Tier 3 · Elite',
        name: 'The Dynasty',
        price: 'R18,000',
        features: [
          'Full Production Team',
          '12 Hours Coverage',
          '800–1000+ Edited Images',
          'Full Wedding Film',
          'Highlight Reel',
          'Drone Shots Included',
        ],
        highlight: false,
      },
    ],
  },
  matric: {
    label: 'Matric Dance',
    subtitle: 'Your Farewell Moment',
    packages: [
      {
        tier: 'Starter',
        name: 'Essential',
        price: 'R1,800',
        features: [
          '60–90 Min Shoot',
          '1 Location',
          '50–80 Edited Images',
        ],
        highlight: false,
      },
      {
        tier: 'Popular',
        name: 'Signature',
        price: 'R4,200',
        features: [
          '3 Hours Coverage',
          '2 Locations',
          '150–200 Images',
          'Social Media Reel',
          'Drone Shots Included',
        ],
        highlight: true,
      },
      {
        tier: 'Premium',
        name: 'Full Experience',
        price: 'R9,500',
        features: [
          'Full Team Coverage',
          '300–500 Images',
          'Full Event Film',
          'Drone Shots Included',
        ],
        highlight: false,
      },
    ],
  },
  events: {
    label: 'Events',
    subtitle: 'Every Detail Documented',
    packages: [
      {
        tier: 'Standard',
        name: 'Essential',
        price: 'R5,500',
        features: [
          '3 Cameras, 2 Videographers + 1 Photographer',
          '4 Hours Coverage',
          '150–250 Images',
          '48–72 Hour Delivery',
        ],
        highlight: false,
      },
      {
        tier: 'Professional',
        name: 'Premium',
        price: 'R12,500',
        features: [
          '3 Cameras, 2 Videographers + 1 Photographer',
          '8 Hours Coverage',
          '400–600 Images',
          'Highlight Reel',
        ],
        highlight: true,
      },
      {
        tier: 'Full Production',
        name: 'Elite',
        price: 'R15,000',
        features: [
          '3 Cameras, 2 Videographers + 1 Photographer',
          'Full Day Coverage',
          '600–900 Images',
          'Full Event Film',
          'Drone Shots Included',
        ],
        highlight: false,
      },
    ],
  },
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('wedding');
  const current = pricingData[activeTab];

  return (
    <section id="pricing" className="bg-tech-grey py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-signal-red" />
          <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">Pricing</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-grotesk font-bold text-navy text-4xl md:text-5xl leading-tight">
              Photography & Videography
              <br />
              <span className="text-signal-red">Packages.</span>
            </h2>
            <p className="font-inter text-navy/60 mt-3 text-sm">
              Competitor-benchmarked pricing for mid-tier studios in Johannesburg & Pretoria.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border border-navy/20 overflow-hidden self-start md:self-auto">
            {Object.entries(pricingData).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-3 font-grotesk font-semibold text-sm tracking-wide transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-navy text-white'
                    : 'bg-white text-navy hover:bg-navy/5'
                }`}
              >
                {val.label}
              </button>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p className="font-inter text-navy/50 text-xs tracking-[0.25em] uppercase mb-8">
          {current.subtitle}
        </p>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {current.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col ${
                pkg.highlight
                  ? 'bg-navy text-white shadow-2xl scale-105'
                  : 'bg-white text-navy shadow-sm'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-signal-red text-white font-inter text-xs tracking-widest uppercase px-4 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className={`p-6 border-b ${pkg.highlight ? 'border-white/10' : 'border-navy/10'}`}>
                <p className={`font-inter text-xs tracking-[0.2em] uppercase mb-2 ${
                  pkg.highlight ? 'text-signal-red' : 'text-signal-red'
                }`}>
                  {pkg.tier}
                </p>
                <h3 className="font-grotesk font-bold text-2xl mb-3">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-grotesk font-bold text-4xl">{pkg.price}</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className={`mt-0.5 flex-shrink-0 ${
                          pkg.highlight ? 'text-signal-red' : 'text-signal-red'
                        }`}
                      />
                      <span className={`font-inter text-sm leading-snug ${
                        pkg.highlight ? 'text-white/80' : 'text-navy/70'
                      }`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 pt-0">
                <a
                  href="https://wa.me/270126430131?text=Hi%20Phago%20Media%2C%20I%20would%20like%20to%20book%20a%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 text-center font-grotesk font-semibold text-sm tracking-[0.1em] transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-signal-red text-white hover:bg-red-700'
                      : 'border border-navy text-navy hover:bg-navy hover:text-white'
                  }`}
                >
                  BOOK THIS PACKAGE
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="font-inter text-navy/40 text-xs text-center mt-8">
          All prices are excluding travel outside Gauteng. Custom packages available — contact us to discuss.
        </p>
      </div>
    </section>
  );
}
