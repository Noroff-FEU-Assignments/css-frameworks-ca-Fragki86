import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faVimeoV} from "@fortawesome/free-brands-svg-icons";



function Footer() {
    return (
      
      <footer>
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faVimeoV}></FontAwesomeIcon>
        hello@mail.com
        Copyright {new Date().getFullYear()}
      </footer>
)}

export default Footer;