import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <h2 className="contact-title">Get In Touch</h2>

      <div className="social-links">
        <a
          href="https://github.com/ShreyaMahadev"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shreya-m-66681525a/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:ShreyaMahadev100@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://leetcode.com/u/ShreyaMahadev/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon leetcode"
        >
          <i className="fas fa-code"></i>
        </a>
        <a
          href="https://www.instagram.com/_shreya_mahadev_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <p className="contact-message">
        Feel free to connect with me, whether it's for a coding collaboration,
        a good tech discussion, or to share your favorite programming pun.
        Let's make the tech world brighter!
      </p>
    </>
  );
}