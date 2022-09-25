import React from "react";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";
import Job from "../Components/Profil/Job";

import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Components/Footer";

const Profil = () => {
    const location = useLocation();
    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();

    const [img1IsVisible, setImg1IsVisible] = useState();
    const [img2IsVisible, setImg2IsVisible] = useState();
    const [img3IsVisible, setImg3IsVisible] = useState();
    const [img4IsVisible, setImg4IsVisible] = useState();

    useEffect(() => {
        const handlerIntersect1 = (entries) => {
            if (entries[0].isIntersecting) {
                setImg1IsVisible(true);
            } else if (!entries[0].isIntersecting) {
                setImg1IsVisible(false);
            }
        };
        const handlerIntersect2 = (entries) => {
            if (entries[0].isIntersecting) {
                setImg2IsVisible(true);
            } else if (!entries[0].isIntersecting) {
                setImg2IsVisible(false);
            }
        };
        const handlerIntersect3 = (entries) => {
            if (entries[0].isIntersecting) {
                setImg3IsVisible(true);
            } else if (!entries[0].isIntersecting) {
                setImg3IsVisible(false);
            }
        };
        const handlerIntersect4 = (entries) => {
            if (entries[0].isIntersecting) {
                setImg4IsVisible(true);
            } else if (!entries[0].isIntersecting) {
                setImg4IsVisible(false);
            }
        };
        const observer1 = new IntersectionObserver(handlerIntersect1);
        observer1.observe(img1.current);

        const observer2 = new IntersectionObserver(handlerIntersect2);
        observer2.observe(img2.current);

        const observer3 = new IntersectionObserver(handlerIntersect3);
        observer3.observe(img3.current);
        const observer4 = new IntersectionObserver(handlerIntersect4);
        observer4.observe(img4.current);
    }, []);

    return (
        <div className="profil">
            <div className="scroll__indicator"></div>
            <Header title={"Qui suis-je ?"} />
            <motion.div
                className="scroll"
                key={location.key}
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 1 }}
                transition={{
                    duration: 0.15,
                    ease: "easeInOut",
                }}
            >
                <section className="section profil__title">
                    <Job />
                    <h3>
                        Disponibilité imédiate dans le Finistere ou en remote
                    </h3>
                    <Loader size={"regular"} />
                </section>
                <section className="section profil__school">
                    <div
                        ref={img1}
                        className={
                            img1IsVisible
                                ? "container__left visible"
                                : "container__left"
                        }
                    >
                        <img
                            src="./assets/img/profil__school.jpg"
                            alt="Prise de note"
                        />
                    </div>
                    <div className="container__right">
                        <p>
                            Pour démarrer les présentations, je suis curieux de
                            nature et j'ai eu tendance à rechercher des
                            compétences et des connaissances dans divers
                            domaines. <br />
                            L'informatique depuis tout jeunes dans un premier
                            temps. <br />
                            Amusé de logique et de mathematique, j'ai suivis
                            naturellement un{" "}
                            <strong>cursus scientifiques</strong> au lycée avec
                            une derniere année en <strong>filière ISN</strong>{" "}
                            (Informatique et science du numérique |
                            developpement de petits logiciels en Python).
                            <br /> J'ai suivis ces années lycée par 3 années en{" "}
                            <strong>licence de droit</strong> avec une
                            spécialisation en droit privé (Droit du travail et
                            droit des affaires)
                        </p>
                    </div>
                </section>
                <section className="section profil__work">
                    <div
                        className={
                            img2IsVisible
                                ? "container__left visible"
                                : "container__left"
                        }
                        ref={img2}
                    >
                        <img
                            src="./assets/img/profil__work.jpg"
                            alt="Place assise dans un coworking"
                        />
                    </div>
                    <div className="container__right">
                        <p>
                            Le travail commence dans un salon de café américain,
                            très prisé des freelances et autres entrepreneurs.
                            J'ai nommé <strong>Starbucks Coffee</strong>.
                            <br />
                            J'y ai appris le management d'équipes{" "}
                            <strong>jusqu'a 30</strong> membres en tant que
                            manager puis responsable de site.
                            <br />
                            En tant que directeur de sites je me suis vu confier
                            la responsabilité de deux magasins où j'y ai appris
                            et affiné ma gestion.
                            <br />
                            Cette experience a durée{" "}
                            <strong>5 belles années</strong>.
                        </p>
                    </div>
                </section>
                <section className="section profil__img">
                    <div className="img">
                        <h2>La chance est l'alibi des incapables. C.A.</h2>
                    </div>
                </section>
                <section className="section profil__dev">
                    <div
                        className={
                            img3IsVisible
                                ? "container__left visible"
                                : "container__left"
                        }
                        ref={img3}
                    >
                        <img
                            src="./assets/img/profil__dev.jpg"
                            alt="Place assise dans un coworking"
                        />
                    </div>
                    <div className="container__right">
                        <p>
                            Et maintenant ? (Que vais-je faire ? &#9835;) Ca
                            peut ressembler à un 180 degrés (ou un transform:
                            rotate(180deg)) mais finalement ce retour est plutôt
                            cohérent. J'ai eu une fenêtre pour me lancer dans
                            l'apprentisage professionnel du developpement et je
                            l'ai saisis.
                            <br /> D'abord <strong>HTML/CSS</strong> puis{" "}
                            <strong>Javascript</strong> pour enfin me lancer
                            dans un unique framework, <strong> React JS</strong>
                            . <br /> GitHub et React Redux ne semblent pas être
                            des options, elles ont donc fait partie intégrante
                            de ma formation . <br />
                            Je suis ouvert à tous les langages et toutes les
                            technos, mais il fallait bien se poser sur un
                            premier et l'appronfondir suffisament pour pouvoir,
                            aujourd'hui, me présenter devant vous, avec la
                            volonté serieuse et réelle de travailler.
                            <br />
                            Ce serait un plaisir pour moi de rejoindre
                        </p>
                    </div>
                </section>
                <section className="section profil__cv">
                    <div
                        className={
                            img4IsVisible
                                ? "container__left visible"
                                : "container__left"
                        }
                        ref={img4}
                    >
                        <img
                            src="./assets/img/cv/PA_full.jpg"
                            alt="Place assise dans un coworking"
                        />
                    </div>
                    <div
                        className={
                            img4IsVisible
                                ? "container__left visible"
                                : "container__left"
                        }
                        ref={img4}
                    >
                        <a href="./assets/img/cv/CV_Pierre_ANDRE 2022.pdf">
                            <img
                                src="./assets/img/cv/CV_Pierre_ANDRE 2022.jpg"
                                alt="Place assise dans un coworking"
                            />
                        </a>
                    </div>
                </section>
            </motion.div>
            <Footer />
        </div>
    );
};

export default Profil;
