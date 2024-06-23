"use client";

import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import TesseractOCR from "@/components/Tesseract";
import { Plus, X } from "lucide-react";
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
      <h1 className="mb-5 mt-5 font-semibold text-5xl">My Skincare Products</h1>
      <div className=" max-w-9xl">
        <div className="flex justify-end mb-5">
          <button
            onClick={openModal}
            className="bg-pink-500 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded flex flex-row gap-2"
          >
            <Plus />
            Add Product
          </button>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <button
        onClick={openModal}
        className="bg-pink-500 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded flex flex-row gap-2 mt-5"
      >
        <Plus />
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
