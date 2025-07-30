import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Reastaurants Container
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src=''></img>
            </div>
            <div>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)