import { useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const equipment = [
  { category: 'Mixers', items: ['Digital Mixers', 'Analogue Mixers'] },
  { category: 'Speakers & PA', items: ['Main PA Speakers', 'Subwoofers', 'Stage Monitors'] },
  { category: 'Instruments', items: ['Drums & Percussion', 'Pianos & Keyboards', 'Guitar (Bass & Electric)', 'Microphones'] },
  { category: 'Production', items: ['Show Lighting', 'Smoke Machines', 'Amplifiers'] },
];

const brands = ['Yamaha', 'Electro-Voice', 'JBL', 'Shure', 'Allen & Heath', 'Pioneer DJ'];

const stats = [
  { value: '3', label: 'Sound Engineers' },
  { value: '6+', label: 'Equipment Categories' },
  { value: '100%', label: 'Live-Grade Gear' },
];

export default function LiveMusic() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-studio-white">
      {/* Hero */}
      <div className="relative h-52 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501386761578-eaa54b5c3bfc?w=1600&q=80"
          alt="Live Music Events"
          className="w-full h-full object-cover"
        />
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
            <h1 className="font-grotesk font-bold text-white text-3xl md:text-5xl leading-tight">Music & Sound Engineering</h1>
            <p className="font-inter text-white/70 mt-1 text-sm">Professional sound engineering for live environments.</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-signal-red" />
            <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">Overview</span>
          </div>
          <p className="font-inter text-navy/80 text-lg leading-relaxed max-w-3xl">
            Our three sound engineers handle high-demand live environments with professional-grade equipment from the world's leading audio brands. Whether it's a conference, live music event, or studio recording — we deliver pristine sound every time.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {stats.map(s => (
            <div key={s.label} className="border border-navy/10 p-6 text-center">
              <div className="font-grotesk font-bold text-signal-red text-4xl mb-1">{s.value}</div>
              <div className="font-inter text-navy/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Equipment */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-signal-red" />
            <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">Equipment We Supply</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {equipment.map(cat => (
              <div key={cat.category} className="border border-navy/10 p-6 bg-tech-grey/40">
                <h3 className="font-grotesk font-bold text-navy text-base mb-4">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal-red flex-shrink-0" />
                      <span className="font-inter text-navy/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-signal-red" />
            <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">Featured Brands</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {brands.map(brand => (
              <span key={brand} className="border border-navy/20 px-5 py-2 font-grotesk font-semibold text-navy text-sm tracking-wide">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-signal-red" />
            <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">Live in Action</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'https://images.unsplash.com/photo-1501386761578-eaa54b5c3bfc?w=800&q=80',
              'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
              'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
              'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
              'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80',
              'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80',
            ].map((url, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden">
                <img src={url} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy p-8 md:p-12">
          <h2 className="font-grotesk font-bold text-white text-2xl md:text-3xl mb-3">Ready to book?</h2>
          <p className="font-inter text-white/60 text-sm leading-relaxed mb-8 max-w-xl">
            Interested in hiring our sound equipment or booking our engineers? Fill in our inquiry form and we'll get back to you shortly.
          </p>
          
            href="https://wa.me/270126430131?text=Hi%20Phago%20Media%2C%20I%20would%20like%20to%20enquire%20about%20sound%20engineering%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-signal-red text-white font-grotesk font-semibold text-sm tracking-[0.15em] hover:bg-red-700 transition-colors duration-300"
          >
            <ExternalLink size={16} />
            SUBMIT INQUIRY FORM
          </a>
        </div>
      </div>
    </div>
  );
}
