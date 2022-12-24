import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/pink.png'
import PillowImage from '../../assets/images/pillowLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faKey } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter  } from '@fortawesome/free-brands-svg-icons';
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
                            <FontAwesomeIcon icon={faEnvelope} className="icon-envelope"/>
                            <input type="text" name="user" required placeholder="  Email..." />
                        </div>

                    </p>
                    <p>

                        <div className="pass-container">
                        <FontAwesomeIcon icon={faKey} className="icon-pass"/>
                            <input type="password" name="password" className="input-field" placeholder="  Password..." required />
                           
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