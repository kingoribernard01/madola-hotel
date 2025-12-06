import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, ShieldCheck, MapPin, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function About() {
  return (
    <div className="pt-16 min-h-screen bg-madola-ivory">
      {/* HERO SECTION */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
           src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
           alt="About Madola Hotel" 
           className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-madola-forest/70 mix-blend-multiply"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-in fade-in zoom-in duration-700">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">About Madola Hotel</h1>
            <p className="text-xl md:text-2xl text-madola-ivory/90 font-light tracking-wide">Comfort. Warmth. Convenience.<br/>Hospitality that feels like home.</p>
        </div>
      </div>

      {/* STORY SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -top-6 -left-6 w-full h-full bg-madola-gold/10 rounded-2xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" 
               alt="Madola Story" 
               className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[500px]"
             />
          </div>
          <div className="order-1 md:order-2">
             <span className="text-madola-gold font-bold tracking-widest uppercase text-sm mb-3 block">Our Story</span>
             <h2 className="text-4xl font-bold text-madola-forest mb-6 font-serif">A Vision of Modern Comfort</h2>
             <div className="space-y-4 text-madola-espresso/70 text-lg leading-relaxed">
               <p>
                 Madola Hotel was founded with a singular vision: to create a sanctuary where modern luxury meets the warmth of home. 
                 Located in the heart of the city, we recognized the need for a space that caters to both the busy professional 
                 and the relaxed traveler.
               </p>
               <p>
                 We didn't just want to build a hotel; we wanted to build a community hub. A place where you are greeted by name, 
                 where the coffee is always fresh, and where your room serves as a peaceful retreat from the bustling city outside.
               </p>
               <p>
                 Today, we are proud to be a preferred destination for travelers who value convenience, safety, and personalized service.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-madola-gold font-bold tracking-widest uppercase text-sm mb-3 block">Our Core Values</span>
              <h2 className="text-4xl font-bold text-madola-forest font-serif">What Drives Us</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Heart, title: "Warm Hospitality", desc: "A place where every guest feels welcome and valued." },
                { icon: Home, title: "Modern Comfort", desc: "Thoughtfully designed rooms with premium amenities." },
                { icon: Star, title: "Exceptional Service", desc: "Personalized attention and 24/7 guest support." },
                { icon: MapPin, title: "Prime Location", desc: "Minutes away from the mall, sports complex, and hubs." }
              ].map((val, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-madola-ivory p-8 rounded-xl border border-madola-gold/10 text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                   <div className="h-14 w-14 mx-auto bg-white rounded-full flex items-center justify-center text-madola-gold mb-6 group-hover:bg-madola-forest group-hover:text-white transition-colors">
                      <val.icon className="h-7 w-7" />
                   </div>
                   <h3 className="text-xl font-bold text-madola-forest mb-3">{val.title}</h3>
                   <p className="text-madola-espresso/70 text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="py-24 bg-madola-forest relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-madola-forest/50 backdrop-blur-sm border border-madola-gold/30 p-8 md:p-12 rounded-2xl">
               <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 relative">
                     <div className="absolute inset-0 border-2 border-madola-gold rounded-full translate-x-2 translate-y-2"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
                        alt="Founder" 
                        className="w-full h-full object-cover rounded-full relative z-10 border-4 border-madola-forest" 
                     />
                  </div>
                  <div className="text-center md:text-left">
                     <h2 className="text-2xl text-madola-gold font-serif italic mb-6">"A Message From Our Founder"</h2>
                     <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
                        "I founded Madola Hotel with a simple belief: travel should feel warm, effortless, and comforting. 
                        Whether you’re staying with us for business or leisure, my promise is that you’ll experience the care, 
                        hospitality, and personalized attention that define who we are. Thank you for choosing to stay with us."
                     </blockquote>
                     <div>
                        <cite className="text-white font-bold not-italic text-lg block">James Madola</cite>
                        <span className="text-madola-sage text-sm uppercase tracking-widest">Founder & CEO</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <span className="text-madola-gold font-bold tracking-widest uppercase text-sm mb-3 block">Why Choose Us</span>
                <h2 className="text-4xl font-bold text-madola-forest mb-8 font-serif">What Makes Madola Different</h2>
                <div className="grid grid-cols-1 gap-6">
                   {[
                      "Boutique-size hotel ensuring personalized service",
                      "Quiet surroundings perfect for rest and work",
                      "Curated modern interiors with local touches",
                      "High-speed reliable fiber WiFi throughout",
                      "On-site restaurant serving fresh, organic meals"
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                         <CheckCircle className="h-6 w-6 text-madola-gold shrink-0" />
                         <span className="text-madola-espresso font-medium">{item}</span>
                      </div>
                   ))}
                </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full">
               <img 
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop" 
                  alt="Hotel Lobby" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl" 
               />
               <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                  <p className="text-madola-forest font-serif italic text-lg">"The attention to detail was immaculate. Felt like a home away from home."</p>
                  <div className="flex items-center gap-2 mt-4">
                     <div className="flex text-madola-gold"><Star className="h-4 w-4 fill-current"/><Star className="h-4 w-4 fill-current"/><Star className="h-4 w-4 fill-current"/><Star className="h-4 w-4 fill-current"/><Star className="h-4 w-4 fill-current"/></div>
                     <span className="text-xs text-madola-sage font-bold">Verified Guest</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-madola-gold/10">
         <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-madola-forest mb-6 font-serif">Experience Madola Hospitality</h2>
            <p className="text-lg text-madola-espresso/70 mb-8">Ready to book your stay? Explore our rooms and find your perfect space.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/rooms">
                  <Button variant="primary">Explore Our Rooms</Button>
               </Link>
               <Link to="/contact">
                  <Button variant="secondary" className="bg-white hover:bg-madola-gold hover:text-white">Contact Us</Button>
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}