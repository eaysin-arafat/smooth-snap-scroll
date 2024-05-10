import React from "react";
import Navbar from "../components/home/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}
