import React from "react";
import Logo from "./Logo";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-center">
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <Logo></Logo>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        {/* Social Icons */}
        <div className="flex gap-4 mt-5 text-lg">
          <a href="https://www.facebook.com/" className="hover:text-primary">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" className="hover:text-primary">
            <FaInstagram />
          </a>
          <a href="https://x.com/" className="hover:text-primary">
            <FaXTwitter />
          </a>
          <a
            href="mailto:contact@scholarhub.com"
            className="hover:text-primary"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <aside className="text-neutral-content bg-neutral">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </div>
  );
};

export default Footer;
