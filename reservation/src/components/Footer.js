import React from "react"
import Logo from "../icons_assets/Logo.svg";

const Footer = () => {
    return(
        <footer>
            <section>
            <div>
                <img src={Logo} />
            </div>
            <div>
                <h3>Quick Links</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            
                <li>Phone Number</li>
                <li>Email</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
      
            </div>
            </section>
        </footer>
    )
}

export default Footer;