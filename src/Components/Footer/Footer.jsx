import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center  items-center pt-10 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Gadget Haven</h1>
        <p className="text-2xl font-bold">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="flex justify-around w-11/12 mx-auto p-10 text-base-content">
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
