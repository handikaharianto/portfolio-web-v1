import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectItem = ({
  id,
  title,
  image,
  desc,
  techList,
  githubLink,
  webLink,
}) => {
  return (
    <article key={id} className="project-item" data-aos="fade-up">
      <div className="project-item__img">
        <img src={image} alt={title} />
      </div>
      <div className="project-item__info">
        <a
          className="project-item__title"
          href={webLink}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
        <p className="project-item__desc">{desc}</p>
        <ul className="project-item__tech-list">
          {techList.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ul>
        <div className="project-item__links">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href={webLink} target="_blank" rel="noreferrer">
            <HiOutlineExternalLink />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
