import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com/in/edgar-alaverdyan-459071233" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://github.com/edgar779977" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
        </div>
    );
};

export default HeaderSocials;
