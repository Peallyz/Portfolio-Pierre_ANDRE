import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "./SocialNetwork";

const ContactInfo = () => {
    const [link1Copied, setLink1Copied] = useState(false);
    const [link2Copied, setLink2Copied] = useState(false);

    useEffect(() => {
        const Link1TimedOut = () =>
            setTimeout(() => {
                setLink1Copied(false);
            }, 3000);
        const Link2TimedOut = () =>
            setTimeout(() => {
                setLink2Copied(false);
            }, 3000);

        if (link1Copied) {
            Link1TimedOut();
        }
        if (link2Copied) {
            Link2TimedOut();
        }

        return () => {
            clearInterval(Link1TimedOut);
            clearInterval(Link2TimedOut);
        };
    }, [link1Copied, link2Copied]);

    return (
        <div className="contact__infos">
            <div className="phone">
                <div className="content">
                    <h4>Telephone :</h4>
                    <CopyToClipboard text="0760817227" className="hover">
                        <p
                            style={{ cursor: "pointer" }}
                            className="clipboard"
                            onClick={() => setLink1Copied(true)}
                        >
                            07 60 81 72 27{" "}
                            <i className="fa-regular fa-copy"></i>
                            <span className={link1Copied ? "copied" : ""}>
                                Copied
                            </span>
                        </p>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="email">
                <div className="content">
                    <h4>Email :</h4>
                    <CopyToClipboard
                        text="pieclandre@gmail.com"
                        className="hover"
                    >
                        <p
                            style={{ cursor: "pointer" }}
                            className="clipboard"
                            onClick={() => setLink2Copied(true)}
                        >
                            pieclandre@gmail.com{" "}
                            <i className="fa-regular fa-copy"></i>
                            <span className={link2Copied ? "copied" : ""}>
                                Copied
                            </span>
                        </p>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="network">
                <div className="content">
                    <h4>Réseaux :</h4>
                    <SocialNetwork />
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
