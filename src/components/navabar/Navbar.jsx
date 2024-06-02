import { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBed,
  faCar,
  faDharmachakra,
  faPlane,
  faSuitcase,
  faTaxi,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import logo from "./logo.png";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext); // Додаємо setUser для оновлення користувача
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link
          to="/"
          className="logoLink"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <img src={logo} alt="ComfortHub" />
        </Link>

        <div className="login-register">
          {user ? (
            <>
              <span className="userName" onClick={() => setOpenMenu(!openMenu)}>
                {user.userName}
              </span>
              {openMenu && (
                <div className="menuOptions">
                  <div className="menuOptionItem">
                    <Link
                      to="/profile"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon={faUser} className="headerIcon" />
                      <span className="optionText">Profile</span>
                    </Link>
                  </div>
                  <div className="menuOptionItem">
                    <Link
                      to="/bookings"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon
                        icon={faSuitcase}
                        className="headerIcon"
                      />
                      <span className="optionText">Bookings</span>
                    </Link>
                  </div>
                  <div className="menuOptionItem" onClick={handleClick}>
                    <FontAwesomeIcon
                      icon={faArrowRightFromBracket}
                      className="headerIcon"
                    />
                    <span className="optionText">Sign out</span>
                  </div>
                </div>
              )}
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

        
        <div className="horizontal-scroll">
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faDharmachakra} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
