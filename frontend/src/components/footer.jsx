function Footer() {
  return (
    <footer>
      {/* A simple divider separates the page content from the footer links. */}
      <hr className="footerLine"></hr>
      {/* Keep the same navigation available at the bottom of every page. */}
      <h6 className="footer">&copy;&nbsp;&nbsp;Copyright Teagan Couto | 301543678 | COMP229 | Fall 2026 | 
        <a href="/" rel="noopener noreferrer">&nbsp;Home</a> | 
        <a href="/about" rel="noopener noreferrer">&nbsp;About</a> | 
        <a href="/projects" rel="noopener noreferrer">&nbsp;Projects</a> | 
        <a href="/services" rel="noopener noreferrer">&nbsp;Services</a> | 
        <a href="/reviews" rel="noopener noreferrer">&nbsp;Reviews</a> | 
        <a href="/contact" rel="noopener noreferrer">&nbsp;Contact</a> 
      </h6>
    </footer>
  )
}

export default Footer;