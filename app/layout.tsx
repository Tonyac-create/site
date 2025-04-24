import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";


export const metadata: Metadata = {
  title: "SFPA",
  description: "Association Secours Français Pour Animaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-nunito antialiased`}
      >
        <NavBar />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
