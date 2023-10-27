import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "../../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer" style={{ width: "90%",height:"200px",backgroundColor:"#F0F8FF",position:"absolute",top:"650px",marginBottom:"100px",margin:"auto",borderRadius:"50px"}}>
      <div className="f-content">
        <span>livithasrij06@gmail.com</span>
        <div className="f-icons">
          
          <Insta color="black" size={"3rem"} />
          <Facebook color="black" size={"3rem"} />
          <a href="https://github.com/Livithasri"><Gitub color="black" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
