import { useState, useRef } from 'react';
import { X, Camera, Film, Music, Check, ExternalLink, Images, Lock, Upload, Plus, Play } from 'lucide-react';

const ADMIN_PASSCODE = '2007';

const weddingPackages = [
  { tier: 'Tier 1 · Essential', name: 'The Classic', price: 'R8,500', highlight: false, features: ['Minimum 2 Photographers', '6 Hours Coverage', '300–400 Edited Images', 'Online Gallery', 'Colour Grading'] },
  { tier: 'Tier 2 · Signature', name: 'The Luxe', price: 'R12,000', highlight: true, features: ['Minimum 3 Photographers', '1 Videographer', '10 Hours Coverage', '500–700 Edited Images', 'Engagement Shoot', 'Drone Shots Included'] },
  { tier: 'Tier 3 · Elite', name: 'The Dynasty', price: 'R18,000', highlight: false, features: ['Full Production Team', '12 Hours Coverage', '800–1000+ Edited Images', 'Full Wedding Film', 'Highlight Reel', 'Drone Shots Included'] },
];

const soundEquipment = [
  { category: 'Mixers', items: ['Digital Mixers', 'Analogue Mixers'] },
  { category: 'Speakers & PA', items: ['Main PA Speakers', 'Subwoofers', 'Stage Monitors'] },
  { category: 'Instruments', items: ['Drums & Percussion', 'Pianos & Keyboards', 'Guitar (Bass & Electric)', 'Microphones'] },
  { category: 'Production', items: ['Show Lighting', 'Smoke Machines', 'Amplifiers'] },
];

const soundBrands = ['Yamaha', 'Electro-Voice', 'JBL', 'Shure', 'Allen & Heath', 'Pioneer DJ'];

const services = [
  { id: 'photography', label: 'Photography', icon: Camera, image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80', tagline: 'Every frame, a masterpiece.' },
  { id: 'videography', label: 'Videography', icon: Film, image: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=800&q=80', tagline: 'Motion with intention.' },
  { id: 'sound', label: 'Music & Sound', icon: Music, image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80', tagline: 'Sound that moves crowds.' },
];

function PasscodeModal({ onSuccess, onClose }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) { onSuccess(); }
    else { setError(true); setPasscode(''); }
  };
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/60 backdrop-blur-sm" onClick={onClose}>
      <form onSubmit={handleSubmit} onClick={e => e.stopPropagation()} className="bg-white p-8 w-80 shadow-2xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 bg-navy flex items-center justify-center"><Lock size={16} className="text-white" /></div>
          <h3 className="font-grotesk font-bold text-navy text-lg">Admin Access</h3>
        </div>
        <p className="font-inter text-navy/60 text-sm mb-4">Enter passcode to manage content.</p>
        <input type="password" value={passcode} autoFocus onChange={e => { setPasscode(e.target.value); setError(false); }} placeholder="Enter passcode" className="w-full border border-navy/20 px-4 py-3 font-inter text-sm mb-1 focus:outline-none focus:border-navy" />
        {error && <p className="font-inter text-signal-red text-xs mt-1 mb-2">Incorrect passcode.</p>}
        <div className="flex gap-3 mt-4">
          <button type="button" onClick={onClose} className="flex-1 py-2 border border-navy/20 font-grotesk text-sm text-navy/60 hover:text-navy hover:border-navy transition-colors">Cancel</button>
          <button type="submit" className="flex-1 py-2 bg-navy text-white font-grotesk font-semibold text-sm hover:bg-signal-red transition-colors">Unlock</button>
        </div>
      </form>
    </div>
  );
}

function ServicePanel({ children, maxW = 'max-w-2xl' }) {
  return (
    <div className={`w-full ${maxW} bg-studio-white h-full overflow-y-auto shadow-2xl`} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  );
}

function PanelHeader({ image, title, onClose }) {
  return (
    <div className="relative h-52 overflow-hidden flex-shrink-0">
      <img src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy/60" />
      <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-signal-red flex items-center justify-center text-white hover:bg-red-700 transition-colors"><X size={16} /></button>
      <div className="absolute bottom-5 left-6"><h3 className="font-grotesk font-bold text-white text-3xl">{title}</h3></div>
    </div>
  );
}

