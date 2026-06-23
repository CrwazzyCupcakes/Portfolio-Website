import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      const handlers = new Map<HTMLDivElement, () => void>();

      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");

          const handler = () => handleClick(container);
          handlers.set(container, handler);

          container.addEventListener("click", handler);
        }
      });

      return () => {
        handlers.forEach((handler, container) => {
          container.removeEventListener("click", handler);
        });
      };
    }
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* SOFTWARE DEVELOPMENT */}

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3 className="service-title">SOFTWARE DEVELOPMENT</h3>

              <h4>Description</h4>

              <p>
                I build responsive web applications and software solutions using
                modern technologies, focusing on clean code, performance, and
                user experience.
              </p>

              <h5>Skillset & Tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Java</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">Striver</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* ARTIFICIAL INTELLIGENCE */}

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3 className="service-title">ARTIFICIAL INTELLIGENCE</h3>

              <h4>Description</h4>

              <p>
                I explore Generative AI, Large Language Models, RAG, and multi-agent systems while
                building intelligent applications.
              </p>

              <h5>Skillset & Tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">GenAI</div>
                <div className="what-tags">LLMs</div>
                <div className="what-tags">RAG</div>
                <div className="what-tags">Multi-Agent AI</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.add("what-sibling");
      }
    });
  }
}
