import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" id='nav-container'>
        <a class="navbar-brand" href="/"><h3>CarBon</h3><h3>Insight</h3></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="navBar-link activeLink" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="navBar-link" href="/">About</a>
            </li>
            <li class="nav-item">
                <a class="navBar-link" href="/">Contact</a>
            </li>
            <li class="nav-item">
                <a class="navBar-link" href="/">Blog</a>
            </li>
            
            </ul>
            
        </div>
    </nav>
  )
}

export default NavBar
