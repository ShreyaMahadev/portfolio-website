import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div
        className="container text-center py-5"
        style={{ backgroundColor: "#121212", color: "white" }}
      >
        <h2 className="mb-4">Get In Touch</h2>

        <form className="row justify-content-center mb-4">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="col-md-8 mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="col-md-8">
            <button type="submit" className="btn btn-light">
              Send
            </button>
          </div>
        </form>

        <div className="d-flex justify-content-center gap-4 mb-4">
          <a
            href="https://github.com/ShreyaMahadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" style={{ color: "#333" }}></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shreya-m-66681525a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-linkedin fa-2x"
              style={{ color: "#0077b5" }}
            ></i>
          </a>
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fas fa-envelope fa-2x"
              style={{ color: "#d44638" }}
            ></i>
          </a>
          <a
            href="https://leetcode.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-code fa-2x" style={{ color: "#FFA116" }}></i>
          </a>
        </div>

        <p>
          Feel free to connect with me, whether it's for a coding collaboration,
          a good tech discussion, or to share your favorite programming pun.
          Let's make the tech world brighter!
        </p>

        <footer className="pt-4">
          <p>&copy; Copyright 2025. All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
}
