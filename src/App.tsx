import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import type { CSSProperties } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollReveal } from "./hooks/useScrollReveal";
import "./App.css";

const quotes = [
  "Are you a bug? Because you’ve been keeping me up all night.",
  "I promise I’m not stalking you… I’m just following your public repo.",
  "Are you my code? Because I keep checking you every 5 minutes.",
  "You’re hotter than my laptop running Chrome with 37 tabs.",
  "Are you a software update? Because I wasn’t ready for you, but now I have no choice.",
  "I’d slide into your DMs, but I prefer low latency.",
  "You must be my password, because I keep getting you wrong but I refuse to give up.",
  "Are you Stack Overflow? Because I’d copy everything you say.",
  "I’d never leave you on read… unless I’m stuck in an infinite loop.",
  "You must be JavaScript, because you’re making me act irrationally.",
  "Are you my production server? Because I’m too scared to touch you.",
  "Girl, are you sudo? Because without you, I can’t do anything.",
  "I think you’re a memory leak… you’ve occupied all my RAM.",
  "Are you a merge conflict? Because you’ve complicated my life in the best way.",
  "You’re like my code comments—rare, but incredibly valuable.",
  "Are you a CAPTCHA? Because you’ve proven I’m not thinking straight.",
  "You must be my CPU, because you’ve got my heart at 100% utilization.",
  "Our chemistry has fewer bugs than my latest release.",
  "You’re the only exception I’d never catch.",
  "I’d cache your smile forever.",
];

const currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

type LeafSpec = { x: number; y: number; rot: number; scale: number };

// Base creeper recipe, oriented as if growing from a top-left corner.
// Corner placement (top-right/bottom-left/bottom-right) is handled purely
// in CSS by mirroring this one asset — see .ivy-tl/.ivy-tr/.ivy-bl/.ivy-br.
const baseLeaves: LeafSpec[] = [
  // main stem
  { x: 4, y: 74, rot: -50, scale: 1.4 },
  { x: 20, y: 60, rot: 42, scale: 0.8 },
  { x: 34, y: 52, rot: -18, scale: 1.12 },
  { x: 50, y: 62, rot: 58, scale: 0.84 },
  { x: 64, y: 74, rot: -32, scale: 1.22 },
  { x: 78, y: 76, rot: 22, scale: 0.74 },
  { x: 94, y: 64, rot: -58, scale: 1.04 },
  { x: 108, y: 54, rot: 30, scale: 0.72 },
  { x: 124, y: 46, rot: -14, scale: 1.16 },
  { x: 150, y: 54, rot: -42, scale: 1.34 },
  { x: 168, y: 62, rot: 26, scale: 0.78 },
  { x: 184, y: 72, rot: -25, scale: 0.96 },
  { x: 200, y: 82, rot: 48, scale: 0.74 },
  { x: 216, y: 82, rot: -10, scale: 0.86 },
  { x: 230, y: 78, rot: 34, scale: 1.08 },
  { x: 248, y: 70, rot: -45, scale: 0.74 },
  { x: 264, y: 62, rot: 18, scale: 0.88 },
  { x: 280, y: 58, rot: -20, scale: 0.98 },
  { x: 292, y: 58, rot: 15, scale: 0.76 },
  // branch stem
  { x: 160, y: 80, rot: -55, scale: 0.74 },
  { x: 176, y: 98, rot: 35, scale: 0.82 },
  { x: 192, y: 108, rot: -20, scale: 0.66 },
  { x: 206, y: 110, rot: 40, scale: 0.74 },
  { x: 202, y: 128, rot: -30, scale: 0.62 },
  { x: 198, y: 140, rot: 15, scale: 0.68 },
];

/**
 * A small decorative vine + leaves, used as a corner accent across several
 * sections. `variant` nudges rotation/scale/vertical jitter and thins the
 * leaf set differently, so sections placed side by side don't read as the
 * exact same stamp repeated — see the App.css "ivy" classes for placement,
 * sizing, and the four corner-mirroring variants (.ivy-tl/.ivy-tr/.ivy-bl/.ivy-br).
 */
