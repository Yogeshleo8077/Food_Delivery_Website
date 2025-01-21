import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { ImTwitter } from "react-icons/im";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            labore nemo vel vero beatae commodi excepturi adipisci dicta?
            Delectus amet magni, accusamus porro iure nobis distinctio qui
            tempore possimus quia!
          </p>
          <div className="footer-social-icons">
            <TbBrandFacebookFilled className="react-icons" />
            <ImTwitter className="react-icons" />
            <TfiLinkedin className="react-icons" />
            <AiFillInstagram className="react-icons" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <a href="#navbar">Home</a>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8077576904</li>
            <li>yogeshleo420@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; All rights reserved
      </p>
    </div>
  );
};

export default Footer;
