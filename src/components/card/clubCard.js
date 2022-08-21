import React from 'react';
import { Link } from 'react-router-dom';
const ClubCard = ({club}) => {
    
    return (
        <div className='cards'>
           <section className="clubs-section">
        <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-8 offset-xs-1">
                <div class="card-sl">
                    <div class="card-image">
                        <img
                          src={"http://localhost:3000/"+club.logo} />
                    </div>

                 
                    <div class="card-heading">
                     {club.nom_club}
                    </div>
                    
                  
                    <Link to="/club" state={{club:club}}>
                    <a class="card-button"href=""> Détails</a>
                    </Link>
                </div>
            </div>
           </div>
      </section> 
        </div>
    );
}

export default ClubCard;
