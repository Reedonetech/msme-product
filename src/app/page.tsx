// app/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '../app/component/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl px-2"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:text-[33px] text-[19px] font-extrabold text-gray-800 mb-3"
          >
            Welcome to Msme Ecommerce Website
          </motion.h1>
          <p className="lg:text-[18px] text-[14px] text-gray-600 mb-2 ">
            Explore a wide range of quality products at the best prices
          </p>
          <p className="lg:text-[16px] text-[14px] text-gray-600 mb-10">
            This website is built by reedone tech to fulfil the frontend
            application role at msme labs
          </p>
          <Link
            href="/products"
            className="px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            View All Products
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