function GalleryLink({ href }) {
  return (
    <a href={href} className="flex items-center gap-2 w-full py-3 mb-5 bg-tech-grey text-navy font-grotesk font-semibold text-sm tracking-wide hover:bg-navy hover:text-white transition-all duration-300 px-4 border border-navy/10 hover:border-navy">
      <Images size={16} className="text-signal-red" />
      VIEW FULL PORTFOLIO & BOOK
      <span className="ml-auto text-signal-red">→</span>
    </a>
  );
}

function PinnedPhotos({ photos, onAdd, onRemove, adminMode, uploading }) {
  if (photos.length === 0 && !adminMode) return null;
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-4 h-px bg-signal-red" />
        <span className="font-inter text-signal-red text-xs tracking-[0.25em] uppercase">Best Shots</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {photos.map((url, i) => (
          <div key={i} className="relative group aspect-[3/4] overflow-hidden bg-tech-grey">
            <img src={url} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            {adminMode && (
              <button onClick={() => onRemove(url)} className="absolute top-1 right-1 w-5 h-5 bg-signal-red flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"><X size={10} /></button>
            )}
          </div>
        ))}
        {adminMode && photos.length < 3 && (
          <label className="aspect-[3/4] border-2 border-dashed border-signal-red/30 flex flex-col items-center justify-center cursor-pointer hover:bg-signal-red/5 transition-colors">
            <Plus size={20} className="text-signal-red/60 mb-1" />
            <span className="font-inter text-xs text-navy/40">Add photo</span>
            <input type="file" accept="image/*" onChange={onAdd} className="hidden" disabled={photos.length >= 3} />
          </label>
        )}
      </div>
    </div>
  );
}

