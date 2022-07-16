import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home/home";
import {AccountBalanceWalletRounded,Chat,Favorite,HomeRounded,Settings,SummarizeRounded,} from "@mui/icons-material";
import Navbar from './components/Navbar/navbar';
import Login from './components/Login/login';
import Signup from "./components/Signup/signup";
import Menucont from "./components/menucontainer/menucont";
import Footer from "./components/Footer/footer";
import Carousel from "./components/Carousel/carousel"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/signup" element = {<Signup/>}></Route>
      </Routes>
      <div className="leftMenu">
        <ul id="menu">
          <Menucont link = {'#'} icon = {<HomeRounded />}  isHome/>
          <Menucont link = {'#'} icon = {<Chat />}  />
          <Menucont link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          <Menucont link = {'#'} icon = {<Favorite />} />
          <Menucont link = {'#'} icon = {<SummarizeRounded />}  />
          <Menucont link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
        </ul>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

