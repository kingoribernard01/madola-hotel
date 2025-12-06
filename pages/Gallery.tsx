import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const categories = ["All", "Rooms", "Dining", "Common Areas", "Surroundings"];

const galleryImages = [
  { id: 1, category: "Rooms", src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop", title: "Deluxe King Bedroom" },
  { id: 2, category: "Dining", src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop", title: "Restaurant Ambience" },
  { id: 3, category: "Common Areas", src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop", title: "Main Lobby" },
  { id: 4, category: "Rooms", src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop", title: "Apartment Suite Living" },
  { id: 5, category: "Dining", src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop", title: "Plated Dish" },
  { id: 6, category: "Common Areas", src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop", title: "Corridor Details" },
  { id: 7, category: "Surroundings", src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=800&auto=format&fit=crop", title: "Nairobi City View" },
  { id: 8, category: "Rooms", src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop", title: "Twin Room Setup" },
  { id: 9, category: "Dining", src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop", title: "Fresh Coffee" },
  { id: 10, category: "Surroundings", src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=800&auto=format&fit=crop", title: "Nearby Park" },
  { id: 11, category: "Common Areas", src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop", title: "Lounge Area" },
  { id: 12, category: "Rooms", src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop", title: "Standard Queen" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-16 min-h-screen bg-madola-ivory">
      {/* HERO */}
      <div className="bg-madola-forest text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Explore Our Spaces</h1>
        <p className="text-madola-sage max-w-xl mx-auto text-lg">A visual journey through the comfort, elegance, and surroundings of Madola Hotel.</p>
      </div>

      {/* FILTER TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-madola-gold text-white shadow-lg scale-105" 
                  : "bg-white text-madola-forest hover:bg-madola-forest/5 border border-madola-gold/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.title} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white w-10 h-10 opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-medium">{image.title}</p>
                    <p className="text-madola-gold text-xs uppercase tracking-wider">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="mt-24 text-center bg-white p-12 rounded-3xl border border-madola-gold/20 shadow-xl">
           <h2 className="text-3xl font-bold text-madola-forest font-serif mb-4">Love what you see?</h2>
           <p className="text-madola-espresso/70 mb-8 text-lg">Experience the beauty of Madola Hotel in person.</p>
           <Link to="/rooms">
             <Button variant="primary">Book Your Stay Today</Button>
           </Link>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-madola-gold">
              <X className="w-10 h-10" />
            </button>
            <motion.div 
               initial={{ scale: 0.8 }}
               animate={{ scale: 1 }}
               className="relative max-w-5xl max-h-[90vh] w-full"
               onClick={(e) => e.stopPropagation()}
            >
               <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-full max-h-[85vh] object-contain rounded-lg" />
               <div className="mt-4 text-center text-white">
                 <h3 className="text-2xl font-serif">{selectedImage.title}</h3>
                 <p className="text-madola-gold text-sm uppercase tracking-widest mt-1">{selectedImage.category}</p>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}