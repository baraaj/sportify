import React from 'react';
import './club.css';
import img1 from '../../images/received_630585981340841-1024x576.jpg';
import img2 from '../../images/Capture.PNG';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {IoLocationSharp} from 'react-icons/io5';
import {BsTelephoneFill} from 'react-icons/bs';
import {IoIosTime} from 'react-icons/io';
import {RiMedalFill}from 'react-icons/ri'
import {BiCategoryAlt} from 'react-icons/bi';
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
    <div className='club'>
    <section>  <h3>{clb.nom_club}</h3>
<div className='container-club'>
    <img src={"http://localhost:3000/"+clb.logo}></img> 
    <p className='details col-md-4 col-sm-4'>
       <ul> <li>{
          clb.activite !== undefined &&clb.activite.map((n)=>{
            return(<div><span><BiCategoryAlt/></span>{n}</div>)
          })
        }</li></ul>
        </p>
  
    <p className='details'>
       <ul> <li><span><IoLocationSharp/></span>{clb.emplacement+" "+clb.region+" "+clb.gouvernement}</li>
        <li><span><BsTelephoneFill/></span>{clb.num_tel!==undefined && clb.num_tel.map(n=>{return(n.toString())})} </li>
        <li><span><IoIosTime/></span>{clb.temps!==undefined &&clb.temps.map(cc=>{return cc.jour.toString()+" "+cc.horaire.toString()})}</li></ul>
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
<section className='palmares col-md-12 col-sm-8'>
<h3>Palmares</h3>
<div className="container-pal">
  <ul> <li><h1> <i><RiMedalFill style={{color:'#B5B5B5',marginRight:'30px'}}/></i>50</h1></li>
   <li><h1> <i><RiMedalFill style={{color:'#F5BF00',marginRight:'30px'}}/></i>50</h1></li>
   <li> <h1> <i><RiMedalFill style={{color:'#AB5200',marginRight:'30px'}}/></i>50</h1></li></ul>
</div></section>
    </div>
  )
}
