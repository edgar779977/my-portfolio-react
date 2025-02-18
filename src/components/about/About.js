import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./About.css";
import ME from "../../assets/me-about.jpg";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Edgar Alaverdyan - Full Stack Developer" loading="lazy" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsAwardFill className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Project User Reach</h5>
                            <small>200k+ active users</small>
                        </article>
                        <article className="about__card">
                            <FaProjectDiagram className="about__icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p>
                        I'm a <strong>Full Stack Developer</strong> with <strong>3+ years</strong> of experience, specializing in
                        <strong> Laravel, React.js, Vue.js, and TypeScript</strong>. Passionate about crafting modern web applications
                        and upgrading technology stacks to enhance project efficiency.
                        <br /><br />
                        Some of my notable projects include <strong>SpaceTogether.com, Dorsia.com, GetLaunched.io</strong>, and more.
                        My expertise spans <strong>responsive design</strong>, front-end development, and seamless CMS integrations
                        to ensure <strong>pixel-perfect user experiences</strong> across all devices.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Connect
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
