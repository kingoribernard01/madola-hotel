import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-madola-ivory">
      {/* HERO SECTION */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2070&auto=format&fit=crop" 
            alt="Madola Reception" 
            className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-madola-forest/60 mix-blend-multiply"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-in fade-in zoom-in duration-700">
            <span className="block text-madola-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">We're here for you</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Contact Us</h1>
            <p className="text-xl text-madola-ivory/90 font-light max-w-xl mx-auto">
                Have questions or need assistance? Our 24/7 support team is here to help make your stay perfect.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-xl shadow-md border border-madola-gold/10 hover:shadow-xl transition-all duration-300">
                        <Phone className="h-8 w-8 text-madola-gold mb-4" />
                        <h3 className="font-bold text-madola-forest text-lg">Phone</h3>
                        <p className="text-madola-espresso/70 text-sm mt-2 font-medium">
                            <a href="tel:+254722559001" className="hover:text-madola-gold transition-colors">+254 722 559 001</a>
                        </p>
                        <p className="text-madola-sage text-xs mt-1">Available 24/7</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md border border-madola-gold/10 hover:shadow-xl transition-all duration-300">
                        <Mail className="h-8 w-8 text-madola-gold mb-4" />
                        <h3 className="font-bold text-madola-forest text-lg">Email</h3>
                        <p className="text-madola-espresso/70 text-sm mt-2 font-medium">
                            <a href="mailto:info@madolahotel.com" className="hover:text-madola-gold transition-colors">info@madolahotel.com</a>
                        </p>
                        <p className="text-madola-sage text-xs mt-1">We reply within 24h</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md border border-madola-gold/10 hover:shadow-xl transition-all duration-300 sm:col-span-2">
                        <div className="flex items-start gap-4">
                            <Clock className="h-8 w-8 text-madola-gold shrink-0" />
                            <div>
                                <h3 className="font-bold text-madola-forest text-lg">Operating Hours</h3>
                                <div className="grid grid-cols-2 gap-x-8 mt-2">
                                    <div>
                                        <p className="text-xs uppercase text-madola-gold font-bold tracking-wide">Reception</p>
                                        <p className="text-madola-espresso/80 text-sm">Open 24/7</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase text-madola-gold font-bold tracking-wide">Restaurant</p>
                                        <p className="text-madola-espresso/80 text-sm">6:30 AM – 10:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-madola-gold/10 overflow-hidden h-80 relative">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.255979854462!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f28f0c1%3A0x2b8e39c490097e3!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2suk!4v1709900000000!5m2!1sen!2suk" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow-lg text-sm font-medium text-madola-forest flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-madola-gold" />
                        Madola Hotel, Nairobi
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-madola-gold">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-madola-forest">
                    <MessageSquare className="h-6 w-6 text-madola-gold" /> 
                    Send us a Message
                </h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-madola-forest mb-2">First Name</label>
                            <input type="text" className="w-full px-4 py-3 bg-madola-ivory border border-madola-sage/30 rounded-lg focus:ring-2 focus:ring-madola-gold focus:outline-none transition-all" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-madola-forest mb-2">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 bg-madola-ivory border border-madola-sage/30 rounded-lg focus:ring-2 focus:ring-madola-gold focus:outline-none transition-all" placeholder="Doe" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-madola-forest mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 bg-madola-ivory border border-madola-sage/30 rounded-lg focus:ring-2 focus:ring-madola-gold focus:outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-madola-forest mb-2">Subject</label>
                        <select className="w-full px-4 py-3 bg-madola-ivory border border-madola-sage/30 rounded-lg focus:ring-2 focus:ring-madola-gold focus:outline-none transition-all">
                            <option>General Inquiry</option>
                            <option>Booking Modification</option>
                            <option>Event Hosting</option>
                            <option>Feedback</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-madola-forest mb-2">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 bg-madola-ivory border border-madola-sage/30 rounded-lg focus:ring-2 focus:ring-madola-gold focus:outline-none transition-all" placeholder="How can we help you?"></textarea>
                    </div>
                    <Button variant="primary" className="w-full py-4 text-lg">
                        Send Message
                    </Button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
}