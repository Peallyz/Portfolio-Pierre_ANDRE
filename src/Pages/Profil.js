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

const Profil = ({ state }) => {
    const location = useLocation();
    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();

    const [img1IsVisible, setImg1IsVisible] = useState();
    const [img2IsVisible, setImg2IsVisible] = useState();
    const [img3IsVisible, setImg3IsVisible] = useState();
    const [img4IsVisible, setImg4IsVisible] = useState();

    const [switchArrow, setSwitchArrow] = useState(false);

    useEffect(() => {
        if (state) {
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
        }
        const handleScrollArrow = () => {
            if (window.scrollY > 250) {
                setSwitchArrow(true);
            } else if (window.scrollY < 250) {
                setSwitchArrow(false);
            }
        };

        window.addEventListener("scroll", () => handleScrollArrow());

        return () =>
            window.removeEventListener("scroll", () => handleScrollArrow());
    }, [state]);

    return state ? (
        <div className="profil">
            <a href="#main__section" className="nav__arrow">
                <i
                    className={
                        switchArrow
                            ? "fa-solid fa-arrow-up"
                            : "fa-solid fa-arrow-up arrowDisabled"
                    }
                ></i>
            </a>
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
                <section className="section profil__title" id="main__section">
                    <Job />
                    <h3>
                        Disponibilit?? im??diate dans le Finistere ou en remote
                    </h3>
                    <Loader size={"regular"} />
                    <i
                        className={
                            switchArrow
                                ? "fa-solid fa-arrow-down arrowDisabled"
                                : "fa-solid fa-arrow-down "
                        }
                    ></i>
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
                            Pour d??marrer les pr??sentations, je suis curieux de
                            nature et j'ai tendance ?? rechercher des comp??tences
                            et des connaissances dans divers domaines, en
                            particulier l'informatique depuis tout jeune.
                            <br /> Amus?? de logique et de math??matiques, j'ai
                            suivi un <strong>cursus scientifique</strong> au
                            lyc??e avec une derni??re ann??e en{" "}
                            <strong>fili??re ISN</strong>
                            (Informatique et sciences du num??rique |
                            d??veloppement de petits logiciels en Python).
                            <br /> J'ai suivi ensuite une{" "}
                            <strong>licence de droit</strong> avec une
                            sp??cialisation en droit priv?? (Droit du travail et
                            droit des affaires).
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
                            Mon exp??rience professionnelle ?? commenc?? dans un
                            salon de caf?? am??ricain, tr??s pris?? des freelances
                            et autres entrepreneurs. J'ai nomm??{" "}
                            <strong>Starbucks Coffee</strong>.
                            <br /> J'y apprends le management d'??quipes{" "}
                            <strong>jusqu'a 30 membres</strong> en tant que
                            manager puis responsable de sites.
                            <br /> En tant que directeur, on me confie la
                            responsabilit?? de deux magasins o?? j'apprends la
                            gestion d'un centre de profits et affine mon
                            management d'??quipe.
                            <br /> Cette exp??rience a dur??{" "}
                            <strong>5 belles ann??es</strong>.
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
                            alt="Code d'un projet React"
                        />
                    </div>
                    <div className="container__right">
                        <p>
                            Et maintenant ? (Que vais-je faire ? &#9835;) Ca
                            peut ressembler ?? un 180 degr??s (ou un transform:
                            rotate(180deg)) mais ce virage est coh??rent vu mon
                            parcours et mes aspirations.
                            <br /> J'ai eu l'opportunit?? de me lancer dans
                            l'apprentisage professionnel du d??veloppement alors
                            je m'y suis engag?? avec m??thode et enthousiasme.
                            <br /> D'abord <strong>HTML/CSS</strong> puis{" "}
                            <strong>Javascript</strong> pour finalement me
                            d??dier ?? un unique framework,{" "}
                            <strong> React JS</strong>.
                            <br /> <strong>GitHub</strong> et{" "}
                            <strong>React Redux</strong> ne semblent pas ??tre
                            des options, elles ont donc fait partie int??grante
                            de ma formation.
                            <br /> Je suis ouvert ?? tous les langages et toutes
                            les technos, mais j'ai choisi de me consacrer ??
                            celui-ci et de l'appronfondir suffisament pour
                            pouvoir, aujourd'hui, me pr??senter devant vous, avec
                            un bagage s??rieux et la volont?? de monter en
                            comp??tences dans ce m??tier qui me passionne.
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
                            alt="Dessin de Pierre ANDRE"
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
                                alt="CV de Pierre ANDRE"
                            />
                        </a>
                    </div>
                </section>
            </motion.div>
            <Footer />
        </div>
    ) : (
        <div></div>
    );
};

export default Profil;
