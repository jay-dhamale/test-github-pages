import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-main-block">
        <div className="footer-col">
          <img src="Assets/logo.png" className="footer-comp-logo" alt="" />
        </div>
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-head">Shop:</div>
            <Link to="/" className="footer-link">
              <li className="footer-list">Home</li>
            </Link>
            <Link to="/about-us" className="footer-link">
              <li className="footer-list">About us</li>
            </Link>

            <Link to="/products" className="footer-link">
              <li className="footer-list">Products</li>
            </Link>

            <Link to="/contact-us" className="footer-link">
              {" "}
              <li className="footer-list">Contact us</li>
            </Link>
          </div>
          <div className="footer-col">
            <div className="footer-head">Opening Hours:</div>
            <li className="footer-list">Mon - Fri : 9AM to 8PM IST</li>
            <li className="footer-list">Saturday : CLOSED</li>
            <li className="footer-list">Sunday : CLOSED</li>
          </div>
          <div className="footer-col">
            <div className="footer-head">Address:</div>
            <li className="footer-list">Pune,India</li>
            <li className="footer-list">Tel : +91- 9588487812</li>
            <li className="footer-list">E-mail : salonisatpute3@gmail.com</li>
          </div>
        </div>
        {/* <div className="footer-col">
          <div className="footer-head">Get it fresh:</div>
          <input
            type="email"
            placeholder="Enter your email here"
            className="footer-input"
          />
          <button className="subscrib-btn">Subscribe Now</button>
        </div> */}
      </div>

      <div className="footer-bottom-line">
        <div className="left-bottome-text">
          © 2022 by<a href="https://www.atomicloops.com/"> Atomic Loops</a>
        </div>
        <div className="right-bottom-links">
          <a
            href="https://www.facebook.com/people/Scents-And-Secret-Soaps/100066918086584/"
            className="social-licks"
          >
            <BsFacebook className="sociallink-icon" />
          </a>
          <a
            href="https://wa.me/message/5F2456CMRHPFL1"
            className="social-licks"
          >
            <IoLogoWhatsapp className="sociallink-icon" />
          </a>
          <a
            href="https://www.instagram.com/scents_and_secret.soaps/"
            className="social-licks"
          >
            <BsInstagram className="sociallink-icon" />
          </a>
          {/* <Link to="#" className="social-licks">
            <BsYoutube className="sociallink-icon" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
