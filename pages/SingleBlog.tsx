import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Mock data - in a real app this would likely come from an API or a shared data file
const blogPosts = [
  {
    id: 1,
    title: "Top Things to Do Near Madola Hotel",
    content: `
      <p class="mb-6">Nairobi is a vibrant city full of life, culture, and adventure. Staying at Madola Hotel places you right in the heart of the action, with easy access to some of the city's best attractions.</p>
      
      <h3 class="text-2xl font-serif font-bold text-madola-forest mb-4">1. The Nairobi National Park</h3>
      <p class="mb-6">Just a short drive away, you can experience the wild. It’s the only national park located within a major city. You might spot lions, giraffes, and rhinos against the backdrop of city skyscrapers.</p>
      
      <h3 class="text-2xl font-serif font-bold text-madola-forest mb-4">2. The Local Sports Complex</h3>
      <p class="mb-6">For sports enthusiasts, the nearby sports complex offers swimming pools, tracks, and gyms. It's perfect for a morning workout or watching a local match.</p>
      
      <h3 class="text-2xl font-serif font-bold text-madola-forest mb-4">3. Shopping at the Mall</h3>
      <p class="mb-6">Need some retail therapy? The mall is just steps away, featuring international brands, a cinema, and a food court.</p>
      
      <p>Whether you're here for business or leisure, taking time to explore the surroundings will enrich your stay. Ask our reception for a guide map!</p>
    `,
    image: "https://images.unsplash.com/photo-1543169107-16d7a4c7e634?q=80&w=1200&auto=format&fit=crop",
    category: "Travel Tips",
    date: "Oct 12, 2023",
    author: "Madola Team",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Where to Eat: Our Restaurant Highlights",
    content: `
      <p class="mb-6">Dining is an essential part of the Madola experience. Our head chef has curated a menu that celebrates local flavors while offering comforting international classics.</p>
      <h3 class="text-2xl font-serif font-bold text-madola-forest mb-4">Start with Breakfast</h3>
      <p class="mb-6">Our breakfast spread features fresh tropical fruits, pastries baked in-house, and robust Kenyan coffee that will kickstart your day.</p>
      <h3 class="text-2xl font-serif font-bold text-madola-forest mb-4">Dinner Delights</h3>
      <p class="mb-6">For dinner, we recommend trying the Grilled Tilapia, sourced fresh from the lake. It pairs perfectly with our signature vegetable sides.</p>
    `,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    category: "Dining",
    date: "Sep 28, 2023",
    author: "Head Chef",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Why Business Travelers Love Staying With Us",
    content: `
      <p class="mb-6">Business travel can be stressful, but Madola Hotel is designed to be your sanctuary of productivity and rest.</p>
      <p class="mb-6">Every room is equipped with a dedicated workspace and ergonomic chair, ensuring you can clear your inbox in comfort. Our high-speed fiber internet guarantees your video calls are uninterrupted.</p>
      <p>Need to meet a client? Our lounge offers a quiet, professional atmosphere with excellent coffee service.</p>
    `,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    category: "Business Travel",
    date: "Sep 15, 2023",
    author: "James Madola",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Experience Nairobi Like a Local",
    content: `
        <p class="mb-6">To truly know Nairobi, you have to move like a local. It's not just about the tourist spots; it's about the vibe, the matatu culture, and the street food.</p>
        <p class="mb-6">We recommend taking a walking tour of the CBD to see the archives and the KICC helipad for a panoramic view of the city.</p>
    `,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1200&auto=format&fit=crop",
    category: "Nairobi Highlights",
    date: "Aug 30, 2023",
    author: "Guest Relations",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "How to Choose the Perfect Room",
    content: `
        <p class="mb-6">At Madola, we have rooms for every type of traveler. </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Solo Traveler?</strong> Our Standard rooms offer cozy comfort at great value.</li>
            <li><strong>Couples?</strong> The Deluxe King creates a romantic and spacious setting.</li>
            <li><strong>Long Stay?</strong> The Apartment Suite gives you a living room and kitchenette to feel at home.</li>
        </ul>
    `,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
    category: "Hotel Tips",
    date: "Aug 10, 2023",
    author: "Reservations",
    readTime: "5 min read"
  }
];

