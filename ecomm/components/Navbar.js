import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-yellow">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <div className="navbar-logo-container">
            {/* Include the Next.js Image component */}
            <Image src="/Logo.png" alt="Logo" width={60} height={50} className="navbar-logo" />
            <span className="navbar-brand-text"></span>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/Product" className="nav-link">Product</Link>
            </li>
            <li className="nav-item">
              <Link href="/Cart" className="nav-link">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
