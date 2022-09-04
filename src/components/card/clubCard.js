import React from 'react';
import { Link } from 'react-router-dom';
 
const ClubCard = ({club}) => {
    return (
        <div className='cards'>
           <section className="clubs-section">
        <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-8 offset-xs-1">
                <div className="card-sl">
                    <div className="card-image">
                        <img
                          src={"http://localhost:3000/"+club.logo} />
                    </div>

                 
                    <div className="card-heading">
                     {club.nom_club}
                    </div>
                    
                  
                    <Link to={"/club/"+club._id} state={{club:club}}>
                    <a className="card-button"href=""> Détails</a>
                    </Link>
                </div>
            </div>
           </div>
      </section> 
        </div>
    );
}

export default ClubCard;
