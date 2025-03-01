import type { Metadata } from "next";
import "./globals.css";
import { Fab } from "@/components/custom/fab";

export const metadata: Metadata = {
  title: "peroxide",
  description: "notes taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full">
        {children}
        <Fab/>
      </body>
    </html>
  );
}
