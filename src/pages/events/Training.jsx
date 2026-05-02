import EventPageLayout from '../../components/events/EventPageLayout';

const packages = [
  {
    tier: 'Standard', name: 'Essential', price: 'R5,500', highlight: false,
    features: ['3 Cameras, 2 Videographers + 1 Photographer', '4 Hours Coverage', '150–250 Images', '48–72 Hour Delivery'],
  },
  {
    tier: 'Professional', name: 'Premium', price: 'R12,500', highlight: true,
    features: ['3 Cameras, 2 Videographers + 1 Photographer', '8 Hours Coverage', '400–600 Images', 'Highlight Reel'],
  },
  {
    tier: 'Full Production', name: 'Elite', price: 'R15,000', highlight: false,
    features: ['3 Cameras, 2 Videographers + 1 Photographer', 'Full Day Coverage', '600–900 Images', 'Full Event Film', 'Drone Shots Included'],
  },
];

export default function Training() {
  return (
    <EventPageLayout
      title="Training & Workshops"
      subtitle="Every detail documented — from keynotes to breakout sessions."
      heroImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
      packages={packages}
      pricingTitle="Training & Workshop Packages"
      eventType="training"
    />
  );
}
