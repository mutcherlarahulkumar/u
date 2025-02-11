

import React from "react";
import "./styles.css";

const podcasts = [
  { title: "Finshots Daily", img: "https://placehold.co/150" },
  { title: "Mahabharat", img: "https://placehold.co/150" },
  { title: "Teen Taal", img: "https://placehold.co/150" },
  { title: "Global News Podcast", img: "https://placehold.co/150" },
  { title: "The Stories of Mahabharata", img: "https://placehold.co/150" },
  { title: "WTF is with Nikhil", img: "https://placehold.co/150" },
  { title: "Finshots Daily", img: "https://placehold.co/150" },
  { title: "Mahabharat", img: "https://placehold.co/150" },
  { title: "Teen Taal", img: "https://placehold.co/150" },
  { title: "Global News Podcast", img: "https://placehold.co/150" },
  { title: "The Stories of Mahabharata", img: "https://placehold.co/150" },
  { title: "WTF is with Nikhil", img: "https://placehold.co/150" },
  { title: "Finshots Daily", img: "https://placehold.co/150" },
  { title: "Mahabharat", img: "https://placehold.co/150" },
  { title: "Teen Taal", img: "https://placehold.co/150" },
  { title: "Global News Podcast", img: "https://placehold.co/150" },
  { title: "The Stories of Mahabharata", img: "https://placehold.co/150" },
  { title: "WTF is with Nikhil", img: "https://placehold.co/150" },
];


const Card = ({ title, img, setSong }) => (
  <div className="card" onClick={()=>{
    setSong(title);
  }}>
    <img src={img} alt={title} className="card-image" />
    <div className="hover-overlay">
      <div className="play-button">&gt;</div>
    </div>
    <p className="card-title">{title}</p>
  </div>
);

const HorizontalScroll = ({ title, items, setSong }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="scroll-container">
      {items.map((item, index) => (
        <Card setSong={setSong} key={index} {...item} />
      ))}
    </div>
  </div>
);



export default function Podcast({setSong}){
    return (
        <div>
            <div className="container">
            <HorizontalScroll title="Podcasts in the Spotlight" items={podcasts} setSong={setSong} />
            </div>  
        </div>
      );
}