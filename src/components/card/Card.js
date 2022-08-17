import React from 'react';
import img1 from "../images/1.jpg";
import './card.css';
const Card = ({club}) => {
     console.log(club)
    return (
        <div>
            <section className="clubs-section">
        <div class="row justify-content-start">
      <div class="col-lg-4 col-md-4 col-sm-8 offset-xs-1">
      
            <div class="card-sl" >
                    <div class="card-image">
                        <img
                            src={img1} />
                    </div>

                 
                    <div class="card-heading">
                      Karaté
                    </div>
                    
                  
                    
                    <a class="card-button"href="/details"> Détails</a>
                 
                </div>
            
          
                
            </div>
            </div>
             
      </section>
        </div>
    );
}

export default Card;
