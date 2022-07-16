import React from 'react'
import "../Navbar/navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"


function navbar() {
  return (
    <nav class="navbar navbar-expand-lg shadow" style={{backgroundColor:"#000332",color:"white"}}>
    <div class="container-fluid">
      <a class="navbar-brand fw-bold text-shadow" href="#">Suntwist</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <p class="fw-bold mt-3" aria-current="page" href="#">Overview</p>
          </li>
          <li class="nav-item">
            <p class="fw-bold mt-3" href="#">Product</p>
          </li>
          <li class="nav-item dropdown">
            <p class="mt-3 dropdown-toggle fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sale Category
            </p>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          {/* #000332 */}
          <li class="nav-item dropdown">
            <p class="mt-3 dropdown-toggle fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </p>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
        
       <Link to="/login">
       <button className='btn btn-success fw-bold me-3 ms-5' style={{backgroundColor:"#000332", color:"white"}}>Login</button>
       </Link>

          {/* <input class="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search"/> */}
          <button class="btn btn-light" type="submit" style={{backgroundColor:"#000332", color:"white"}}><ShoppingCartIcon/></button>
          <button class="btn btn-success ms-3 fw-bold" type="submit" style={{backgroundColor:"#000332", color:"white"}}><SearchIcon/></button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default navbar