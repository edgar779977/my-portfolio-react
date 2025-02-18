import React, { Fragment } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/edgar779977" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/edgar-alaverdyan-459071233" target="_blank" rel="noopener noreferrer">
                        <IoLogoLinkedin size={20} />
                    </a>
                </div>

                <div className="footer__copyright">
                    <small>&copy; {new Date().getFullYear()} All rights reserved. | Developed by Edgar Alaverdyan.</small>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
