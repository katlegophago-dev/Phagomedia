import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = 'https://wa.me/270126430131?text=Hi%20Phago%20Media%2C%20I%20would%20like%20to%20get%20a%20quote.';

  return (
    <section id="contact" className="bg-navy relative overflow-hidden">
      {/* Viewfinder decor */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-white/10 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-white/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[520px]">
          {/* Left — Contact Info */}
          <div className="px-6 lg:px-16 py-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-signal-red" />
              <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">Get In Touch</span>
            </div>
            <h2 className="font-grotesk font-bold text-white text-4xl md:text-5xl mb-4 leading-tight">
              Ready to tell
              <br />
              <span className="text-signal-red">your story?</span>
            </h2>
            <p className="font-inter text-white/60 mb-12 text-base leading-relaxed">
              Reach out via any channel below. We respond quickly and are always happy to discuss your event.
            </p>

            <div className="space-y-6">
              <a
                href="tel:0126430131"
                className="flex items-center gap-5 group"
              >
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-signal-red group-hover:bg-signal-red transition-all duration-300">
                  <Phone size={16} className="text-white/60 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-inter text-white/40 text-xs tracking-widest uppercase mb-0.5">Call / SMS / WhatsApp</p>
                  <p className="font-grotesk font-semibold text-white text-lg">012 643 0131</p>
                </div>
              </a>

              <a
                href="mailto:Info@Phago.Media"
                className="flex items-center gap-5 group"
              >
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-signal-red group-hover:bg-signal-red transition-all duration-300">
                  <Mail size={16} className="text-white/60 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-inter text-white/40 text-xs tracking-widest uppercase mb-0.5">Email</p>
                  <p className="font-grotesk font-semibold text-white text-lg">Info@Phago.Media</p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                  <MapPin size={16} className="text-white/60" />
                </div>
                <div>
                  <p className="font-inter text-white/40 text-xs tracking-widest uppercase mb-0.5">Address</p>
                  <p className="font-grotesk font-semibold text-white text-base leading-snug">
                    133 Edison Crescent,<br />
                    Centurion, Gauteng 0157
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — WhatsApp CTA Block */}
          <div className="bg-signal-red px-6 lg:px-16 py-20 flex flex-col justify-center items-start">
            <div className="mb-6">
              <MessageCircle size={48} className="text-white/90" />
            </div>
            <h3 className="font-grotesk font-bold text-white text-4xl md:text-5xl mb-4 leading-tight">
              Quickest way<br />to reach us.
            </h3>
            <p className="font-inter text-white/80 mb-10 text-base leading-relaxed">
              Send us a WhatsApp message to get a quote, check availability, or ask any questions. 
              We typically respond within minutes.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-signal-red font-grotesk font-bold text-sm tracking-[0.1em] hover:bg-navy hover:text-white transition-all duration-300"
            >
              <MessageCircle size={18} />
              CHAT ON WHATSAPP
            </a>

            <p className="font-inter text-white/50 text-xs mt-6">
              © 2025 Phago Media. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
