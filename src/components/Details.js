import React from 'react';
import "./clubs.css";

const Details = () => {
    return (
        <div className='clubs'>
           <h3 className="tx">Karaté</h3>
         
         <div className="row">
           <div className="col-xs-8 col-xs-offset-2">
             <div className="input-group">
               <div className="input-group-btn search-panel">
                 <select id="mystuff" className="search btn btn-default dropdown-toggle"
                   data-toggle="dropdown">
                   <option value="1">Governorat</option>
                   <option value="2">Ariana</option>
                   <option value="3">Béja</option>
                   <option value="4">Ben Arous</option>
                   <option value="5">Bizerte</option>
                   <option value="6">Gabès</option>
                   <option value="7">Gafsa</option>
                   <option value="8">Jendouba</option>
                   <option value="9">Kairouan</option>
                   <option value="10">Kasserine</option>
                   <option value="11">Kébili</option>
                   <option value="12">Le Kef</option>
                   <option value="13">Mahdia</option>
                   <option value="14">La Manouba</option>
                   <option value="15">Médenine</option>
                   <option value="16">Monastir</option>
                   <option value="17">Nabeul</option>
                   <option value="18">Sfax</option>
                   <option value="19">Sidi Bouzid</option>
                   <option value="20">Siliana</option>
                   <option value="21">Sousse</option>
                   <option value="22">Tataouine</option>
                   <option value="23">Tozeur</option>
                   <option value="24">Tunis</option>
                   <option value="25">Zaghouan</option>
                 
                 </select>
               </div>
               <div className="search input-group-btn search-panel">
                 <select className="btn btn-default dropdown-toggle"
                   data-toggle="dropdown">
                   <option>Région</option>
                   <option>Karaté</option>
                   <option>Judo</option>
                   <option> taekwondo</option>
                   <option>kung fu</option>
                   <option>Gymnastique</option>
                   <option>kickboxing</option>
                 </select>
               </div>
               <div className="search input-group-btn search-panel">
                 <select className="btn btn-default dropdown-toggle"
                   data-toggle="dropdown">
                   <option>Catégorie</option>
                   <option>Karaté</option>
                   <option>Judo</option>
                   <option> taekwondo</option>
                   <option>kung fu</option>
                   <option>Gymnastique</option>
                   <option>kickboxing</option>
                 </select>
               </div>
               </div>
               </div>
               </div>
        </div>
        
    );
}

export default Details;
