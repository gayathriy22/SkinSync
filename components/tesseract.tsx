"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";

export default function TesseractOCR() {
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleOCR = () => {
    if (image) {
      setLoading(true);
      Tesseract.recognize(image, "eng", {
        logger: (m) => console.log(m),
      })
        .then(({ data: { text } }) => {
          setText(text);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button
        onClick={handleOCR}
        disabled={!image || loading}
        className="mt-5 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
      >
        {loading ? "Processing..." : "Confirm Image"}
      </button>
      {text && (
        <div className="mt-8 text-center">
          <h2 className="font-black">Is this the correct product?</h2>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
