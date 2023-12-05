import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import PostContextProvider from "@/Context/PostApi";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Website",
  description: "A blog website built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <PostContextProvider>
            <Header />
            <Toaster />
            {children}
            <Footer />
          </PostContextProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