function PhotographyPanel({ onClose }) {
  const [photos, setPhotos] = useState([]);
  const [adminMode, setAdminMode] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file || photos.length >= 3) return;
    const url = URL.createObjectURL(file);
    setPhotos(prev => [...prev, url]);
  };

  return (
    <ServicePanel>
      {showPasscode && <PasscodeModal onSuccess={() => { setAdminMode(true); setShowPasscode(false); }} onClose={() => setShowPasscode(false)} />}
      <PanelHeader image="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80" title="Photography" onClose={onClose} />
      <div className="p-7">
        <GalleryLink href="/events/weddings" />
        <div className="flex justify-end mb-4">
          {adminMode
            ? <button onClick={() => setAdminMode(false)} className="font-inter text-xs px-3 py-1.5 bg-navy text-white">Done</button>
            : <button onClick={() => setShowPasscode(true)} className="flex items-center gap-1.5 font-inter text-xs px-3 py-1.5 border border-navy/20 text-navy/50 hover:text-navy hover:border-navy transition-colors"><Lock size={11} /> Manage Photos</button>
          }
        </div>
        <PinnedPhotos photos={photos} onAdd={handleUpload} onRemove={url => setPhotos(p => p.filter(u => u !== url))} adminMode={adminMode} uploading={false} />
        <p className="font-inter text-navy/80 leading-relaxed mb-6 text-sm">
          Our team includes five talented photographers who handle everything from weddings, matric dance farewells, conferences and events. Each photographer is well trained with world experience, supported by our incredible operations team. All editing is done in-house ensuring every image is polished to perfection.
        </p>
        <div className="grid grid-cols-3 gap-3 mb-7">
          {[{ v: '5', l: 'Photographers' }, { v: '100%', l: 'In-House Editing' }, { v: '10+', l: 'Years Experience' }].map(s => (
            <div key={s.l} className="border border-tech-grey p-3 text-center">
              <div className="font-grotesk font-bold text-signal-red text-2xl">{s.v}</div>
              <div className="font-inter text-navy/60 text-xs mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-px bg-signal-red" />
          <span className="font-inter text-signal-red text-xs tracking-[0.25em] uppercase">Wedding Packages</span>
        </div>
        <div className="space-y-3">
          {weddingPackages.map(pkg => (
            <div key={pkg.name} className={`border p-4 ${pkg.highlight ? 'border-signal-red bg-navy text-white' : 'border-navy/10'}`}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-inter text-signal-red text-xs tracking-widest uppercase">{pkg.tier}</p>
                  <h4 className={`font-grotesk font-bold text-lg ${pkg.highlight ? 'text-white' : 'text-navy'}`}>{pkg.name}</h4>
                </div>
                <span className={`font-grotesk font-bold text-xl ${pkg.highlight ? 'text-white' : 'text-navy'}`}>{pkg.price}</span>
              </div>
              <ul className="space-y-1">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={11} className="text-signal-red flex-shrink-0" />
                    <span className={`font-inter text-xs ${pkg.highlight ? 'text-white/80' : 'text-navy/70'}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="font-inter text-navy/40 text-xs mt-4">Prices exclude travel outside Gauteng.</p>
      </div>
    </ServicePanel>
  );
}

function VideographyPanel({ onClose }) {
  const [photos, setPhotos] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [adminMode, setAdminMode] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const videoRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file || photos.length >= 3) return;
    const url = URL.createObjectURL(file);
    setPhotos(prev => [...prev, url]);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
  };

  return (
    <ServicePanel maxW="max-w-lg">
      {showPasscode && <PasscodeModal onSuccess={() => { setAdminMode(true); setShowPasscode(false); }} onClose={() => setShowPasscode(false)} />}
      <PanelHeader image="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=800&q=80" title="Videography" onClose={onClose} />
      <div className="p-7">
        <GalleryLink href="/events/live-music" />
        <div className="flex justify-end mb-4">
          {adminMode
            ? <button onClick={() => setAdminMode(false)} className="font-inter text-xs px-3 py-1.5 bg-navy text-white">Done</button>
            : <button onClick={() => setShowPasscode(true)} className="flex items-center gap-1.5 font-inter text-xs px-3 py-1.5 border border-navy/20 text-navy/50 hover:text-navy hover:border-navy transition-colors"><Lock size={11} /> Manage Content</button>
          }
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-4 h-px bg-signal-red" />
            <span className="font-inter text-signal-red text-xs tracking-[0.25em] uppercase">Showreel</span>
          </div>
          {videoUrl ? (
            <div className="relative mx-auto bg-black overflow-hidden" style={{ maxWidth: '240px', aspectRatio: '9/16' }}>
              <video ref={videoRef} src={videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              {adminMode && (
                <button onClick={() => setVideoUrl(null)} className="absolute top-2 right-2 w-6 h-6 bg-signal-red flex items-center justify-center text-white"><X size={12} /></button>
              )}
            </div>
          ) : adminMode ? (
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-signal-red/30 p-8 cursor-pointer hover:bg-signal-red/5 transition-colors mx-auto" style={{ maxWidth: '240px', aspectRatio: '9/16' }}>
              <Play size={28} className="text-signal-red/50 mb-2" />
              <span className="font-inter text-xs text-navy/50 text-center">Upload reel video<br />(portrait / 9:16)</span>
              <input type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
            </label>
          ) : (
            <div className="flex flex-col items-center justify-center border border-dashed border-navy/10 p-8 text-center mx-auto" style={{ maxWidth: '240px', aspectRatio: '9/16' }}>
              <Play size={28} className="text-navy/20 mb-2" />
              <p className="font-inter text-navy/40 text-xs">Showreel coming soon</p>
            </div>
          )}
        </div>
        <PinnedPhotos photos={photos} onAdd={handlePhotoUpload} onRemove={url => setPhotos(p => p.filter(u => u !== url))} adminMode={adminMode} uploading={false} />
        <p className="font-inter text-navy/80 leading-relaxed mb-6 text-sm">
          Our team includes five talented cinematographers equipped with cameras, drones, and extensive experience in YouTube series and social media productions. From weddings to live events — every frame is crafted with purpose. All editing is completed in-house before delivery.
        </p>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[{ v: '5', l: 'Cinematographers' }, { v: 'Drone', l: 'Aerial Coverage' }, { v: '100%', l: 'In-House Editing' }].map(s => (
            <div key={s.l} className="border border-tech-grey p-3 text-center">
              <div className="font-grotesk font-bold text-signal-red text-xl">{s.v}</div>
              <div className="font-inter text-navy/60 text-xs mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-px bg-signal-red" />
          <span className="font-inter text-signal-red text-xs tracking-[0.25em] uppercase">Wedding Packages</span>
        </div>
        <div className="space-y-3">
          {weddingPackages.map(pkg => (
            <div key={pkg.name} className={`border p-4 ${pkg.highlight ? 'border-signal-red bg-navy text-white' : 'border-navy/10'}`}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-inter text-signal-red text-xs tracking-widest uppercase">{pkg.tier}</p>
                  <h4 className={`font-grotesk font-bold text-lg ${pkg.highlight ? 'text-white' : 'text-navy'}`}>{pkg.name}</h4>
                </div>
                <span className={`font-grotesk font-bold text-xl ${pkg.highlight ? 'text-white' : 'text-navy'}`}>{pkg.price}</span>
              </div>
              <ul className="space-y-1">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={11} className="text-signal-red flex-shrink-0" />
                    <span className={`font-inter text-xs ${pkg.highlight ? 'text-white/80' : 'text-navy/70'}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="font-inter text-navy/40 text-xs mt-4">Prices exclude travel outside Gauteng.</p>
      </div>
    </ServicePanel>
  );
}

function SoundPanel({ onClose }) {
  return (
    <ServicePanel maxW="max-w-lg">
      <PanelHeader image="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80" title="Music & Sound" onClose={onClose} />
      <div className="p-7">
        <p className="font-inter text-navy/80 leading-relaxed mb-7 text-sm">
          Our three sound engineers handle high-demand live environments with professional-grade equipment from the world's leading audio brands. Whether it's a conference, live music event, or studio recording — we deliver pristine sound every time.
        </p>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-px bg-signal-red" />
          <span className="font-inter text-signal-red text-xs tracking-[0.25em] uppercase">Equipment We Supply</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-7">
          {soundEquipment.map(cat => (
            <div key={cat.category} className="border border-navy/10 p-4">
              <h4 className="font-grotesk font-semibold text-navy text-sm mb-2">{cat.category}</h4>
              <ul className="space-y-1">
                {cat.items.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-signal-red flex-shrink-0" />
                    <span className="font-inter text-navy/60 text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-4 h-px bg-signal-red" />
          <span className="font-inter text-signal-red text-xs tracking-[0.25em] uppercase">Featured Brands</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-7">
          {soundBrands.map(brand => (
            <span key={brand} className="border border-navy/20 px-3 py-1 font-inter text-navy text-xs font-medium">{brand}</span>
          ))}
        </div>
        <div className="bg-tech-grey p-5">
          <p className="font-inter text-navy/70 text-sm mb-4 leading-relaxed">Interested in hiring our sound equipment or booking our engineers? Fill in our inquiry form.</p>
          <a href="https://wa.me/270126430131?text=Hi%20Phago%20Media%2C%20I%20would%20like%20to%20enquire%20about%20sound%20engineering%20services." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-4 bg-navy text-white font-grotesk font-semibold text-sm tracking-[0.1em] hover:bg-signal-red transition-colors duration-300">
            <ExternalLink size={16} />
            SUBMIT INQUIRY FORM
          </a>
        </div>
      </div>
    </ServicePanel>
  );
}

export default function ServiceBlades() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  const close = () => setActive(null);

  return (
    <section id="services" className="relative bg-tech-grey">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-signal-red" />
          <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">Our Services</span>
        </div>
        <h2 className="font-grotesk font-bold text-navy text-4xl md:text-5xl">
          Three disciplines.<br />
          <span className="text-signal-red">One vision.</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-[560px] overflow-hidden">
        {services.map((svc) => {
          const Icon = svc.icon;
          const isHovered = hovered === svc.id;
          return (
            <div
              key={svc.id}
              className={`service-blade relative cursor-pointer overflow-hidden ${isHovered ? 'md:flex-[2]' : 'md:flex-1'} min-h-[220px] md:min-h-0`}
              onMouseEnter={() => setHovered(svc.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive(svc.id)}
            >
              <img src={svc.image} alt={svc.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-105 hover:scale-110" />
              <div className="absolute inset-0 bg-navy/70 hover:bg-navy/50 transition-colors duration-500" />
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/30" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/30" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center border border-signal-red">
                    <Icon size={16} className="text-signal-red" />
                  </div>
                  <span className="font-inter text-white/60 text-xs tracking-widest uppercase">
                    {svc.id === 'sound' ? 'Sound Engineering' : svc.label}
                  </span>
                </div>
                <h3 className="font-grotesk font-bold text-white text-3xl md:text-4xl mb-2">{svc.label}</h3>
                <p className={`font-inter text-white/70 text-sm transition-all duration-500 ${isHovered ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  {svc.tagline}
                </p>
                <div className={`mt-4 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="font-inter text-signal-red text-xs tracking-widest uppercase border-b border-signal-red pb-0.5">Explore →</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={close}>
          {active === 'photography' && <PhotographyPanel onClose={close} />}
          {active === 'videography' && <VideographyPanel onClose={close} />}
          {active === 'sound' && <SoundPanel onClose={close} />}
        </div>
      )}
    </section>
  );
}
