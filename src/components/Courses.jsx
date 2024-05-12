import Techcard from "./cards/Techcard";
import "../css/Courses.min.css";
const tech = [
  { techimage: ["public/static/images/techcard1.png"], techname: ["ML&AI"] },
  {
    techimage: ["public/static/images/techcard2.png"],
    techname: ["BlockChain"],
  },
  { techimage: ["public/static/images/techcard3.png"], techname: ["Amazon"] },
  {
    techimage: ["public/static/images/techcard4.png"],
    techname: ["CyberSecurity"],
  },
  {
    techimage: ["public/static/images/techcard5.png"],
    techname: ["Development"],
  },
  {
    techimage: ["public/static/images/techcard6.png"],
    techname: ["Designing"],
  },
  { techimage: ["public/static/images/techcard7.png"], techname: ["Gaming"] },
  {
    techimage: ["public/static/images/techcard8.png"],
    techname: ["Architecture"],
  },
  { techimage: ["public/static/images/techcard9.png"], techname: ["IOS&AND"] },
  {
    techimage: ["public/static/images/techcard10.png"],
    techname: ["Marketing"],
  },
  { techimage: ["public/static/images/techcard11.png"], techname: ["3D"] },
  {
    techimage: ["public/static/images/techcard12.png"],
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
