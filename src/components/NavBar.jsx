import React, { useState, } from "react";
import "./navstyles.css";
import { FaHome, FaPodcast, FaHeadphones, FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [active,setActive] = useState("home");
    const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="logo">amazon <span>music</span></div>
      <ul className="nav-links">
        <li><FaHome className="icon" /> <span className={(active =="home")?"active":""} onClick={()=>{setActive("home");navigate('/');}}>HOME</span></li>
        <li><FaPodcast className="icon" /> <span className={(active =="podcast")?"active":""} onClick={()=>{
            setActive("podcast");
            navigate('/podcast');
        }}>PODCASTS</span></li>
        <li><FaHeadphones className="icon" /> <span className={(active =="music")?"active":""} onClick={()=>{setActive("music");navigate('/music');}}>MUSIC</span></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>
      <div className="profile-icon">
        <FaUser />
      </div>
    </nav>
  );
};

export default NavBar;
