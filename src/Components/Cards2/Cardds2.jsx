import React from 'react';
import "./Cards2.css";
import Curio from "./images/CURIOPROMPT.jpg";
import Pixel from "./images/PIXEL FORGE.jpg";
import shortFilm from "./images/SHORT FILM.jpg";
import Meme from "./images/MEME MASTER.jpg"
import PhotoGraphy from "./images/PHOTOGRAPHY.jpg"

function Cards2() {
    
  
    const cardsData = [
        {
            id: 1,
            imageSrc:Curio,
            title: ' Curio Prompt',
            text: ' Let your imagination soar by weaving captivating stories inspired by thought-provoking prompts. Explore the uncharted realms of creativity with your words.'
          },
          {
            id: 2,
            imageSrc: Pixel,
            title: ' Pixel Forge',
            text: 'Unleash your creative spirit and design visually captivating posters that convey powerful messages. Transform your ideas into stunning visuals.'
          },
          {
            id: 3,
            imageSrc: shortFilm,
            title: ' Short Film',
            text: ' Condense the magic of storytelling into short films. Craft narratives that leave a lasting impact and take your audience on a cinematic journey. '
          },
          {
            id: 4,
            imageSrc: Meme,
            title: ' Meme Master',
            text: 'Turn your humor and wit into a creative outlet. Craft memorable memes that entertain, provoke thought, and, most importantly, make people laugh.'
          },
          {
            id: 5,
            imageSrc: PhotoGraphy,
            title: ' PhotoGraphy',
            text: ' Capture the essence of the world through your lens. From the ordinary to the extraordinary, tell compelling stories through your photographs.'
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
    <>
    <h1 className='card-title'>Non-Technical Events</h1>
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
                  < a href="https://tinyurl.com/Cynosure2k23-Reg" ><button className='card-button'>Register</button></a>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Cards2;