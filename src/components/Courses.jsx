import Techcard from "./cards/Techcard";
import "../css/Courses.min.css";
const tech = [
  { techimage: ["public/static/Images/techcard1.png"], techname: ["ML&AI"] },
  {
    techimage: ["public/static/Images/techcard2.png"],
    techname: ["BlockChain"],
  },
  { techimage: ["public/static/Images/techcard3.png"], techname: ["Amazon"] },
  {
    techimage: ["public/static/Images/techcard4.png"],
    techname: ["CyberSecurity"],
  },
  {
    techimage: ["public/static/Images/techcard5.png"],
    techname: ["Development"],
  },
  {
    techimage: ["public/static/Images/techcard6.png"],
    techname: ["Designing"],
  },
  { techimage: ["public/static/Images/techcard7.png"], techname: ["Gaming"] },
  {
    techimage: ["public/static/Images/techcard8.png"],
    techname: ["Architecture"],
  },
  { techimage: ["public/static/Images/techcard9.png"], techname: ["IOS&AND"] },
  {
    techimage: ["public/static/Images/techcard10.png"],
    techname: ["Marketing"],
  },
  { techimage: ["public/static/Images/techcard11.png"], techname: ["3D"] },
  {
    techimage: ["public/static/Images/techcard12.png"],
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
