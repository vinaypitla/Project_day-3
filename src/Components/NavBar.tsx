import React from "react"; 
import "../Css/NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8g_3_r-S_FfHLk3qKdwDk_h9uklmEfhr-nQ&s" 
                     alt="Brand Logo" width="50" height="30"/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                {/* Left-aligned items */}
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/"><b>Home</b></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/catalog">Catalog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/DashBord">DashBord</a>
                    </li>
                </ul>

                {/* Right-aligned Profile */}
                <ul className="navbar-nav profile-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/profile"><b>Profile </b>
                        
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                     alt="Brand Logo" width="40" height="40"
                     style={{ borderRadius: "50%", border: "2px solid #ddd" }} 
                     />
            </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
