import React from 'react';
import CodeOlympoics from "./images/CODE OLYMPICS.jpg";
import WebDesign from "./images/WEB DESIGN.jpg";
import Tc from "./images/TECHNICAL CONNECTION.jpg";
import paperPresentation from "./images/PAPER PRESENTATION.jpg";
import TechTalk from "./images/TECHTALK.jpg";

function Cards() {
    
  
    const cardsData = [
        {
            id: 1,
            imageSrc:CodeOlympoics,
            title: ' Code Olympics',
            text:  `=>Code Golf: Trim your code down to its most efficient form in a battle of concise programming.`
            + `=> Debugging Dash: Race against the clock to identify and fix bugs in complex code.`
            + `=> Code Relay: Collaborate with teammates to tackle coding challenges, passing the baton to achieve a common goal.`         },
          {
            id: 2,
            imageSrc: WebDesign,
            title: ' Web Design',
            text: 'Blend artistry and technology to create web experiences that captivate and engage users. Showcase your talent in crafting visually stunning and functional websites.'
          },
          {
            id: 3,
            imageSrc: Tc,
            title: ' Technical Connection',
            text: 'Decode images and make connections between various visual cues to uncover hidden words or concepts. Sharpen your analytical and problem-solving skills in this intriguing visual puzzle challenge.'
          },
          {
            id: 3,
            imageSrc: paperPresentation,
            title: ' Paper Presentation',
            text: 'Elevate your research game and present groundbreaking ideas that could shape the future of technology. Share your knowledge and insights with a global audience.'
          },
          {
            id: 5,
            imageSrc: TechTalk,
            title: ' Tech Talk',
            text: ' Engage in fierce yet friendly debates on hot-button tech topics. Argue your stance, defend your viewpoint, and hone your persuasive skills in the world of technology discourse.'
          },

    ];
    const pdfFileUrl = 'https://drive.google.com/file/d/11ntn5GKhS52FwkShOkCWbOOjsjJU3zqv/view?usp=drive_link'; 


    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = pdfFileUrl;
      link.target = '_blank'; 
      link.rel = 'noopener noreferrer'; 
      link.download = 'example.pdf'; 
  
      link.click();
    };

  return (
<div id='event'>
<h1 className='card-title'>Technical Events</h1>
<div className='cardcontainer'>
      {cardsData.map((card) => (
        <div className="flip-card" key={card.id}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="card-img-top" src={card.imageSrc} alt="CardImage cap" />
            </div>
            <div className="flip-card-back">
            <div className="card-body">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                  <button onClick={handleDownload} className='card-button but2'>Details</button>
                  <a a href="https://tinyurl.com/Cynosure2k23-Reg" ><button className='card-button'>Register</button></a>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Cards;