import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";

const NavBtn = () => {
    const [navOpened, setNavOpened] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);

    const removeNav = (e) => {
        if (e.target.getAttribute("data-attribute") !== "navigation") {
            setNavOpened(false);
        }
        setAnimationDone(true);
    };

    useEffect(() => {
        if (navOpened) {
            window.addEventListener("click", removeNav);
        } else {
            window.addEventListener("click", removeNav);
        }

        return () => window.removeEventListener("click", removeNav);
    }, [navOpened]);

    return (
        <div>
            <div className="nav">
                <button
                    className={
                        animationDone
                            ? navOpened
                                ? "navbtn closed animationDone"
                                : "navbtn animationDone"
                            : navOpened
                            ? "navbtn closed"
                            : "navbtn"
                    }
                    data-attribute={"navigation"}
                    onClick={() => {
                        setNavOpened(true);
                    }}
                >
                    Open
                </button>
                {navOpened && <Navbar />}
            </div>
        </div>
    );
};

export default NavBtn;
