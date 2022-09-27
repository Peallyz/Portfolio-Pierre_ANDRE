import React from "react";
import ContactForm from "../Components/Contact/ContactForm";
import ContactInfo from "../Components/Contact/ContactInfo";
import Header from "../Components/Header/Header";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

const Contact = ({ state }) => {
    const location = useLocation();
    return (
        state && (
            <div className="contact">
                <Header title={"Me contacter"} />
                <motion.div
                    className="contact__main"
                    key={location.key}
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -500, opacity: 1 }}
                    transition={{
                        duration: 0.15,
                        ease: "easeInOut",
                    }}
                >
                    <div className="container__left">
                        <ContactForm />
                    </div>
                    <div className="container__right">
                        <ContactInfo />
                    </div>
                </motion.div>
                <Footer />
            </div>
        )
    );
};

export default Contact;
