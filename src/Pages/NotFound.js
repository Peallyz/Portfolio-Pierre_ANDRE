import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Components/Header/Header";

const NotFound = ({ state }) => {
    return state ? (
        <div className="notFound">
            <Header title={"Error 404"} />
            <div className="notFound__container">
                <h3>
                    Vous vous êtes perdu ? Retournez à{" "}
                    <NavLink to="/">l'accueil</NavLink> pour y retrouver votre
                    chemin.
                </h3>
            </div>
        </div>
    ) : (
        <div></div>
    );
};

export default NotFound;
