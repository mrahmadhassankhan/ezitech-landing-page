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
            <p>Learn the Fundamentals with our Experts in </p>
            <p>Utilize Effective Training to Reach your Potential</p>
            <span className="changing-text">
              {
                <TypeAnimation
                  preRenderFirstString
                  omitDeletionAnimation
                  sequence={["Programming", 1000]}
                  wrapper="span"
                  speed={25}
                  repeat={Infinity}
                  style={{
                    color: "lightgreen",
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
