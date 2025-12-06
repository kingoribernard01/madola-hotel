import React from 'react';
import { Clock, Utensils, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Restaurant() {
  return (
    <div className="pt-16 min-h-screen bg-madola-ivory">
      {/* HERO SECTION */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
            alt="Madola Restaurant Ambience" 
            className="absolute inset-0 w-full h-full object-cover" 
         />
         <div className="absolute inset-0 bg-madola-forest/50 mix-blend-multiply"></div>
         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-in fade-in zoom-in duration-700">
             <span className="block text-madola-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">Culinary Excellence</span>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">The Madola Lounge</h1>
             <p className="text-xl md:text-2xl text-madola-ivory/90 font-light max-w-2xl mx-auto">Experience relaxed dining with fresh local ingredients in an atmosphere of refined elegance.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         {/* INTRO */}
         <div className="text-center mb-24">
             <h2 className="text-4xl font-bold text-madola-forest mb-6 font-serif">A Taste of Excellence</h2>
             <p className="text-madola-espresso/70 max-w-3xl mx-auto text-lg leading-relaxed">
                 Dining at Madola Hotel is an experience of warmth and flavor. Enjoy a carefully curated menu featuring local favorites and international classics. 
                 Whether it's a quick breakfast before a meeting or a relaxed dinner with family, 
                 we serve fresh, delicious meals in a cozy atmosphere.
             </p>
         </div>

         {/* GALLERY GRID */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            <div className="relative overflow-hidden rounded-2xl group h-80 shadow-lg">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Restaurant Interior" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-lg">Elegant Interiors</span>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group h-80 shadow-lg">
                <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Plated Meal" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-lg">Gourmet Dishes</span>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group h-80 shadow-lg">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Coffee" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-lg">Artisan Coffee</span>
                </div>
            </div>
             <div className="relative overflow-hidden rounded-2xl group h-80 shadow-lg">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Fine Dining" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-lg">Fine Dining</span>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group h-80 shadow-lg">
                <img src="https://images.unsplash.com/photo-1466978913421-dad938661248?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Buffet Spread" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-lg">Fresh Buffet</span>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group h-80 shadow-lg">
                <img src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Cocktails" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-lg">Lounge Bar</span>
                </div>
            </div>
         </div>

         {/* INFO BOXES */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
             <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-madola-gold text-center hover:-translate-y-1 transition-transform duration-300">
                 <Clock className="h-10 w-10 text-madola-gold mx-auto mb-6" />
                 <h3 className="font-bold text-madola-forest text-xl mb-3">Opening Hours</h3>
                 <p className="text-madola-espresso/70 mb-1">Breakfast: 6:30 AM - 10:30 AM</p>
                 <p className="text-madola-espresso/70">All Day Dining: 11:00 AM - 10:00 PM</p>
             </div>
             <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-madola-gold text-center hover:-translate-y-1 transition-transform duration-300">
                 <Utensils className="h-10 w-10 text-madola-gold mx-auto mb-6" />
                 <h3 className="font-bold text-madola-forest text-xl mb-3">Cuisine</h3>
                 <p className="text-madola-espresso/70 mb-1">Local African Delicacies</p>
                 <p className="text-madola-espresso/70">Continental Classics</p>
             </div>
             <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-madola-gold text-center hover:-translate-y-1 transition-transform duration-300">
                 <Star className="h-10 w-10 text-madola-gold mx-auto mb-6" />
                 <h3 className="font-bold text-madola-forest text-xl mb-3">Atmosphere</h3>
                 <p className="text-madola-espresso/70 mb-1">Casual Elegant</p>
                 <p className="text-madola-espresso/70">Family Friendly</p>
             </div>
         </div>

         {/* MENU PREVIEW */}
         <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-madola-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="text-center mb-16 relative z-10">
                <span className="text-madola-gold uppercase tracking-widest text-xs font-bold">Chef's Selection</span>
                <h2 className="text-4xl font-bold text-madola-forest mt-3 font-serif">Menu Highlights</h2>
                <p className="text-madola-sage mt-2">Prepared with passion and the freshest ingredients</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 relative z-10">
                 {[
                     { 
                         name: "Grilled Tilapia", 
                         desc: "Fresh lake fish served with ugali and local greens.", 
                         price: "$18",
                         img: "https://images.unsplash.com/photo-1519708227418-c8fd9a3a272c?q=80&w=200&auto=format&fit=crop" 
                     },
                     { 
                         name: "Madola Burger", 
                         desc: "Premium beef patty, cheese, house sauce, hand-cut fries.", 
                         price: "$14",
                         img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop"
                     },
                     { 
                         name: "Chicken Alfredo", 
                         desc: "Creamy parmesan pasta with grilled chicken breast.", 
                         price: "$16",
                         img: "https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=200&auto=format&fit=crop"
                     },
                     { 
                         name: "Spicy Goat Stew", 
                         desc: "Traditional slow-cooked goat served with rice or chapati.", 
                         price: "$15",
                         img: "https://images.unsplash.com/photo-1547496502-ffa22d333e9f?q=80&w=200&auto=format&fit=crop"
                     },
                     { 
                         name: "Chef's Salad", 
                         desc: "Fresh garden greens, avocado, feta, house vinaigrette.", 
                         price: "$12",
                         img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop"
                     },
                     { 
                         name: "Tropical Fruit Platter", 
                         desc: "Seasonal selection of fresh, locally sourced fruits.", 
                         price: "$8",
                         img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=200&auto=format&fit=crop"
                     },
                 ].map((item, i) => (
                     <div key={i} className="flex gap-4 items-start group">
                         <img src={item.img} alt={item.name} className="w-20 h-20 rounded-lg object-cover shadow-md group-hover:scale-105 transition-transform duration-300" />
                         <div className="flex-1 border-b border-dashed border-madola-sage/30 pb-4">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="font-bold text-madola-forest text-lg group-hover:text-madola-gold transition-colors">{item.name}</h4>
                                <span className="font-serif text-xl text-madola-gold">{item.price}</span>
                            </div>
                             <p className="text-sm text-madola-espresso/70 leading-relaxed">{item.desc}</p>
                         </div>
                     </div>
                 ))}
             </div>
             
             <div className="mt-16 text-center">
                 <Button variant="primary">View Full Menu</Button>
             </div>
         </div>
      </div>
    </div>
  );
}