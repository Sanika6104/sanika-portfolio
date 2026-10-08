import dataAnalystCertificate from "../assets/certificates/data analyst.jpeg";
import javaCertificate from "../assets/certificates/java certificate.jpeg";
import jetkingWorkshop from "../assets/certificates/jetking workshop.jpeg";
import telenetworksWorkshop from "../assets/certificates/telenetworks workshop.jpeg";

function Certificates() {

  const certificates = [
    {
      title: "Data Analyst Internship Certificate",
      image: dataAnalystCertificate,
      description: "Data Analyst Internship"
    },
    {
      title: "Programming with Java",
      image: javaCertificate,
      description: "Programming with Java Certification"
    },
    {
      title: "Jetking Workshop",
      image: jetkingWorkshop,
      description: "Workshop Certificate"
    },
    {
      title: "Telenetworks Workshop",
      image: telenetworksWorkshop,
      description: "Workshop Certificate"
    }
  ];

  return (
    <section id="certificates" className="section">

      <h2>Certificates</h2>

      <p className="section-subtitle">
        Certifications and workshops I have completed
      </p>

      <div className="cards-container">

        {certificates.map((certificate, index) => (

          <div className="card certificate-card" key={index}>

            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
            />

            <h3>
              {certificate.title}
            </h3>

            <p>
              {certificate.description}
            </p>

            <div className="card-buttons">

              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
              >
                👁 View
              </a>

              <a
                href={certificate.image}
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

export default Certificates;