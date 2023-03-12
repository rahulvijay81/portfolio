import React from 'react'
import '../Aboutpage/Aboutpage.css'
import { Container, Row, Col } from 'react-bootstrap'

function Skills() {
  return (
    <Container>
      <div className="skilltitle">
        <Row>
          <h2 className='text-center'>My Skills</h2>
          <Col className='skillbox' md={7}>
          </Col>
          <col md={5}></col>
        </Row>
      </div>
    </Container>
  )
}

export default Skills