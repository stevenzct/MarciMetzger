import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import localFont from "next/font/local";


const PPNeueMontrealBook = localFont({
  src: '../../public/fonts/PPNeueMontreal-Book.otf',
  variable: '--font-NeueMontreal-book',
});

const PPNeueMontrealMedium = localFont({
  src: '../../public/fonts/PPNeueMontreal-Medium.otf',
  variable: '--font-NeueMontreal-medium',
});


export const metadata: Metadata = {
  title: "Marci Metzger Homes",
  description: "Luxury Homes in the Heart of the City",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PPNeueMontrealBook.variable} ${PPNeueMontrealMedium.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
