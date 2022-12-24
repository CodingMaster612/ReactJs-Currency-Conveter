import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/pink.png'
import PillowImage from '../../assets/images/pillowLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'

export default function SignInPage() {
    return (
        <header style={HeaderStyle}>

            


            

            <div className="wrapper">

                <div>
                    <img className="pillow" src={PillowImage} alt="pillow"></img>
                </div>


                <form action="/login">
                    <p>
                        <div className="user-container">
                            <input type="text" name="first_name" required placeholder=" Email..." />
                        </div>
                    </p>
                    <p>

                        <div className="pass-container">
                            <input type="password" name="password" placeholder="Password..." required />
                        </div>
                        
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Login</button>


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