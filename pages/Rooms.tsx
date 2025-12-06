import React from 'react';
import { Wifi, Users, Maximize, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const allRooms = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    description: "Experience ultimate comfort in our spacious Deluxe King Room, featuring a plush king-sized bed and a modern workstation.",
    price: 120,
    capacity: "2 Guests",
    size: "35m²",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
    features: ["King Bed", "Work Desk", "City View"]
  },
  {
    id: "standard-queen",
    name: "Standard Queen Room",
    description: "A cozy and inviting space perfect for solo travelers or couples, offering all essential amenities for a relaxing stay.",
    price: 90,
    capacity: "2 Guests",
    size: "28m²",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
    features: ["Queen Bed", "En-suite Shower", "Smart TV"]
  },
  {
    id: "executive-twin",
    name: "Executive Twin Room",
    description: "Ideal for friends or colleagues, this room offers two comfortable single beds without compromising on luxury.",
    price: 150,
    capacity: "2 Guests",
    size: "40m²",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
    features: ["2 Single Beds", "Seating Area", "Mini Bar"]
  },
  {
    id: "apartment-suite",
    name: "Apartment Suite",
    description: "Your home away from home. Includes a separate living area and a kitchenette, perfect for extended stays.",
    price: 200,
    capacity: "3 Guests",
    size: "55m²",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
    features: ["Kitchenette", "Living Room", "Bathtub"]
  },
  {
    id: "budget-single",
    name: "Budget Single Room",
    description: "Compact and efficient, designed for the budget-conscious traveler who needs a clean place to rest.",
    price: 60,
    capacity: "1 Guest",
    size: "20m²",
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=800&auto=format&fit=crop",
    features: ["Single Bed", "Compact Desk", "Essential Wifi"]
  }
];

export default function Rooms() {
  return (
    <div className="pt-16 min-h-screen bg-madola-ivory">
      {/* Header */}
      <div className="bg-madola-forest py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -left-10 -bottom-20 w-64 h-64 bg-madola-gold/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
            <span className="text-madola-gold font-bold tracking-widest uppercase text-sm mb-4 block">Accommodations</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Choose Your Perfect Room</h1>
            <p className="text-madola-sage/80 max-w-2xl mx-auto text-lg font-light">From cozy single rooms to spacious suites, find the accommodation that suits your style and budget.</p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12">
          {allRooms.map((room, index) => (
            <div key={room.id} className={`flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-madola-gold/10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 relative min-h-[350px]">
                <img src={room.image} alt={room.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-6 left-6 bg-madola-ivory/95 backdrop-blur px-5 py-2 rounded-full text-sm font-semibold text-madola-forest border border-madola-forest/10 shadow-lg">
                    From <span className="text-madola-gold font-bold text-base">${room.price}</span>/night
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-madola-forest mb-4 font-serif">{room.name}</h2>
                <p className="text-madola-espresso/70 mb-8 leading-relaxed text-lg">{room.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                   <div className="flex items-center gap-2 text-sm text-madola-espresso/80 bg-madola-ivory px-3 py-2 rounded-md border border-madola-gold/20">
                      <Users className="h-4 w-4 text-madola-gold" /> {room.capacity}
                   </div>
                   <div className="flex items-center gap-2 text-sm text-madola-espresso/80 bg-madola-ivory px-3 py-2 rounded-md border border-madola-gold/20">
                      <Maximize className="h-4 w-4 text-madola-gold" /> {room.size}
                   </div>
                   <div className="flex items-center gap-2 text-sm text-madola-espresso/80 bg-madola-ivory px-3 py-2 rounded-md border border-madola-gold/20">
                      <Wifi className="h-4 w-4 text-madola-gold" /> Free WiFi
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-y-3 mb-10">
                   {room.features.map((feat, i) => (
                       <div key={i} className="flex items-center gap-2 text-madola-forest text-sm font-medium">
                           <div className="h-1.5 w-1.5 rounded-full bg-madola-gold"></div>
                           {feat}
                       </div>
                   ))}
                </div>

                <Link to={`/rooms/${room.id}`}>
                    <Button variant="primary" className="w-full sm:w-auto">
                        View Details & Book <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}