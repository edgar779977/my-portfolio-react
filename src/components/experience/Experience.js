import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience.css";

const skillsData = {
    frontend: [
        { skill: "HTML", level: "Expert" },
        { skill: "CSS", level: "Advanced" },
        { skill: "JavaScript", level: "Advanced" },
        { skill: "TypeScript", level: "Beginner" },
        { skill: "Vue.js", level: "Intermediate" },
        { skill: "Bootstrap", level: "Advanced" },
        { skill: "React.js", level: "Intermediate" }
    ],

    backend: [
        { skill: "Laravel", level: "Advanced" },
        { skill: "MySQL", level: "Intermediate" },
        { skill: "PHP", level: "Intermediate" }
    ]
};

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div className={`experience__${category}`} key={category}>
                        <h3>{category === "frontend" ? "Frontend Development" : "Backend Development"}</h3>
                        <div className="experience__content">
                            {skills.map(({ skill, level }) => (
                                <article className="experience__details" key={skill}>
                                    <BsPatchCheckFill className="experience__details-icon" />
                                    <div>
                                        <h4>{skill}</h4>
                                        <small className="text-light">{level}</small>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
