import React from "react";

const SocialNetwork = () => {
    const anim = () => {
        const icons = document.querySelectorAll(".social__network a");

        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${
                    e.offsetY - 15
                }px)`;
            });
            link.addEventListener("mouseleave", () => {
                link.style.transform = "";
            });
        });
    };
    return (
        <div className="social__network">
            <ul className="content" id="social__network--content">
                <a
                    href="https://www.linkedin.com/in/pierre-andre-bb674b232/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={anim}
                >
                    <li>
                        <i className="fab fa-linkedin-in"></i>
                    </li>
                </a>
                <a
                    href="https://github.com/Peallyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={anim}
                >
                    <li>
                        <i className="fab fa-github"></i>
                    </li>
                </a>
                <a
                    href="https://twitter.com/Peallyzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={anim}
                >
                    <li>
                        <i className="fab fa-twitter"></i>
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;
