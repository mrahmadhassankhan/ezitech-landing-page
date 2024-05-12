import Techcard from "./cards/Techcard";
import "../css/Courses.min.css";
const tech = [
  { techimage: ["/static/Images/techcard1.png"], techname: ["ML&AI"] },
  {
    techimage: ["/static/Images/techcard2.png"],
    techname: ["BlockChain"],
  },
  { techimage: ["/static/Images/techcard3.png"], techname: ["Amazon"] },
  {
    techimage: ["/static/Images/techcard4.png"],
    techname: ["CyberSecurity"],
  },
  {
    techimage: ["/static/Images/techcard5.png"],
    techname: ["Development"],
  },
  {
    techimage: ["/static/Images/techcard6.png"],
    techname: ["Designing"],
  },
  { techimage: ["/static/Images/techcard7.png"], techname: ["Gaming"] },
  {
    techimage: ["/static/Images/techcard8.png"],
    techname: ["Architecture"],
  },
  { techimage: ["/static/Images/techcard9.png"], techname: ["IOS&AND"] },
  {
    techimage: ["/static/Images/techcard10.png"],
    techname: ["Marketing"],
  },
  { techimage: ["/static/Images/techcard11.png"], techname: ["3D"] },
  {
    techimage: ["/static/Images/techcard12.png"],
    techname: ["Animation"],
  },
];
const Courses = () => {
  return (
    <>
      <div className="courses-container">
        {tech.map((techItem, index) => (
          <div className="inside-courses-container">
            <Techcard tech={techItem} key={index} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Courses;
