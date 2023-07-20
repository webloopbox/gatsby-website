import React from "react";
import NavigationBar from "./organisms/NavigationBar";
import Footer from "../components/organisms/Footer";

const Layout = ({ children, location }) => {
  return (
    <>
      <NavigationBar location={location} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
