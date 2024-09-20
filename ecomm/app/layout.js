"use client";  
import './globals.css'; // Import Bootstrap and custom styles 
import Navbar from '../components/Navbar';
import { CartProvider } from '../context/cartContext'; // Correct import path

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CartProvider>
          <Navbar />
       
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
