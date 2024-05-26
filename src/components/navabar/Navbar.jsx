import { useContext, useEffect, useState } from "react";
import "./navbar.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Navbar = () => {
  
  const { user, dispatch } = useContext(AuthContext); // Додаємо setUser для оновлення користувача
  const[openMenu, setOpenMenu] = useState(false);
  
  const navigate = useNavigate();

  const handleClick = async (e) => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    delete axios.defaults.headers.common['Authorization']
    navigate("/");
  }

  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" className="logoLink" style={{color:"inherit", textDecoration:"none"}}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/31c3ed2a7c25e45782dd51732c9a71686760e250f80716565f7e05429ae20224?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&" alt="ComfortHub logo" className="logo-img" />
            <span className="logo">omfortHub</span>
          </Link>
            {user ? (
              <>
                <span className="userName" onClick={()=>setOpenMenu(!openMenu)}>
                  {user.userName}
                </span>
                {openMenu && (<div className="menuOptions">
                <div className="menuOptionItem">
                <Link to="/profile" style={{color:"inherit", textDecoration:"none"}}>
                  <FontAwesomeIcon icon={faUser} className="headerIcon"/>
                  <span className="optionText">Profile</span>
                </Link>
                </div>
                <div className="menuOptionItem">
                <Link to="/bookings" style={{color:"inherit", textDecoration:"none"}}>
                  <FontAwesomeIcon icon={faSuitcase} className="headerIcon"/>
                  <span className="optionText">Bookings</span>
                </Link>
                </div>
                <div className="menuOptionItem" onClick={handleClick}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="headerIcon"/>
                <span className="optionText">Sign out</span>
                </div>
                </div>)}
              </>
            ) : (
            <div className="navItems">
                <Link to="/register">
                  <button className="navButton">Register</button>
                </Link>
                <Link to="/login">
                  <button className="navButton">Login</button>
                </Link>
                
            </div>
            )}
        </div>
    </div>
  )
}

export default Navbar