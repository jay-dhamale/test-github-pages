import React from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-page-main">
      <div className="home-page-carousel">
        <Carousel
          variant="dark"
          indicators={false}
          nextIcon={false}
          prevIcon={false}
        >
          <Carousel.Item autoPlay={true} interval={500} infiniteLoop={true}>
            <img
              className="home-main-img"
              src="Assets/1.png"
              alt="First slide"
            />
            {/* <div className="img-text-content">homemade fresh cookies</div> */}
            {/* <button className="shop-now-btn">shop now</button> */}
          </Carousel.Item>
          <Carousel.Item autoPlay={true} interval={500} infiniteLoop={true}>
            <img
              className="home-main-img"
              src="Assets/2.png"
              alt="First slide"
            />
            {/* <div className="img-text-content">home made fresh cookies</div> */}
            {/* <button className="shop-now-btn">shop now</button> */}
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item autoPlay={true} interval={500} infiniteLoop={true}>
            <img
              className="home-main-img"
              src="Assets/3.png"
              alt="First slide"
            />
            {/* <div className="img-text-content">home made fresh cookies</div> */}
            {/* <button className="shop-now-btn">shop now</button> */}
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="home-page-cards-block">
        <h3 className="homepage-head">Best Sellers</h3>
        <div className="homepage-paragraph">
          Get your hands on the best selling soaps from Scents and Secret.
        </div>
        <div className="home-page-cart-1">
          <div className="home-page-individual-card">
            <img
              src="Assets/honey-saff-sandalwood2.jpg"
              className="card-imgs"
              alt=""
            />
            <div className="card-text">Honey Saffron Sandlewood Soap</div>
            <div className="card-value">₹275 per 100gm</div>
          </div>
          <div className="home-page-individual-card">
            <img src="Assets/lavendar2.jpg" className="card-imgs" alt="" />
            <div className="card-text">Lavender Soap</div>
            <div className="card-value">₹265 per 125gm</div>
          </div>
          <div className="home-page-individual-card">
            <img
              src="Assets/honey-oatmeal2.jpg"
              className="card-imgs"
              alt=""
              style={{ objectPosition: "right" }}
            />
            <div className="card-text">Hoeny Outmeal Scrub Soap</div>
            <div className="card-value">₹275 per 120gm</div>
          </div>
        </div>
      </div>
      <div className="horizontal-cooies">
        <hr className="hr-line-one" />
        <Link to="/products" className="cookies-btn">
          All Products
        </Link>
        <hr className="hr-line-two" />
      </div>
      <div className="follow-me-block">
        <h3 className="follow-me-head">Wide Range of 100% Natural Flavours</h3>
        <div className="follow-me-cards">
          <div className="follow-me-single-card">
            <img
              src="Assets/donut2.jpg"
              alt=""
              className="follow-me-card-imgs"
            />
          </div>
          <div className="follow-me-single-card">
            <img
              src="Assets/peppermint.jpg"
              alt=""
              className="follow-me-card-imgs"
            />
          </div>
          <div className="follow-me-single-card">
            <img
              src="Assets/neem-tulsi.jpg"
              alt=""
              className="follow-me-card-imgs"
            />
          </div>
        </div>
        <div className="follow-me-cards">
          <div className="follow-me-single-card">
            <img
              src="Assets/orange-peel.jpg"
              alt=""
              className="follow-me-card-imgs"
            />
          </div>
          <div className="follow-me-single-card">
            <img
              src="Assets/ubtan.jpg"
              alt=""
              className="follow-me-card-imgs"
            />
          </div>
          <div className="follow-me-single-card">
            <img
              src="Assets/orchid.jpg"
              alt=""
              className="follow-me-card-imgs"
            />
          </div>
        </div>
      </div>
      <div className="home-features-block">
        <div className="features-col">
          <div className="feature-icons">
            <img src="Assets/mortar.png" alt="" className="feature-icon-img" />
          </div>
          <div className="feature-head">Completely organic soaps</div>
          <div className="feature-paragraph">Chemical free</div>
        </div>
        <div className="verticle-line"></div>
        <div className="features-col">
          <div className="feature-icons">
            <img
              src="Assets/holding-hand.png"
              alt=""
              className="feature-icon-img"
            />
          </div>
          <div className="feature-head">All pure ingredients</div>
          <div className="feature-paragraph">Handcrafted</div>
        </div>
        <div className="verticle-line"></div>
        <div className="features-col">
          <div className="feature-icons">
            <img src="Assets/eco.png" alt="" className="feature-icon-img" />
          </div>
          <div className="feature-head">Eco friendly</div>
          <div className="feature-paragraph">Paraben free</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
