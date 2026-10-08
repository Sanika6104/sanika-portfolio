function Projects() {
  const projects = [
    {
      title: "Medical Shop Management System",
      duration: "Dec 2024 – Feb 2025",
      technology: "C# • SQL Server",
      description:
        "Developed a Medical Shop Management System to manage inventory, billing and customer information.",
      points: [
        "Inventory tracking with expiry monitoring",
        "Low-stock alerts and real-time stock updates",
        "Billing and sales management",
        "Role-based login system"
      ]
    },

    {
      title: "Sales Data Analysis & Dashboard",
      duration: "Mar 2025 – May 2025",
      technology: "SQL • Excel • Power BI",
      description:
        "Analyzed sales data to identify business trends and created an interactive dashboard for reporting and decision-making.",
      points: [
        "Cleaned and transformed sales data",
        "Created interactive Power BI dashboard",
        "Analyzed revenue and product performance",
        "Generated useful business insights"
      ]
    },

    {
      title: "Quiz Application",
      duration: "Android Mini Project",
      technology: "Android Studio • Kotlin • XML",
      description:
        "Developed an interactive Android quiz application where users can answer multiple-choice questions and navigate through the quiz.",
      points: [
        "Multiple-choice quiz questions",
        "Answer validation before moving to the next question",
        "Previous and next question navigation",
        "Questions are shuffled when the quiz is restarted"
      ]
    }
  ];

  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <p className="section-subtitle">
        Projects I have developed and worked on
      </p>

      <div className="cards-container">

        {projects.map((project, index) => (
          <div className="card project-card" key={index}>

            <h3>{project.title}</h3>

            <small>{project.duration}</small>

            <p className="project-tech">
              {project.technology}
            </p>

            <p>
              {project.description}
            </p>

            <ul className="project-points">
              {project.points.map((point, pointIndex) => (
                <li key={pointIndex}>
                  {point}
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;