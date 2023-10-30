import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from 'react-use-cart'; // Import useCart
import repair from "../images/LRepair.jpg";
import cs from "../images/Customer-Service2.png";
import video from "./repairv.mp4";
import Quote from "./Quote";
import Footer from "./Footer";
import products from "./data";
import Cart from "./Cart";
import servicesData from './ourservices';
import styled from 'styled-components';

function Home() {
  // Initialize hooks and variables
  const nav = useNavigate();
  const [user, setUser] = useState();
  const loc = useLocation();
  const { addItem } = useCart();

  // Style for background image
  const myStyle = {
    backgroundImage: `url(${repair})`,
  };

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      title: product.title,
      specs: product.specs,
      price: product.price,
      image: product.image,
    });
    alert(`${product.title} has been added to the cart.`);
  };

  const KeyCard = styled.div`
    background-color: white;
    transition: background-color 0.3s;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  `;

  return (
    <>
      <main>
        {/* Main Header */}
        <div className="main" style={myStyle}>
          <div className="main_content">
            <h2 className="text-center" style={{ color: '#ffffff', fontSize: '40px', fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder', textAlign: 'center', textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
              We provide maintenance, repair, and sales services for a variety of electronics, including laptops, desktops, printers, and telecom systems.
            </h2>
          </div>
        </div>

        {/* Trending Gaming Laptops */}
        <div className="container">
          <h2>Trending Gaming Laptops</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((product, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img
                    className="bd-placeholder-img card-img-top"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h3 className="card-text">{product.title}</h3>
                    <p className="card-text">{product.specs}</p>
                    <h5 className="card-text">₹ {product.price}/-</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          Buy
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr color="white"></hr>

        {/* Key Features */}
        <div className="keypoint container">
          <h2 className="text-center">Our Key Features</h2>
          <div className="row">
            <div className="key_content col-md-6">
              {/*
                Use the KeyCard styled component to display each key feature.
                Add list items for each feature.
              */}
              <KeyCard>
                <ul>
                  <li>All Software installation and activation of Software will be done by us</li>
                </ul>
              </KeyCard>
              <KeyCard>
                <ul>
                  <li>Door Step Delivery</li>
                </ul>
              </KeyCard>
              <KeyCard>
                <ul>
                  <li>Microsoft Account creation and linking</li>
                </ul>
              </KeyCard>
              <KeyCard>
                <ul>
                  <li>Any issues with the product, we will directly contact with the Manufacturer</li>
                </ul>
              </KeyCard>
              <KeyCard>
                <ul>
                  <li>All necessary Software installation</li>
                </ul>
              </KeyCard>
              <KeyCard>
                <ul>
                  <li>Best Customer Service</li>
                </ul>
              </KeyCard>
            </div>
            <div className="key_img col-md-6">
              <img src={cs} alt="Customer Service" className="img-fluid" style={{ maxWidth: '100%', height: 'auto', width: '300px' }} />
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div className="card">
          <div className="card-body">
            <div className="os">
              <h2>Our Other Services</h2>
              <div className="os_container">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    {servicesData.map((_, index) => (
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="carousel-inner">
                    {servicesData.map((service, index) => (
                      <div
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        key={index}
                      >
                        <div className="d-md-block text-dark">
                          <h5 className="text-dark">{service.title}</h5>
                          <p className="text-dark">{service.description}</p>
                        </div>
                        <img
                          src={service.image}
                          className="d-block w-100"
                          style={{ height: '400px', width: '700px' }}
                          alt={service.title}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next btn-dark"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Service Video */}
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>Demo Service Video</h2>
            </div>
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="embed-responsive embed-responsive-16by9" style={{ maxWidth: "100%" }}>
                      <video className="embed-responsive-item" controls style={{ width: "100%" }}>
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p className="card-text">
                      This video serves as a demonstration of our accomplishments and projects. In this presentation, we showcase our work, providing an in-depth look into the quality and innovation that defines our team. We'll take you through our achievements, accomplishments, and the solutions we've developed to address various challenges. Whether it's the latest innovations, groundbreaking technologies, or our success stories, this video encapsulates the essence of our work. Join us on this journey as we explore our portfolio, highlighting our dedication to excellence and our commitment to delivering exceptional results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <Quote />
        <Footer />
      </main>
    </>
  );
}

export default Home;
{/*Designed by Atharva Takle*/}