import React from "react";
import projectsData from "../../data/projectsData";

const Projet = ({ project, pos }) => {
    return (
        <div className={"project " + pos}>
            <div className="project__container">
                <img
                    src={projectsData[project].img}
                    alt={projectsData[project].title}
                />
                <div className="project__info">
                    <h2>{projectsData[project].title}</h2>
                    <p>{projectsData[project].infos}</p>
                </div>
            </div>
            <div className="project__side">
                <div className="project__techno">
                    {projectsData[project].techno.map((techno, index) => (
                        <span key={index}>{techno}</span>
                    ))}
                </div>
                <div className="project__date">
                    <span>{projectsData[project].date}</span>
                </div>
                <button className="navbtn">
                    <a href={projectsData[project].link} className="weblink">
                        {" "}
                        Voir le site
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Projet;
