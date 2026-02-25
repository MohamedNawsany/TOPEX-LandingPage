import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import { ReactNode } from "react";
interface PublicLayoutProps {
  children: ReactNode;
}
export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
