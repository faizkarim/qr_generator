import React, { Component } from "react";

import "../styles/form_page_style.css";

import logo from "../assets/images/logo.png";

class ImageFormComponent extends Component {
  render() {
    return (
      <div className="col-12 col-sm-12 col-lg-6 col-xl-6 left-side-container">
        <img src={logo} alt="i" className="logo" />
        <div className="d-flex justify-content-center align-items-center h-75">
          <div className="text-center text-light ">
            <h1>Selamat Kembali</h1>
            <p>
              Hanya perlu lengkapkan borang di <span>sebelah</span> <span className="bawah">bawah</span> untuk menjana kod QR.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageFormComponent