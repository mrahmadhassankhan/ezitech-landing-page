import Techcard from "./cards/Techcard";
import "../css/Courses.min.css";
const tech = [
  { techimage: ["/src/Images/techcard1.png"], techname: ["ML&AI"] },
  { techimage: ["/src/Images/techcard2.png"], techname: ["BlockChain"] },
  { techimage: ["/src/Images/techcard3.png"], techname: ["Amazon"] },
  { techimage: ["/src/Images/techcard4.png"], techname: ["CyberSecurity"] },
  { techimage: ["/src/Images/techcard5.png"], techname: ["Development"] },
  { techimage: ["/src/Images/techcard6.png"], techname: ["Designing"] },
  { techimage: ["/src/Images/techcard7.png"], techname: ["Gaming"] },
  { techimage: ["/src/Images/techcard8.png"], techname: ["Architecture"] },
  { techimage: ["/src/Images/techcard9.png"], techname: ["IOS&AND"] },
  { techimage: ["/src/Images/techcard10.png"], techname: ["Marketing"] },
  { techimage: ["/src/Images/techcard11.png"], techname: ["3D"] },
  { techimage: ["/src/Images/techcard12.png"], techname: ["Animation"] },
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
