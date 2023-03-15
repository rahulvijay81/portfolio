import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'>Although I’m not currently looking for any new opportunities, my inbox <br /> is always open. Whether you have a question or just want to say hi, I’ll try <br /> my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+918156811884");
          }}
        >Say Hello</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>rahulvijay</span></p>
      </Container>
    </div>
  )
}

export default Contactpage