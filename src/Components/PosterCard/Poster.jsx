import React from 'react'
import PosterImage from "./images/PosterMain.png";
import "./Poster.css"

export default function PosterMain() {
  return (
    <div className='PosterMain' id='post'>
        <img src={PosterImage} alt=""  className='Poster-img'/>
    </div>
  )
}
