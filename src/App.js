import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FaTshirt,
  FaClock,
  FaTools,
  FaDollarSign,
  FaQuestionCircle,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaShoePrints, // ✅ Add this line
  FaShoppingBasket,
} from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Close menu function

  // Reset menu state on window resize (desktop/mobile switch)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close the menu when going to desktop
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <a href="#hero" className="main">
            <h1>
              <FaTshirt style={{ fontSize: "2rem", marginRight: "0.5rem" }} />
              WashYard
            </h1>
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          {/* Close Button - only in mobile view */}
          <div className="close-button" onClick={closeMenu}>
            <span>&#10005;</span>
          </div>

          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#hours">Hours</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#hours">Hours</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero fadeIn">
        <div className="hero-overlay">
          <h1 className="hero-title fadeIn">
            Welcome to WashYard Laundry Shop
          </h1>
          <p className="hero-description fadeIn">
            Your Ultimate Self‑Service Laundromat in Valenzuela — Fast, Clean &
            Eco‑Friendly
          </p>
          <a href="#pricing" className="cta-button slideUp">
            See Pricing
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-us fadeIn">
        <div className="content">
          {/* Section 1: Introductory Information */}
          <div className="about-intro">
            <div className="text">
              <h2>About Wash Yard</h2>
              <p>
                Welcome to Wash Yard Self-Service Laundry, your trusted laundry
                service provider located in the heart of Valenzuela City, Metro
                Manila. At Wash Yard, we understand the importance of clean
                clothes and the convenience of having them professionally
                laundered. Our mission is to offer efficient, affordable, and
                high-quality laundry services to meet all your laundry needs.
              </p>
            </div>
            <div className="image">
              <img src="/test3.jpg" alt="Laundry Service 1" />
            </div>
          </div>

          {/* Section 2: Additional Amenities */}
          <div className="about-section reverse">
            <div className="text">
              <h3>Additional Amenities</h3>
              <p>
                To enhance your experience, we offer light snacks and
                refreshments, allowing you to relax and recharge while your
                laundry is being taken care of. Our goal is to make your visit
                as comfortable and enjoyable as possible.
              </p>
            </div>
            <div className="image">
              <img src="/snacks.jpg" alt="Laundry Service 2" />
            </div>
          </div>

          {/* Section 3: Community Engagement */}
          <div className="about-section">
            <div className="text">
              <h3>Community Engagement</h3>
              <p>
                At Wash Yard, we believe in fostering a sense of community. We
                regularly engage with our customers through our Facebook page,
                sharing updates, promotions, and tips to make your laundry days
                more manageable. Join our growing family of satisfied customers
                and experience the Wash Yard difference.
              </p>
              <br />
              <a
                href="https://www.facebook.com/washyardlaundromat" // Replace with your actual Facebook page link
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-btn"
              >
                Visit Our Facebook Page
              </a>
            </div>
            <div className="image">
              {/* Optional image for community engagement or an icon */}
              <img src="/socmed.jpg" alt="Community Engagement" />
            </div>
          </div>

          {/* Section 4: Visit Us Today */}
          <div className="about-section reverse">
            <div className="text">
              <h3>Visit Us Today</h3>
              <p>
                Experience the convenience and quality of Wash Yard Self-Service
                Laundry. Whether you choose to do your laundry yourself or
                utilize our drop-off service, we are here to serve you with
                dedication and care. Visit us today at our Malinta location and
                discover why we are Valenzuela City's preferred laundry service
                provider.
              </p>
            </div>
            <div className="image">
              {/* Optional image for the location */}
              <img src="/test.jpg" alt="Laundry Service 2" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE WASH YARD */}
      <section id="why-choose" className="why-choose slideUp">
        <h2>Why Choose Wash Yard ?</h2>
        <div className="reasons">
          <div className="card reason slideUp">
            <FaMapMarkedAlt size={60} />
            <h3>Convenience</h3>
            <p>
              Located at 1092 Saint Jude Corner Samal Street, Malinta Valenzuela City, our
              laundromat is easily accessible to serve you better.
            </p>
          </div>
          <div className="card reason slideUp">
            <FaTools size={60} />
            <h3>Quality</h3>
            <p>
              We use high-quality detergents and modern equipment to ensure your
              clothes are cleaned thoroughly and gently.
            </p>
          </div>
          <div className="card reason slideUp">
            <FaDollarSign size={60} />
            <h3>Affordability</h3>
            <p>
              Enjoy competitive pricing without compromising on the quality of
              service.
            </p>
          </div>
          <div className="card reason slideUp">
            <FaQuestionCircle size={60} />
            <h3>Customer Satisfaction</h3>
            <p>
              Our friendly and professional staff are dedicated to providing
              exceptional service, ensuring your laundry experience is
              hassle-free.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATING HOURS */}
      <section id="hours" className="hours slideUp">
        <h2>Operating Hours</h2>
        <div className="hours-card">
          <FaClock size={50} className="hours-icon" />
          <div>
            <p>We’re open every day to fit your lifestyle.</p>
            <h3>Monday – Sunday</h3>
            <p className="hours-time">8:00 AM – 5:00 PM</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-item left slideUp">
          <div className="icon">
            <FaTshirt size={100} />
          </div>
          <div className="text">
            <h3>Self Service</h3>
            <p>
              For those who prefer to handle their laundry personally, we offer
              state-of-the-art washing and drying machines. Our facilities are
              designed for your convenience, ensuring a smooth and efficient
              laundry experience.
            </p>
          </div>
        </div>
        <div className="service-item right slideUp">
          <div className="icon">
            <FaShoppingBasket size={100} />
          </div>
          <div className="text">
            <h3>Full Service (Drop Off)</h3>
            <p>
              If you're short on time or simply prefer to leave it to the
              experts, our drop-off service is the perfect solution. For as low
              as P65 for washing and P65 for drying, plus a minimal drop-off
              fee, you can have your laundry professionally cleaned and dried
              without the hassle.{" "}
            </p>
          </div>
        </div>
        <div className="service-item left slideUp">
          <div className="icon">
            <FaShoePrints size={100} />
          </div>
          <div className="text">
            <h3>Shoe Cleaning</h3>
            <p>
              At Wash Yard Laundromat, we understand that your shoes are more
              than just a part of your outfit—they're an investment in style and
              comfort.
            </p>
            <p>
              Whether it's your favorite sneakers, leather shoes, or delicate
              fabric shoes, our skilled team uses the best techniques to restore
              their look and feel. Trust Wash Yard Laundromat to bring your
              shoes back to life and keep them looking fresh for longer!
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing slideUp">
        <h2>Pricing</h2>
        <div className="pricing-cards">
          <div className="card pricing-card">
            <FaDollarSign size={50} />
            <h3>Wash</h3>
            <p>₱65 per load (up to 7kg)</p>
            <ul>
              <li>Basic Clothing/Bed Linen</li>
              <li>Can bring your own Detergent/Fabric Softners</li>
            </ul>
          </div>
          <div className="card pricing-card">
            <FaDollarSign size={50} />
            <h3>Dry</h3>
            <p>₱65 per load (up to 7kg)</p>
            <ul>
              <li>Basic Clothing/Bed Linen</li>
            </ul>
          </div>
          <div className="card pricing-card">
            <FaDollarSign size={50} />
            <h3>Drop Off</h3>
            <p>₱205 (up to 6kg)</p>
            <ul>
              <li>Wash, Dry and Fold</li>
              <li>Additional ₱40 per load</li>
              <li>Pickup or Delivery via Lalamove</li>
            </ul>
          </div>
          <div className="card pricing-card">
            <FaDollarSign size={50} />
            <h3>Shoe Cleaning</h3>
            <p>₱300</p>
            <ul>
              <li>Basic and Advance Cleaning</li>
              <li>Pickup or Delivery via Lalamove</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item card">
          <FaQuestionCircle />
          <div>
            <h4>How many kilos can I wash at once?</h4>
            <p>
              You can wash up to 7 kilos per machine. To prevent any
              inconveniences caused by machine errors, we ensure that our
              machines are calibrated to handle the right amount of weight for
              optimal performance and efficiency.
            </p>
          </div>
        </div>

        <div className="faq-item card">
          <FaQuestionCircle />
          <div>
            <h4>How long is the wash cycle?</h4>
            <p>
              The wash cycle typically lasts 30 to 45 minutes, depending on the
              selected program.
            </p>
          </div>
        </div>

        <div className="faq-item card">
          <FaQuestionCircle />
          <div>
            <h4>How long is the dry cycle?</h4>
            <p>
              The dry cycle usually lasts between 30 to 45 minutes, depending on
              your load size and selected drying program.
            </p>
          </div>
        </div>

        <div className="faq-item card">
          <FaQuestionCircle />
          <div>
            <h4>What payment methods do you accept?</h4>
            <p>We accept cash and mobile payments like GCash or PayMaya.</p>
          </div>
        </div>

        <div className="faq-item card">
          <FaQuestionCircle />
          <div>
            <h4>Can I leave my laundry unattended while it washes or dries?</h4>
            <p>
              For your safety and convenience, we ask that you stay near the
              machines while your laundry is in progress.
            </p>
          </div>
        </div>

        <div className="faq-item card">
          <FaQuestionCircle />
          <div>
            <h4>What if I need assistance with the machines?</h4>
            <p>
              If you need help, you can reach out with our friendly staffs.
              We're here to assist you immediately.
            </p>
          </div>
        </div>

        <div className="faq-item card">
          <FaQuestionCircle />
          <div>
            <h4>Do you offer any laundry detergents or fabric softeners?</h4>
            <p>
              Yes! We provide premium detergent with each wash. Fabric softeners
              are available for purchase in-store.
            </p>
          </div>
        </div>

        <div className="faq-item card">
          <FaQuestionCircle />
          <div>
            <h4>Can I wash delicate fabrics?</h4>
            <p>
              Yes, we have machines with a delicate cycle for more sensitive
              fabrics. Always check your clothing labels for care instructions.
            </p>
          </div>
        </div>

        <div className="faq-item card">
          <FaQuestionCircle />
          <div>
            <h4>What delivery options do you offer?</h4>
            <p>
              At Wash Yard Laundromat, we strive to provide convenience for our
              customers. We accommodate delivery services through Lalamove,
              ensuring your laundry is safely delivered right to your doorstep.
              Please note that the delivery fee is the responsibility of the
              customer.
            </p>
            <p>
              Simply contact us to arrange for a pickup, and we'll handle the
              rest. Whether you're at home or at work, we'll make sure your
              laundry gets to you with ease!
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>We’re here to help—drop by or get in touch!</p>
          <p>
            <FaMapMarkedAlt /> 1092 Saint Jude Corner Samal Street, Malinta Valenzuela City (In front of La Consolacion)
          </p>
          <p>
            <FaPhoneAlt /> (+63) 996-655-5539
          </p>
          <p>
            <FaPhoneAlt /> (+63) 996-655-5537
          </p>
          <p>
            <FaPhoneAlt /> (+63) 916-715-2513
          </p>
          <p>
            <FaEnvelope /> washyardlaundromat@gmail.com
          </p>
        </div>
        <div className="contact-map">
          <iframe
            title="WashYard Valenzuela"
            src="https://www.google.com/maps?q=WashYard%20Self%20Service%20Laundromat%20Valenzuela&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          &copy; 2025 WashYard Self Service Laundromat. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
