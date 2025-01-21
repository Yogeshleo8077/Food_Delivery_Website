import React from "react";
import "./AppDownload.css";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> <span>Tomato</span> App
      </p>
      <div className="app-download-platforms">
        <IoLogoAppleAppstore className="react-icons" />
        <IoLogoGooglePlaystore className="react-icons" />
      </div>
    </div>
  );
};

export default AppDownload;
