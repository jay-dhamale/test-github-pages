import React from "react";
import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-top-blk">
        <div className="contact-left-side-block">
          <div className="contact-head"> Have a question ?</div>
          <div className="contact-paragraph">
            Scents and Secret Soaps has always been one of the leading brands in
            bringing luxury and comfort at affordable prices. Our products are
            not just 100% natural, but also the pioneers of handmade range of
            the cosmetic industry. To get your hands on the latest soaps and
            hampers, connect with us on whatsapp!
          </div>
          <a
            href="https://wa.me/message/5F2456CMRHPFL1"
            className="whats-links"
          >
            <div className="contact-btn">
              <div className="connect-link">Connect with us!</div>
              <BsWhatsapp className="whats-up-btn" />
            </div>
          </a>

          {/* <div className="contact-form">
            <div className="left-side-form">
              <input type="text" placeholder="Name" className="form-inputs" />
              <input type="email" placeholder="Email" className="form-inputs" />
            </div>
            <div className="contact-right-side-block">
              <textarea
                type="text"
                placeholder="Message"
                className="form-textarea"
              />
            </div>
          </div> */}
          {/* <button className="form-submit-btn">Submit</button> */}
        </div>
        <div className="right-side-form">
          <div className="contact-info-row">
            <div className="right-side-head">CONTACT ME</div>
            <div className="contact-info">Tel : +91- 9588487812</div>
            <div className="contact-info">
              E-mail : salonisatpute3@gmail.com
            </div>
          </div>
          <div className="contact-info-row">
            <div className="right-side-head">opening hours</div>
            <div className="contact-info">Mon - Fri : 9AM to 8PM IST </div>
            <div className="contact-info">​Saturday : CLOSED</div>
            <div className="contact-info">Sunday : CLOSED</div>
          </div>
          <div className="contact-info-row">
            <div className="right-side-head">address</div>
            <div className="contact-info">Pune,India</div>
          </div>
        </div>
      </div>

      {/* <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact> */}
      <iframe
        className="google-map-location"
        frameBorder="0"
        scrolling="yes"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=530&amp;height=699&amp;hl=en&amp;q=pune&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
}
export default Contact;
