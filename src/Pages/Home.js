import React, { useEffect } from "react";
import { useState } from "react";

import Loader from "../Components/Loader/Loader";
import NavBtn from "../Components/Navigation/NavBtn";
import Job from "../Components/Profil/Job";

const Home = () => {
    const bienvenue = ["Bienvenue", "Portfolio de Pierre ANDRE"];

    const [selectedBienvenue, setSelectedBienvenue] = useState(0);

    useEffect(() => {
        const showBienvenue = setTimeout(() => {
            setSelectedBienvenue(1);
        }, 5000);

        return () => clearTimeout(showBienvenue);
    }, [selectedBienvenue, setSelectedBienvenue]);

    return (
        <div className="home">
            <div className="home__header">
                <div className="welcome">
                    <h1>{bienvenue[selectedBienvenue]}</h1>
                    <Job />
                </div>
                <div className="home__loader">
                    <Loader size={"small"} />
                </div>
            </div>
            <NavBtn />
        </div>
    );
};

export default Home;
