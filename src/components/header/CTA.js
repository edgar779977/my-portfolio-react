import React from "react";

const CTA = () => {
    return (
        <div className="cta">
            <a className="btn" href="/cv.pdf" download>
                Download CV
            </a>
            <a className="btn btn-primary" href="#contact">
                Let's Talk
            </a>
        </div>
    );
};

export default CTA;
