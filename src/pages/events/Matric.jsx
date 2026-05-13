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
      heroImage="https://res.cloudinary.com/djpngdzyj/image/upload/v1778662116/pexels-juan-rosario-660540473-29534665_seb4oz.jpg"
      packages={packages}
      pricingTitle="Matric Dance Packages"
      eventType="matric"
    />
  );
}