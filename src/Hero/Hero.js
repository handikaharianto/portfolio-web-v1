import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="section-hero">
      <div className="hero section-center">
        <span data-aos="fade-up" data-aos-delay="1000">
          Hi👋, I am
        </span>
        <h2 className="hero__name" data-aos="fade-up" data-aos-delay="900">
          Handika Harianto Ew Jong.
        </h2>
        <p className="hero__desc" data-aos="fade-up" data-aos-delay="1000">
          A Computer Science student
          <span> @ Asia Pacific University of Technology and Innovation. </span>
        </p>
        <div className="socials" data-aos="fade-up" data-aos-delay="1100">
          <a
            className="socials__link"
            href="https://github.com/handikaharianto"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            className="socials__link"
            href="https://www.linkedin.com/in/handika-harianto-ew-jong-9b72931a6/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="socials__link"
            href="mailto: handikaharianto01@gmail.com"
          >
            <IoMdMail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
