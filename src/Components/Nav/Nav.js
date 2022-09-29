import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import changelang from "../../Store/Actions";
import { useSelector } from "react-redux";
import './Nav.css'
export default function Nav(){

    let lang=useSelector((state)=>state.lang)
    let fav=useSelector((state)=>state.fav)
    
    let dispatch=useDispatch()
    let togglelang=()=>{
        lang=='ar-SA'?dispatch(changelang('en-US',"ENG")):dispatch(changelang('ar-SA','AR'));
    }
    
    return(
        <>

            <ul class="nav justify-content-between bg-dark p-4">
                <li  class="nav-item">
                    <ul lass="nav flex-row" style={{display:'flex'}}>
                            <li class="nav-item">
                                <Link className="nav-link text-light fw-semibold" to="/" >HOME</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-light fw-semibold" to="/Product" >Product</Link>
                            </li>
                    </ul>
                </li>
            <li class="nav-item">
                <Link className="nav-link text-light fw-semibold" to="/fav" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="Crimson" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </Link>
            </li>
            </ul>


            {/* <nav class="navbar bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LOGO</a>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                
                <div class="offcanvas-body bg-dark">
                <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>

                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <button className="bg-transparent text-light border-0 pulse" onClick={togglelang}>{lang}</button>
                        <Link className="nav-link text-light fw-semibold" to="/fav" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="Crimson" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                        </Link>
                    </div>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-light fw-semibold" to="/" >HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-light fw-semibold" to="/movies" >MOVIES</Link>
                    </li>
                    </ul>

                    

                </div>
                </div>
            </div>
            </nav>




        <nav class="navbar navbar-expand-sm bg-dark p-3">
        <div class="container-fluid">
            <h1>LOGO</h1>
            
            <div className="d-flex flex-row justify-content-between align-items-center">
            <button className="bg-transparent text-light border-0 pulse" onClick={togglelang}>{lang}</button>
            <Link className="nav-link text-light fw-semibold" to="/fav" >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="Crimson" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            </Link>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <div className="d-flex flex-row justify-content-between">
                <Link className="nav-link text-light fw-semibold" to="/" >HOME</Link>
                <Link className="nav-link text-light fw-semibold" to="/movies" >MOVIES</Link>
                </div>
            </div>
            </div>
        </div>
        </nav> */}

        </>
    )
}