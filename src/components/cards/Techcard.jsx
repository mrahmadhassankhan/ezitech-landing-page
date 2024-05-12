import "../cards/TechCard.min.css";

const Techcard = ({ tech }) => {
  const { techname, techimage } = tech;

  return (
    <div className="techcard-container">
      <div className="techcard-inside-container">
        <img src={techimage} alt={techname} />
        <p>{techname}</p>
      </div>
    </div>
  );
};

export default Techcard;
