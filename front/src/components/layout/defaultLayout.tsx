// components/Layout.tsx
import React from "react";
import Sidebar from "./Siderbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      <Sidebar />
      <main className="pl-72 pt-10 ">{children}</main>
    </div>
  );
};

export default Layout;
