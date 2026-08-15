"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from "lenis";

type Project = {
  title: string;
  client: string;
  category: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "CONVERSE",
    client: "CONVERSE",
    category: "Creative Technology",
    image:
      "https://works.studio/assets/imager/images/converse-global-fa23/37951/converse-21_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
    tags: [
      "CREATIVE DIRECTION",
      "DIGITAL DESIGN",
      "VISUAL EFFECTS",
      "BRANDING & IDENTITY",
      "TYPE DESIGN",
    ],
  },
  {
    title: "NIKE NFL",
    client: "NIKE",
    category: "Digital Experience",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGMPThZlFegd4WZFN7O-8F5BFrjzTbSMxCoINjGD-IHg&s",
    tags: [
      "CREATIVE DIRECTION",
      "DIGITAL DESIGN",
      "VISUAL EFFECTS",
      "BRANDING & IDENTITY",
      "TYPE DESIGN",
    ],
  },
  {
    title: "U.S. SOCCER",
    client: "U.S. SOCCER",
    category: "Digital Experience",
    image:
      "https://works.studio/assets/imager/images/us-soccer/38414/USS-1_240208_001956_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
    tags: [
      "CREATIVE DIRECTION",
      "DIGITAL DESIGN",
      "VISUAL EFFECTS",
      "BRANDING & IDENTITY",
      "TYPE DESIGN",
    ],
  },
  {
    title: "MINERAL",
    client: "MINERAL",
    category: "Brand Experience",
    image:
      "https://works.studio/assets/imager/images/mineral-health/38349/MIN-1_240208_000417_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
    tags: [
      "CREATIVE DIRECTION",
      "DIGITAL DESIGN",
      "VISUAL EFFECTS",
      "BRANDING & IDENTITY",
      "TYPE DESIGN",
    ],
  },
];

