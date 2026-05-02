import { useNavigate } from 'react-router-dom';

const tickerEvents = [
  'WEDDINGS', 'MATRIC DANCE', 'LIVE MUSIC EVENTS', 'TRAINING & WORKSHOPS',
  'CONFERENCES', 'GRADUATIONS', 'CORPORATE EVENTS', 'LIVE STREAMING',
];

const cards = [
  { label: 'Weddings', route: '/events/weddings' },
  { label: 'Matric Dance', route: '/events/matric' },
  { label: 'Training & Workshops', route: '/events/training' },
  { label: 'Music & Sound', route: '/events/live-music' },
];

export default function EventTicker() {
  const navigate = useNavigate();
  return (
    <section id="events" className="bg-navy py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-signal-red" />
          <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">We Serve</span>
        </div>
        <h2 className="font-grotesk font-bold text-white text-4xl md:text-5xl">
          Every occasion.<br />
          <span className="text-signal-red">Perfectly captured.</span>
        </h2>
      </div>

      {/* Ticker */}
      <div className="relative overflow-hidden py-4 border-y border-white/10">
        <div className="ticker-track flex whitespace-nowrap">
          {[...tickerEvents, ...tickerEvents].map((event, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="font-grotesk font-bold text-white/80 text-xl lg:text-2xl tracking-widest mx-6 hover:text-white transition-colors cursor-default">
                {event}
              </span>
              <span className="text-signal-red text-lg">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Event Cards */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.route)}
            className="border border-white/10 p-6 hover:border-signal-red hover:bg-white/5 transition-all duration-300 group text-center cursor-pointer"
          >
            <p className="font-grotesk font-medium text-white/70 group-hover:text-white transition-colors text-sm leading-snug mb-2">
              {item.label}
            </p>
            <span className="font-inter text-signal-red text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              View Details →
            </span>
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-4 text-center">
        <p className="font-inter text-white/40 text-sm tracking-widest uppercase">— and more —</p>
      </div>
    </section>
  );
}
