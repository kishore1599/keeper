import React from "react";

function NavBar(){
   return(
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">RyD</a>
      <ul id="nav-mobile" class="right">
        <li><a href="/Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </div>
  </nav>
   ) 
}

export default NavBar;