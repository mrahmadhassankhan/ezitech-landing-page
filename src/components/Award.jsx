import "../css/Award.min.css";
const Award = () => {
  return (
    <>
      <div className="award-container">
        <div className="heading-award">
          <h2>Best IT Services Award 2023</h2>
        </div>

        <div className="award-main">
          <div className="award-image">
            <img
              src="src/Images/President-of-pakistan-259x299.png"
              alt=""
              height={350}
              width={350}
            />
          </div>
          <div className="info">
            <p className="first-p">
              <strong>
                Ezitech Is affiliated With{" "}
                <a href="https://www.eziline.com/">Eziline Software House.</a>
              </strong>
              Eziline has been awarded the prestigious Best Software House in IT
              sector award by the President of Pakistan. This is an incredible
              achievement and a testament to the hard work and dedication of the
              entire team at Eziline Software House. The award is a great
              recognition of the company’s achievements in the field of IT and
              serves as a major milestone in its journey towards success.
            </p>
            <p className="second-p">
              This award is a huge source of motivation and inspiration for the
              entire team at Eziline Software House.{" "}
              <strong>
                {" "}
                align-items: center; It is a validation of the company’s
                commitment to innovation, excellence, and customer satisfaction.{" "}
              </strong>
              The award acknowledges the hard work and dedication of every
              member of the team who has contributed to the success of the
              company.
            </p>
            <p className="third-p">
              <strong>
                Ismail Shah, the CEO of Eziline Software House Pvt Ltd,
              </strong>{" "}
              received the Best Services Award in the IT sector from the
              <strong>President of Pakistan, Dr. Arif Alvi,</strong> in
              recognition of his remarkable scontributions to the country’s
              technology industry.
            </p>
            <button className="btn-eziline">Eziline Profile</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Award;
