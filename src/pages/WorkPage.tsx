import type { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiBriefcase, FiLoader } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const workItems = [
  {
    title: "Coming Soon!",
    // category: "██████████",
    // description:
    //   "██████████",
  },
];

const WorkPage = () => {
  useScrollReveal();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/#work");
  };

  return (
    <section className="detail-page">
      <button type="button" className="back-link" onClick={handleBack}>
        <FiArrowLeft />
        Back to Work
      </button>

      <div className="detail-hero reveal">
        <h1>The next chapter is already in progress.</h1>
        <p>
          I’m currently building a collection of software projects, AI applications, and modern web experiences that reflect my passion for thoughtful engineering. Check back soon—there’s plenty on the way.
        </p>
      </div>

      <div className="detail-grid">
        {workItems.map((item, i) => (
          <article
            key={item.title}
            className="detail-card reveal"
            style={{ "--i": i } as CSSProperties}
          >
            <div className="detail-icon">
              {item.title.includes("Studio") ? <FiBriefcase /> : <FiLoader />}
            </div>
            {/* <p className="project-type">{item.category}</p> */}
            <h3>{item.title}</h3>
            {/* <p>{item.description}</p> */}
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkPage;