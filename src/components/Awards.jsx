import awardSanika from "../assets/awards/award sanika.jpg";
import mscAward from "../assets/awards/msc award.jpeg";

function Awards() {

  const awards = [
    {
      title: "Award",
      image: awardSanika,
      description: "Achievement Award"
    },
    {
      title: "M.Sc. Award",
      image: mscAward,
      description: "Academic Achievement"
    }
  ];

  return (
    <section id="awards" className="section">

      <h2>Awards</h2>

      <p className="section-subtitle">
        Awards and achievements
      </p>

      <div className="cards-container">

        {awards.map((award, index) => (

          <div
            className="card award-card"
            key={index}
          >

            <img
              src={award.image}
              alt={award.title}
              className="award-image"
            />

            <h3>
              {award.title}
            </h3>

            <p>
              {award.description}
            </p>

            <div className="card-buttons">

              <a
                href={award.image}
                target="_blank"
                rel="noreferrer"
              >
                👁 View
              </a>

              <a
                href={award.image}
                download
              >
                ↓ Download
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Awards;