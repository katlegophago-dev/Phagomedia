const stats = [
  { value: '5', label: 'Photographers' },
  { value: '5', label: 'Cinematographers' },
  { value: '3', label: 'Sound Engineers' },
  { value: '100%', label: 'In-House Editing' },
];

export default function About() {
  return (
    <section id="about" className="bg-studio-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 border border-tech-grey rounded-full translate-x-32 -translate-y-32 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-signal-red" />
              <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">About Us</span>
            </div>
            <h2 className="font-grotesk font-bold text-navy text-4xl md:text-5xl mb-6 leading-tight">
              Your media specialists
              <br />
              <span className="text-signal-red">in the capital city.</span>
            </h2>
            <p className="font-inter text-navy/70 leading-relaxed mb-6 text-base">
              Phago Media is located in Centurion, Pretoria — the capital city of South Africa. We are
              photographers, videographers, and musical instrument specialists delivering world-class
              service for every event.
            </p>
            <p className="font-inter text-navy/70 leading-relaxed mb-8 text-base">
              Every service we offer is backed by a dedicated in-house editing team, ensuring that
              every image, video, and recording is polished to perfection before it lands in your hands.
              We don't just document moments — we craft memories that last a lifetime.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-signal-red rounded-full animate-pulse" />
              <span className="font-inter text-navy/60 text-sm">
                133 Edison Crescent, Centurion 0157, Gauteng
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="relative border border-tech-grey p-6 viewfinder-marks">
                  <div className="font-grotesk font-bold text-signal-red text-4xl mb-1">{stat.value}</div>
                  <div className="font-inter text-navy/60 text-sm tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden h-48">
              <img
                src="https://res.cloudinary.com/djpngdzyj/image/upload/v1778618322/491746921_1123316783155985_756589949538010257_n_iffmwl.jpg"
                alt="Phago Media team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/30" />
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-white/50" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-white/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
