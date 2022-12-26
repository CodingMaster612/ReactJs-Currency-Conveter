import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/pink2.png'
import Tabs from '../../components/pages/Tab.js';

export default function Converter() {
    return (
        <header style={HeaderStyle}>

            <div className="white-box">
                <Tabs />


            </div>




            <div class="topnav">
                <a class="active" href="#home">Send Money</a>
                <a href="">Converter</a>
                <a href="">Tools</a>
                <a href="">Resources</a>
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
