import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Full-Stack Developer</h1>
                <CTA />
                <div className="me">
                    <img src={ME} alt="Edgar Alaverdyan" />
                </div>
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
                <HeaderSocials />
            </div>
        </header>
    );
};

export default Header;
