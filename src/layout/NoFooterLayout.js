import Navbar from "@/components/Header";
import React from "react";

/* same layout as Root layout but no footer in it */ 

function NoFooterLayout({ children }) {
  return (
    <section>
      <section>
        <Navbar />
      </section>
      <section>{children}</section>
    </section>
  );
}

export default NoFooterLayout;
