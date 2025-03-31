import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
