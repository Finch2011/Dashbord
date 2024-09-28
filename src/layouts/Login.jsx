import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Get.css";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [Password, setPassword] = useState();
  const [Username, setUsername] = useState();
  const [Email, setEmail] = useState();
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const navigate = useNavigate();

  const n = () => {
    navigate("/");
  };

  const fetchdata = async () => {
    
    const res = await axios.get(
      `https://66f535759aa4891f2a2451d7.mockapi.io/user?username=${Username}&password=${Password}&email=${Email}`
    );
    const data = res.data;
    const userData = data.find(
      (user) => user.username === Username && user.password === Password
    );

    if (userData) {
        
            toast.success('Login was successful', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                onClose: () => navigate("/")
            });
            localStorage.setItem("username" , Username)
            localStorage.setItem("email" , Email)
            localStorage.setItem("password" , Password)
        setTimeout(() => {
            n()
        }, 5000);
    } else {
      
      toast.warning('Please enter the information completely and carefully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
      });
    }
}

  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className="login-form">
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              onInput={(event) => setUsername(event.target.value)}
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input
              onInput={(event) => setEmail(event.target.value)}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onInput={(event) => setPassword(event.target.value)}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <br />
          <button onClick={fetchdata} type="submit">
            Login
          </button>
          <p>
            Don't have an account? <Link to={"/SiginUp"}>Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );

}
export default Login;
