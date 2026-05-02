import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import ServiceBlades from '../components/home/ServiceBlades';
import EventTicker from '../components/home/EventTicker';
import About from '../components/home/About';
import Pricing from '../components/home/Pricing';
import Contact from '../components/home/Contact';
import WhatsAppFAB from '../components/home/WhatsAppFAB';

export default function Home() {
  return (
    <div className="min-h-screen bg-studio-white">
      <Navbar />
      <Hero />
      <ServiceBlades />
      <EventTicker />
      <About />
      <Pricing />
      <Contact />
      <WhatsAppFAB />
    </div>
  );
}
