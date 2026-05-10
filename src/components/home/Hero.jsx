import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);

  const heroImages = [
    'https://i.imgur.com/sY18rVf.jpeg',
    'https://i.imgur.com/iANb9E4.jpeg',
    'https://i.imgur.com/PNMhXq5.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {heroImages.map((img, i) => (
        <div
          key={img}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === currentImg ? 1 : 0 }}
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex h-full items-center justify-center flex-col text-white text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          PHAGO MEDIA
        </h1>

        <a
          href="https://wa.me/270126430131"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 px-8 py-4 rounded-md"
        >
          CHAT WITH US
        </a>
      </div>

      <div className="absolute bottom-6 right-6 z-20 text-white">
        <ChevronDown />
      </div>
    </section>
  );
}
