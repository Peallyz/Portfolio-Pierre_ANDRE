import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [isMobileNav, setIsMobileNav] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 700) {
            setIsMobileNav(true);
        } else if (window.innerWidth > 700) {
            setMobileNavOpen(false);
            setIsMobileNav(false);
        }
        const handleNav = (e) => {
            if (e.target.innerWidth <= 700) {
                setIsMobileNav(true);
            } else if (e.target.innerWidth > 700) {
                setMobileNavOpen(false);
                setIsMobileNav(false);
            }
        };

        window.addEventListener("resize", (e) => handleNav(e));

        return () => window.removeEventListener("resize", (e) => handleNav(e));
    }, []);
    return (
        <div className="navbar">
            <nav className={isMobileNav ? "mobile__nav" : "desktop__nav"}>
                {isMobileNav && (
                    <div
                        className={
                            mobileNavOpen
                                ? "icon__hanburger active"
                                : "icon__hanburger"
                        }
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                )}
                <ul
                    className={
                        isMobileNav
                            ? mobileNavOpen
                                ? "mobileNavOpen"
                                : "mobileNavClose"
                            : ""
                    }
                >
                    <NavLink
                        to="/profil"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li
                            className="navbar__profil"
                            data-attribute="navigation"
                        >
                            <i className="fa-regular fa-user"></i>
                            <span>Profil</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/projets"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li
                            className="navbar__projets"
                            data-attribute="navigation"
                        >
                            <i className="fa-solid fa-laptop-file"></i>
                            <span>Projets</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/competences"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li
                            className="navbar__skill"
                            data-attribute="navigation"
                        >
                            <i className="fa-solid fa-sliders"></i>
                            <span>Compétences</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li
                            className="navbar__contact"
                            data-attribute="navigation"
                        >
                            <i className="fa-regular fa-envelope"></i>
                            <span>Contact</span>
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
