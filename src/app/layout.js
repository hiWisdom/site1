"use client";
import "./globals.css";
import Header from "../../components/Header"; //Header components
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ overflowX: 'hidden', fontFamily: 'Avenir, AvenirBold', backgroundColor: "white", color:"black", }}>
          
      <Header />
          {children}
      <Footer />
      </body>
    </html>
  );
}






