import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";

const Competences = ({ state }) => {
    const location = useLocation();
    return (
        state && (
            <div className="skill">
                <Header title={"Mes competences"} />

                <h3>
                    Les compétences présentées ci-dessous ne sont nécessairement
                    plus à jour puisqu'en constante évolution. Je trouve
                    toujours le moyen de les affiner ou d'en rajouter de
                    nouvelles.
                </h3>
                <div
                    className="skill__container"
                    key={location.key}
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -500, opacity: 1 }}
                    transition={{
                        duration: 0.15,
                        ease: "easeInOut",
                    }}
                >
                    <div className="skill__container--left">
                        <div className="frontEnd">
                            <h4>Front End</h4>
                            <i className="devicon-html5-plain-wordmark colored"></i>
                            <i className="devicon-css3-plain-wordmark colored"></i>
                            <i className="devicon-javascript-plain colored"></i>
                            <i className="devicon-react-original-wordmark colored"></i>
                        </div>
                        <div className="backEnd">
                            <h4>Back End</h4>
                            <i className="devicon-firebase-plain-wordmark colored"></i>
                        </div>
                        <div className="outils">
                            <h4>Outils</h4>
                            <i className="devicon-git-plain-wordmark colored"></i>
                            <i className="devicon-github-original-wordmark"></i>
                            <i className="devicon-redux-original colored"></i>
                            <i className="devicon-windows8-original colored"></i>
                        </div>
                    </div>
                    <div className="skill__container--right">
                        <div className="side">
                            <h4>Compétences annexes et qualités</h4>
                            <ul>
                                <li>Management d'équipes</li>
                                <li>Gestion de centre de profits</li>
                                <li>Adaptabilité</li>
                                <li>
                                    Gestion du stress et des periodes de fortes
                                    activités
                                </li>
                                <li>Capacité à fédérer</li>
                                <li>Réactivité</li>
                                <li>Curiosité</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    );
};

export default Competences;
