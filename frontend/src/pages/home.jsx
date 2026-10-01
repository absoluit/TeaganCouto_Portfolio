import { useState   } from "react";
import allabtme from "../assets/images/allabtme.png";
import dicegame from "../assets/images/dicegame.png";
import deckbuilder from "../assets/images/deckbuilder.png";
import wave from "../assets/images/wave.png";

const FeaturesProjects = [
  {
    name: "Random Dice Game",
    description: "A simple luck based dice game",
    languages: "Java",
    image: dicegame
  }, 
  {
    name: "Deck Builder Roguelike",
    description: "A deck builder roguelike game",
    languages: "HTML, CSS, JavaScript",
    image: deckbuilder
  },
  {
    name: "First Project",
    description: "A simple introduction project",
    languages: "HTML",
    image: allabtme
  }
];


function Home () {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="home">
      <section className="introduction">
        <div className = "intro_tit">
          <div className="title_text">
          <h2 className="introTitle">Hey!!!</h2>
          <p className="introText">
            What's going on! Before going any further, let me first thank you for checking me out!
            Throughout this site, you will find a few of my <a href="/projects">projects</a> and some information <a href="about">about me</a>. I hope you enjoy your time here and feel free to <a href="/contact">reach out</a> to me if you have any questions or comments!
          </p>
          </div>
          <img className="introImage" src={wave} alt="wave" />
        </div>
      </section>

      <section className="featuredProjects">
        <h2 className="featuredProjectsTitle">Featured Projects</h2>
        
        <div className="featuredProjectsContainer">
          <div className="featuredProjectsList">
            {FeaturesProjects.map((project) => (
              <button 
                className="featuredProjectOption"
                key={project.name}
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </button>
            ))}
          </div>

          {selectedProject && (
            <div className="featuredProjectDetails">
              <div className="featuredProjectInfo">
              <h3 className="featuredProjectName">{selectedProject.name}</h3>
              <p className="featuredProjectDescription">{selectedProject.description}</p>
              <p className="featuredProjectLanguages">{selectedProject.languages}</p>
              </div>
              
              <img 
                className="featuredProjectImage" 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Home;