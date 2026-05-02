import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import Weddings from './pages/events/Weddings';
import Matric from './pages/events/Matric';
import Training from './pages/events/Training';
import LiveMusic from './pages/events/LiveMusic';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/weddings" element={<Weddings />} />
          <Route path="/events/matric" element={<Matric />} />
          <Route path="/events/training" element={<Training />} />
          <Route path="/events/live-music" element={<LiveMusic />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
