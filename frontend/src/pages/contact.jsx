import { useState } from "react";

function Contact() {
  // Keep the form fields together so they can be cleared after submission.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Update only the field that the visitor is currently editing.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // This demo submission shows feedback, then resets the form after a short delay.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="contact">
      {/* The contact form gives visitors a direct way to send a message. */}
      <section className="emailSection">
        <div className="emailTitleContainer">
          <h2 className="emailTitle">Email</h2>
        </div>

        <div className="emailContainer">
          {submitted && (
            <div className="successMessage">
              <p>Thank you for your message! I will get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contactForm">
            <div className="formName">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formEmail">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formSubject">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formMessage">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="formSubmitButton">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
