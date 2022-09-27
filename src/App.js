import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components//Loader/Loader";
import Competences from "./Pages/Competences";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projets from "./Pages/Projets";
import Profil from "./Pages/Profil";
import { AnimatePresence } from "framer-motion";
import NotFound from "./Pages/NotFound";

function App() {
    const [loadingComplete, isLoadingComplete] = useState(false);
    setTimeout(() => {
        isLoadingComplete(true);
    }, 5000);

    return (
        <BrowserRouter>
            {!loadingComplete && <Loader size={""} />}
            <AnimatePresence>
                <Routes>
                    {loadingComplete && (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route path="/profil" element={<Profil />} />
                            <Route path="/projets" element={<Projets />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route
                                path="/competences"
                                element={<Competences />}
                            />
                            <Route path="/404" element={<NotFound />} />
                        </>
                    )}
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
}

export default App;
