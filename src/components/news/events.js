import React from 'react'
import './news.css'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion';
import img1 from '../../images/received_630585981340841-1024x576.jpg'
import axios from 'axios';
import { blueGrey } from '@mui/material/colors';
export default function Events() {
  const [events, setevents] = React.useState([]);
  const show=()=>{
    axios.get("/events/")
    .then(response => {
      const events = response.data[0];
      setevents(events)
      console.log(events)
  
  })};
    const{ref, inView}=useInView({
        threshold:0.2
      });
      const animation=useAnimation();
      useEffect(()=>{
        show()
    if (inView){
      animation.start({
        x:0,
        transition:{
          type:'spring',duration:1,bounce:0.3
        }
      });
    }if (!inView){
      animation.start({x:'100vw'})
    }
      },[inView]);
  return (
    <section ref={ref} className="events"> 
    <h3>Evènements</h3>
        <motion.div 
animate={animation} className="article">
       
            <img className="image" src={"http://localhost:3000/uploadsevent/"+events.Image}/>
<p className="title" style={{top:"-50px"}}><span style={{padding:"20px",textAlign:"center"}}>{events.Titre}</span><br/>  
<span style={{fontSize:"20px",color:"grey",textAlign:"left"}}>{events.Date}</span><br/>{events.Horaire}
<div style={{fontSize:"16px",color:"black"}}>{events.Description}</div>
</p>
            
        </motion.div>
        <motion.div initial={{x:'-100vw'}}
animate={{x:'-10vw',y:'-40px'}}
transition={{delay:1.5,duration:1.5,type:'spring',stiffness:120}}><motion.a   href="/events" className="homebutton" whileHover={{scale:1.1,boxShadow:"0px 0px 8px rgb(255,255,255"}} style={{marginLeft:"150px",marginTop:"60px"}} >Voir plus</motion.a>
   </motion.div>  
    </section>
  )
}