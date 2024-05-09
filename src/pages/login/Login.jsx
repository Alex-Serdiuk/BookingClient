import { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
      });

      const { loading, error, dispatch } = useContext(AuthContext);

      const navigate = useNavigate();

      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };

      const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/Account/Login", credentials);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          navigate("/")
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };

      const isFormValid = Object.values(credentials).every((value) => value !== "");
      
  return (
    // <div className="login">
    //   <div className="lContainer">
    //     <input
    //       type="text"
    //       placeholder="username"
    //       id="username"
    //       value={credentials.username}
    //       onChange={handleChange}
    //       className="lInput"
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       id="password"
    //       onChange={handleChange}
    //       value={credentials.password}
    //       className="lInput"
    //     />
    //     <button 
    //     disabled={loading || !isFormValid} 
    //     onClick={handleClick} 
    //     className="lButton">
    //       Login
    //     </button>
    //     {error && <span>{error.message}</span>}
    //   </div>
    // </div>
    
    <div className="login-container">
    <div className="login-form">
      <div className="loginHeader">
        <h1>Login</h1>
        <Link to="/register" className="link">
        <span>
          Register
        </span>
        </Link>
       
        </div>
      <form >
        <div className="form-group">
          
          <input
            type="username"
            id="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button disabled={loading || !isFormValid} 
        onClick={handleClick}  className="login-button">Login</button>
      </form>
      {error && <span>{error.message}</span>}
      <a href="#" className="forgot-password">Forgot password?</a>
    </div>
  </div>
  )
}

export default Login