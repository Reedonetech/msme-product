'use client';

import { useParams } from 'next/navigation';
import { useProducts } from '../../../../context/ProductContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading product...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/products" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-md"
      >
        <div className="flex items-center justify-center bg-gray-100 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[400px] object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
              {product.category}
            </span>
            <span className="text-yellow-600 font-medium">
              ⭐ {product.rating?.rate} ({product.rating?.count})
            </span>
          </div>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </motion.div>
    </div>
  );
}
