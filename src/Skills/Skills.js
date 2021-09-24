import skills from "./skillsContent";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="section-skills">
      <div className="skills section-center">
        <h4 data-aos="fade-up">Tech Used.</h4>
        <div className="skills__content">
          {skills.map((skill, index) => {
            const { id, name, img } = skill;
            return (
              <article
                key={id}
                className="skills__item"
                data-aos="zoom-out"
                data-aos-delay={index * 200}
              >
                <img className="skills__img" src={img} alt={name} />
                <h5 className="skills__name">{name}</h5>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
