import React from 'react';
import Projectxpo from "./images/PROJECT EXPO.jpg"

function ProjectExpo() {
    const cardsData = [
        {
            id: 1,
            imageSrc:Projectxpo,
            title: 'Project Expo',
            text: 'Explore innovation and ingenuity through a diverse showcase of cutting-edge projects and ideas from talented individuals and teams.'
          }

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
<>
<h1 className='card-title'> Elite Event</h1>
<div className='cardcontainer'>
      {cardsData.map((card) => (
        <div className="flip-card" key={card.id}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {/* <h2>Project Expo</h2> */}
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
    </>
  );
}

export default ProjectExpo;