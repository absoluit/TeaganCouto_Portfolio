import { projects } from "../data/constants.js";

function Projects() {
  return (
    <main className="projects">
      <section className="projectsSection">
        <div className="projectsTitleContainer">
          <h2 className="projectsTitle">Projects</h2>
        </div>

        <div className="projectsContainer">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="projectImage"
                  src={project.image}
                  alt={project.name}
                />
                <h3 className="projectName">{project.name}</h3>
                <p className="projectDescription">{project.description}</p>
                <p className="projectLanguages">{project.languages}</p>
              </a>
            </article>
          ))}
        </div>
        <h4 className="projectEndMessage">
          Unfortunately this is the end of the list! But check in soon and there
          is sure to be more projects of better quality as I learn and create
          more!
        </h4>
      </section>
    </main>
  );
}

export default Projects;