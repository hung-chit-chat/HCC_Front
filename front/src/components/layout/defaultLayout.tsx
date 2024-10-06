// components/Layout.tsx
import React from "react";
import Sidebar from "./sidebar/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-scree">
      <header className=" px-72 py-10 flex justify-start bg-violet-50">
        <h1 className="text-center text-2xl">My Common Header</h1>
      </header>
      <Sidebar />
      <main className="pl-72 pt-10 ">{children}</main>
    </div>
  );
};

export default Layout;
