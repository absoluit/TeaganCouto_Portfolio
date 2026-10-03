import { services } from "../data/constants.js";

function Services() {
  return (
    <main className="services">
      <section className="servicesSection">
        <div className="servicesTitleContainer">
          <h2 className="servicesTitle">Services</h2>
        </div>

        <div className="servicesContainer">
          {services.map((service) => (
            <div className="serviceCard" key={service.name}>
              <div className="serviceImageContainer">
                <img
                  className="serviceImage"
                  src={service.image}
                  alt={service.name}
                />
              </div>

              <div className="serviceTextContainer">
                <h3 className="serviceName">{service.name}</h3>
                  <p className="serviceDescription">{service.description}</p>
                </div>
              </div>
          ))}
        </div>
      </section>

      <section className="contactLink">
        <div className="contactLinkTitleContainer">
          <h2 className="contactLinkTitle">Let's Work Together!</h2>
        </div>
        <p className="contactLinkText">
          If you're interested in working with me or have any questions, feel
          free to <a href="/contact">reach out</a> to me. I'd love to hear from
          you!
        </p>
      </section>
    </main>
  );
}

export default Services;