import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jammy from '../../assets/jammy.png';
import uploads from '../../assets/upload1.png'; 
import { useNavigate } from "react-router-dom"; 


const Sidebar = ({ sidebar }) => {
    const navigate = useNavigate(); 
    const navigateToUploads = () => {
        
        navigate("/my-upload");
      };

  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home} alt="" /> <p>Home</p>
        </div>

        <div className="side-link">
          <img src={game_icon} alt="" /> <p>Gaming</p>
        </div>

        <div className="side-link">
          <img src={automobiles} alt="" /> <p>Automobiles</p>
        </div>

        <div className="side-link">
          <img src={sports} alt="" /> <p>Sports</p>
        </div>

        <div className="side-link">
          <img src={entertainment} alt="" /> <p>Entertainment</p>
        </div>

        <div className="side-link">
          <img src={tech} alt="" /> <p>Technology</p>
        </div>

        <div className="side-link">
          <img src={music} alt="" /> <p>Music</p>
        </div>

        <div className="side-link">
          <img src={blogs} alt="" /> <p>Blogs</p>
        </div>

        <div className="side-link">
          <img src={news} alt="" /> <p>News</p>
        </div>
        <hr />

        {/* New section for My Uploads */}
        <div className="side-link" onClick={() => navigateToUploads()}>
  <img src={uploads} alt="Uploads" /> <p>My Uploads</p>
</div>

      </div>

      <div className="subscribed-list">
        <h3>Subscribe</h3>
        <div className="side-link">
          <img src={jammy} alt="" /> <p>Jaikishan Classes</p>
        </div>

        <div className="side-link">
          <img src={jammy} alt="" /> <p>Nikhil Classes</p>
        </div>

        <div className="side-link">
          <img src={jammy} alt="" /> <p>Jamaluddin Classes</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
