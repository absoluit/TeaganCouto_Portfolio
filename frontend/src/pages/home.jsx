import { useState } from "react";
import { featuredProjects } from "../data/constants.js";

function Home() {
  return (
    <main className="home">
      <section className="introduction">
        <div className="intro_tit">
          <div className="title_text">
            <h2 className="introTitle">Hello Weary Traveller</h2>
            <p className="introText">
              I see you've stumbled upon my portfolio. I'm a passionate and
              dedicated software developer with a love for creating innovative
              and efficient solutions. Throughout this site, you will find a few
              of my <a href="/projects">projects</a> and some information{" "}
              <a href="about">about me</a>. I hope you enjoy your time here and
              feel free to <a href="/contact">reach out</a> to me if you have
              any questions or comments!
            </p>
          </div>
        </div>
      </section>

      <section className="featuredProjects">
        <div className="featuredProjectsTitleContainer">
          <h2 className="featuredProjectsTitle">Featured Projects</h2>
        </div>

        <div className="featuredProjectsContainer">
          {featuredProjects.map((project) => (
            <div className="featuredProjectCard" key={project.name}>
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
            </div>
          ))}
        </div>

        <div className="viewAllProjectsButtonContainer">
          <a href="/projects" className="viewAllProjectsButton">
            View All Projects
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
