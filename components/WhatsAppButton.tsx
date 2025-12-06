import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/254722559001"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center cursor-pointer group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 fill-current" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
        Chat with us
      </span>
    </motion.a>
  );
}