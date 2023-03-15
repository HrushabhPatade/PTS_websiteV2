import Quote from "./Quote";
import Footer from "./Footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import repair from "./LRepair.jpg";
import victus from "./HP Victus.jpg";
import g15 from "./dell g15.jpg";
import omen from "./hp-omen-16.jpg";
import cs from "./Customer-Service2.png";
import c2900 from "./canon 2900.jpg";
import delldesk from "./dell desktop.jpg";
import nec from "./NEC.jpg";
import video from "./repairv.mp4";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";
import UserData from "./UserData";

// const data =[
// 	{
// 	  title:'DELL G15',
// 	  specs: 'Dell Gaming G15 Ryzen Edition D560804WIN9W R5-5600H Win 11 + Office H&S 2021 8GB DDR4 512GB SSD NVIDIA® GEFORCE® RTX 3050 (4GB GDDR6) 15.6" FHD WVA AG 250 nits 120Hz Narrow Border Backlit Keyboard Orange Phantom Grey with speckles Dell Gaming Lite 1 Year Onsite Hardware',

// 	},

//   ]

function Home() {
  const nav = useNavigate();
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState();

  const loc = useLocation();


  const myStyle = {
    backgroundImage: `url(${repair})`,
    // background-Size: 'cover';
    // backgroundRepeat: 'no-repeat';
  };

  return (
    <>
      <center>
        <div className="main" style={myStyle}>
          {/* <img src={repair} /> */}
          <div className="main_content">
            <h2>
              We Service and Sales in Laptop, Desktop, Printer, Telecom system,
              etc
            </h2>
            {/* <div className="btn">
							<Link to="/services">Services</Link>
						</div> */}
          </div>
        </div>
        <br />
        {/* <UserData/> */}
        <br/>
        <div className="services">
          <h2>Our Services</h2>
          <div className="d-flex">
            {/* {product.map((a) => (
              <>
                <Cards image={a.image} title={a.title} desc={a.desc} />
              </>
            ))} */}
            <div className="services_container">
            <div className="item">
                <div className="item_img">
                    <img src={g15}/>
                </div>
                <div className="item_content">
                    <h3>DELL G15</h3>
                    <p>Dell Gaming G15 Ryzen Edition D560804WIN9W R5-5600H Win 11 + Office H&S 2021 8GB DDR4 512GB SSD NVIDIA® GEFORCE® RTX 3050 (4GB GDDR6) 15.6" FHD WVA AG 250 nits 120Hz Narrow Border Backlit Keyboard Orange Phantom Grey with speckles
                        Dell Gaming Lite 1 Year Onsite Hardware</p>

                </div>

                <div className="buy_now">
                    <Link to="/buy">Buy Now</Link>
                </div>

            </div>
            <div className="item">
                <div className="item_img">
                    <img src={omen}/>
                </div>
                <div className="item_content">
                    <h3>HP OMEN Laptop 16-B0360TX</h3>
                    <p>* 11th gen i7-11800H 16GB 1TB SSD (4X4) RTX 3060 6GB Win 11 MSO H & S 2019 RGB 4 Zone Anti-ghosting Keyboard 16.1"  FHD 300nits IPS anti glare 144Hz, 7 Ms response time Win 11 Pre-installed 4C9E9PA Super Premium</p>

                </div>
                <div className="buy_now">
                <Link to="/buy">Buy Now</Link>
                </div>
            </div>
            <div className="item">
                <div className="item_img">
                    <img src={victus}/>
                </div>
                <div className="item_content">
                    <h3>HP Victus 16</h3>
                    <p>R5-5600H Win 11 + Office H&S 2021 8GB DDR4 512GB SSD NVIDIA® GEFORCE® RTX 3050 (4GB GDDR6) 16.1" FHD WVA AG 250 nits 60Hz Narrow Border Backlit Keyboard Orange Phantom Grey with speckles Gaming Lite 1 Year Onsite Hardware </p>

                </div>
                <div className="buy_now">
                <Link to="/buy">Buy Now</Link>
                </div>
            </div>
        </div>
          </div>
          <div className="services_btn">
            <Link to="/services">Explore More Products</Link>
          </div>
        </div>

        <hr color="white"></hr>

        <div className="keypoint">
          <h2>Our Key Features</h2>
          <div className="key_container">
            <div className="key_content">
              <li>
                All Software installation and activation of Software will be
                done by us{" "}
              </li>
              <li>Door Step Delivery </li>
              <li>Microsoft Account creation and linking</li>
              <li>
                Any issues with product , we will directly contact with
                Manufacturer
              </li>
              <li>All necessary Software installation</li>
              <li>Best Customer Service</li>
            </div>
            <div className="key_img">
              <img src={cs} />
            </div>
          </div>
        </div>
        <div className="os">
          <h2>Our Other Services</h2>
          <div className="os_container">
            {/* <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
							{/* <!-- Indicators --> 
							<ol className="carousel-indicators">
								<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
								<li data-target="#carousel-example-generic" data-slide-to="1"></li>
								<li data-target="#carousel-example-generic" data-slide-to="2"></li>
							</ol>

							{/* <!-- Wrapper for slides --> 
							<div className="carousel-inner" role="listbox">
								<div className="item active">
									<div className="item_img">
										<img src={c2900} />
									</div>
									<div className="item_content">
										<h3>Canon LBP2900</h3>
										<p>A robust printer with all the feature benefits, the LBP2900B fits into any small office environment while ensuring the equivalent of high 2 400 x 600dpi laser-quality and jam-free operations for perfect prints, fast.</p>
									</div>
								</div>
								<div className="item">
									<div>
										<img src={delldesk} />
									</div>
									<div className="item_content">
										<h3>Branded & Assembled Desktop</h3>
										<p>We also Sale Assembled and Branded Desktop PC with all customizition as needed for you. </p>
									</div>
								</div>
								<div className="item">
									<div>
										<img src={nec} />
									</div>
									<div className="item_content">
										<h3>EPBX & KTS System</h3>
										<p>We also give service for Telephone System and KTS System .</p>
									</div>
								</div>
							</div>

							{/* <!-- Controls --> 
							<Link className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
								<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
								<span className="sr-only">Previous</span>
							</Link>
							<Link className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
								<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
								<span className="sr-only">Next</span>
							</Link>
						</div> */}
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={c2900}
                    class="item_img d-inline w-10"
                    style={{ height: "400px",width:"700px" }}
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block ">
                    <h5 className="text-dark">Canon 2900</h5>
                    <p className="text-dark">
                      Canon 
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={delldesk}
                    class="d-inline w-10"
                    style={{ height: "400px",width:"700px" }}
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-dark">DELL Desktop</h5>
                    <p className="text-dark">
                      DELL Desktop
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={nec}
                    class="d-inline w-10"
                    style={{ height: "400px",width:"700px" }}
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-dark">NEC</h5>
                    <p className="text-dark">
                      NEC
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev "
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
              <p>This is a Demo Video of our work .</p>
            </div>
          </div>
        </div>
        <Quote />
        <Footer />
      </center>
    </>
  );
}
export default Home;
