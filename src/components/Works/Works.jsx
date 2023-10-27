import React, { useContext } from "react";
import "./Works.css";
import C from "../../img/c.png";
import Java from "../../img/javaim.png";
import Js from "../../img/js.jpeg";
import Python from "../../img/python.png";
import Reacts from "../../img/react.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Having knowledge in 
          </span>
          <span> these Technologies</span>
          {/* <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane> */}
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img style={{borderRadius:"50%",height:"200px",width:"200px"}}src={C} alt="" />
          </div>
          <div className="w-secCircle">
            <img  style={{borderRadius:"50%",height:"200px",width:"200px"}}src={Js} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{borderRadius:"50%",height:"200px",width:"200px"}} src={Reacts} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img  style={{borderRadius:"30%",height:"200px",width:"200px"}}src={Java} alt="" />
          </div>
          <div className="w-secCircle">
            <img  style={{borderRadius:"50%",height:"200px",width:"200px"}}src={Python} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
