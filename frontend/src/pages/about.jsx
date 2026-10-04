import portrait from "../assets/images/portrait.jpeg";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import gmail from "../assets/images/gmail.png";
import resume from "../assets/images/resume.png";
import centennial from "../assets/images/centennial.jpg";


function About () {
  return (
    <main className="about">
      {/* The About page introduces Teagan Couto (me) and provides background information. */}
      <div className="aboutTitle">
        <h2>About Me</h2>
      </div>
      {/* Personal background and links to social profiles and resume. */}
      <section className="bio">
        <div className="bioContainer">
          <div className="bioText">
            <h2 className="bioTitle">Bite-sized Bio</h2>
            <p className="bioDescription">
              Hey! My name is Teagan Couto and I'm a software/full-stack developer with a passion for creating innovative and user-friendly applications. 
              I have experience in a variety of programming languages and frameworks, 
              and I enjoy learning new technologies to stay up-to-date in the ever-evolving field of software development. 
              In my free time, I enjoy working on personal projects, 
              contributing to open-source projects, and exploring new ideas in the tech world.
            </p>
          </div>

          <div className="socialImages">
            <a
              href="https://www.linkedin.com/in/teagan-couto-4a461a207/?isSelfProfile=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn profile" />
            </a>
            
            <a
              href="https://github.com/absoluit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub profile" />
            </a>

            <a href="mailto:teagan.couto@gmail.com">
              <img src={gmail} alt="Email Teagan" />
            </a>

            <a 
              href="https://drive.google.com/file/d/1D8dkCmh9hb_Y6xKFqalhK-aCfXRe7eOU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={resume} alt="Resume" />
            </a>
          </div>
          
          <div className="bioImage">
            <img className="portrait" src={portrait} alt="portrait"></img>
          </div>
        </div>
      </section>


      {/* Skills are grouped by the type of work or technology involved. */}
      <section className="skills">
        <div className="skillsContainer">
          <div className="skillsText">
            <h2 className="skillsTitle">Skills</h2>
            <p className="skillsDescription">
              I enjoy building clean, efficient, and user-focused digital experiences across the full software development lifecycle. 
              My work combines problem-solving, collaboration, and a strong foundation in both frontend and backend development.
            </p>

            <div className="skillsCategories">
              <div className="skillsCategory">
                <h3>Languages</h3>
                <ul className="skillsList">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C#</li>
                  <li>SQL</li>
                </ul>
              </div>

              <div className="skillsCategory">
                <h3>Frameworks</h3>
                <ul className="skillsList">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </div>

              <div className="skillsCategory">
                <h3>Version Control Systems</h3>
                <ul className="skillsList">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>GitLab</li>
                </ul>
              </div>

              <div className="skillsCategory">
                <h3>Miscellanious</h3>
                <ul className="skillsList">
                  <li>Database Design</li>
                  <li>UI/UX Design</li>
                  <li>Debugging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Education details round out the background section. */}
      <section className="education">
        <div className="educationContainer">
          <div className="educationText">
            <h2 className="educationTitle">Education</h2>
            <p className="educationDescription">
              I am currently pursuing a degree in Software Engineering at Centennial College, 
              where I have gained a strong foundation in programming, algorithms, and software engineering principles. 
              I have also had the opportunity to work on various projects and collaborate with other students, 
              which has helped me develop my teamwork and communication skills.
            </p>
          </div>

          <div className="educationImage">
            <img className="centennialLogo" src={centennial} alt="Centennial College Logo"></img>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;