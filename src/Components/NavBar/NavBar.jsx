
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "./images/logo.png";
import logoName from "./images/logoName3.png"
import { motion } from "framer-motion";

function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };



  return (
    <header className="custom-nav">
      <div className="nav-left">
            <motion.div className="logo" initial={{scale:0.2}} animate={{scale:1,rotate:360}} transition={{duration:2}}><img className='logoImg' src={logo} alt="" /></motion.div>
            <div className="logo"><img src={logoName} alt="" className="logoName" /></div>
      </div>
      <div className={`nav-center ${isMobileNavOpen ? "show" : ""}`}>
        <a className="nav-atag" href="#home" onClick={closeMobileNav}>HOME</a>
        <a className="nav-atag" href="#event" onClick={closeMobileNav}>EVENT</a>
        <a className="nav-atag" href="#post" onClick={closeMobileNav}>POSTER</a>
        <a className="nav-atag" href="#contact" onClick={closeMobileNav}>CONTACT</a>
      </div>
      <div className="nav-right">
        <motion.div
        whileHover={{ scale: 1.1}} 
        transition={{ duration: 0.2 }}  
        >
        < a href="https://tinyurl.com/Cynosure2k23-Reg" ><button className="nav-button" onClick={closeMobileNav}>Register</button></a>
        </motion.div>
        <button className="nav-button mobile-menu" onClick={toggleMobileNav}>
          {isMobileNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default NavBar;
