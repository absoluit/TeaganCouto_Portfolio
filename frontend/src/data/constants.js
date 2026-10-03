import allabtme from "../assets/images/allabtme.png";
import dicegame from "../assets/images/dicegame.png";
import deckbuilder from "../assets/images/deckbuilder.png";
import javaconversion from "../assets/images/javaconversion.png";
import danahopkins from "../assets/images/danahopkins.jpg";
import garyhopkins from "../assets/images/garyhopkins.webp";
import crystalhopkins from "../assets/images/crystalhopkins.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import gmail from "../assets/images/gmail.png";
// import resume from "../assets/files/resume.pdf";
import webdevelopment from "../assets/images/service_webdev.jpg";
import backenddevelopment from "../assets/images/service_backenddev.webp";
import fullstackdevelopment from "../assets/images/service_fullstackdev.jpg";

export const featuredProjects = [
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

export const projects = [
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
  },
  {
    name: "Java Conversion Calculator",
    description: "A simple calculator that converts between different units",
    languages: "Java",
    image: javaconversion,
    link: "https://github.com/absoluit/COMP228-Assignment1-Java"
  }
];

export const reviews = [
  {
    name: "Dana Hopkins",
    text: 
    "Working with Teagan was honestly a great experience." +
    " He took the time to understand exactly what I was looking for and brought the project together better than I expected." +
    " Communication was easy, everything was delivered on time, and the attention to detail really stood out. I'd definitely work with him again.",
    image: danahopkins,
    languages: "Languages: HTML, CSS, JavaScript, React",
  },
  {
    name: "Gary Hopkins",
    text: 
    "I came to Teagan with a pretty rough idea and they turned it into something that actually felt professional and polished." +
    " He was creative, responsive, and really easy to work with throughout the whole process." + 
    " You can tell he genuinely cares about the quality of his work",
    image: garyhopkins,
    languages: "Language: Java",
  },
  {
    name: "Crystal Hopkins",
    text: 
    "Coundn't be happier with the final result. Teagan understood the vision right away and made a ew improvements I had't even thought of myself." +
    " The finished work looks great, and the whole process was smooth from start to finish." +
    " Highly recommend if you want someone who takes their work seriously.",
    image: crystalhopkins,
    languages: "Languages: HTML, CSS, JavaScript, React, SQL, Node.js, Express.js, MongoDB",
  },
];

export const contactInfo = [
		{
			image: gmail,
			title: "Email",
			text: "I will respond within 24-48 hours",
			link: "mailto:teagan.couto@gmail.com",
		},
		{
			image: linkedin,
			title: "LinkedIn",
			text: "Your Next Junior Full-Stack Software Developer",
			link: "https://www.linkedin.com/in/your-next-jfssd-habib/",
		},
		{
			image: github,
			title: "GitHub",
			text: "My Projects and Code Repositories",
			link: "https://github.com/absoluit",
		}
	];

  export const services = [
    {
      name: "Web Development",
      description: "I can create responsive and visually appealing websites using HTML, CSS, and JavaScript. I can also work with popular frameworks like React to build dynamic web applications.",
      image: webdevelopment,
    },
    {
      name: "Backend Development",
      description: "I can develop server-side applications using Node.js and Express. I can also work with databases like MongoDB and SQL to store and retrieve data.",
      image: backenddevelopment,
    },
    {
      name: "Full-Stack Development",
      description: "I can build complete web applications that include both frontend and backend components. I can also deploy applications to cloud platforms like AWS and Heroku.",
      image: fullstackdevelopment,
    }
  ];