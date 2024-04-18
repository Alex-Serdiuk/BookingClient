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
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="logo">ComfortHub</span>
          </Link>
            {user ? (
              <>
                <span onClick={()=>setOpenMenu(!openMenu)}>
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
                <FontAwesomeIcon icon={faSuitcase} className="headerIcon"/>
                <span className="optionText">Bookings</span>
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