import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alina from "../images/alina_calistru_400.jpg";

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
          <a target="_blank" href="https://alina-calistru.netlify.app" className="btn " rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} /> Portfolio
          </a>

          <a className="btn btn-dark" href="https://www.linkedin.com/in/alina-calistru/" target="_blank"  rel="noreferrer" >
            <FontAwesomeIcon icon={["fab", "linkedin"]} /> Linkedin
          </a>
        </div>
      </div>
    </>
  );
}
