import { useContext, useState } from "react";
import "./register.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    country: undefined,
    city: undefined,
    phoneNumber:undefined,
    password: undefined,
  });

   // Окреме поле для підтвердження пароля
   const [confirmPassword, setConfirmPassword] = useState("");

   const [passwordsMatch, setPasswordsMatch] = useState(true); // Стан для перевірки співпадіння паролів

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

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
    // dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/Account/Register", credentials);
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/login")
    } catch (err) {
      // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="phoneNumber"
          placeholder="phoneNumber"
          id="phoneNumber"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="rInput"
        />
         <input
          type="password"
          placeholder="confirm password"
          id="confirmPassword"
          onChange={handleChange}
          className="rInput"
        />
        <button 
        disabled={loading || !passwordsMatch} // Вимкнути кнопку, якщо паролі не співпадають
        onClick={handleClick} 
        className="rButton">
          Register
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}

export default Register