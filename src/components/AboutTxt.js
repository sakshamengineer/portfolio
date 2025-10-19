import React from 'react'
import {Link} from "react-router-dom";

export default function AboutTxt() {
    return (
        <div className='about-body'>
            <h1>About Me</h1>
            <div className='About-container'>
                <div className='about-para'>
                    <p className='AboutAnimate'>
                    Hello! I'm Saksham Gupta.i'm 19 years old, currently I'm pursuing Btech in Artificial Intelligence and Machine Learning from Dr Akhilesh Das Gupta Institute of professional studies , and I did my schooling from Govt Sarvodaya Bal vidyalaya,krishna nagar , Delhi -51 . I live in Kanti nagar Delhi-51.I am a passionate coder and have explored multiple programming languages and continuously enhance my skills in software development, algorithms, and problem-solving  I constantly explore new technologies and enhance my problem-solving skills. I enjoy working on innovative projects, learning about algorithms, and developing software solution. My interest in coding drives me to build innovative solutions and stay updated with the latest trends in technology. Always eager to learn and take on new challenges, I aim to make a meaningful impact in the tech world.
                    </p>
                    <Link className='Aboutbtn' to="/skills"><button> Skills</button></Link>
                </div>
                <div className='clg-img'>
                    <img className='about-img' src="https://image-static.collegedunia.com/public/college_data/images/appImage/1557467406a3.jpg?h=260&w=360&mode=crop" alt="img1" />
                    <img className='about-img' src="https://www.mycampusreview.com/images/postgallery/1724312629akleshdas.jpg" alt="img2" />
                </div>
            </div>
        </div>
    )
}
