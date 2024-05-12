import "../css/Header-Top-Bar.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarker,
  faClock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faBehance,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const HeaderTopBar = () => {
  return (
    <>
      <div className="header-top-bar-container">
        <div className="header-top-bar-left">
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <p>+92 3455555396</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarker} />
              <p> Office #304-B Amna Plaza, Rawalpindi, Pakistan</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} />
              <p> Mon - Fri 8.00 - 20.00</p>
            </li>
          </ul>
        </div>
        <div className="new-headertop">
          <div className="header-top-bar-social-icons">
            <ul>
              <li>
                <a href="https://www.facebook.com/ezitech">
                  <FontAwesomeIcon icon={faFacebook} color="white" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ezitechpk/">
                  <FontAwesomeIcon icon={faInstagram} color="white" />
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/ezitech">
                  <FontAwesomeIcon icon={faBehance} color="white" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/eziline-technologies/">
                  <FontAwesomeIcon icon={faLinkedin} color="white" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCPJvS7gvIV9nm6paydinYWg">
                  <FontAwesomeIcon icon={faYoutube} color="white" />
                </a>
              </li>
            </ul>
          </div>
          <div className="header-top-bar-login-register">
            <ul>
              <li>
                <FontAwesomeIcon icon={faUser} color="white" />
                <a href="https://ezitech.org/user-account/"> Login</a>
              </li>
              <span className="vertical_divider"></span>
              <li>
                <a href="https://ezitech.org/user-account/?mode=register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderTopBar;
