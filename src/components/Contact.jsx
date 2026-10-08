function Contact() {
  return (
    <section id="contact" className="section">

      <h2>Contact Me</h2>

      <p className="section-subtitle">
        Let's connect and work with data
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <span>✉</span>

          <div>
            <small>Email</small>
            <p>
              sanikadhanawade6104@gmail.com
            </p>
          </div>
        </div>

        <div className="contact-card">
          <span>☎</span>

          <div>
            <small>Phone</small>
            <p>
              +91 8591245764
            </p>
          </div>
        </div>

        <div className="contact-card">
          <span>⌖</span>

          <div>
            <small>Location</small>
            <p>
              Navi Mumbai, India
            </p>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/sanika-dhanawade"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <span>in</span>

          <div>
            <small>LinkedIn</small>
            <p>
              Sanika Dhanawade
            </p>
          </div>

        </a>

        <a
          href="https://github.com/Sanika6104"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <span>GH</span>

          <div>
            <small>GitHub</small>
            <p>
              Sanika6104
            </p>
          </div>

        </a>

      </div>

    </section>
  );
}

export default Contact;