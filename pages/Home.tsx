import React from 'react';
import { HeroGeometric } from '../components/ui/shape-landing-hero';
import { Wifi, Tv, Coffee, MapPin, ShieldCheck, Car, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const features = [
  { icon: Wifi, title: "High-speed WiFi", desc: "Fiber connection in all rooms" },
  { icon: Tv, title: "Smart Entertainment", desc: "4K TVs with streaming apps" },
  { icon: Coffee, title: "Restaurant & Lounge", desc: "Local & international cuisine" },
  { icon: ShieldCheck, title: "24/7 Support", desc: "Round-the-clock security & desk" },
];

const rooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    desc: "Calm, spacious, ideal for business and leisure.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
    price: "$120"
  },
  {
    id: 2,
    name: "Executive Twin",
    desc: "Perfect for families or shared travel needs.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
    price: "$150"
  },
  {
    id: 3,
    name: "Apartment Suite",
    desc: "Living area + kitchenette for extended comfort.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
    price: "$200"
  }
];

export default function Home() {
  return (
    <div className="bg-madola-ivory min-h-screen">
      {/* SECTION 1: HERO */}
      <HeroGeometric 
        badge="Madola Hotel" 
        title1="Comfortable, Modern" 
        title2="Stay in the City Heart"
      />

      {/* SECTION 2: HIGHLIGHTS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 -mt-32">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-xl bg-white shadow-xl shadow-black/5 border border-madola-gold/10 hover:transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="h-14 w-14 rounded-full bg-madola-ivory flex items-center justify-center text-madola-forest mb-6 group-hover:bg-madola-forest group-hover:text-madola-gold transition-colors duration-300">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-madola-espresso text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-madola-espresso/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ROOM SHOWCASE */}
      <section className="py-24 bg-madola-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-madola-gold font-bold tracking-widest uppercase text-sm mb-3 block">Accommodations</span>
            <h2 className="text-4xl font-bold text-madola-forest mb-4 font-serif">Our Best Rooms</h2>
            <p className="text-madola-espresso/70 max-w-2xl mx-auto text-lg">Experience comfort tailored to your needs, blending modern amenities with elegant design.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-madola-forest/10 transition-all duration-300 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={room.image} alt={room.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-8">
                    <div className="flex justify-between items-baseline mb-3">
                        <h3 className="text-xl font-bold text-madola-forest font-serif">{room.name}</h3>
                        <span className="text-madola-gold font-bold text-lg">{room.price}<span className="text-xs text-madola-espresso/50 font-normal">/night</span></span>
                    </div>
                  <p className="text-madola-espresso/60 mb-6 text-sm leading-relaxed">{room.desc}</p>
                  <Link to={`/rooms`}>
                    <Button variant="secondary" className="w-full">
                        View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
           <div className="mt-16 text-center">
            <Link to="/rooms">
                <Button variant="primary" className="mx-auto">
                    View All Accommodations <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: ABOUT */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-madola-gold/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-madola-forest/20 rounded-full blur-3xl"></div>
                <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop" 
                    alt="Madola Lobby" 
                    className="rounded-lg shadow-2xl relative z-10 w-full"
                />
            </div>
            <div className="lg:w-1/2">
              <span className="text-madola-gold font-bold tracking-widest uppercase text-sm mb-3 block">About Us</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-madola-forest mb-8 font-serif leading-tight">A Modern Boutique <br/>Hotel Experience</h2>
              <p className="text-lg text-madola-espresso/70 mb-8 leading-relaxed">
                Madola Hotel provides warm hospitality with the comfort and convenience of modern living. Whether you're here for business, family travel, or leisure, we guarantee a peaceful and welcoming stay.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                 {[
                    "Steps from the Mall", 
                    "Secure Parking", 
                    "Event Spaces", 
                    "Local Cultural Touches"
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-madola-gold"></div>
                        <span className="text-madola-forest font-medium">{item}</span>
                    </div>
                 ))}
              </div>
              <Link to="/contact">
                 <Button variant="primary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AMENITIES GRID */}
      <section className="py-24 bg-madola-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 font-serif">Everything You Need</h2>
                <p className="text-madola-sage max-w-lg mx-auto">Thoughtful amenities designed to make your stay seamless and comfortable.</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { icon: Wifi, label: "Fast WiFi" },
                    { icon: Car, label: "Free Parking" },
                    { icon: Coffee, label: "Restaurant" },
                    { icon: ShieldCheck, label: "24/7 Security" },
                    { icon: Tv, label: "Smart TVs" },
                    { icon: Check, label: "Laundry Service" },
                    { icon: MapPin, label: "Airport Transfer" },
                    { icon: Check, label: "Conference Room" }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-8 border border-white/10 rounded-lg hover:bg-white/5 hover:border-madola-gold/50 transition-all duration-300 group">
                        <item.icon className="h-8 w-8 text-madola-gold mb-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-madola-ivory">{item.label}</span>
                    </div>
                ))}
             </div>
        </div>
      </section>

      {/* SECTION 6: LOCATION */}
      <section className="py-0 relative h-[450px]">
         <div className="absolute inset-0 bg-zinc-200">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.255979854462!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f28f0c1%3A0x2b8e39c490097e3!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2suk!4v1709900000000!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(0.2)'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:top-auto md:bottom-12 bg-white shadow-2xl px-10 py-6 rounded-lg text-center max-w-md w-full mx-4 border-l-4 border-madola-gold">
             <h3 className="text-madola-forest font-bold text-lg mb-1">Prime Location</h3>
             <p className="text-madola-espresso/70">Located centrally near the Mall & Sports Complex</p>
         </div>
      </section>
    </div>
  );
}