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
                title="Ta - Allocation System"
                description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                ghLink="https://rahul-dashboard-pannel.netlify.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Landing Page"
                description="Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks."
                ghLink="https://olx-clone-rahul.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Netflix-Clone"
                description="This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
                ghLink="https://react-netflixweb-clone.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="WatchAi Website"
                description="WatchAi is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Quizzio"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="Weather App"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;