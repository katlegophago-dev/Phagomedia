import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Cloudinary serves the right size per device — full quality, smaller file
const getImgUrl = (id, width) =>
  `https://res.cloudinary.com/djpngdzyj/image/upload/f_auto,q_auto,w_${width}/${id}`;

const imageIds = [
  'IMG_8597_mcv4wg',
  'IMG_5896_knv30p',
  'Katlego_968_wba9rc',
  'IMG_8613_auzeq3',
  'IMG_8588_h7e8bm',
  'IMG_8572_zvrj8w',
];

// Build a srcSet so the browser picks the right resolution automatically
const makeSrcSet = (id) =>
  [480, 800, 1200, 1600].map((w) => `${getImgUrl(id, w)} ${w}w`).join(', ');

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);
  const [revealed, setRevealed] = useState(false);
  // Only load the first image immediately; unlock others after mount
  const [unlockedUpTo, setUnlockedUpTo] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Unlock the next image a bit before the transition so it's ready
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => {
        const next = (prev + 1) % imageIds.length;
        // Pre-unlock the one after next too, so it has time to load
        setUnlockedUpTo((u) => Math.max(u, Math.min(next + 1, imageIds.length - 1)));
        return next;
      });
    }, 4500);

    // Unlock image 1 after 3s so it's definitely ready for first transition
    const preload = setTimeout(() => setUnlockedUpTo(1), 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(preload);
    };
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waUrl = 'https://wa.me/270126430131';

  return (
    <section
      id="hero"
      className={`relative h-screen min-h-[600px] overflow-hidden ${revealed ? 'shutter-reveal' : ''}`}
    >
      {imageIds.map((id, i) => (
        <div
          key={id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === currentImg ? 1 : 0 }}
        >
          {i <= unlockedUpTo && (
            <img
              src={getImgUrl(id, 800)}
              srcSet={makeSrcSet(id)}
              sizes="100vw"
              alt="Phago Media professional photography and videography services in Pretoria Centurion Gauteng"
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : 'auto'}
              decoding={i === 0 ? 'sync' : 'async'}
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)',
            }}
          />
        </div>
      ))}

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 w-8 h-8 border-t border-l border-white/30 pointer-events-none" />
      <div className="absolute top-24 right-8 w-8 h-8 border-t border-r border-white/30 pointer-events-none" />
      <div className="absolute bottom-20 left-8 w-8 h-8 border-b border-l border-white/30 pointer-events-none" />
      <div className="absolute bottom-20 right-8 w-8 h-8 border-b border-r border-white/30 pointer-events-none" />

      {/* REC indicator */}
      <div className="absolute top-24 right-20 flex items-center gap-2 z-10">
        <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse" />
        <span className="text-white/60 font-inter text-xs tracking-widest">REC</span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-grotesk font-bold text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            CAPTURING
            <br />
            <span className="text-signal-red">THE VIBRATION</span>
            <br />
            OF THE MOMENT.
          </h1>
          <p className="font-inter text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Photography, Videography and Sound Engineering in Pretoria.
            Five photographers, five cinematographers, three sound engineers.
            All delivering world-class work for your most important moments in Gauteng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.open(waUrl, '_blank')}
              className="px-8 py-4 bg-signal-red text-white font-grotesk font-semibold text-sm tracking-[0.15em] hover:bg-red-700 transition-all duration-300 text-center"
            >
              CHAT WITH US
            </button>
            <button
              onClick={scrollToServices}
              className="px-8 py-4 border border-white/40 text-white font-grotesk font-semibold text-sm tracking-[0.15em] hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              OUR SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {imageIds.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setUnlockedUpTo((u) => Math.max(u, i));
              setCurrentImg(i);
            }}
            className={`transition-all duration-300 ${
              i === currentImg ? 'w-6 h-1 bg-signal-red' : 'w-1 h-1 bg-white/40 rounded-full'
            }`}
          />
        ))}
      </div>

      {/* Scroll prompt */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-6 right-8 flex flex-col items-center gap-1 text-white/40 hover:text-white/80 transition-colors z-10"
      >
        <span className="font-inter text-xs tracking-widest rotate-90 mb-2">SCROLL</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
