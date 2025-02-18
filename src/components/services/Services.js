import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
    const serviceList = [
        {
            title: "Front-End Development",
            items: [
                "Crafting responsive, user-friendly interfaces using React, Vue.js, and modern JavaScript frameworks.",
                "Delivering **pixel-perfect** designs to ensure a consistent look across all devices and screen sizes.",
                "Designing **mobile-first** experiences that adapt seamlessly from small screens to larger devices.",
                "Building cross-browser compatible layouts with an emphasis on performance, accessibility, and visual consistency.",
                "Incorporating interactive elements, animations, and transitions to enhance user engagement and experience.",
                "Optimizing front-end performance for lightning-fast load times and smooth, responsive interactions across all platforms."
            ]
        },
        {
            title: "Back-End Development",
            items: [
                "Building robust back-end solutions using technologies like Laravel and PHP.",
                "Designing and managing databases using MySQL and other relational/non-relational database systems.",
                "Developing efficient RESTful APIs for seamless front-end and back-end communication.",
                "Implementing secure user authentication and authorization systems with JWT, OAuth, and industry-standard security protocols.",
                "Optimizing server-side performance for improved scalability, security, and efficient data handling.",
                "Managing seamless application deployment and maintenance using AWS S3 for file storage and management."
            ]
        },
        {
            title: "Full-Stack Web Development",
            items: [
                "Building custom, dynamic web applications using a combination of front-end technologies (React, Vue.js) and back-end solutions (Laravel, PHP).",
                "Designing **mobile-first** and **pixel-perfect** layouts that provide optimal user experiences across all devices.",
                "Integrating third-party APIs and services to add advanced functionality and streamline user experience.",
                "Ensuring cross-browser compatibility and responsive layouts, providing a consistent experience across different platforms.",
                "Optimizing site performance for fast loading times, enhanced scalability, and seamless interaction.",
                "Delivering clean, maintainable code that supports a smooth and intuitive user experience with an emphasis on security and performance."
            ]
        }
    ];


    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                {serviceList.map((service, index) => (
                    <article className="service" key={index}>
                        <div className="service__head">
                            <h3>{service.title}</h3>
                        </div>
                        <ul className="service__list">
                            {service.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <BiCheck className="service__list-icon" />
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;
