import React from 'react'
import BackgroundImage from '../../assets/images/pink.png'
import PillowImage from '../../assets/images/pillowLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'

export default function SignUpPage() {

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
                
                    <input type="text" name="first_name" placeholder="Username..." required />
                    
                </p>
                <p>
                   
                    <input type="email" name="email" placeholder="Email.." required />
                    
                </p>
                </div>
                <p>
                <div className="pass-container">
                    <input type="password" name="password"placeholder="Password..."  requiredc />
                    </div>
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Register</button>
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
    backgroundSize: "cover"
}