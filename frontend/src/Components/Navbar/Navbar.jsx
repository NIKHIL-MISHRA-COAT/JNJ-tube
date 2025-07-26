import React from 'react'; 
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
// import logo2 from '../../assets/JNJTUBE.png';
import logo2 from '../../assets/jnjtube.png'
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload1.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jammy.png';

const Navbar = ({ setSidebar }) => {
  // Check if JWT exists in localStorage
  const token = localStorage.getItem('jwtToken');
  const isLoggedIn = Boolean(token);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); // Clear token on logout
    window.location.reload(); // Refresh to update navbar
  };

  const handleLogoClick = () => {
    window.location.href = '/'; // Redirect to homepage
  };
  const handleUpload=()=>{
    window.location.href='/upload';
  }

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu_icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt="menu icon"
        />
        <img
          className="logo2"
          src={logo2}
          alt="logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer', width: '70px', height: 'auto', marginLeft : '70px' }} // Add cursor pointer to indicate it's clickable
        />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="search icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        {isLoggedIn ? (
          <>
            <img src={upload_icon} alt="upload icon" onClick={handleUpload}/>
            <img src={notification_icon} alt="notification icon" />
            <img src={profile_icon} className="user-icon" alt="profile icon" />
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => (window.location.href = '/login')}
            className="login-btn"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
