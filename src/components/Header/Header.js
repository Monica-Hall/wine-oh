import React from "react"; 
import "./Header.css"; 

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Wine Oh!</h1>
            <div >
                <h4 className="slogan">Some call it a problem, 
                <br/>
                I call it a hobby.</h4>
            </div>
        </header>
    )
}

export default Header; 