import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import './Home.css'
import TextAnimation from './Text-animation'
import Actualites from './Actualites'
import Newslettres from './Newslettres'
import Events from './events';
import {motion} from 'framer-motion';
export default function Home() {
  return (
    <motion.div class='body' initial={{opacity:0}}
    animate={{opacity:1}} transition={{duration:.4,stiffness:120}}>
    <Navbar/>
    <section className='Slide'>
      <p>Trouvez votre <span><TextAnimation/></span> préféré plus proche de vous</p>
<motion.div initial={{x:'-100vw'}}
animate={{x:0}}
transition={{delay:1.5,duration:1.5,type:'spring',stiffness:120}}><motion.button whileHover={{scale:1.1,boxShadow:"0px 0px 8px rgb(255,255,255"}} style={{marginLeft:"150px",marginTop:"60px"}} class="btn">Découvrir</motion.button>
   </motion.div> </section>
    <Actualites/>
    
    <Events/>
    <Newslettres/>
    <Footer/>

    </motion.div>
  )
}