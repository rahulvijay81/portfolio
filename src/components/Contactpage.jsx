import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for internship opportunities as a developer
          . <br />Always open to queries and eager to assist . Whether
          <br />  you have more questions or simply want to greet,  <br />
          We'll definitely connect !
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/rohan-raj-313835231/");
          }}
        >
          Say Hello
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>rahulvijay</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;