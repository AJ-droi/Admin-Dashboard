import React from "react";
import "./Dashboard.css";
import { AiFillHome, AiOutlineTeam, AiFillProject, AiTwotoneBell } from "react-icons/ai";
import { RiUserFollowLine, RiLogoutBoxRFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import{ Routes, Route, Link} from "react-router-dom";
import Team from "./Team";
import Client from "./Client";
import Product from "./Product";
import Home from "./Home";

const handleLogout = () => {
  window.location= "/";
};


const Dashboard = () => {

  let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))


  return (
    <div>
      <nav className="navbar" >
        <h1 >Welcome {userDetails.Name}</h1>
        <div className="nav-icons">
          <Link to="" className="text-dark"> <AiTwotoneBell /> </Link>
          <Link to="" className="text-dark"> < CgProfile /> </Link>
        </div>
      </nav> 
      <hr />
      <main className="container1">
        
        <div className="sidebar">
          <div>
            <h3>.UNTitled</h3>
          </div>
          <ul>
            <li>
              <AiFillHome id="side-icon" />
              <Link id="side-link" to="home">
                Home
              </Link>
            </li>
            <li>
              <AiOutlineTeam id="side-icon" />
              <Link id="side-link" to="team" >
                Team Members
              </Link>
            </li>
            <li>
              <RiUserFollowLine id="side-icon" />
              <Link id="side-link" to="client"  >
                Client
              </Link>
            </li>
            <li>
              <AiFillProject id="side-icon" />
              <Link id="side-link" to="product" >
                Product
              </Link>
            </li>
            <li>
              <RiLogoutBoxRFill id="side-icon" />
              <Link id="side-link" to="/" onClick={() => handleLogout()} >
                LogOut
              </Link>
            </li>
          </ul>
        </div>

        <Routes>
              <Route path="home" element={<Home />} />
              <Route path="team" element={<Team />} />
              <Route path="client" element={<Client />} />
              <Route path="product" element={<Product />} />
        </Routes>

      </main>
      </div>

  );
};

export default Dashboard;
