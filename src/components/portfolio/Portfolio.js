import React from "react";
import "./Portfolio.css";
import dorsia from "../../assets/dorsia1.png";
import spaceTogether from "../../assets/spacetogether.jpg";
import b24 from "../../assets/b24chat.jpg";
import beenimax from "../../assets/beenimax.jpg";
import freedomTrans from "../../assets/freedomtrans.png";
import grohe from "../../assets/grohe.jpg";
import Intelevy from "../../assets/Intelevy.jpg";
import routie from "../../assets/routie.jpg";

// Portfolio data
const data = [
    {
        id: 1,
        image: dorsia,
        title: "The most desirable tables, cultural events, and experiences around the globe—all at your fingertips.",
        demo: "https://dorsia.com"
    },
    {
        id: 2,
        image: spaceTogether,
        title: "Grow your organization with space sharing. Pay for space when you need it, share it when you don’t.",
        demo: "https://spacetogether.com"
    },
    {
        id: 3,
        image: b24,
        title: "An AI-based customer service system A Platform, to promote companies and business in domestic and global markets",
        demo: "https://b24chat.com"
    },
    {
        id: 4,
        image: beenimax,
        title: "Elevate Your Business with a Beenimax Business Account Applying for a Business Account is simple, and it opens the door to exclusive features designed to help your business thrive.",
        demo: "https://beenimax.com"
    },
    {
        id: 5,
        image: freedomTrans,
        title: "We provide transportation services of any complexity in Warsaw and from Warsaw to any destination across the EU.",
        demo: "https://freedomtrans.pl"
    },
    {
        id: 6,
        image: grohe,
        title: "The official GROHE online store, managed by Aristos Retail LLC, GROHE’s logistics partner, fulfills all orders placed online or by phone. Purchases are made under a sales contract with Aristos Retail LLC.",
        demo: "https://grohe-russia.shop"
    },
    {
        id: 7,
        image: Intelevy,
        title: "Market Research for the Digital Shelf Intuition isn’t enough on Amazon. Connect to real consumers for contextual feedback on your entire product lifecycle. Unlock the truth behind consumers’ behavior.",
        demo: "https://intellivy.net"
    },
    {
        id: 8,
        image: routie,
        title: "Revenue-boosting guest wifi for businesses Introducing the most cost effective way to offer guest wifi, build your customer database and grow your business revenue.",
        demo: "https://routie.io"
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, smallText, role, github, demo }) => (
                    <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img
                                src={image}
                                alt={`Screenshot of ${title}`}
                                onError={(e) => e.target.src = "path/to/fallback-image.jpg"} // Fallback image in case of missing image
                            />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a
                                href={demo}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View live demo of ${title}`}>
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
