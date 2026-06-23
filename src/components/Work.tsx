import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "Portfolio Website",
    category: "Frontend",
    tools: "React, TypeScript, GSAP, CSS",
    image: "/images/portfolio.webp",
    github: "https://github.com/CrwazzyCupcakes",
    demo: "#",
  },
  {
    title: "RAG PDF Chatbot",
    category: "Generative AI",
    tools: "Python, Groq API, LangChain",
    image: "/images/rag.webp",
    github: "https://github.com/CrwazzyCupcakes",
    demo: "#",
  },
  {
    title: "Multi-Agent Workflow",
    category: "Artificial Intelligence",
    tools: "Python, LLMs, Prompt Engineering",
    image: "/images/agents.webp",
    github: "https://github.com/CrwazzyCupcakes",
    demo: "#",
  },
  {
    title: "McDonald's Landing Page",
    category: "Frontend",
    tools: "HTML, CSS, JavaScript",
    image: "/images/mcdonalds.webp",
    github: "https://github.com/CrwazzyCupcakes",
    demo: "#",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    const setTranslateX = () => {
      const boxes = document.getElementsByClassName("work-box");

      if (!boxes.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;

      const padding =
        parseInt(window.getComputedStyle(boxes[0]).padding) / 2;

      translateX =
        rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    };

    setTranslateX();

    const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".work-section",
    start: "top top",
    // Fix: Make the pinning duration match the exact translation distance
    end: () => "+=" + translateX, 
    scrub: true,
    pin: true,
    pinSpacing: true,
    invalidateOnRefresh: true,
    id: "work",
  },
});

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    const handleResize = () => {
      setTranslateX();
      ScrollTrigger.refresh();
    };

    const handleLoad = () => {
      setTranslateX();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("resize", handleResize);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="projects">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Technologies</h4>
                <p>{project.tools}</p>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginTop: "18px",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;