const gallery = [
  {
    title: "Versace launches",
    subtitle: "NEW FLAGSHIP FOOTWEAR",
    image:
      "https://works.studio/assets/imager/images/versace-trigerca-identity/38005/versace-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  },
  {
    title: "TheXI Scraping",
    subtitle: "THE SKIES",
    image:
      "https://works.studio/assets/imager/images/the-xi/38084/xi-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  },
  {
    title: "Heron Preston",
    subtitle: "NEWEST COLLECTION",
    image:
      "https://works.studio/assets/imager/images/heron-preston-website/39620/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  },
  {
    title: "Versace",
    subtitle: "DIGITAL EXPERIENCE",
    image:
      "https://works.studio/assets/imager/images/versace-trigerca-identity/38005/versace-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  },
  {
    title: "TheXI",
    subtitle: "CREATIVE TECHNOLOGY",
    image:
      "https://works.studio/assets/imager/images/the-xi/38084/xi-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  },
  {
    title: "Heron Preston",
    subtitle: "DIGITAL DESIGN",
    image:
      "https://works.studio/assets/imager/images/heron-preston-website/39620/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  },
];

const capabilities = [
  "Creative Development",
  "Frontend Engineering",
  "Full-stack Development",
  "AI Integration",
  "Interactive Experiences",
  "Digital Design",
];

export default function Home() {
  const page2Ref = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    const loader = loaderRef.current;

    if (loader) {
      const tl = gsap.timeline();

      tl.to("#yellow1", {
        yPercent: -100,
        delay: 0.35,
        duration: 0.8,
        ease: "expo.out",
      });

      tl.fromTo(
        "#yellow2",
        {
          yPercent: 100,
        },
        {
          yPercent: -100,
          duration: 0.8,
          ease: "expo.out",
        },
        "-=0.45",
      );

      tl.to(
        "#loaderTitle",
        {
          opacity: 0,
          y: -30,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.6",
      );

      tl.to(
        loader,
        {
          opacity: 0,
          duration: 0.45,
          pointerEvents: "none",
        },
        "-=0.1",
      );
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleProjectHover = (image: string) => {
    if (!page2Ref.current) return;

    page2Ref.current.style.backgroundImage = `linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url("${image}")`;
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div ref={loaderRef} id="loader">
        <div id="yellow1" />
        <div id="yellow2" />

        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://works.studio/uploads/videos/4_version1_200911_024121.mp4"
        />

        <h1 id="loaderTitle">
          <em>I</em> AM A <span>CREATIVE PROFESSIONAL</span>
          <br />
          DEDICATED TO <span>TECHNICAL ADVANCEMENT.</span>
          <br />
          I&apos;M CALLED <span>YATHARTH &quot;yoKi&quot; ZINZUWADIA</span>
        </h1>
      </div>

      <header className={`nav ${menuOpen ? "menu-open" : ""}`}>
        <button
          className="logo"
          onClick={() => scrollTo("home")}
          aria-label="Back to home"
        >
          yoKi.
        </button>

        <nav>
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("capabilities")}>Capabilities</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">FULL-STACK / AI / CREATIVE TECHNOLOGY</p>

            <h1>
              <em>I am a</em> CREATIVE
              <br />
              PROFESSIONAL
              <br />
              <em>dedicated to</em> TECHNICAL
              <br />
              ADVANCEMENT.
            </h1>

            <div className="hero-bottom">
              <p>
                I&apos;m Yatharth Zinzuwadia — a full-stack developer building
                high-performance web applications, AI-integrated products and
                experimental digital experiences.
              </p>

              <button onClick={() => scrollTo("work")}>
                Explore work <span>↓</span>
              </button>
            </div>
          </div>

          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
        </section>

        <section
          ref={page2Ref}
          id="work"
          className="work-section"
          onMouseLeave={() => {
            if (page2Ref.current) {
              page2Ref.current.style.backgroundImage = "";
            }
          }}
        >
          <div className="work-heading">
            <span>01 / SELECTED WORK</span>
            <span>HOVER TO EXPLORE</span>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className="project"
                key={project.title}
                onMouseEnter={() => handleProjectHover(project.image)}
              >
                <div className="project-number">0{index + 1}</div>

                <div className="project-title">
                  <h2>{project.title}</h2>

                  <div className="project-meta">
                    <span>{project.client}</span>
                    <span>{project.category}</span>
                  </div>
                </div>

                <div className="project-marquee">
                  {project.tags.concat(project.tags).map((tag, i) => (
                    <span key={`${tag}-${i}`}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="section-label">02 / ABOUT</div>

          <div className="about-grid">
            <div>
              <h2>
                I build at the intersection of{" "}
                <em>design, engineering and AI.</em>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                Full-stack developer with 2+ years building production web
                applications, serverless APIs and AI-integrated platforms.
              </p>

              <p>
                My work spans React, Next.js, Node.js, TypeScript, serverless
                architecture, cloud infrastructure, vector databases and modern
                AI APIs.
              </p>

              <p>
                I care about performance, architecture, interaction and turning
                ambitious ideas into products that actually work.
              </p>

              <button onClick={() => scrollTo("contact")}>
                Let&apos;s build something →
              </button>
            </div>
          </div>
        </section>

        <section id="capabilities" className="capabilities-section">
          <div className="section-label">03 / CAPABILITIES</div>

          <div className="capability-list">
            {capabilities.map((capability, index) => (
              <div className="capability" key={capability}>
                <span>0{index + 1}</span>
                <h2>{capability}</h2>
                <span>↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <div className="section-label">04 / VISUAL ARCHIVE</div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <article className="gallery-card" key={`${item.title}-${index}`}>
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <p>
                      {item.title}
                      <em>{item.subtitle}</em>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-top">
            <span>05 / CONTACT</span>
            <span>AHMEDABAD / INDIA</span>
          </div>

          <div className="contact-main">
            <h2>
              HAVE AN IDEA?
              <br />
              <em>LET&apos;S MAKE IT REAL.</em>
            </h2>

            <a href="mailto:yatharthzinzuwadia@gmail.com">
              yatharthzinzuwadia@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">yoKi.</div>

          <div className="footer-links">
            <button onClick={() => scrollTo("home")}>Back to top ↑</button>
            <a
              href="https://github.com/YatharthZinzuwadia"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Yatharth Zinzuwadia</span>
          <span>Built with Next.js / TypeScript / GSAP</span>
        </div>
      </footer>
    </>
  );
}
