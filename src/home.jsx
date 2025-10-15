import React from "react";
import Navbar from "./navbar.jsx"
import "./Portfolio.css";
import MeRounded from "./MeRounded.png";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center py-5" id="home">
        <img src={MeRounded} alt="me" className="center" />

        <div className="Introh1 mt-4">Hello World!</div>
        <div className="title mt-2">UX/UI Designer & Front-End Developer</div>
        <div className="descript mt-3">
          <p>
            I am an enthusiastic junior front-end developer and UX/UI designer.
            <br />
            With a basic understanding of HTML, CSS, and JavaScript, I am eager
            to learn and grow in a collaborative environment.
            <br />
            I am passionate about creating user-friendly interfaces and excited
            to tackle new challenges in the tech field!
          </p>
        </div>

        <div className="ctcbtn d-flex justify-content-center mt-4">
          <button
            onClick={() => (window.location.href = "#contact")}
            className="button"
          >
            <span>Get in touch</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
