import React from "react";
import "./about.css";
import Navbar from "./navbar";

const Aboutpage = () => {
  return (
    <div className="container">
      <Navbar />
      <header>
        <h1>Join Eastern India’s BIGGEST Dandiya Event!</h1>
      </header>

      <section className="event-details">
        <h2>Where: Milan Mela Prangan(Behind ITC Kolkata)</h2>
        <h3>When: 3 nights of non-stop festivities</h3>
        <h4>Dance to the beats of:</h4>
        <ul>
          <li>Keyur-Nayan Mehta</li>
          <li>DJ Akash Rohira</li>
        </ul>
        <h4>Exciting contests and prizes await!</h4>
      </section>

      <section className="highlights">
        <h3>Key Highlights:</h3>
        <ul>
          <li>100% Rainproof Venue</li>
          <li>Family-Friendly & Safe</li>
          <li>Dandiya Sticks Available at the Venue</li>
        </ul>
      </section>

      <section className="venue-location">
        <h3>Venue Location:</h3>
        <p>
          Milan Mela Prangan , 3, JBS Haldane Avenue, EM Bypass, Park Circus/Tangra, Kolkata, West Bengal 700046, India 
        </p>
        <a
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.9264499775986!2d88.39165538622163!3d22.544427781189835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276a034abbf8d%3A0xadf43cb046681a31!2sMilan%20Mela%20Prangan%2CWBTPO!5e0!3m2!1sen!2sin!4v1790750293493!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          View on Map
        </a>
      </section>
    </div>
  );
};

export default Aboutpage;