const IvySprig = ({
  className,
  variant = 0,
}: {
  className?: string;
  variant?: 0 | 1 | 2;
}) => {
  let leafIndex = 0;
  const tone = () => {
    const tones = ["ivy-leaf-a", "ivy-leaf-b", "ivy-leaf-c"];
    const cls = tones[(leafIndex + variant) % tones.length];
    leafIndex += 1;
    return cls;
  };

  const leaves = baseLeaves
    .filter((_, i) => (i + variant * 2) % 7 !== 6)
    .map((leaf) => ({
      x: leaf.x,
      y: leaf.y + (variant === 1 ? 5 : variant === 2 ? -5 : 0),
      rot: leaf.rot + (variant - 1) * 14,
      scale: leaf.scale * (variant === 1 ? 0.93 : variant === 2 ? 1.1 : 1),
    }));

  return (
    <svg
      className={`ivy${className ? ` ${className}` : ""}`}
      viewBox="0 0 300 150"
      aria-hidden="true"
    >
      <path
        className="ivy-stem"
        d="M4,74 C32,54 46,90 76,78 C106,66 118,42 150,54 C182,66 196,92 228,80 C254,70 266,48 292,58"
      />
      <path
        className="ivy-stem ivy-stem-branch"
        d="M150,54 C158,80 182,92 204,108 C218,118 214,132 198,140"
      />

      {leaves.map((leaf, i) => (
        <g key={i} transform={`translate(${leaf.x},${leaf.y})`}>
          <g
            className={`ivy-leaf-inner ${tone()}`}
            style={{
              "--rot": leaf.rot,
              "--scale": leaf.scale,
              "--delay": `${((leaf.x + leaf.y) % 7) * 30}ms`,
            } as CSSProperties}
          >
            <path d="M0,0 C-10,-7 -13,-21 0,-30 C13,-21 10,-7 0,0 Z" />
            <path className="ivy-vein" d="M0,-3 L0,-25" />
          </g>
        </g>
      ))}
    </svg>
  );
};

