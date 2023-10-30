import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import adminpanel from '/src/assets/images/adminpanel.jpg'
import olximage from "/src/assets/images/olximage.jpg";
import netfliximage from "/src/assets/images/netflix.jpg";
import gridlinesbuilders from "/src/assets/images/Gridlinesbuilders.jpg";
import charlespizza from "/src/assets/images/pizza.jpg";
import todolist from "/src/assets/images/todolist.jpg";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={adminpanel}
                isBlog={false}
                title="  Landing Page "
                description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                ghLink="https://github.com/rrhan32/basic_home_page_using_HTML_CSS"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Landing Page"
                description="Spearheaded a cutting-edge TA Allocation Project utilizing a technology stack encompassing JavaScript, MongoDB, algorithms, Node.js, and Express. This innovative system optimized the allocation of Teaching Assistants to courses, streamlining the assignment process by automating it."            
                ghLink="https://github.com/rrhan32/TA_allocation"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Quizzio (Ongoing)"
                description="Crafted an engaging Quiz App using React.js, offering users an interactive platform to test their knowledge across various subjects. With a user-friendly interface, the app presents thought-provoking questions and tracks performance in real-time , providing immediate feedback and opportunities for learning and improvement."
                ghLink="https://github.com/rrhan32/QUIZZIO"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="WatchAi Website"
                description="Designed and developed a dynamic static website using HTML, CSS, JavaScript, and Bootstrap. This project showcases a blend of web technologies and Bootstrap's responsive framework to create an interactive and appealing design ."
                ghLink="https://github.com/rrhan32/WeSecure"
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Quizzio"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col> */}

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="Weather App"
                description="Developed a user-friendly Weather App that provides real-time location-based weather updates. Users simply enter a location, and the app delivers accurate and up-to-the-minute weather information."
                ghLink="https://github.com/rrhan32/Weather_app"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;