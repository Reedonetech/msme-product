"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-gray-900 text-gray-300 py-6 mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="text-center px-4">
        <p className="lg:text-sm text-[16px]">
          © 2025 ReedTech. MSME Frontend Role Applicant. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
