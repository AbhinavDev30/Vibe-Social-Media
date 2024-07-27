import React from "react";
import "./NavBar.css";
import searchIcon from "./search.png";
import notification from "./bell.png";
import messageIcon from "./message.png";
import profileImage from "./Profile.png";
function NavBar() {
  return (
    <div className="mainNavbar">
      <div className="LogoContainer">
        <p>Social</p>
      </div>
      <div>
        <div className="searchInputContainer">
          <img src={`${searchIcon}`} className="searchIcon" alt="" />
          <input
            type="text"
            className="searchInput"
            placeholder="search your friends"
          />
        </div>
      </div>
      <div className="IconsContainer">
        <img src={`${notification}`} className="Icons" alt="" />
        <img src={`${messageIcon}`} className="Icons" alt="" />
        <Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${profileImage}`} className="ProfileImage" alt="" />
            <p style={{ marginLeft: "5px" }}>Abhinav</p>
          </div>
        </Link>
        <div
          style={{ marginRight: "30px", marginLeft: "20px", cursor: "pointer" }}
          //  onClick={handleLogout}
        >
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
