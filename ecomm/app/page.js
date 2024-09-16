'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { Modal, Button, Form } from "react-bootstrap";
import { CartContext } from '../context/cartContext';  // Updated import for cart context

export default function Home() {
  // Modal state for Featured Products
  const [showFeaturedModal, setShowFeaturedModal] = useState(false);
  const [featuredProduct, setFeaturedProduct] = useState({});
  const [featuredQuantity, setFeaturedQuantity] = useState(1); // State to track quantity

  // Modal state for Sale Products
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [saleProduct, setSaleProduct] = useState({});
  const [saleQuantity, setSaleQuantity] = useState(1); // State to track quantity

  const { addToCart } = useContext(CartContext);

  // Handle Featured Products Modal
  const handleFeaturedModal = (product) => {
    setFeaturedProduct(product);
    setShowFeaturedModal(true);
  };

  // Handle Sale Products Modal
  const handleSaleModal = (product) => {
    setSaleProduct(product);
    setShowSaleModal(true);
  };

  // Function to handle adding to cart with correct price
  const handleAddToCart = (product, quantity, isSaleProduct = false) => {
    const productToAdd = {
      ...product,
      price: isSaleProduct ? product.salePrice : product.price,  // Use salePrice for sale products
    };
    addToCart(productToAdd, quantity);
    // Close the modal after adding the item to the cart
    setShowFeaturedModal(false);
    setShowSaleModal(false);
  };

  // Featured products data
  const featuredProducts = [
    {
      title: 'Cotton Best',
      description: 'Discover our top-quality cotton collection...',
      price: '5000PKR',
      imgSrc: '/card 1.jpeg',
    },
    {
      title: 'Winter Wear',
      description: 'Explore our top-quality winter collection...',
      price: '3500PKR',
      imgSrc: '/card 2.webp',
    },

    {
      title: "11 Shades of Grey",
      description: "Explore our premium collection of 11 shades of grey for gentlemen. Each shade is expertly chosen for its versatility and style, offering both comfort and sophistication. Perfect for any occasion, these high-quality pieces enhance your wardrobe with timeless elegance.",
      price: "4000PKR",
      imgSrc: "/card 3.jpg",
    },
    {
      title: "Man in Black",
      description: "Explore our top-quality black collection for gentlemen, featuring stylish and durable pieces designed for elegance and versatility. Perfect for both formal and everyday wear, these timeless essentials elevate your wardrobe with sophistication and comfort.",
      price: "2500PKR",
      imgSrc: "/card 4.jpg",
    },
    
  ];

  // Sale products data
  const saleProducts = [
    {
      title: 'Golden Bracelet',
      description: 'Discover our top-quality golden bracelet...',
      originalPrice: '800PKR',
      salePrice: '400PKR',
      imgSrc: '/B1.Webp',
    },
    {
      title: 'Silver n Black',
      description: 'Introducing our top-quality silver and black combo ring...',
      originalPrice: '600PKR',
      salePrice: '300PKR',
      imgSrc: '/B2.webp',
    },

    {
      title: "Black Titanium",
      description: "Top Quality Black Titanium Available for Gentlemen.",
      originalPrice: "1000PKR",
      salePrice: "500PKR",
      imgSrc: "/B3.webp",
    },
    {
      title: "The Boys",
      description: "Top Quality The Boys Collections Available for The Boys.",
      originalPrice: "300PKR",
      salePrice: "150PKR",
      imgSrc: "/B4.webp",
    },


    {
      title: 'Black Panther',
      description: 'Wear The Best.. ',
      originalPrice: '800PKR',
      salePrice: '400PKR',
      imgSrc: '/B5.Webp',
    },
    {
      title: 'Black watch ',
      description: 'Gentlemen Choice ..',
      originalPrice: '600PKR',
      salePrice: '300PKR',
      imgSrc: '/B6.webp',
    },

    {
      title: "Sports Watch ",
      description: "Count The Calories you burn..",
      originalPrice: "1000PKR",
      salePrice: "500PKR",
      imgSrc: "/B7.webp",
    },
    {
      title: "Brown Classic",
      description: "Brown Classy only For Class Ones",
      originalPrice: "300PKR",
      salePrice: "150PKR",
      imgSrc: "/B8.webp",
    },
  ];

  return (
    <div>
      <Banner />
      <br />
      <div className="container">
        <h1 className="section-heading">Featured Products:</h1>
        <div className="container my-5">
          <div className="row">
            {featuredProducts.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div
                  className="card product-card"
                  style={{ width: '16rem' }}
                  onClick={() => handleFeaturedModal(product)}
                >
                  <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5>Price = {product.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr />
        <h1 className="section-heading">SALE 50% off</h1>
        <div className="container my-5">
          <div className="row">
            {saleProducts.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div
                  className="card product-card"
                  style={{ width: '16rem' }}
                  onClick={() => handleSaleModal(product)}
                >
                  <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5>
                      Price: <span style={{ textDecoration: 'line-through' }}>{product.originalPrice}</span> {product.salePrice}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Modal */}
      <Modal show={showFeaturedModal} onHide={() => setShowFeaturedModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{featuredProduct.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={featuredProduct.imgSrc} className="img-fluid" alt={featuredProduct.title} />
          <p>{featuredProduct.description}</p>
          <h5>Price: {featuredProduct.price}</h5>
          <Form>
            <Form.Group controlId="featuredProductQuantity">
              <Form.Label>Select Quantity</Form.Label>
              <Form.Control
                as="select"
                value={featuredQuantity}
                onChange={(e) => setFeaturedQuantity(Number(e.target.value))}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleAddToCart(featuredProduct, featuredQuantity)}>
            Add {featuredQuantity} to Cart
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Sale Products Modal */}
      <Modal show={showSaleModal} onHide={() => setShowSaleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{saleProduct.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={saleProduct.imgSrc} className="img-fluid" alt={saleProduct.title} />
          <p>{saleProduct.description}</p>
          <h5>
            Price: <span style={{ textDecoration: 'line-through' }}>{saleProduct.originalPrice}</span> {saleProduct.salePrice}
          </h5>
          <Form>
            <Form.Group controlId="saleProductQuantity">
              <Form.Label>Select Quantity</Form.Label>
              <Form.Control
                as="select"
                value={saleQuantity}
                onChange={(e) => setSaleQuantity(Number(e.target.value))}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleAddToCart(saleProduct, saleQuantity, true)}>
            Add {saleQuantity} to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
