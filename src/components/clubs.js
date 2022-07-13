import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import "./clubs.css";

import { FaSearch } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion';
import img1 from '../images/received_630585981340841-1024x576.jpg'

const Clubs = () => {
    const{ref, inView}=useInView({
        threshold:0.2
      });
      const animation=useAnimation();
      useEffect(()=>{
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
      },[inView]);
  return (
    <div>
      <Navbar />
      <div classNameName="clubs col-md-9 col-md-push-1 ">
        <h3 className="tx text-center">Les Clubs</h3>
        <div className="clb container">
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <div className="input-group">
                <div className="input-group-btn search-panel">
                  <select className="search btn btn-default dropdown-toggle"
                    data-toggle="dropdown">
                    <option>Region</option>
                    <option>Ariana</option>
                    <option>Béja</option>
                    <option>Ben Arous</option>
                    <option>Bizerte</option>
                    <option>Gabès</option>
                    <option>Gafsa</option>
                    <option>Jendouba</option>
                    <option>Kairouan</option>
                    <option>Kasserine</option>
                    <option>Bizerte</option>
                    <option>Kébili</option>
                    <option>Le Kef</option>
                    <option>Mahdia</option>
                    <option>La Manouba</option>
                    <option>Médenine</option>
                    <option>Monastir</option>
                    <option>Nabeul</option>
                    <option>Sfax</option>
                    <option>Sidi Bouzid</option>
                    <option>Siliana</option>
                    <option>Sousse</option>
                    <option>Tataouine</option>
                    <option>Tozeur</option>
                    <option>Tunis</option>
                    <option>Zaghouan</option>
                  
                  </select>
                </div>
                <div className="search input-group-btn search-panel">
                  <select className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown">
                    <option>Categorie</option>
                    <option>En Solo</option>
                    <option>Categorie</option>
                    <option>Type</option>
                  </select>
                </div>
                  
              </div>
               
   
  <div>
  <form class="input-group mb-3">
  <input type="text" class="text form-control" placeholder="Rechercher" aria-label="Saisir email" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn" type="button"> <span><FaSearch /></span></button>
  </div>
</form>

</div>
            </div>
          </div>
          
        </div>
         
      </div>
      
      <Footer />
    </div>
  );
};

export default Clubs;
