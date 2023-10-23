import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import logoName from "../NavBar/images/logoName3.png"
import logo from "../NavBar/images/logo.png"
import CountdownTimer from './CountDownTimer';

function HeroSection() {
  const titleVariants = {
    initial: { opacity: 0, y: -1000 },
    animate: { opacity: 1, y: 0, transition: { duration: 2,type:'spring'  } },
  };

  return (
    <div className="hero" id='home'>
      <div className="hero-content">
        <motion.div className="logo" 
        // initial="initial" animate="animate" variants={logoVariants}
        // whileHover={{rotate:360}}
        // transition={{duration:2}}
        initial={{scale:0.5}}
        animate={{scale:1}}
        transition={{duration:5}}
        >
          <img src={logo} alt="Logo" className="logo-img" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={titleVariants}>
          <img src={logoName} alt="Logo" className="logo-name" />
        </motion.div>
        <motion.h1 className="title" initial="initial" animate="animate" variants={titleVariants}>
          <span className='one-let'>P</span>INNACLE <br/><span className='one-let'>O</span>F <br/><span className='one-let'>E</span>XUBERANCE{' '}<br/>
          <span className="title-animation"><span className='one-letter'>E</span>XPLORE  <span className='one-letter'>T</span>HE <br/><span className='one-letter'>UN</span>EXPLORED.</span>
        </motion.h1>
        <div className="countdown">
          <CountdownTimer />
        </div>
        < a href="https://tinyurl.com/Cynosure2k23-Reg" ><button className="register-button">Register Now</button></a>
      </div>
    </div>
  );
}

export default HeroSection;
