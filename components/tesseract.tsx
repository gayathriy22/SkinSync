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
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleOCR} disabled={!image || loading}>
        {loading ? "Processing..." : "Start OCR"}
      </button>
      <div>
        <h3>Extracted Text:</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
