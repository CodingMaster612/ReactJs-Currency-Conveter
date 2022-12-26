import React from 'react'
import BackgroundImage from '../../assets/images/pink.png'
import PillowImage from '../../assets/images/pillowLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faKey } from '@fortawesome/free-solid-svg-icons';

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
       
     
        <header style={ HeaderStyle }>
        
        
        
        
        
        <div className="wrapper">
            <div>
            <img className="pillow" src={PillowImage} alt="pillow"></img>
            </div>
            <div className="sign-up">
           
            </div>
           
            
            <form action="/home">
            <div className="user-container">
                <p>
                <FontAwesomeIcon icon={faEnvelope} className="icon-envelope"/>
                    <input type="text" name="first_name" placeholder="  Email..." required />
                    
                </p>
               
                </div>
                <p>
                {/* <div className="pass-container">
                    
                <FontAwesomeIcon icon={faKey} className="icon-pass"/>
                    <input type="password" name="password"placeholder="  Password..."  requiredc />
                    </div> */}
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Submit</button>
                </p>
               
            </form>
            
        </div>
        </header>
             
                
           
        
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
   
}