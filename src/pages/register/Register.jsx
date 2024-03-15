import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          // onChange={handleChange}
          className="rInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          // onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          // onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          // onChange={handleChange}
          className="rInput"
        />
        <input
          type="phoneNumber"
          placeholder="phoneNumber"
          id="phoneNumber"
          // onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          // onChange={handleChange}
          className="rInput"
        />
        <button 
        // disabled={loading} 
        // onClick={handleClick} 
        className="rButton">
          Register
        </button>
        {/* {error && <span>{error.message}</span>} */}
      </div>
    </div>
  )
}

export default Register