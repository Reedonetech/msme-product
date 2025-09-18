// app/products/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { useProducts } from '../../../context/ProductContext';
import { motion } from 'framer-motion';
import Link from "next/link";

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      <div className="h-56 bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products;
    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Loading Products...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center text-gray-800"
      >
        Product Categories
      </motion.h1>

      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search products by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Products Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {filteredProducts.map((product) => (
         <Link href={`/products/${product.id}`} key={product.id}>
            <motion.div
              layout
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="h-56 bg-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-2 font-medium">${product.price}</p>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <span className="text-sm text-yellow-600 font-medium">
                    ⭐ {product.rating?.rate} ({product.rating?.count})
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {filteredProducts.length === 0 && searchTerm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-12"
        >
          No products found matching "{searchTerm}"
        </motion.div>
      )}
    </div>
  );
}
