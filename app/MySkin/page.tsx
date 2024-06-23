import NavBar from "@/components/NavBar";
import TesseractOCR from "@/components/tesseract";

export default function MySkin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <p>This is the MySkin Page.</p>
      <TesseractOCR />
    </main>
  );
}
