import React from 'react';
import img1 from "../../images/1.jpg";
import './card.css';
import {Link} from 'react-router-dom';
const Card = ({act}) => {
     
      
    return (
        <div>
            <section className="clubs-section">
        <div className="row justify-content-start">
      <div className="col-lg-4 col-md-4 col-sm-8 offset-xs-1">
      
            <div className="card-sl" >
                 {/*   <div class="card-image">
                        <img
                            src={img1} />
    </div>*/}

                 
                    <div className="card-heading">
                   {act}
                    </div>
                    
                  
                    <Link to="/details" state={{act:act}}>
                    <a className="card-button"> Détails</a>
                    </Link>
                 
                </div>
            
          
                
            </div>
            </div>
             
      </section>
        </div>
    );
}

export default Card;
