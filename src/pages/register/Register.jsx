import { useContext, useState } from "react";
import "./register.css";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import useApi from "../../hooks/useApi";

const Register = () => {
  // const apiUrl = process.env.REACT_APP_API_URL;
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    // country: "",
    // city: "",
    phoneNumber: "",
    password: ""
  });

   // Окреме поле для підтвердження пароля
   const [confirmPassword, setConfirmPassword] = useState("");
   const [passwordsMatch, setPasswordsMatch] = useState(true); // Стан для перевірки співпадіння паролів

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { post: register, data: registerData, error: registerError } = useApi("/Account/Register");

  const handleChange = (e) => {
    // setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // Якщо поле, що змінюється - поле підтвердження пароля
    if (e.target.id === "confirmPassword") {
      setConfirmPassword(e.target.value);
    } else {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    // Перевірка на співпадіння паролів при кожній зміні введених даних
    if (e.target.id === "confirmPassword") {
      setPasswordsMatch(e.target.value === credentials.password);
    } else if (e.target.id === "password") {
      setPasswordsMatch(e.target.value === confirmPassword);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (credentials.password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
   
    try {
      await register(credentials);
      
      navigate("/login")
    } catch (err) {
      console.error("Registration error:", registerError);
      // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const isFormValid = Object.values(credentials).every((value) => value !== "");

  return (
    // <div className="register">
    //   <div className="rContainer">
    //     <input
    //       type="text"
    //       placeholder="username"
    //       id="username"
    //       value={credentials.username}
    //       onChange={handleChange}
    //       className="rInput"
    //     />
    //     <input
    //       type="email"
    //       placeholder="email"
    //       id="email"
    //       value={credentials.email}
    //       onChange={handleChange}
    //       className="rInput"
    //     />
    //     <input
    //       type="text"
    //       placeholder="country"
    //       id="country"
    //       value={credentials.country}
    //       onChange={handleChange}
    //       className="rInput"
    //     />
    //     <input
    //       type="text"
    //       placeholder="city"
    //       id="city"
    //       value={credentials.city}
    //       onChange={handleChange}
    //       className="rInput"
    //     />
    //     <input
    //       type="phoneNumber"
    //       placeholder="phoneNumber"
    //       id="phoneNumber"
    //       value={credentials.phoneNumber}
    //       onChange={handleChange}
    //       className="rInput"
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       id="password"
    //       value={credentials.password}
    //       onChange={handleChange}
    //       className="rInput"
    //     />
    //      <input
    //       type="password"
    //       placeholder="confirm password"
    //       id="confirmPassword"
    //       value={confirmPassword}
    //       onChange={handleChange}
    //       className="rInput"
    //     />
    //     <button 
    //     disabled={loading || !passwordsMatch || !isFormValid} // Вимкнути кнопку, якщо паролі не співпадають
    //     onClick={handleClick} 
    //     className="rButton">
    //       Register
    //     </button>
    //     {error && <span>{error.message}</span>}
    //   </div>
    // </div>

    <div className="registration-container">
      <div className="registration-form">
      <div className="registerHeader">
        <h1>Register</h1>
        <Link to="/login" className="link">
        <span>
          Login
        </span>
        </Link>
       
      </div>
        <form>
        <div className="regiser-form-group">
          <input
            type="text"
            id="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="username"
          />
        </div>
          <div className="regiser-form-group">
            <input
              type="email"
              placeholder="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>
          <div className="regiser-form-group">
            <input
              type="phoneNumber"
              placeholder="phoneNumber"
              id="phoneNumber"
              value={credentials.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="regiser-form-group">
            <input
              type="password"
              placeholder="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="regiser-form-group">
            <input
             type="password"
             placeholder="confirm password"
             id="confirmPassword"
             value={confirmPassword}
             onChange={handleChange}
            />
          </div>
          <button 
            disabled={loading || !passwordsMatch || !isFormValid} // Вимкнути кнопку, якщо паролі не співпадають
            onClick={handleClick}
           className="register-button">Register</button>
           {error && <span>{error.message}</span>}
        </form>
      </div>
    </div>
  )
}

export default Register