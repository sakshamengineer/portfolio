import React from 'react'
import myimg from './myimg.png'
export default function ContactCard() {
  return (
    <div className='CardContent'>
      <h1 className='cardh1'>Contact Me</h1>
      <div className="card">

        <img src= {myimg} alt="Myimg" style={{animationDelay: '0.5s',height:'200px'}} />
        <h2>Saksham Gupta</h2>
        <h3>Frontend Developer</h3>
        <p>Phone: <a href="tel:+919911912563">+91-9911912563</a></p>
        <p>Email : <a href='mailto:sakshamkgupta01@gmail.com'>sakshamkgupta01@gmail.com</a></p>
      </div>
    </div>
  )
}