const App = () => {
  useScrollReveal();
  const location = useLocation();

  // React Router doesn't auto-scroll to a URL hash on navigation, so
  // linking to "/#whatido" or "/#work" (e.g. the back button on the detail
  // pages) would otherwise just land on top of the hero. This finds the
  // target section and scrolls to it manually, with a small offset so the
  // section's heading has breathing room instead of sitting flush against
  // — or being cut off past — the top edge of the viewport. It waits a
  // couple of frames (plus a settle pass) so it measures the layout after
  // the route has actually finished rendering, not mid-transition.
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    let cancelled = false;

    const scrollToSection = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (!el) return;
      const offset = 28;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(scrollToSection);
    });
    const settle = window.setTimeout(scrollToSection, 350);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      window.clearTimeout(settle);
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Mohammed Afnan, also known as CrwazzyCupcakes">
          <span className="brand-text brand-text-default" aria-hidden="true">Mohammed Afnan</span>
          <span className="brand-text brand-text-alt" aria-hidden="true">Crwazzy Cupcakes</span>
        </a>
        <nav className="topnav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#whatido">What I Do</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero-card reveal">
          <IvySprig className="ivy-hero" />
          <div className="hero-copy">
            <p className="eye">My portfolio in an elegant way...</p>
            <h1>Hi, I’m Afnan.</h1>
            <p className="hero-quote">“{currentQuote}”</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Contact me
                <FiArrowUpRight />
              </a>
              <a className="button secondary" href="/resume.pdf">
                Resume
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-collage">
              <IvySprig className="ivy-photo" />
              <div className="photo-frame">
                <div className="photo-frame-inner">
                  <img src="/images/afnan-portrait.jpeg" alt="Mohammed Afnan portrait" />
                </div>
              </div>
              <div className="photo-label">Yep! That’s me!</div>
            </div>
            <p className="hero-photo-note">“The photo made the introduction. The rest is a privilege reserved for those who stay.”</p>
          </div>
        </section>

        <section id="about" className="section-card reveal">
          <IvySprig className="ivy-corner ivy-tl" variant={0} />
          <IvySprig className="ivy-corner ivy-br" variant={0} />
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2>    Creating intelligent systems with timeless simplicity.</h2>
          </div>
          <p className="about-brief">
            My interests lie where software engineering meets intelligent systems. From Java and Python to LLMs, Generative AI, and Retrieval-Augmented Generation, I enjoy creating products that are thoughtfully engineered, practical, and designed to make complex technology feel effortless.
          </p>
        </section>

        <section id="whatido" className="section-card reveal">
          <IvySprig className="ivy-corner ivy-tr" variant={1} />
          <IvySprig className="ivy-corner ivy-bl" variant={1} />
          <div className="section-heading">
            <p className="eyebrow">What I do</p>
            <h2>Building software that feels intelligent, not complicated.</h2>
          </div>
          <p className="section-brief">
            I build modern web applications, AI-powered systems, and scalable backend services that combine clean engineering with thoughtful design. From Java and Python to LLMs and Retrieval-Augmented Generation, I focus on creating technology that is reliable, intuitive, and built to last.
          </p>
          <div className="section-footer">
            <Link className="button ghost" to="/services">
              Step Inside
              <FiArrowUpRight />
            </Link>
          </div>
        </section>

        <section id="work" className="section-card reveal">
          <IvySprig className="ivy-corner ivy-tl" variant={2} />
          <IvySprig className="ivy-corner ivy-br" variant={2} />
          <div className="section-heading">
            <p className="eyebrow">My work</p>
            <h2>Projects that reflect curiosity, craftsmanship, and clarity.</h2>
          </div>
          <p className="section-brief">
            Every project begins with a question and ends with a solution. From AI-powered systems and modern web applications to backend services and intelligent automation, this collection reflects my approach to building software with purpose, precision, and lasting impact.
          </p>
          <div className="section-footer">
            <Link className="button ghost" to="/work">
              View work
              <FiArrowUpRight />
            </Link>
          </div>
        </section>

        <section id="education" className="section-card education-section reveal">
          <IvySprig className="ivy-corner ivy-tr" variant={0} />
          <IvySprig className="ivy-corner ivy-bl" variant={0} />
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Every chapter grew from the same curious root.</h2>
          </div>
          <div className="education-tree">
            <article className="education-node left reveal" style={{ "--i": 0 } as CSSProperties}>
              <p className="education-stage">School</p>
              <p className="education-period">2013 – 2023</p>
              <h3>St. Patrick's High School (I.C.S.E)</h3>
              <p>Nurtured curiosity, creativity, and the early spark of a lifelong technology practice.</p>
            </article>

            <article className="education-node right reveal" style={{ "--i": 1 } as CSSProperties}>
              <p className="education-stage">High School</p>
              <p className="education-period">2023 – 2025</p>
              <h3>Aakash Institute</h3>
              <p>Sharpened analytical instincts across math, science, and logical problem solving—the framework for every system I design.</p>
            </article>

            <article className="education-node bottom reveal" style={{ "--i": 2 } as CSSProperties}>
              <p className="education-stage">College</p>
              <p className="education-period">2025 – Present</p>
              <h3>Chaitanya Bharathi Institute of Technology</h3>
              <p>Pursuing Computer Science with a focus on software engineering, AI, and practical systems that feel smart by design.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section-card contact-card reveal">
          <IvySprig className="ivy-corner ivy-tl" variant={1} />
          <IvySprig className="ivy-corner ivy-br" variant={1} />
          <div className="contact-copy">
            <div className="section-heading">
              <p className="eyebrow">Contact</p>
              <h2>Have an idea worth building?</h2>
            </div>
            <p className="section-brief">
              I’m available for freelance work, collaborations, and exciting opportunities. If you’re looking for someone who values quality, clarity, and craftsmanship, let’s connect.
            </p>
          </div>
          <div className="contact-actions">
            <div className="contact-row">
              <a className="button secondary phone-button" href="tel:+918790112677">
                +91 87901 12677
              </a>
            </div>
            <div className="contact-row">
              <a className="button primary" href="mailto:afnanmohd5578@icloud.com">
                <FiMail />
                Mail me
              </a>
              <div className="social-links">
                <a href="https://github.com/CrwazzyCupcakes" target="_blank" rel="noreferrer">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/-mohammed-afnan/" target="_blank" rel="noreferrer">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Crafted with elegance • © 2026 Mohammed Afnan</p>
      </footer>
    </div>
  );
};

export default App;