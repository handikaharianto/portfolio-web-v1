import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollPosition = e.currentTarget.pageYOffset;

      if (scrollPosition > 0) {
        setIsFixedHeader(true);
      } else {
        setIsFixedHeader(false);
      }
    });
  }, []);

  return (
    <section
      className={"section-header " + (isFixedHeader ? "fixed-header" : "")}
    >
      <header className="header section-center">
        <a href="/">
          <h1 className="header__logo">han</h1>
        </a>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <span className="nav-toggle__line"></span>
          <span className="nav-toggle__line"></span>
          <span className="nav-toggle__line"></span>
        </button>
        <ul className={"navbar " + (isNavbarOpen ? "navbar--active" : "")}>
          <li className="navbar__link" data-aos="fade-down-left">
            <a href="#hero">home</a>
          </li>
          <li
            className="navbar__link"
            data-aos="fade-down-left"
            data-aos-delay="100"
          >
            <a href="#skills">skills</a>
          </li>
          <li
            className="navbar__link"
            data-aos="fade-down-left"
            data-aos-delay="200"
          >
            <a href="#projects">projects</a>
          </li>
          <li className="navbar__link navbar__resume">
            <a href="./resume.html" target="_blank" rel="noreferrer">
              resume
            </a>
          </li>
        </ul>
        <div className="resume">
          <a
            className="resume__link"
            href="./resume.html"
            target="_blank"
            rel="noreferrer"
          >
            resume
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
