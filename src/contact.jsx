import React, { useState } from "react";
import Navbar from "./navbar.jsx";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    // Open email client with prefilled message
    window.location.href = `mailto:mail@mail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    // Optional: clear form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Contact Section */}
      <div id="contact" className="w3-padding-32 w3-content w3-text-grey">
        <h2>Contact Me</h2>
        <hr className="w3-opacity" />

        {/* Contact Info */}
        <div className="w3-section">
          <p className="ctcicons">
            <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>{" "}
            Trou aux biches, Mauritius
          </p>
          <p className="ctcicons">
            <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i>{" "}
            Phone: 12345678
          </p>
          <p className="ctcicons">
            <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i>{" "}
            Email: mail@mail.com
          </p>

          {/* Download buttons */}
          <a href="./CV.pdf" download>
            <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
              <i className="fa fa-download"></i> Download Resume
            </button>
          </a>
          <a href="./Certificate.pdf" download>
            <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
              <i className="fa fa-download"></i> Download Udemy Certificate
            </button>
          </a>
        </div>

        {/* Contact Form */}
        <div style={{ marginTop: "2rem" }}>
          <p>Let's create together! Send me a message:</p>

          <form onSubmit={handleSubmit}>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="w3-input w3-padding-16 w3-border"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <label className="msgArea">Message</label>
            <textarea
              className="w3-input w3-padding-16 w3-border"
              rows="8"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w3-button w3-light-grey w3-padding-large"
              style={{ marginTop: "1rem" }}
            >
              <i className="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;