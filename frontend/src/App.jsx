import {BrowserRouter, Routes, Route } from "react-router-dom";
import Format from "./components/format.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Services from "./pages/services.jsx";
import Reviews from "./pages/reviews.jsx";
import Contact from "./pages/contact.jsx";
import NotFound from "./pages/notFound.jsx";
import './css/style.css';

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Format />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
