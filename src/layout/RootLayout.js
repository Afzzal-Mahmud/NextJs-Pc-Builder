import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import React from "react";

function RootLayout({ children }) {
  return (
    <section>
      <section>
        <Navbar />
      </section>
      <section>{children}</section>
      <Footer />
    </section>
  );
}

export default RootLayout;
