import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#020617] text-[#E2E8F0]">
        <Navbar />
        <main className="pt-20">{children}</main> 
      </body>
    </html>
  );
}