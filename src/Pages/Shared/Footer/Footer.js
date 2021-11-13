import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <footer>
          <div className="icon">
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-facebook icon"></i>

            <i className="fab fa-telegram icon"></i>
            <i className="fab fa-instagram-square icon"></i>
          </div>

          <div>
            <ul className="footer-ul">
              <li className="footer-li">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="footer-li">
                <NavLink to="/explore">Explore</NavLink>
              </li>

              <li className="footer-li">
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="copyright">rideBike © 2021</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
