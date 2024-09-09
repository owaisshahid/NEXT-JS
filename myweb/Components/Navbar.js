// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/About" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/Contact" className="text-gray-300 hover:text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
