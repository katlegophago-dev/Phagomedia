import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  const whatsappUrl = 'https://wa.me/270126430131?text=Hi%20Phago%20Media%2C%20I%20would%20like%20to%20get%20a%20quote.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-signal-red flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors duration-300 whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-white" />
    </a>
  );
}
