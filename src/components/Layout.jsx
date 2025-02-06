// src/components/layout/Layout.jsx
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main> {/* This will render the current route's component */}
      <Footer />
    </div>
  );
};

export default Layout;
