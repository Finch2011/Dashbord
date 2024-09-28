import React from 'react'
import '../style/ShoppingCart.css'
export default function () {
  return (
    <>
    
    <header>
        <h1>Shopping Cart</h1>
    </header>
    <main>
        <div class="cart-container">
            <div class="cart-item">
                <img src="./public/thumb-1920-169164.jpg" alt="Item 1"/>
                <h2>Item 1</h2>
                <p>$10.00</p>
                <button>Remove</button>
            </div>
            <div class="cart-item">
                <img src="./public/thumb-1920-169164.jpg" alt="Item 2"/>
                <h2>Item 2</h2>
                <p>$15.00</p>
                <button>Remove</button>
            </div>
            <div class="cart-item">
                <img src="./public/thumb-1920-169164.jpg" alt="Item 3"/>
                <h2>Item 3</h2>
                <p>$20.00</p>
                <button>Remove</button>
            </div>
        </div>
        <div class="total">
            <h2>Total: $45.00</h2>
            <button>Checkout</button>
        </div>
    </main>
    <footer>
        <p>&copy; 2023 Shopping Cart. All rights reserved.</p>
    </footer>
    </>
  )
}
