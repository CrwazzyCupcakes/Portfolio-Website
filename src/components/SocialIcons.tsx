import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");

    if (!social) return;

    const cleanup: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;

      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;

      let frame = 0;

      const animate = () => {
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;

        elem.style.transform = `translate(${currentX}px, ${currentY}px)`;

        frame = requestAnimationFrame(animate);
      };

      const move = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();

        targetX = (e.clientX - rect.left - rect.width / 2) * 0.2;
        targetY = (e.clientY - rect.top - rect.height / 2) * 0.2;
      };

      const leave = () => {
        targetX = 0;
        targetY = 0;
      };

      elem.addEventListener("mousemove", move);
      elem.addEventListener("mouseleave", leave);

      animate();

      cleanup.push(() => {
        elem.removeEventListener("mousemove", move);
        elem.removeEventListener("mouseleave", leave);
        cancelAnimationFrame(frame);
      });
    });

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" id="social">
        <span>
          <a
            href="https://github.com/CrwazzyCupcakes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </span>

        <span>
          <a
            href="https://www.linkedin.com/in/-mohammed-afnan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>

        <span>
          <a
            href="https://leetcode.com/u/CrwazzyCupcakes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>
        </span>

        <span>
          <a
            href="https://www.instagram.com/afnan.5578/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </span>
      </div>

      <a
        className="resume-button"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;