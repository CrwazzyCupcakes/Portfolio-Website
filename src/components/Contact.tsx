import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Contact Info */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:afnanmohd5578@icloud.com" data-cursor="disable">
                afnanmohd5578@icloud.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+918790112677" data-cursor="disable">
                +91 87901 12677
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/CrwazzyCupcakes"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/-mohammed-afnan/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://leetcode.com/u/CrwazzyCupcakes/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/afnan.5578/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed & Developed <br />
              by <span>Mohammed Afnan</span>
            </h2>

            <h5>
              <MdCopyright /> {new Date().getFullYear()} Mohammed Afnan. All
              rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;