import Lottie from "lottie-react";
import signupanimation from "../animations/Animation - 1710664027485.json";
import selectcourseanimation from "../animations/Animation - 1713351611941.json";
import selectlearninganimation from "../animations/Animation - 1713425922225.json";
import "../css/Howitworks.min.css";
const Howitworks = () => {
  return (
    <>
      <div className="howitworks">
        <h2>How it works?</h2>
        <div className="howitworks-content">
          <div className="signup-howitworks">
            <div>
              <Lottie
                animationData={signupanimation}
                loop={true}
                autoPlay={true}
                style={{ width: 200, height: 200 }}
              />
            </div>
            <div>
              <h3>Sign up</h3>
            </div>
            <div>
              <p>
                Enter your name, email, and contact details to get started. It
                truly is that simple!
              </p>
            </div>
          </div>
          <div className="selectcourse-howitworks">
            <div>
              {" "}
              <Lottie
                animationData={selectcourseanimation}
                loop={true}
                autoPlay={true}
                style={{ width: 200, height: 200 }}
              />
            </div>
            <div>
              <h3>Select course</h3>
            </div>
            <div>
              <p>
                Browse our extensive and ever-expanding variety of courses for
                professional development.
              </p>
            </div>
          </div>
          <div className="startlearning-howitworks">
            <div>
              {" "}
              <Lottie
                animationData={selectlearninganimation}
                loop={true}
                autoPlay={true}
                style={{ width: 200, height: 200 }}
              />
            </div>
            <div>
              <h3>Start Learning</h3>
            </div>
            <div>
              <p>
                Do the tasks, and your teacher will evaluate them before
                providing you with thorough
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Howitworks;
