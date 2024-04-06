import { useContext, useState } from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faArrowUpFromBracket, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const[openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="logo">MyBooking</span>
          </Link>
            {user ? (
              <>
                <span onClick={()=>setOpenMenu(!openMenu)}>
                  {user.userName}
                </span>
                {openMenu && (<div className="menuOptions">
                <div className="menuOptionItem">
                <FontAwesomeIcon icon={faUser} className="headerIcon"/>
                <span className="optionText">Profile</span>
                </div>
                <div className="menuOptionItem">
                <FontAwesomeIcon icon={faSuitcase} className="headerIcon"/>
                <span className="optionText">Bookings</span>
                </div>
                <div className="menuOptionItem">
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