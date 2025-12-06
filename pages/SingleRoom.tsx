import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Wifi, Tv, Coffee, Maximize, Check, Users, Monitor, ShowerHead, Wind } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function SingleRoom() {
  const { id } = useParams();

  // Mock data fetching based on ID - in a real app this would use an API or context
  // defaulting to Deluxe info for demo
  const room = {
    name: "Deluxe King Room",
    price: "$120",
    desc: "This room features a spacious king bed, comfortable workspace, fast WiFi, smart TV, modern bathroom, and warm lighting — ideal for work or relaxation.",
    amenities: [
        { icon: Wifi, label: "High Speed Wifi" },
        { icon: Tv, label: "55\" Smart TV" },
        { icon: Monitor, label: "Work Desk" },
        { icon: ShowerHead, label: "Hot Rain Shower" },
        { icon: Coffee, label: "Tea/Coffee Maker" },
        { icon: Wind, label: "Air Conditioning" },
    ]
  };

  return (
    <div className="bg-madola-ivory min-h-screen">
      {/* HERO IMAGE */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <img 
            src={`https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1920&auto=format&fit=crop`} 
            alt="Room Detail" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-madola-forest/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
            <div className="max-w-7xl mx-auto animate-in slide-in-from-bottom-10 fade-in duration-700">
                <span className="inline-block bg-madola-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-madola-forest mb-6">Most Popular Choice</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">{room.name}</h1>
                <p className="text-3xl text-madola-gold font-light">{room.price} <span className="text-lg text-white/70 font-sans">/ night</span></p>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-16">
                <section>
                    <h2 className="text-2xl font-bold text-madola-forest mb-6 font-serif">Room Overview</h2>
                    <p className="text-lg text-madola-espresso/70 leading-relaxed">{room.desc}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-madola-forest mb-6 font-serif">Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {room.amenities.map((am, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-madola-gold/10 shadow-sm hover:shadow-md transition-shadow">
                                <am.icon className="h-5 w-5 text-madola-gold" />
                                <span className="text-madola-forest font-medium text-sm">{am.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-madola-forest mb-6 font-serif">Gallery</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop" className="rounded-xl w-full h-48 object-cover hover:opacity-90 transition-opacity" alt="Detail 1" />
                        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop" className="rounded-xl w-full h-48 object-cover hover:opacity-90 transition-opacity" alt="Detail 2" />
                        <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop" className="rounded-xl w-full h-48 object-cover hover:opacity-90 transition-opacity" alt="Detail 3" />
                        <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600&auto=format&fit=crop" className="rounded-xl w-full h-48 object-cover hover:opacity-90 transition-opacity" alt="Detail 4" />
                    </div>
                </section>
            </div>

            {/* RIGHT SIDEBAR (Sticky) */}
            <div className="lg:col-span-1">
                <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-madola-gold">
                    <h3 className="text-2xl font-bold mb-6 text-madola-forest font-serif">Book this Room</h3>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-madola-forest mb-2">Check In</label>
                            <input type="date" className="w-full px-4 py-3 bg-madola-ivory border border-madola-sage/30 rounded-lg focus:ring-2 focus:ring-madola-gold focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-madola-forest mb-2">Check Out</label>
                            <input type="date" className="w-full px-4 py-3 bg-madola-ivory border border-madola-sage/30 rounded-lg focus:ring-2 focus:ring-madola-gold focus:outline-none" />
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-madola-forest mb-2">Guests</label>
                             <select className="w-full px-4 py-3 bg-madola-ivory border border-madola-sage/30 rounded-lg focus:ring-2 focus:ring-madola-gold focus:outline-none">
                                <option>1 Guest</option>
                                <option>2 Guests</option>
                                <option>3 Guests</option>
                             </select>
                        </div>
                        <div className="pt-4">
                            <Button variant="primary" className="w-full" type="button">
                                Check Availability
                            </Button>
                            <p className="text-center text-xs text-madola-sage mt-3">No payment charged yet</p>
                        </div>
                    </form>

                    <div className="mt-8 pt-8 border-t border-madola-gold/10">
                        <h4 className="font-semibold mb-2 text-madola-forest">Need help?</h4>
                        <p className="text-sm text-madola-espresso/70">Call us 24/7 at <a href="tel:+254722559001" className="text-madola-forest font-bold hover:text-madola-gold transition-colors">+254 722 559 001</a></p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}