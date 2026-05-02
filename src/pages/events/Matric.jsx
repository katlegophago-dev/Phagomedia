import EventPageLayout from '../../components/events/EventPageLayout';

const packages = [
  {
    tier: 'Starter', name: 'Essential', price: 'R1,800', highlight: false,
    features: ['60–90 Min Shoot', '1 Location', '50–80 Edited Images'],
  },
  {
    tier: 'Popular', name: 'Signature', price: 'R4,200', highlight: true,
    features: ['3 Hours Coverage', '2 Locations', '150–200 Images', 'Social Media Reel', 'Drone Shots Included'],
  },
  {
    tier: 'Premium', name: 'Full Experience', price: 'R9,500', highlight: false,
    features: ['Full Team Coverage', '300–500 Images', 'Full Event Film', 'Drone Shots Included'],
  },
];

export default function Matric() {
  return (
    <EventPageLayout
      title="Matric Dance"
      subtitle="Your farewell moment, documented in style."
      heroImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&q=80"
      packages={packages}
      pricingTitle="Matric Dance Packages"
      eventType="matric"
    />
  );
}
