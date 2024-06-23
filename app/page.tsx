import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />

      <h1>
        This is the Home Page.
      </h1>

      <Footer />

    </main>
  );
}
