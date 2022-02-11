import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alina from "../images/alina.jpg";

export default function About() {
  return (
    <>
      <div className="section profile">
        <img src={alina} alt="Alina Calistru" />
      </div>

      <div className="section info">
        <h1>Alina Calistru</h1>

        <h3>Frontend Developer</h3>

        <div className="container-btn">
          <a target="_blank" href="http://alina.acerdream.com" className="btn ">
            <FontAwesomeIcon icon={["fab", "github"]} /> Portfolio
          </a>

          <a
            className="btn btn-dark"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/alina-calistru/",
                "_blank"
              )
            }
          >
            {" "}
            <FontAwesomeIcon icon={["fab", "linkedin"]} /> Linkedin
          </a>
        </div>
      </div>
    </>
  );
}
