import React from 'react';
import './club.css';
import img1 from '../../images/received_630585981340841-1024x576.jpg';
import img2 from '../../images/Capture.PNG';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {IoLocationSharp} from 'react-icons/io5';
import {BsTelephoneFill} from 'react-icons/bs';
import {IoIosTime} from 'react-icons/io';
import { useLocation, useParams } from 'react-router-dom';
export default function Club(props) {
 // const location = useLocation();
 //const club = location.state;
  const[clb,setClub]=useState([]);
let {id}=useParams();
console.log(props);
useEffect(()=>{
const getClubById=async ()=>{
  try {
    const res=await axios.get(`/clubs/${id}`
    
    );
   setClub(res.data.club);
    
    
  } catch (err) {
    console.log(err);
  }
 };
 getClubById();

},);
  return (
    <div class='club'>
    <section>  <h3>{clb.nom_club}</h3>
<div class='container-club'>
    <img src={"http://localhost:3000/"+clb.logo}></img> 
  
    <p className='details'>
       <ul> <li><span><IoLocationSharp/></span>{clb.emplacement+" "+clb.region+" "+clb.gouvernement}</li>
        <li><span><BsTelephoneFill/></span> </li>
        <li><span><IoIosTime/></span>{clb.temps &&clb.temps.map(cc=>{return cc.jour.toString()+""+cc.horaire.toString()})}</li></ul>
    </p>  {console.log(clb.temps)}
    <p className='description'>
   <span><IoLocationSharp/></span> 
    Lorem ipsum dolor sit 
amet, consectetur adipiscing
 elit. In fringilla ante mauris
, et pulvinar eros blandit sed. Fusce con
gue efficitur placerat. Donec mattis.
<img src={img2}/>
   </p>
  
</div> </section>
<section>
<h3>Palmares</h3>
<div className="container-pal">
   <h1> </h1>
</div></section>
    </div>
    
  )
}
