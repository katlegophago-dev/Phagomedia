import EventPageLayout from '../../components/events/EventPageLayout';

const packages = [
  {
    tier: 'Tier 1 · Essential', name: 'The Classic', price: 'R8,500', highlight: false,
    features: ['Minimum 2 Photographers', '6 Hours Coverage', '300–400 Edited Images', 'Online Gallery', 'Colour Grading'],
  },
  {
    tier: 'Tier 2 · Signature', name: 'The Luxe', price: 'R12,000', highlight: true,
    features: ['Minimum 3 Photographers', '1 Videographer', '10 Hours Coverage', '500–700 Edited Images', 'Engagement Shoot', 'Drone Shots Included'],
  },
  {
    tier: 'Tier 3 · Elite', name: 'The Dynasty', price: 'R18,000', highlight: false,
    features: ['Full Production Team', '12 Hours Coverage', '800–1000+ Edited Images', 'Full Wedding Film', 'Highlight Reel', 'Drone Shots Included'],
  },
];

export default function Weddings() {
  return (
    <EventPageLayout
      title="Weddings"
      subtitle="White, Traditional & Home Affairs — every union, perfectly captured."
      heroImage="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
      packages={packages}
      pricingTitle="Wedding Packages"
      eventType="weddings"
    />
  );
}
