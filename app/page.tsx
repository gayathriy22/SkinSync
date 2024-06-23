// import Image from "next/image";
// import NavBar from "@/components/NavBar";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <main className="flex flex-col min-h-screen">
//       <NavBar />
//       <Image
//           src="/skinsynchome.jpg"
//           alt="Skincare background"
//           layout="fill"
//           objectFit="cover"
//         />
        
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 p-4">
//           <h1 className="text-black text-6xl font-bold text-center p-2">
//             Unlock your skin
//           </h1>
//         </div>

//       <Footer />
//     </main>
//   );
// }


import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Container for image and text */}
      <div className="relative w-full flex-grow h-[75vh]"> {/* 75vh height to leave space for footer */}
        {/* Image container */}
        <div className="relative w-full h-full">
          <Image
            src="/skinsynchome.jpg" // Ensure the image is in the public directory
            alt="Skincare background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Overlapping text */}
        <div className="absolute bottom-12 right-1 z-10 p-4">
          <h1 className="text-white text-8xl font-bold text-right p-2 bg-black bg-opacity-0 rounded">
            Unlock your skin
          </h1>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

