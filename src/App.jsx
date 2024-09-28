import { useEffect, useState } from "react";
import "./style/App.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (
      localStorage.getItem("username") === null &&
      localStorage.getItem("password") === null
    ) {
      navigate("/Login");
    }
  }, []);

  const LogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    toast.success("Logout was successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      onClose: () => navigate("/Login"),
    });
  };

  return (
    <>
      <div>
        <ToastContainer />
        <div className="profile-container">
          <div className="profile-header">
            <img
              src="./public/thumb-1920-169164.jpg"
              alt="Profile Picture"
              className="profile-pic"
            />
            <h1 className="profile-name">{localStorage.getItem("username")}</h1>
            <p className="profile-title">Web Developer</p>
          </div>
          <div className="profile-bio">
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum.
            </p>
          </div>
          <div className="profile-skills">
            <h2>Skills</h2>
            <ul className="skil">
              <li>Java</li>
              <li>Pythone</li>
            </ul>
            <h2>Account</h2>
            <ul className="skil">
              <li>Email :{localStorage.getItem("email")}</li>
              <li>Password :{localStorage.getItem("password")}</li>
              <li onClick={LogOut} className="Logout">
                Logout <img src="./public/Logout.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
