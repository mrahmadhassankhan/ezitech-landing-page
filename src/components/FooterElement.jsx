import "../css/Footer.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faBehance,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const FooterElement = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-menu">
          <div className="about-footer">
            <h3>ABOUT</h3>
            <p>
              Ezitech Institute provides a platform for newcomers to launch
              their IT and freelancing careers. Our emphasis on practical
              information technology courses that are career and work oriented
              makes us the top computer institute in Rawalpindi, Islamabad,
              Pakistan.
            </p>
          </div>
          <div className="popular-courses-footer">
            <h3>POPULAR COURSES</h3>
            <div className="image-1">
              <a href="https://ezitech.org/courses-ezitech/online-arbitrage-course-rawalpindi/">
                <img
                  src="/src/Images/footer-1.webp"
                  alt=""
                  height={50}
                  width={50}
                />
                <div className="image-1-content">
                  <h5>Online Arbitrage Mastermind 2.0 [R...</h5>
                  <span>By Husnain Ali</span>
                </div>
              </a>
            </div>
            <div className="image-2">
              <a href="https://ezitech.org/courses-ezitech/adobe-illustrator-course-with-projects/">
                <img
                  src="/src/Images/footer-2.webp"
                  alt=""
                  height={50}
                  width={50}
                />
                <div className="image-2-content">
                  <h5>Abobe Illustrator Course</h5>
                  <span>By Ayesha Shah</span>
                </div>
              </a>
            </div>
          </div>
          <div className="pages-footer">
            <h3>PAGES</h3>
            <ul>
              <li>
                <a href="https://ezitech.us/contact-us-2/">CONTACT US</a>
              </li>
              <li>
                <a href="">SHOP</a>
              </li>
              <li>
                <a href="">INTERNSHIP</a>
              </li>
              <li>
                <a href="">CODELAB</a>
              </li>
            </ul>
          </div>
          <div className="contact-footer">
            <h3>CONTACT</h3>
            <div className="address-footer">
              <div>
                <FontAwesomeIcon icon={faMapMarker} className="faMapMarker" />
              </div>
              <div>
                <p>
                  Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi,
                  Punjab 46000
                </p>
              </div>
            </div>
            <div className="phone-number-footer">
              <div>
                <FontAwesomeIcon icon={faPhone} className="faPhone" />
              </div>
              <div>
                <p>+923455555396</p>
              </div>
            </div>
            <div className="mail-footer">
              <div>
                <FontAwesomeIcon icon={faEnvelope} className="faEnvelope" />
              </div>
              <div>
                <p>
                  <a
                    className="mail-ezitech-footer"
                    href="mailto:info@ezitech.org"
                  >
                    info@ezitech.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-text">
          <p>
            Design By &nbsp;
            <a href="https://linktr.ee/mrahmadhassankhan">
              <u>Ahmad Hassan Khan</u>
            </a>
          </p>
          <p>Copyrights@2024 Ezitech Institute</p>
          <p>
            Copyright@2024 Ezitech Institute | Design & Developed by{" "}
            <a href="https://linktr.ee/mrahmadhassankhan">
              <u>Ahmad Hassan Khan</u>
            </a>
          </p>
        </div>
      </div>
      <div className="copyright-socials">
        <div className="copyright-socials-content">
          <div>
            <a href="https://www.facebook.com/ezitech">
              <FontAwesomeIcon icon={faFacebook} color="white" className="fb" />
            </a>
          </div>
          <div>
            <a href="https://www.behance.net/ezitech">
              <FontAwesomeIcon
                icon={faBehance}
                color="white"
                className="behance"
              />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/eziline-technologies/">
              <FontAwesomeIcon
                icon={faLinkedin}
                color="white"
                className="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterElement;
``;
