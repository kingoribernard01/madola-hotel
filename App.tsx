import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Restaurant from './pages/Restaurant';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import WhatsAppButton from './components/WhatsAppButton';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<SingleRoom />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}