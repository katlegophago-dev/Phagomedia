import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background">
      <h1 className="text-6xl font-grotesk font-bold text-navy mb-4">404</h1>
      <p className="text-muted-foreground mb-8">Page not found</p>
      <Link 
        to="/" 
        className="bg-navy text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
