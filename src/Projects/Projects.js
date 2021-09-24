import projects from "./projectsContent";
import "./Projects.css";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className="section-projects">
      <div className="projects section-center">
        <h4 data-aos="fade-up">Featured Projects.</h4>
        <div className="projects__content">
          {projects.map((project) => {
            return <ProjectItem key={project.id} {...project} />;
          })}
        </div>
        <div className="projects__show-more">
          <a
            href="https://github.com/handikaharianto"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
          >
            show more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
