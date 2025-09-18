'use client';

import { ProductProvider } from '../../context/ProductContext';

export default function Providers({ children }) {
  return (
    <ProductProvider>
      {children}
    </ProductProvider>
  );
}