import portrait from "../assets/images/portrait.webp";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import gmail from "../assets/images/gmail.png";
import centennial from "../assets/images/centennial.jpg";


function About () {
  return (
    <main className="about">
      <section className="bio">
        <div className="bioContainer">
          <div className="bioText">
            <h2 className="bioTitle">Bite-sized Bio</h2>
            <p className="bioDescription">
              Hello! My name is Teagan Couto and I am a software developer with a passion for creating innovative and user-friendly applications. 
              I have experience in a variety of programming languages and frameworks, 
              and I enjoy learning new technologies to stay up-to-date in the ever-evolving field of software development. 
              In my free time, I enjoy working on personal projects, 
              contributing to open-source projects, and exploring new ideas in the tech world.
            </p>
          </div>

          <div className="socialImages">
            <a href="linkedin"><img src={linkedin} alt="LinkedIn Icon Link"></img></a>
            <a href="github"><img src={github} alt="Github Icon Link"></img></a>
            <a href="email"><img src={gmail} alt="Gmail Icon Link"></img></a>
          </div>
          
          <div className="bioImage">
            <img className="portrait" src={portrait} alt="portrait"></img>
          </div>
        </div>
      </section>

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