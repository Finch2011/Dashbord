import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function SiginUp() {
    const [Username, setUsername] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const navigate = useNavigate();
    const n = () =>{
        navigate("/Login")
    }
    const fetchDtat = async () => {
        if (Username !== "" && Email !== "" && Password !== "") {

            try {
                const respans = await axios.post("https://66f535759aa4891f2a2451d7.mockapi.io/user", {
                    username: Username,
                    email: Email,
                    password: Password
                });
                console.log(respans.data)
            } catch (error) {
                console.log(error.massage)
            }
            
            toast.success('Registration was successful', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            localStorage.setItem("username" , Username)
            localStorage.setItem("email" , Email)
            localStorage.setItem("password" , Password)
            setTimeout(() => {
                n()
            }, 5000);
            
        }
        else if (Password.length < 8) {
            toast.warning('Please enter more than 8 characters', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            toast.warn('Please complete the information', {
                position: "top-right",
                autoClose: 2000,
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
                <div className="signup-form">
                    <h1>Create Account</h1>
                    <input onInput={(event) => setUsername(event.target.value)} type="text" placeholder="Full Name" required />
                    <input onInput={(event) => setEmail(event.target.value)} type="email" placeholder="Email Address" required />
                    <input onInput={(event) => setPassword(event.target.value)} type="password" placeholder="Password" required />
                    <button className='btn' onClick={fetchDtat} type="submit">Sign Up</button>
                    <p>Already have an account? <Link to={"/Login"}>Log In</Link></p>
                </div>
            </div>
        </>
    )
}
export default SiginUp