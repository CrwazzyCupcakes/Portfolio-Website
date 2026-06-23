import "./styles/Career.css";

const Education = () => {
  return (
    <div className="career-section section-container"
    id="education"
    >
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* School */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>School (I.C.S.E)</h4>
                <h5>St. Patrick's High School</h5>
              </div>
              <h3>2013 – 2023</h3>
            </div>
            <p>
              Completed my Secondary School Certificate (I.C.S.E), building a strong
              academic foundation in mathematics, science, and computer studies.
            </p>
          </div>

          {/* Intermediate */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School (MPC)</h4>
                <h5>Aakash Institute</h5>
              </div>
              <h3>2023 – 2025</h3>
            </div>
            <p>
              Studied Mathematics, Physics, and Chemistry while developing
              analytical thinking and problem-solving skills.
            </p>
          </div>

          {/* B.Tech */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E in Computer Science & Engineering</h4>
                <h5>Chaitanya Bharathi Institute of Technology</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Currently pursuing my degree with a focus on Artificial
              Intelligence, Generative AI, software development, and modern web
              technologies through academic and personal projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;