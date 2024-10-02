import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import '../style/ShoppingCart.css'
import Navbar from './navbar'
import axios from 'axios'
import { Context } from '../context/NavContext'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer , toast , Bounce } from 'react-toastify'
export default function () {
    const {project , setProject} = useContext(Context)
    const [data , setData] = useState([])
    const sum = data.reduce((acc , current)=> acc +current.price , 0)
    const id = useRef()
    const navigate = useNavigate();
    useEffect(()=>{
        
        const fetchdata = async() =>{
            const res = await axios.get("https://66f535759aa4891f2a2451d7.mockapi.io/project")
            setData(res.data)
        }
        fetchdata()
    },[])
    useEffect(()=>{
        if (
            localStorage.getItem("username") === null &&
            localStorage.getItem("password") === null
          ) {
            navigate("/Login");
          }
    })
    const remove = () =>{
       const removedata = async() =>{
           const res = await axios.delete(`https://66f535759aa4891f2a2451d7.mockapi.io/project/${id.current.id}`)
           console.log(res.data)
       }

       toast.success('Remove success', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        onClose : ()=> navigate("/")
       })
       removedata()
     }
    return (
        <>
            <br />
            <Navbar />
            <ToastContainer/>
            <header>
                <h1>Your Shopping Cart</h1>
            </header>
            <main>
                  <section className="cart-items">
                  <h2>{project ? "Items in Your Cart" : "Your shopping cart is empty🤷‍♂️"}</h2>
                {data.map((data)=>(
                    <>
                  <div className="item">
                      <img src={data.img} alt="Item 2" />
                      <div className="item-details">
                          <h3>{data.titel}</h3>
                          <p>Price: {data.price}</p>
                          <p ref={id} id={data.id}>No : {data.id}</p>
                          <button onClick={remove}>Remove</button>
                      </div>
                  </div>
                    </>
                ))}
                
              </section>
              <section className="cart-summary">
                  <h2>Cart Summary</h2>
                  <p>Total: ${sum}</p>
                  <button onClick={()=>{
                    localStorage.setItem("buy" , "web Project")
                    navigate("/profil")
                  }}>Checkout</button>
              </section> 
                
            </main>

            <footer>
                <h1>Finch</h1>
                <p>Lorem, ipsum dolor sit amet consectetur <br />adipisicing elit. Eveniet dolorum suscipit iure voluptatum <br />unde praesentium, fugit quaerat maxime voluptas aut <br /> doloremque laudantium quasi deserunt ad? Ipsum <br />laborum sunt corporis? Impedit?</p>
                <p>&copy; 2023 Your Company</p>
            </footer>


        </>
    )
}
