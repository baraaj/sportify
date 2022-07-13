import React from 'react';
import './footer.css';
import {FaRegCopyright} from 'react-icons/fa';
import {RiFacebookCircleFill} from 'react-icons/ri';
import {AiFillInstagram,AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/ai';
const Footer = () => {
    return (
        
            <div className="foot">
            <div className='footer'> 
            <div className='contacts'>
            <div className=''>
               
            </div>
            </div>

            <div className='social'>
            <a className="social-items" href="#"><RiFacebookCircleFill/></a>
            <a className="social-items" href="#"><AiFillInstagram /></a>
            <a className="social-items" href="#"><AiFillLinkedin/></a>
            <a className="social-items" href="#"><AiFillTwitterCircle/></a>
            </div> 
            <div className='copyright'>
            <span><FaRegCopyright/> Copyrights 2022</span>
            </div>
            </div>
            </div>
        
    );
}

export default Footer;
