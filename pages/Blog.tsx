import React from 'react';
import { Calendar, User, ArrowRight, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Top Things to Do Near Madola Hotel",
    excerpt: "Discover the hidden gems, shopping centers, and cultural hotspots just minutes away from your room.",
    image: "https://images.unsplash.com/photo-1543169107-16d7a4c7e634?q=80&w=800&auto=format&fit=crop",
    category: "Travel Tips",
    date: "Oct 12, 2023",
    author: "Madola Team"
  },
  {
    id: 2,
    title: "Where to Eat: Our Restaurant Highlights",
    excerpt: "From local favorites to continental classics, explore the culinary journey awaiting you at Madola Lounge.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    category: "Dining",
    date: "Sep 28, 2023",
    author: "Head Chef"
  },
  {
    id: 3,
    title: "Why Business Travelers Love Staying With Us",
    excerpt: "High-speed WiFi, quiet workspaces, and 24/7 service make Madola the perfect choice for your business trip.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    category: "Business Travel",
    date: "Sep 15, 2023",
    author: "James Madola"
  },
  {
    id: 4,
    title: "Experience Nairobi Like a Local",
    excerpt: "Skip the tourist traps and see the city through the eyes of a local. Here is your mini guide to Nairobi.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=800&auto=format&fit=crop",
    category: "Nairobi Highlights",
    date: "Aug 30, 2023",
    author: "Guest Relations"
  },
  {
    id: 5,
    title: "How to Choose the Perfect Room",
    excerpt: "Deluxe, Executive, or Suite? A guide to help you pick the accommodation that best suits your needs.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
    category: "Hotel Tips",
    date: "Aug 10, 2023",
    author: "Reservations"
  },
];

const categories = ["All", "Travel Tips", "Nairobi Highlights", "Hotel News", "Dining", "Business Travel"];

export default function Blog() {
  return (
    <div className="pt-16 min-h-screen bg-madola-ivory">
      {/* HERO */}
      <div className="bg-madola-forest text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Insights, Stories & Travel Tips</h1>
        <p className="text-madola-sage max-w-xl mx-auto text-xl font-light">Your guide to making the most of your stay and exploring the beauty of our city.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* CATEGORIES */}
        <div className="flex overflow-x-auto pb-4 gap-3 mb-12 scrollbar-hide">
          {categories.map((cat, i) => (
             <button key={i} className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium border transition-colors ${i === 0 ? 'bg-madola-forest text-white border-madola-forest' : 'bg-white text-madola-forest border-madola-forest/10 hover:border-madola-gold'}`}>
                {cat}
             </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {blogPosts.map((post) => (
             <Link to={`/blog/${post.id}`} key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-madola-forest uppercase tracking-wider">
                      {post.category}
                   </span>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                   <div className="flex items-center gap-4 text-xs text-madola-sage mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                   </div>
                   <h3 className="text-xl font-bold text-madola-forest mb-3 font-serif group-hover:text-madola-gold transition-colors">{post.title}</h3>
                   <p className="text-madola-espresso/70 text-sm mb-6 flex-1 leading-relaxed">{post.excerpt}</p>
                   <div className="inline-flex items-center text-madola-forest font-bold text-sm hover:text-madola-gold transition-colors mt-auto">
                      Read Article <ArrowRight className="ml-2 w-4 h-4" />
                   </div>
                </div>
             </Link>
           ))}
        </div>

        {/* NEWSLETTER */}
        <div className="mt-24 bg-madola-forest rounded-3xl p-10 md:p-16 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-madola-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-madola-gold/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
               <Mail className="w-12 h-12 text-madola-gold mx-auto mb-6" />
               <h2 className="text-3xl font-bold text-white mb-4 font-serif">Subscribe to Our Newsletter</h2>
               <p className="text-madola-sage mb-8">Get exclusive offers, travel tips, and latest updates from Madola Hotel delivered directly to your inbox.</p>
               
               <form className="flex flex-col sm:flex-row gap-4">
                  <input type="email" placeholder="Your email address" className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-madola-gold" />
                  <Button variant="primary" className="bg-madola-gold text-madola-forest hover:bg-white w-full sm:w-auto">
                     Subscribe
                  </Button>
               </form>
            </div>
        </div>

      </div>
    </div>
  );
}