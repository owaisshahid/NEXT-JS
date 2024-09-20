'use client';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext'; // path for cartContext
import { Modal, Button, Form } from 'react-bootstrap';

export default function ProductPage() {
  const [showFeaturedModal, setShowFeaturedModal] = useState(false);
  const [featuredProduct, setFeaturedProduct] = useState({});
  const [featuredQuantity, setFeaturedQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  const handleFeaturedModal = (product) => {
    setFeaturedProduct(product);
    setShowFeaturedModal(true);
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    setShowFeaturedModal(false);
  };

  // Data for each product category
  const clothes = [
    { title: 'Cotton Best', price: '5000PKR', imgSrc: '/card 1.jpeg' },
    { title: 'Winter Wear', price: '3500PKR', imgSrc: '/card 2.webp' } ,
    { title: "11 Shades of Grey", description: "Explore our premium collection of 11 shades of grey for gentlemen. Each shade is expertly chosen for its versatility and style, offering both comfort and sophistication. Perfect for any occasion, these high-quality pieces enhance your wardrobe with timeless elegance.",price: "4000PKR", imgSrc: "/card 3.jpg",},
    { title: "Man in Black",description: "Explore our top-quality black collection for gentlemen, featuring stylish and durable pieces designed for elegance and versatility. Perfect for both formal and everyday wear, these timeless essentials elevate your wardrobe with sophistication and comfort.",price: "2500PKR",imgSrc: "/card 4.jpg", },
  
  
  
  
  
  
  
  ];

  const watches = [
    {title: "Sports Watch ", description: "Count The Calories you burn..", price: "500PKR",  imgSrc: "/B7.webp",},
    {title: "Brown Classic", description: "Brown Classy only For Class Ones", price: "150PKR",imgSrc: "/B8.webp",},
    {title: 'Black watch ',  description: 'Gentlemen Choice ..', price: '300PKR' , imgSrc: '/B6.webp',},
    {title: 'Black watch ',  description: 'Gentlemen Choice ..', price: '300PKR' , imgSrc: '/B9.webp',}
  ];

  const rings = [
    { title: 'Black Ring', price: '2000PKR', imgSrc: '/R1.webp' },
    { title: 'Black Art', price: '1500PKR', imgSrc: '/R2.webp ' },
    { title: 'Monster Ring', price: '2000PKR', imgSrc: '/R3.webp' },
    { title: 'Unique Ring', price: '1500PKR', imgSrc: '/R4.webp ' }
  
  ];

  const shoes = [
    { title: 'Running Shoes', price: '7000PKR', imgSrc: '/SH1.webp' },
    { title: 'Running Shoes', price: '6000PKR', imgSrc: '/SH2.webp' },
    { title: 'Running Shoes', price: '5000PKR', imgSrc: '/SH3.webp' },
    { title: 'Baby Shoes', price: '2000PKR', imgSrc: '/SH4.webp' }
  ];

  // Render product sections
  const renderProductSection = (title, products, handleModal) => (
    <div className="container my-5">
      <h1 className="section-heading">{title}</h1>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-3" key={index}>
            <div
              className="card product-card"
              style={{ width: '16rem', cursor: 'pointer' }}
              onClick={() => handleModal(product)}
            >
              <img src={product.imgSrc} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-price">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    
    <div>
     
      <br />

      {/* Render Clothes Section */}
      {renderProductSection('Clothes', clothes, handleFeaturedModal)}

      {/* Render Watches Section */}
      {renderProductSection('Watches (Sale 50% off)', watches, handleFeaturedModal)}

      {/* Render Rings Section */}
      {renderProductSection('Rings', rings, handleFeaturedModal)}

      {/* Render Shoes Section */}
      {renderProductSection('Shoes', shoes, handleFeaturedModal)}

      {/* Product Modal */}
      <Modal show={showFeaturedModal} onHide={() => setShowFeaturedModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{featuredProduct.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={featuredProduct.imgSrc} alt={featuredProduct.title} style={{ width: '100%', height: 'auto' }} />
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
                  <option key={qty} value={qty}>{qty}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleAddToCart(featuredProduct, featuredQuantity)}>
            Add {featuredQuantity} to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
