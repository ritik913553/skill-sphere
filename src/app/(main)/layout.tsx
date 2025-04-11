import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import React, { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
