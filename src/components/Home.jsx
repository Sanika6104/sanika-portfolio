import profileImage from "../assets/profile.png";

function Home() {

  // Share portfolio
  const sharePortfolio = async () => {
    const portfolioUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Sanika Vishal Dhanawade - Portfolio",
          text: "Check out my portfolio!",
          url: portfolioUrl
        });
      } catch (error) {
        console.log("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(portfolioUrl);
      alert("Portfolio link copied!");
    }
  };

  return (
    <section id="home" className="home">

      <div className="home-content">

        {/* Profile Photo */}
        <img
          src={profileImage}
          alt="Sanika Vishal Dhanawade"
          className="profile-image"
        />

        {/* Name */}
        <h1>
          SANIKA VISHAL DHANAWADE
        </h1>

        {/* Role */}
        <span className="role">
          Data Analyst
        </span>

        {/* Tagline */}
        <p className="tagline">
          Turning Data into Meaningful Insights
        </p>

        {/* Buttons */}
        <div className="home-buttons">

          <a
            href="#projects"
            className="primary-button"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="secondary-button"
          >
            Contact Me
          </a>

          <button
            className="secondary-button"
            onClick={sharePortfolio}
          >
            Share Portfolio
          </button>

        </div>

        {/* Social Media */}
        <div className="social-icons">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sanika6104"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.17c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

        </div>

        {/* Statistics */}
        <div className="stats">

          <div>
            <strong>3</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>15+</strong>
            <span>Skills</span>
          </div>

          <div>
            <strong>4</strong>
            <span>Certificates</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;