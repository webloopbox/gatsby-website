import React from "react";
import NavigationBar from "./organisms/NavigationBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;
