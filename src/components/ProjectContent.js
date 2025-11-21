import React from 'react'
import carbonzero from '../Project_images/carbonzero.jpg'
import FaceDetector from '../Project_images/FaceDetector.png'
import Snaptoon from '../Project_images/snaptoon.png'
import VisionFx from '../Project_images/VisionFX.png'
import FoodSaver from '../Project_images/FoodSaver.jpg'
import Aimouse from '../Project_images/AIMouse.png'
import Aipainter from '../Project_images/AiPainter.png'
import GestureVolume from '../Project_images/GestureControl.png'

export default function ProjectContent() {
  function Projectcard(props){
    return(
      <>
      <div className='card1'>
        <div className='cardimg' style={{height:'38%',marginBottom:'10px'}}>
          <img style={{margin:'0px',height:'100%',width:'100%',borderRadius:'30px 30px 0px 0px'}} src= {props.source} alt="" />
        </div>
        <div className="innercard" style={{textAlign:'center'}}>
          <h2>{props.name}</h2>
          <p style={{margin:'15px'}}>{props.descr}</p>
          <a href={props.weblink} target='_blank' rel="noopener noreferrer"><button>View Website</button></a><br/>
          <a href={props.codelink} target='_blank' rel="noopener noreferrer"><button>View Code</button></a>
        </div>
      </div>
      </>
    )
  }
  function Projectcard1(props){
    return(
      <>
      <div className='card1'>
        <div className='cardimg' style={{height:'38%',marginBottom:'10px'}}>
          <img style={{margin:'0px',height:'100%',width:'100%',borderRadius:'30px 30px 0px 0px'}} src= {props.source} alt="" />
        </div>
        <div className="innercard" style={{textAlign:'center'}}>
          <h2>{props.name}</h2>
          <p style={{margin:'15px'}}>{props.descr}</p>
          <a href={props.codelink} target='_blank' rel="noopener noreferrer"><button>View Code</button></a>
        </div>
      </div>
      </>
    )
  }
  return (
    <div style={{padding:'3vw',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1 style={{textAlign:'center',marginBottom:'90px'}}>My Projects</h1>
      <div className="cards">
        <Projectcard name = 'Carbon-Zero' descr = 'A Sustainablity Based Website Which Calculated Carbon Footprints And Also Tries To Reduce it' source = {carbonzero} weblink = "https://carbonxero.netlify.app/" codelink = "https://github.com/sakshamengineer/Carbon-zero" />
        <Projectcard name = 'FaceDetector' descr = 'This is a Streamlit web app for real-time face detection using computer vision to detect faces' source = {FaceDetector} weblink = "https://facedetectorr.streamlit.app/?" codelink = "https://github.com/sakshamengineer/FaceDetector" />
        <Projectcard name = 'Snaptoon' descr = 'This is a Streamlit web app that transforms photos into cartoon-style or anime-style images using AI.' source = {Snaptoon} weblink = "https://snaptoon.streamlit.app/?" codelink = "https://github.com/sakshamengineer/cartoonifyimage" />
        <Projectcard name = 'VisionFX' descr = 'Visonfx is Streamlit web app that applies real-time image processing effects to video or images, likely offering visual filters or transformations.' source = {VisionFx} weblink = "https://visionfx.streamlit.app/?" codelink = "https://github.com/sakshamengineer/VisonFx" />
        <Projectcard name = 'FoodSaver' descr = 'FoodSaver connects you with local restaurants selling surplus food at discounted prices — helping you save money while reducing food waste.' source = {FoodSaver} weblink = "https://sakshamengineer.github.io/FoodSaver/" codelink = "https://github.com/sakshamengineer/FoodSaver" />
        <Projectcard1 name = 'AI Virtual Mouse' descr = 'AI Virtual Mouse lets you control your computer mouse using hand gestures detected through your webcam, using OpenCV, MediaPipe, and AutoPy.' source = {Aimouse} codelink = "https://github.com/sakshamengineer/FoodSaver" />
        <Projectcard1 name = 'AI Virtual Painter' descr = 'AI Virtual Painter lets you draw on the screen using just your hand gestures detected through your webcam, using OpenCV, MediaPipe, and NumPy.' source = {Aipainter} codelink = "https://github.com/sakshamengineer/AI-Virtual-Painter" />
        <Projectcard1 name = 'Gesture Volume Control' descr = 'Gesture Volume Control lets you adjust your computer audio volume using hand gestures detected from your webcam, leveraging OpenCV and MediaPipe.' source = {GestureVolume} codelink = "https://github.com/sakshamengineer/GestureVolumeControl" />
      </div>
    </div>
  )
}