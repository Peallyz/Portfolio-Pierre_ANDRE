import React from "react";
import { useState } from "react";
import Header from "../Components/Header/Header";
import Projet from "../Components/Projets/Projet";
import projectsData from "../data/projectsData";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

const Projets = ({ state }) => {
    const [leftProject, setLeftProject] = useState(projectsData.length - 1);
    const [mainProject, setMainProject] = useState(0);
    const [rightProject, setRightProject] = useState(1);
    const [isMovingLeft, setIsMovingLeft] = useState(false);
    const [isMovingRight, setIsMovingRight] = useState(false);

    const location = useLocation();

    const moveLeft = () => {
        setIsMovingLeft(true);
        setTimeout(() => {
            if (mainProject > 0 && leftProject > 0 && rightProject > 0) {
                setLeftProject(leftProject - 1);
                setMainProject(mainProject - 1);
                setRightProject(rightProject - 1);
            } else if (mainProject <= 0) {
                setLeftProject(leftProject - 1);
                setMainProject(projectsData.length - 1);
                setRightProject(rightProject - 1);
            } else if (leftProject <= 0) {
                setLeftProject(projectsData.length - 1);
                setMainProject(mainProject - 1);
                setRightProject(rightProject - 1);
            } else if (rightProject <= 0) {
                setLeftProject(leftProject - 1);
                setMainProject(mainProject - 1);
                setRightProject(projectsData.length - 1);
            }
            setIsMovingLeft(false);
        }, 400);
    };
    const moveRight = () => {
        setIsMovingRight(true);
        setTimeout(() => {
            if (
                mainProject < projectsData.length - 1 &&
                leftProject < projectsData.length - 1 &&
                rightProject < projectsData.length - 1
            ) {
                setLeftProject(leftProject + 1);
                setMainProject(mainProject + 1);
                setRightProject(rightProject + 1);
            } else if (mainProject >= projectsData.length - 1) {
                setLeftProject(leftProject + 1);
                setMainProject(0);
                setRightProject(rightProject + 1);
            } else if (leftProject >= projectsData.length - 1) {
                setLeftProject(0);
                setMainProject(mainProject + 1);
                setRightProject(rightProject + 1);
            } else if (rightProject >= projectsData.length - 1) {
                setLeftProject(leftProject + 1);
                setMainProject(mainProject + 1);
                setRightProject(0);
            }

            setIsMovingRight(false);
        }, 400);
    };

    return state ? (
        <div className="projets">
            <Header title={"Mes Projects"} />
            <motion.div
                className="projets__container"
                key={location.key}
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 1 }}
                transition={{
                    duration: 0.15,
                    ease: "easeInOut",
                }}
            >
                <div
                    className={
                        isMovingLeft
                            ? "project__left move__left"
                            : isMovingRight
                            ? "project__left move__right"
                            : "project__left"
                    }
                >
                    <Projet
                        key={projectsData[leftProject].id}
                        project={leftProject}
                        pos={"left"}
                    />
                </div>
                <div
                    className={
                        isMovingLeft
                            ? "project__main move__left"
                            : isMovingRight
                            ? "project__main move__right"
                            : "project__main"
                    }
                >
                    <Projet
                        key={projectsData[mainProject].id}
                        project={mainProject}
                        pos={"main"}
                    />
                </div>
                <div
                    className={
                        isMovingLeft
                            ? "project__right move__left"
                            : isMovingRight
                            ? "project__right move__right"
                            : "project__right"
                    }
                >
                    <Projet
                        key={projectsData[rightProject].id}
                        project={rightProject}
                        pos={"right"}
                    />
                </div>
                <button className="chevron__left" onClick={moveLeft}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="chevron__right" onClick={moveRight}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </motion.div>
            <Footer />
        </div>
    ) : (
        <div></div>
    );
};

export default Projets;
