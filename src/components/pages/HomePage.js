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

import BackgroundImage from '../../assets/images/red.png'
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
               <div className="bitcoin">


                  <FontAwesomeIcon icon={faBitcoin} />
               </div>



            </nav>

            
            
         </div>
         
      <div className="container">
         <form action="" className="search-bar">
            <input type="text" placeholder="search" name ="q" />
         <button type="submit"><img src=""/></button>
         
         </form>
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