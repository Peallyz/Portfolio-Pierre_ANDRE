import React, { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
    const form = useRef();

    const [test, setTest] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE,
                process.env.REACT_APP_TEMPLATE,
                form.current,
                process.env.REACT_APP_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();
                    setTest("success");
                    setTimeout(() => {
                        setTest("");
                    }, 2500);
                },
                (error) => {
                    console.log(error.text);
                    setTest("error");
                    setTimeout(() => {
                        setTest("");
                    }, 2500);
                }
            );
    };

    return (
        <div className="form__container">
            <h2>Contactez-moi</h2>
            <form ref={form} onSubmit={sendEmail} className="form__content">
                <label>Name *</label>
                <input
                    type="text"
                    name="name"
                    required
                    autoComplete="off"
                    id="name"
                    placeholder="Votre nom"
                />
                <label>Email *</label>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    id="email"
                    placeholder="Votre Email"
                />
                <label>Message *</label>
                <textarea
                    name="message"
                    id="mess"
                    maxLength={2000}
                    placeholder="Votre message ..."
                />
                <div className="checkbox">
                    <label htmlFor="validation">
                        En soumettant ce formulaire, j'accepte que mes données
                        personnelles soient utilisées pour me recontacter. Aucun
                        autre traitement ne sera effectué avec mes informations.
                        *{" "}
                    </label>
                    <input type="checkbox" id="validation" required />
                </div>
                <p>* Champ obligatoire</p>
                <input className="button" type="submit" value="Envoyer" />
            </form>
            <div className="form__message">
                {test && (
                    <p className={test}>
                        {test === "success"
                            ? "Message envoyé !"
                            : "Une erreur s'est produite, veuillez réessayer !"}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
