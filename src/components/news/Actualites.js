import React from 'react'
import './news.css';
import img1 from '../../images/53c54.jpg';
import img2 from '../../images/adel_sellimi_1657030641.jpg'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion'
import axios from 'axios';
export default function Actualites() {
  const [news1, setnews1] = React.useState([]);
  const [news2, setnews2] = React.useState([]);
  const show=()=>{
    axios.get("/news/")
    .then(response => {
      const news1 = response.data[0];
      setnews1(news1)
   
      const news2 = response.data[1];
      setnews2(news2)
      
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
  animation.start({x:'-100vw'})
}
  }
  ,[inView]);
  return (
    <section ref={ref} className='news col-md-12 col-xs-10 col-xs-offset-1'>
<h3>Actualités</h3>
<motion.div 
animate={animation}  
className='article'>
  
<img src={"http://localhost:3000/uploadsnews/"+news1.Image} className="image col-md-5 col-xs-3 col-xs-offset-1"/>
<p className='title'  style={{padding:"20px",top:"-40px",textAlign:"center"}}><span>{news1.Titre}</span>


<div style={{fontSize:"16px"}}> {news1.Description}</div></p>

</motion.div>
<motion.div 
animate={animation} 
 className='article2'>
<img src={"http://localhost:3000/uploadsnews/"+news2.Image} className="image2"/>
<p className='title2'style={{padding:"20px",top:"-10px",textAlign:"center"}}><span>{news2.Titre}</span> 
<div style={{fontSize:"16px"}}> {news2.Description}</div>
</p>

</motion.div>
<motion.div initial={{x:'-100vw'}}
animate={{x:'-10vw',y:'-40px'}}
transition={{delay:1.5,duration:1.5,type:'spring',stiffness:120}}><motion.a   href="/events" className="homebutton" whileHover={{scale:1.1,boxShadow:"0px 0px 8px rgb(255,255,255"}} style={{marginLeft:"150px",marginTop:"60px"}} >Voir plus</motion.a>
   </motion.div> 
    </section>
  )
}