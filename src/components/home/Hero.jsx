import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const heroImages = [
  'https://i.imgur.com/sY18rVf.jpeg',
  'https://i.imgur.com/iANb9E4.jpeg',
  'https://i.imgur.com/PNMhXq5.jpeg',
  'https://i.imgur.com/I1JkcY2.jpeg',
  'https://i.imgur.com/Lzd5uce.jpeg',
  'https://i.imgur.com/FNRGKjS.jpeg',
];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waUrl = 'https://wa.me/270126430131?text=Hi%20Phago%20Media%2C%20I%20would%20like%20to%20discuss%20a%20booking.';

  return (
    <section id="hero" className={`relative h-screen min-h-[600px] overflow-hidden ${revealed ? 'shutter-reveal' : ''}`}>
      {heroImages.map((img, i) => (
        <div key={img} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === currentImg ? 1 : 0 }}>
          <img src={img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(27,42,74,0.75) 0%, rgba(27,42,74,0.5) 50%, rgba(27,42,74,0.85) 100%)' }} />
        </div>
      ))}
      <div className="absolute top
