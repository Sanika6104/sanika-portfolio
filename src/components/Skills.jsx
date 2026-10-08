function Skills() {

  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "R"]
    },
    {
      title: "Analytics Tools",
      skills: ["Excel", "Power BI", "Tableau"]
    },
    {
      title: "Python Libraries",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
      ]
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQL Server"
      ]
    },
    {
      title: "Analytics",
      skills: [
        "Data Analysis",
        "Data Cleaning",
        "KPI Reporting",
        "Data Visualization",
        "Reporting Automation",
        "Business Insights"
      ]
    }
  ];

  return (
    <section id="skills" className="section">

      <h2>Skills</h2>

      <div className="skill-groups">

        {skillGroups.map((group, index) => (

          <div className="skill-group" key={index}>

            <h3>{group.title}</h3>

            <div className="skills-container">

              {group.skills.map((skill, skillIndex) => (

                <span
                  className="skill-tag"
                  key={skillIndex}
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;