import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/pink2.png'

export default function Converter() {
    return (
        <header style={HeaderStyle}>

            <div className="white-box">
                <div class="tab">
                    <button class="tablinks" onclick="openCity(event, 'London')">London</button>
                    <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
                    <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
                </div>

                <div id="London" class="tabcontent">
                    <h3>London</h3>
                    <p>London is the capital city of England.</p>
                </div>

                <div id="Paris" class="tabcontent">
                    <h3>Paris</h3>
                    <p>Paris is the capital of France.</p>
                </div>

                <div id="Tokyo" class="tabcontent">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>
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
