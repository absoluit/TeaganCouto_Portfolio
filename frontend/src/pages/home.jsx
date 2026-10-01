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
    image: dicegame,
    link: "https://github.com/absoluit/COMP228_DiceGame"
  }, 
  {
    name: "Deck Builder Roguelike",
    description: "A deck builder roguelike game",
    languages: "HTML, CSS, JavaScript",
    image: deckbuilder,
    link: "https://github.com/Rebeljoka/DeckBuilderGame"
  },
  {
    name: "First Project",
    description: "A simple introduction project",
    languages: "HTML",
    image: allabtme,
    link: "https://github.com/absoluit/index.html-assignment"
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
        <div className="featuredProjectsTitleContainer">
          <h2 className="featuredProjectsTitle">Featured Projects</h2>
        </div>

        <div className="featuredProjectsContainer">
          {FeaturesProjects.map((project) => (
            <article className="featuredProjectCard" key={project.name}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className="featuredProjectImage"
                src={project.image}
                alt={project.name}
              />

              <h3 className="featuredProjectName">{project.name}</h3>
              <p className="featuredProjectDescription">
                {project.description}
              </p>
              <p className="featuredProjectLanguages">
                {project.languages}
              </p>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home;