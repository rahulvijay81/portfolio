
import "../pages/style.css";

function Contactpage() {

  return (
    <div className="contactbackground">
      <div>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I'd love to connect and explore exciting opportunities with you! Whether you have interesting projects, creative ideas, or just want to chat, please don't hesitate to reach out. My inbox is open 24/7!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/rahulvijay81/");
          }}
        >
          Connect Now 🚀
        </button>
        <span></span>
     
      </div>
    </div>
  );
}

export default Contactpage;