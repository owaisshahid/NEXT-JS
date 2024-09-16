import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="container my-5">
    <div className="p-5 text-center bg-body-tertiary rounded-3">
      <img src='./Logo.png' alt="Logo" style={{ width: '80px', height: '80px' }} />
      <h1 className="text-body-emphasis">MY SHOP</h1>
      <p className="col-lg-8 mx-auto fs-5 text-muted">
        From Where All Gentlemen Shop
      </p>
      <div className="d-inline-flex gap-2 mb-5">
        <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
          <Link href="/ViewAll" className="nav-link">
            View All
          </Link>
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default Banner;

