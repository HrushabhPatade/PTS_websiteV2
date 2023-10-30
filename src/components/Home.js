import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from 'react-use-cart'; // Import useCart
import repair from "../images/LRepair.jpg";
import cs from "../images/Customer-Service2.png";
import c2900 from "../images/canon 2900.jpg";
import delldesk from "../images/dell desktop.jpg";
import nec from "../images/NEC.jpg";
import video from "./repairv.mp4";
import Quote from "./Quote";
import Footer from "./Footer";
import products from "./data";
import Cart from "./Cart";


function Home() {
  const nav = useNavigate();
  const [user, setUser] = useState();
  const loc = useLocation();
  const { addItem } = useCart();
 

  const myStyle = {
    backgroundImage: `url(${repair})`,
  };
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
  return (
    <>
      <main>
        <div className="main" style={myStyle}>
          <div className="main_content">
            <h2>
              We provide maintenance, repair, and sales services for a variety
              of electronics, including laptops, desktops, printers, and telecom
              systems.
            </h2>
          </div>
        </div>
        <br />
        <br />
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
                          onClick={() => handleAddToCart(product)} // Add the product to the cart
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

        <div className="keypoint">
          <h2>Our Key Features</h2>
          <div className="key_container">
            <div className="key_content">
              <li>All Software installation and activation of Software will be done by us</li>
              <li>Door Step Delivery</li>
              <li>Microsoft Account creation and linking</li>
              <li>Any issues with the product, we will directly contact with the Manufacturer</li>
              <li>All necessary Software installation</li>
              <li>Best Customer Service</li>
            </div>
            <div className="key_img">
              <img src={cs} alt="Customer Service" />
            </div>
          </div>
        </div>
        <div className="os">
          <h2>Our Other Services</h2>
          <div className="os_container">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                ></button>
              </div>
              <div className="carousel-inner">
                {[
                  {
                    image: c2900,
                    title: "Canon LBP2900",
                    description: "A robust printer with all the feature benefits, the LBP2900B fits into any small office environment while ensuring the equivalent of high 2 400 x 600dpi laser-quality and jam-free operations for perfect prints, fast.",
                  },
                  {
                    image: delldesk,
                    title: "Branded & Assembled Desktop",
                    description: "We also Sale Assembled and Branded Desktop PC with all customization as needed for you.",
                  },
                  {
                    image: nec,
                    title: "EPBX & KTS System",
                    description: "We also give service for Telephone System and KTS System.",
                  },
                ].map((service, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img
                      src={service.image}
                      className="item_img d-inline w-10"
                      style={{ height: "400px", width: "700px" }}
                      alt={service.title}
                    />
                    <div className="carousel-caption d-none d-md-block ">
                      <h5 className="text-dark">{service.title}</h5>
                      <p className="text-dark">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-dark"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next btn-dark"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-dark"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <hr />

        <div className="team">
          <h2>Demo Service Video</h2>

          <div className="team_container">
            <div className="team_video">
              <video controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="team_content">
              <p>This video serves as a demonstration of our accomplishments and projects. In this presentation, we showcase our work, providing an in-depth look into the quality and innovation that defines our team. We'll take you through our achievements, accomplishments, and the solutions we've developed to address various challenges. Whether it's the latest innovations, groundbreaking technologies, or our success stories, this video encapsulates the essence of our work. Join us on this journey as we explore our portfolio, highlighting our dedication to excellence and our commitment to delivering exceptional results.</p>
            </div>
          </div>
        </div>
        
        <Quote />
        <Footer />
      </main>
     
    </>
  );
}

export default Home;
