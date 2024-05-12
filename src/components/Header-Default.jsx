import "../css/Header-Default.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const HeaderDefault = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo-website">
          <img src="/static/Images/EZITECH-LOGO-white.png" alt="logo" />
          <img src="/static/Images/EZITECH-LOGO-.jpg" alt="" />
        </div>
        <div className="header-menu">
          <ul>
            <li>
              <a href="https://ezitech.org/">HOME</a>
            </li>
            <li>
              <a href="https://ezitech.org/about-ezitech/">ABOUT US</a>
            </li>
            <li>
              <a href="https://ezitech.org/certifications/">CERTIFICATIONS</a>
            </li>
            <li>
              <a href="http://ezitech.org/internship-program/">INTERNSHIPS</a>
            </li>
            <li>
              <a href="https://ezitech.org/seminars/">SEMINARS</a>
            </li>
            <li>
              <a href="http://ezitech.org/iportal/">INTERN PORTAL</a>
            </li>
          </ul>
          <span>
            <FontAwesomeIcon icon={faBars} color="#2575ed"></FontAwesomeIcon>
          </span>
        </div>

        <div className="search-with-heart">
          <ul>
            <span className="vertical_divider_header"></span>
            <li className="heart-icon-header">
              <a href="https://ezitech.org/user-account/">
                <FontAwesomeIcon icon={faHeart} color="white" />
              </a>
            </li>
            <li className="search-header">
              <a href="">
                <FontAwesomeIcon icon={faSearch} color="white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default HeaderDefault;
