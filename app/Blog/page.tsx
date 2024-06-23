// import NavBar from "@/components/NavBar";

// export default function Blog() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <NavBar />
//       <p>This is the blog page.</p>
//     </main>
//   );
// }


// import React from "react";
// import NavBar from "@/components/NavBar";

// interface BlogPostProps {
//   title: string;
//   excerpt: string;
//   date: string;
// }

// const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date }) => (
//   <div className="bg-pink-100 p-6 rounded-lg shadow-md transition-opacity duration-300 ease-in-out hover:opacity-70">
//     <h2 className="text-xl font-bold mb-2 text-pink-800">{title}</h2>
//     <p className="text-pink-700 mb-4">{excerpt}</p>
//     <span className="text-sm text-pink-600">{date}</span>
//   </div>
// );

// const blogPosts: BlogPostProps[] = [
//   {
//     title: "The Benefits of a Consistent Skincare Routine",
//     excerpt: "Discover why sticking to a regular skincare regimen can transform your complexion...",
//     date: "June 15, 2024"
//   },
//   {
//     title: "Understanding Different Skin Types",
//     excerpt: "Learn how to identify your skin type and choose the right products for your needs...",
//     date: "June 10, 2024"
//   },
//   {
//     title: "The Role of Antioxidants in Skincare",
//     excerpt: "Explore how antioxidants protect your skin and why they're essential in your routine...",
//     date: "June 5, 2024"
//   },
//   {
//     title: "Nighttime Skincare: Why It's Crucial",
//     excerpt: "Uncover the importance of a good nighttime skincare routine for skin regeneration...",
//     date: "May 30, 2024"
//   },
//   {
//     title: "The Science Behind Hyaluronic Acid",
//     excerpt: "Dive into the molecular magic of hyaluronic acid and its hydrating powers...",
//     date: "May 25, 2024"
//   },
//   {
//     title: "Sun Protection: More Than Just Sunscreen",
//     excerpt: "Explore comprehensive sun protection strategies beyond your daily SPF...",
//     date: "May 20, 2024"
//   },
//   {
//     title: "Clean Beauty: Separating Fact from Fiction",
//     excerpt: "Demystify the clean beauty trend and learn what it really means for your skin...",
//     date: "May 15, 2024"
//   },
//   {
//     title: "The Impact of Diet on Skin Health",
//     excerpt: "Understand the connection between what you eat and the health of your skin...",
//     date: "May 10, 2024"
//   },
//   {
//     title: "Skincare Myths Debunked",
//     excerpt: "Separate skincare facts from fiction and optimize your beauty routine...",
//     date: "May 5, 2024"
//   }
// ];

// export default function Blog() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <NavBar />
//       <h1 className="text-3xl font-bold my-8 text-pink-800">Our Blog</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
//         {blogPosts.map((post, index) => (
//           <BlogPost key={index} {...post} />
//         ))}
//       </div>
//     </main>
//   );
// }

import React from "react";
import NavBar from "@/components/NavBar";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date, image }) => (
  <div className="bg-pink-100 p-6 rounded-lg shadow-md transition-opacity duration-300 ease-in-out hover:opacity-70">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h2 className="text-xl font-bold mb-2 text-pink-800">{title}</h2>
    <p className="text-pink-700 mb-4">{excerpt}</p>
    <span className="text-sm text-pink-600">{date}</span>
  </div>
);

const blogPosts: BlogPostProps[] = [
  {
    title: "The Benefits of a Consistent Skincare Routine",
    excerpt: "Discover why sticking to a regular skincare regimen can transform your complexion...",
    date: "June 15, 2024",
    image: "https://i.pinimg.com/474x/91/37/5d/91375d528e94ad1b91c318e27a6c5335.jpg" // Replace with actual image URLs
  },
  {
    title: "Understanding Different Skin Types",
    excerpt: "Learn how to identify your skin type and choose the right products for your needs...",
    date: "June 10, 2024",
    image: "https://i.pinimg.com/474x/5c/53/7e/5c537e08a16a4e981159d6fbdb17defe.jpg"
  },
  {
    title: "The Role of Antioxidants in Skincare",
    excerpt: "Explore how antioxidants protect your skin and why they're essential in your routine...",
    date: "June 5, 2024",
    image: "https://i.pinimg.com/474x/0c/e9/9a/0ce99a3b8e8d5343b0f370971e5ae01a.jpg"
  },
  {
    title: "Nighttime Skincare: Why It's Crucial",
    excerpt: "Uncover the importance of a good nighttime skincare routine for skin regeneration...",
    date: "May 30, 2024",
    image: "https://i.pinimg.com/474x/80/57/31/8057310b37923929f305d569fcfb37f3.jpg"
  },
  {
    title: "The Science Behind Hyaluronic Acid",
    excerpt: "Dive into the molecular magic of hyaluronic acid and its hydrating powers...",
    date: "May 25, 2024",
    image: "https://i.pinimg.com/474x/07/ca/3d/07ca3d44e83e00da514b024a7fcdbc62.jpg"
  },
  {
    title: "Sun Protection: More Than Just Sunscreen",
    excerpt: "Explore comprehensive sun protection strategies beyond your daily SPF...",
    date: "May 20, 2024",
    image: "https://i.pinimg.com/474x/c8/d2/48/c8d2482548dacea91c7ef9959a40bc8b.jpg"
  },
  {
    title: "Clean Beauty: Separating Fact from Fiction",
    excerpt: "Demystify the clean beauty trend and learn what it really means for your skin...",
    date: "May 15, 2024",
    image: "https://i.pinimg.com/474x/d9/26/35/d926353c1248932a0a7df381f4c3a954.jpg"
  },
  {
    title: "The Impact of Diet on Skin Health",
    excerpt: "Understand the connection between what you eat and the health of your skin...",
    date: "May 10, 2024",
    image: "https://i.pinimg.com/474x/51/7f/06/517f06e04f54770819196340e2b31fa1.jpg"
  },
  {
    title: "Skincare Myths Debunked",
    excerpt: "Separate skincare facts from fiction and optimize your beauty routine...",
    date: "May 5, 2024",
    image: "https://i.pinimg.com/474x/cd/89/00/cd8900802ce2b153abdc22f6774e19c1.jpg"
  }
];

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <h1 className="text-3xl font-bold my-8 text-pink-800">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </main>
  );
}


