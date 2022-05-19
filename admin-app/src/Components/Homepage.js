import React from 'react';
import {Link} from "react-router-dom"

const Homepage = () => {
  return (
    <div className='homepage'>
        <nav>
            <h2>.UNtitled</h2>
            <ul>
                <li><a href=" ">Home</a></li>
                <li><a href=" ">Products</a></li>
                <li><a href=" ">Resource</a></li>
                <li><a href=" ">Pricing</a></li>
            </ul>
        </nav>
        <main>
            <p>super, simple , Banking.</p>
            <h3>Banking Technology <br /> that has your back.</h3>
            <p>Simple, transparent banking. No hidden fees and free overdrafts</p>
            <div className='btn-container'>
                <button><Link id="btn-link" to="login">Log In</Link></button>
                <button><Link id="btn-link" to="signup" >Sign Up</Link></button>
            </div>
        </main>
    </div>
  )
}

export default Homepage