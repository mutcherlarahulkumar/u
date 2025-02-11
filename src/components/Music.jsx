
import React from "react";
import "./styles.css";

const edSheeran = [
  { title: "Backstage Pass", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/4731f943-5683-4832-b200-145fe1dc6172/4731f943-5683-4832-b200-145fe1dc6172--1619766509._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Rediscover Ed Sheeran", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/64fe877a-04e0-41ac-851d-0b3fb97b3409/64fe877a-04e0-41ac-851d-0b3fb97b3409--2031138878._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Ed Sheeran Love Songs", img: "https://placehold.co/150" },
  { title: "Written By Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Chill with Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Backstage Pass", img: "https://placehold.co/150" },
  { title: "Rediscover Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Ed Sheeran Love Songs", img: "https://placehold.co/150" },
  { title: "Written By Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Chill with Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Backstage Pass", img: "https://placehold.co/150" },
  { title: "Rediscover Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Ed Sheeran Love Songs", img: "https://placehold.co/150" },
  { title: "Written By Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Chill with Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Backstage Pass", img: "https://placehold.co/150" },
  { title: "Rediscover Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Ed Sheeran Love Songs", img: "https://placehold.co/150" },
  { title: "Written By Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Chill with Ed Sheeran", img: "https://placehold.co/150" },
  { title: "Thandel with Ed Sheeran", img: "https://placehold.co/150" },
];

const Card = ({ title, img, setSong }) => (
    <div className="card" onClick={() => {
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


export default function Music({setSong}){
    return (
        <div>
            <div className="container">
            <HorizontalScroll title="Spotlight: Ed Sheeran" items={edSheeran} setSong={setSong} />
            </div>  
        </div>
      );
}