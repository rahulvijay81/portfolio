import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import "../pages/style.css";


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> I m a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <div className="skillsContainer">
                            <div className="skill--scroll">
                                <Marquee
                                    gradient={false}
                                    speed={100}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    direction="right"
                                >
                                    {skillsData.map((skill, id) => (
                                        <div className="skill--box" key={id} >
                                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Aboutpage