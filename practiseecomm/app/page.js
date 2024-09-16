import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-blue-100 text-center py-10">
        <div className="container mx-auto">
          <Image src="/logo.png" alt="Logo" width={120} height={120} className="mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to My Shop</h1>
          <p className="text-xl text-gray-600 mb-6">Find the best products just for you</p>
          <Link href="/Product" className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="product-card bg-white p-6 rounded-lg shadow-lg">
              <Image src="/product1.jpg" alt="Product 1" width={300} height={300} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Product 1</h3>
              <p className="text-lg text-gray-600 mb-4">$49.99</p>
              <Link href="/Product/1" className="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-blue-600 transition">
                View Details
              </Link>
            </div>
            {/* Add more products */}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="category-card bg-white p-6 rounded-lg shadow-lg text-center">
              <Image src="/category1.jpg" alt="Category 1" width={200} height={200} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">Category 1</h4>
            </div>
            {/* Add more categories */}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="offer-card bg-white p-6 rounded-lg shadow-lg">
              <Image src="/offer1.jpg" alt="Offer 1" width={300} height={300} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Offer 1</h3>
              <p className="text-lg text-gray-600 mb-4">Get 20% off on all items</p>
              <Link href="/Offers" className="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-blue-600 transition">
                Shop Now
              </Link>
            </div>
            {/* Add more offers */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Customer Testimonials</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg flex-1">
              <p className="text-lg text-gray-600 mb-4">"Great service and amazing products!"</p>
              <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
            </div>
            {/* Add more testimonials */}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sign Up for Our Newsletter</h2>
          <p className="text-lg text-gray-600 mb-4">Subscribe to get the latest updates and special offers.</p>
          <form className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-3 w-80 rounded-lg border border-gray-300 mb-4" />
            <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
