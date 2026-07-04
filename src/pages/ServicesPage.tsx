import type { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiBarChart2, FiCpu, FiMonitor, FiServer } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    title: "Backend Development",
    icon: <FiServer />,
    description:
      "Designing scalable backend systems with Java, Spring Boot, REST APIs, authentication, databases, and clean architecture, focusing on performance, reliability, and maintainability.",
  },
  {
    title: "Frontend Development",
    icon: <FiMonitor />,
    description:
      "Building responsive, accessible, and elegant user interfaces using HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS, and Next.js, with attention to detail and user experience.",
  },
  {
    title: "Generative AI & LLMs",
    icon: <FiCpu />,
    description:
      "Developing intelligent applications with Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI agents, vector databases, embeddings, and prompt engineering to solve real-world problems.",
  },
  {
    title: "Digital Marketing",
    icon: <FiBarChart2 />,
    description:
      "Combining Meta Ads and Google Ads with performance analytics to design campaigns that maximize reach, improve conversions, and support sustainable business growth.",
  },
];

const ServicesPage = () => {
  useScrollReveal();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/#whatido");
  };

  return (
    <section className="detail-page">
      <button type="button" className="back-link" onClick={handleBack}>
        <FiArrowLeft />
        Back to What I Do
      </button>

      <div className="detail-hero reveal">
        <h1>You stayed.
That tells me you're interested.
Let me show you what I do.</h1>
      </div>

      <div className="detail-grid">
        {services.map((service, i) => (
          <article
            key={service.title}
            className="detail-card reveal"
            style={{ "--i": i } as CSSProperties}
          >
            <div className="detail-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;