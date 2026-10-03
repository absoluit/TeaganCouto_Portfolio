import { useState } from "react";
import wave from "../assets/images/wave.png";
import { featuredProjects } from "../data/constants.js";

function Home() {
  return (
    <main className="home">
      <section className="introduction">
        <div className="intro_tit">
          <div className="title_text">
            <h2 className="introTitle">Hey!!!</h2>
            <p className="introText">
              What's going on! Before going any further, let me first thank you
              for checking me out! Throughout this site, you will find a few of
              my <a href="/projects">projects</a> and some information{" "}
              <a href="about">about me</a>. I hope you enjoy your time here and
              feel free to <a href="/contact">reach out</a> to me if you have
              any questions or comments!
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
          {featuredProjects.map((project) => (
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
                <p className="featuredProjectLanguages">{project.languages}</p>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
