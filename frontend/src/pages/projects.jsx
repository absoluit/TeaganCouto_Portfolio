import { projects } from "../data/constants.js";

function Projects() {
  return (
    <main className="projects">
      {/* Display every project from the shared project data. */}
      <section className="projectsSection">
        <div className="projectsTitleContainer">
          <h2 className="projectsTitle">Projects</h2>
        </div>

        <div className="projectsContainer">
          {projects.map((project) => (
            <div className="projectCard" key={project.name}>
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
            </div>
          ))}
        </div>
      </section>

      {/* A final call to action gives visitors an easy way to get in touch. */}
      <section className="reachOut">
        <div className="reachOutTitleContainer">
          <h2 className="reachOutTitle">Like what you see?</h2>
        </div>
        <p className="reachOutMessage">
          Unfortunately this is the end of the list! 
          But feel free to <a href="/contact">reach out</a> and we can create something together!
        </p>
      </section>

    </main>
  );
}

export default Projects;