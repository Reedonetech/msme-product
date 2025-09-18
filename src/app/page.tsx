// app/page.tsx (Home Page)
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-800 mb-6"
        >
          Welcome to Msme Products
        </motion.h1>
        <p className="text-lg text-gray-600 mb-10">
          Explore a wide range of quality products at the best prices
        </p>
        <Link
          href="/products"
          className="px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition-colors font-semibold text-lg"
        >
          View All Products
        </Link>
      </motion.div>
    </div>
  );
}
