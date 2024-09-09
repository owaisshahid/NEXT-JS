// app/layout.js
import './globals.css';
import Navbar from '../Components/Navbar'; // Adjust path based on your folder structure

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main> {/* This will render your page content */}
      </body>
    </html>
  );
}
