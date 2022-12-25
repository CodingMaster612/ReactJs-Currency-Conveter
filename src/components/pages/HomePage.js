// import { React } from "react";
import React from "react";

import { Link } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHouse, faUser, faBars, faWallet, faChartSimple, faDownload } from "@fortawesome/free-solid-svg-icons";
import '../../App.css'
import User from '../../assets/images/user-regular.svg'
import Bitcoin from '../../assets/images/bitcoin.svg'
import ReactSearchBox from "react-search-box";
import sleep from '../../assets/images/sleep.png'
import sleepPG from '../../assets/images/sleepPG.png'
import BackgroundImage from '../../assets/images/PB.png'
import BackgroundImage2 from '../../assets/images/PB.png'

import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
export default function HomePage() {














   return (
      <header style={HeaderStyle}>

         <div className="wrapper-v2">
            <nav className="navbar">

               <ul>
                  <li><a href="">Login</a></li>
                  <li><a href="">Wallet</a></li>





               </ul>




            </nav>

            <div className="pillow-img">
               <img src={sleep} />
            </div>

            <div className="sleepPG">
         <img src="https://swall.teahub.io/photos/small/234-2344330_linux-penguin-black-background.png" />

         </div>

         </div>
         <div>
            <div className="container">
               <form action="" className="search-bar">
                  <input type="text" placeholder=" Search..." name="q" />
                  <button type="submit"><img src={Bitcoin} /></button>

               </form>
            </div>
         </div>
         
      


      </header >
   )
}
const HeaderStyle = {
   width: "100%",
   height: "100vh",
   backgroundColor: "white",
   background: `url(${BackgroundImage})`,
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover"

}