import "../css/Hero.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <p className="changing-text">
            <p>Learn the Fundamentals with our Experts in</p>
            <p>Utilize Effective Training to Reach your Potential!</p>
            <span className="typing-animation">
              {
                <TypeAnimation
                  omitDeletionAnimation
                  sequence={[
                    "Programming",
                    1000,
                    "Web Design",
                    1000,
                    "Social Skills",
                    1000,
                    "Marketing",
                    1000,
                  ]}
                  wrapper="span"
                  speed={5}
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontWeight: "600", display: "inline-block" }}
                />
              }
            </span>
          </p>
          <p className="below-changing-text">
            Utilize Effective Training to Reach Your Potential!
          </p>
        </div>

        <form method="" action="" className="form-input">
          <input type="search" name="search" placeholder="Search courses..." />
          <button className="search-icon-hero">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div>
          <p className="below-form-text">Explore our more useful products 🤍</p>
        </div>
        <div className="below-formtext-images">
          <img src="public/static/Images/EZIBLOGS-DG.png" alt="" />
          <img src="public/static/Images/white-ezipos.png" alt="" />
          <img src="public/static/Images/white-lgooo-01.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
