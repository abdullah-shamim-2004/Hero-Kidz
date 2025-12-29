import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/Components/Layouts/Navbar";
import Footer from "@/Components/Layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
  subsets: ["latin"],
});
export const banglaFont = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
});
export const metadata = {
  title: "Hero-Kidz | শিশুদের সেরা শিক্ষামূলক খেলনার দোকান",
  description: "Hero-Kidz-এ পাবেন শিশুদের মেধা বিকাশে সহায়ক সেরা সব শিক্ষামূলক খেলনা (Educational Toys), পাজল এবং লার্নিং বোর্ড। নিরাপদ ও গুণগত মানের খেলনা দিয়ে আপনার শিশুর ভবিষ্যৎ গড়ুন।",
  keywords: ["খেলনা", "Educational Toys", "Kids Learning", "Hero-Kidz", "Learning Board", "শিশুদের খেলনা", "পাজল"],
  authors: [{ name: "Hero-Kidz Team" }],
  metadataBase: new URL('https://hero-kidz.vercel.app'), // আপনার আসল ডোমেইন এখানে দিন
  
  // Facebook, LinkedIn এর জন্য (OpenGraph)
  openGraph: {
    title: "Hero-Kidz - খেলুন এবং শিখুন",
    description: "শিশুদের প্রাথমিক শিক্ষা এবং মেধা বিকাশের জন্য নির্ভরযোগ্য অনলাইন শপ।",
    url: 'https://hero-kidz-kappa.vercel.app/',
    siteName: 'Hero-Kidz',
    images: [
      {
        url: 'https://ibb.co.com/M56XMSKS', // হোমপেজ প্রিভিউ লিঙ্ক
        width: 1200,
        height: 630,
        alt: 'Hero-Kidz Homepage Preview',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },

  // Twitter (X) এর জন্য
  twitter: {
    card: 'summary_large_image',
    title: "Hero-Kidz | শিশুদের শিক্ষামূলক খেলনা",
    description: "সেরা মানের লার্নিং টয় এখন আপনার হাতের নাগালে।",
    images: ['https://ibb.co.com/M56XMSKS'], 
  },

  // সার্চ ইঞ্জিনের জন্য বাড়তি ইনস্ট্রাকশন
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-300px)]">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
