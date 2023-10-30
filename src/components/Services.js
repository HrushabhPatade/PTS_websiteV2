import React from "react";
import { Link } from "react-router-dom";
import Quote from "./Quote";
import Footer from "./Footer";
import pphone from "../images/panasonic phone.jpg";
import router from "../images/Router.jpg";
import av from "../images/antivirus.jpg";

const cardStyle = {
  height: "100%", // Set a fixed height for all cards
};

const centerButtonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end", // Align the button to the bottom
};

const Services = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-4">Our Services</h2>
      <div className="row">
        {/* Panasonic Phone Card */}
        <div className="col-md-4">
          <div className="card mb-4" style={cardStyle}>
            <img src={pphone} className="card-img-top" alt="Panasonic Phone" />
            <div className="card-body">
              <h5 className="card-title">Landline Phones</h5>
              <p className="card-text">
                We provide a comprehensive range of landline phones, from the sleek Panasonic KX-TG3611BX Cordless Landline Phone in black to a variety of corded and cordless models from top brands like AT&T and Siemens, as well as retro-inspired phones for a touch of nostalgia.
              </p>
              <div style={centerButtonStyle}>
                <Link to="/buy" className="btn btn-sm btn-outline-secondary">
                  view now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Routers Card */}
        <div className="col-md-4">
          <div className="card mb-4" style={cardStyle}>
            <img src={router} className="card-img-top" alt="Routers" />
            <div className="card-body">
              <h5 className="card-title">Routers</h5>
              <p className="card-text">
                We offer a wide selection of routers from various reputable brands. Here are some examples of the brands we carry: Linksys, TP-Link, Netgear, and Asus.
              </p>
              <div style={centerButtonStyle}>
                <Link to="/buy" className="btn btn-sm btn-outline-secondary">
                 view now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Antivirus Card */}
        <div className="col-md-4">
          <div className="card mb-4" style={cardStyle}>
            <img src={av} className="card-img-top" alt="Antivirus" />
            <div className="card-body">
              <h5 className="card-title">Antivirus</h5>
              <p className="card-text">
                We provide a diverse range of antivirus software from top industry names such as Norton, McAfee, Bitdefender, and Kaspersky, ensuring you have access to the best protection for your digital needs.
              </p>
              <div style={centerButtonStyle}>
                <Link to="/buy" className="btn btn-sm btn-outline-secondary">
                view now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <Quote />
      <Footer />
    </div>
  );
};

export default Services;
