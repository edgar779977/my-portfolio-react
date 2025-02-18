import React, {useState} from "react";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import "./Nav.css";

const Nav = () => {
    const [active, setActive] = useState("#");

    return (
        <nav>
            <a
                onClick={() => setActive("#")}
                className={active === "#" ? "active" : ""}
                href="#"
            >
                <AiOutlineHome/>
            </a>
            <a
                onClick={() => setActive("#about")}
                className={active === "#about" ? "active" : ""}
                href="#about"
            >
                <AiOutlineUser/>
            </a>
            <a
                onClick={() => setActive("#experience")}
                className={active === "#experience" ? "active" : ""}
                href="#experience"
            >
                <BiBook/>
            </a>
            <a
                onClick={() => setActive("#services")}
                className={active === "#services" ? "active" : ""}
                href="#services"
            >
                <RiServiceLine/>
            </a>
            <a
                onClick={() => setActive("#contact")}
                className={active === "#contact" ? "active" : ""}
                href="#contact"
            >
                <BiMessageSquareDetail/>
            </a>
        </nav>
    );
};

export default Nav;
