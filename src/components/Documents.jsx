import mscSem1 from "../assets/documents/msc sem1.jpeg";
import semester1 from "../assets/documents/sem1.jpeg";
import semester2 from "../assets/documents/sem2.jpeg";
import semester3 from "../assets/documents/sem3.jpeg";
import semester4 from "../assets/documents/sem4.jpeg";
import semester6 from "../assets/documents/sem6.jpeg";

function Documents() {

  const documents = [
    {
      title: "M.Sc. Semester 1",
      image: mscSem1
    },
    {
      title: "Semester 1",
      image: semester1
    },
    {
      title: "Semester 2",
      image: semester2
    },
    {
      title: "Semester 3",
      image: semester3
    },
    {
      title: "Semester 4",
      image: semester4
    },
    {
      title: "Semester 6",
      image: semester6
    }
  ];

  return (
    <section id="documents" className="section">

      <h2>Academic Documents</h2>

      <p className="section-subtitle">
        My academic records and semester documents
      </p>

      <div className="cards-container">

        {documents.map((document, index) => (

          <div
            className="card document-card"
            key={index}
          >

            <img
              src={document.image}
              alt={document.title}
              className="document-image"
            />

            <h3>
              {document.title}
            </h3>

            <div className="card-buttons">

              <a
                href={document.image}
                target="_blank"
                rel="noreferrer"
              >
                👁 View
              </a>

              <a
                href={document.image}
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

export default Documents;