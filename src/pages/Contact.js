import React from "react";
import Navigation from "../components/Navigation";
import CopyToClipboard from "react-copy-clipboard";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez moi !</h1>
                    <ul>
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>ESTIAM Lyon</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="08.67.67.67.67">
                                <span
                                    className="clickInput"
                                    onClick={() => {
                                        alert("Numéro de téléphone copié...");
                                    }}
                                >
                                    08.67.67.67.67
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="mail@test.com">
                                <span
                                    className="clickInput"
                                    onClick={() => {
                                        alert("L'adresse mail copiée...");
                                    }}
                                >
                                    mail@test.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer noopener">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer noopener">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer noopener">
                            <h4>Codepen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
