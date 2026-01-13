import { useState } from 'react';
import { Internship } from './types/internship';
import Hero from './components/Hero';
import About from './components/About';
import InternshipListing from './components/InternshipListing';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import PaymentPage from './components/PaymentPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'payment'>('home');
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  const handleEnroll = (internship: Internship) => {
    setSelectedInternship(internship);
    setCurrentPage('payment');
  };

  if (currentPage === 'payment') {
    return <PaymentPage onBack={() => setCurrentPage('home')} internship={selectedInternship} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigateToPayment={() => setCurrentPage('payment')} />
      <Hero />
      <About />
      <InternshipListing onEnroll={handleEnroll} />
      <Contact />
    </div>
  );
}

export default App;
