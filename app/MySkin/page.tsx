"use client";

import NavBar from "@/components/NavBar";
import TesseractOCR from "@/components/Tesseract";
import { X } from "lucide-react";
import { useState } from "react";

export default function MySkin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <p>This is the MySkin Page.</p>
      <button
        onClick={openModal}
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Product
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="text-right">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X />
              </button>
            </div>
            <div className="flex justify-center">
              <h2 className="text-2xl font-bold text-black">Scan Product</h2>
            </div>

            <div className="mt-4">
              <TesseractOCR />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
