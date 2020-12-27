import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FooterCopyright from "./components/FooterCopyright/FooterCopyright";

export default function Layout({children}) {
  return (
    <>
      <TopBar/>
      <Header/>
      {children}
      <Footer/>
      <FooterCopyright/>
      <a
        href="#"
        id="back-to-top"
        title="Back to top"
        style={{ display: "none" }}
      >
        &uarr;
      </a>
    </>
  );
}

