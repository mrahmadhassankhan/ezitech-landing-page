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
            <span className="changing-text">
              {
                <TypeAnimation
                  preRenderFirstString
                  omitDeletionAnimation
                  sequence={[
                    "Learn the Fundamentals with our Experts in",
                    "Learn the Fundamentals with our Experts in Maketing",
                    1000,
                    "Learn the Fundamentals with our Experts in Programming",
                    1000,
                    "Learn the Fundamentals with our Experts in Web Design",
                    1000,
                  ]}
                  wrapper="span"
                  speed={25}
                  repeat={Infinity}
                  style={{
                    display: "inline-block",
                  }}
                ></TypeAnimation>
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
          <img src="/src/Images/EZIBLOGS-DG.png" alt="" />
          <img src="/src/Images/white-ezipos.png" alt="" />
          <img src="/src/Images/white-lgooo-01.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