export default function SingleBlog() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="pt-32 min-h-screen bg-madola-ivory text-center px-4">
        <h2 className="text-3xl font-bold text-madola-forest mb-4">Article Not Found</h2>
        <p className="mb-8 text-madola-espresso">The article you are looking for does not exist.</p>
        <Link to="/blog">
            <Button>Back to Blog</Button>
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="pt-16 min-h-screen bg-madola-ivory">
        {/* HERO IMAGE */}
        <div className="relative h-[50vh] w-full overflow-hidden">
            <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-madola-forest/90 via-madola-forest/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                <div className="max-w-4xl mx-auto">
                    <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-madola-gold mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                    </Link>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-madola-gold mb-3 font-medium uppercase tracking-wider">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight mb-4 shadow-sm">{post.title}</h1>
                    <div className="flex items-center gap-3">
                         <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                            <User className="h-5 w-5" />
                         </div>
                         <div className="text-white/90 text-sm">
                            <span className="block font-bold">{post.author}</span>
                            <span className="text-xs opacity-70">{post.date}</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* ARTICLE CONTENT */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-madola-gold/10">
                        <div 
                            className="prose prose-lg prose-headings:font-serif prose-headings:text-madola-forest prose-p:text-madola-espresso/80 prose-li:text-madola-espresso/80 prose-a:text-madola-gold max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                        
                        <div className="mt-12 pt-8 border-t border-gray-100">
                             <h4 className="font-bold text-madola-forest mb-4">Share this article</h4>
                             <div className="flex gap-3">
                                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">Facebook</button>
                                <button className="px-4 py-2 bg-sky-500 text-white text-sm rounded hover:bg-sky-600 transition-colors">Twitter</button>
                                <button className="px-4 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors">WhatsApp</button>
                             </div>
                        </div>
                    </div>
                </div>

                {/* SIDEBAR */}
                <div className="lg:col-span-1 space-y-8">
                     {/* Newsletter Mini */}
                     <div className="bg-madola-forest text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-madola-gold/10 rounded-full blur-2xl"></div>
                        <h3 className="text-xl font-serif font-bold mb-2 relative z-10">Join our Newsletter</h3>
                        <p className="text-madola-sage text-sm mb-4 relative z-10">Get the latest news and offers.</p>
                        <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded mb-3 text-madola-forest text-sm focus:outline-none focus:ring-2 focus:ring-madola-gold" />
                        <Button className="w-full text-sm py-2 bg-madola-gold hover:bg-white hover:text-madola-forest">Subscribe</Button>
                     </div>

                     {/* Recent Posts */}
                     <div>
                        <h3 className="text-xl font-bold text-madola-forest mb-6 font-serif">More to Read</h3>
                        <div className="space-y-6">
                            {relatedPosts.map(rp => (
                                <Link to={`/blog/${rp.id}`} key={rp.id} className="flex gap-4 group">
                                    <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                                        <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-madola-gold font-bold uppercase tracking-wider">{rp.category}</span>
                                        <h4 className="font-bold text-madola-forest leading-snug group-hover:text-madola-gold transition-colors">{rp.title}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                     </div>

                     {/* Tags */}
                     <div>
                        <h3 className="text-xl font-bold text-madola-forest mb-4 font-serif">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                             {["Travel", "Food", "Nairobi", "Luxury", "Events", "Tips"].map((tag, i) => (
                                 <span key={i} className="px-3 py-1 bg-white border border-madola-sage/30 rounded-full text-xs text-madola-espresso hover:border-madola-gold hover:text-madola-gold transition-colors cursor-default">
                                    #{tag}
                                 </span>
                             ))}
                        </div>
                     </div>
                </div>

            </div>
        </div>
    </div>
  );
}