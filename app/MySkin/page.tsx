// import NavBar from "@/components/NavBar";
// import TesseractOCR from "@/components/tesseract";

// export default function MySkin() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <NavBar />
//       <p>This is the MySkin Page.</p>
//       <TesseractOCR />
//     </main>
//   );
// }

import NavBar from "@/components/NavBar";
import TesseractOCR from "@/components/tesseract";

export default function MySkin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <div className="w-full max-w-4xl mt-16 px-4">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">SCAN PRODUCT</h1>
        <div className="bg-pink-200 p-8 rounded-lg shadow-md">
          <TesseractOCR />
        </div>
      </div>
    </main>
  );
}