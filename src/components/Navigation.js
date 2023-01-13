import React from "react";
import { Link } from "react-router-dom";
import { socialmediaData } from "../data/socialmediaData";

const YearCopyright = () => {
    return (
        <p>
            <a href="https://lmiot.ovh" target="_blank" rel="noreferrer">
                <i className="far fa-copyright"></i>
                Done with love - {new Date().getFullYear()} - LMOOIT.ovh
            </a>
        </p>
    );
};

const PageLink = (props) => {
    const { path, icon, title } = props.dataPL;
    return (
        <li>
            <Link to={path}>
                <i className={icon}></i>
                <span>{title}</span>
            </Link>
        </li>
    );
};

const SocialRoundButton = (props) => {
    const { path, icon } = props.dataSL;
    return (
        <li>
            <a href={path} target="_blank" rel="noopener noreferrer">
                <i className={icon}></i>
            </a>
        </li>
    );
};

const Navigation = () => {
    const dataPageLink = [
        {
            id: "3c3d45f0-2656-40d0-bc73-da9eac157b98",
            title: "Accueil",
            path: "/",
            icon: "fas fa-home",
        },
        {
            id: "501c75da-1e71-45bd-93e3-83aef7f65168",
            title: "Compétences",
            path: "/competences",
            icon: "fas fa-mountain",
        },
        {
            id: "6b7176b3-13a7-4ca2-a02b-adc1d277678a",
            title: "Formations",
            path: "/formations",
            icon: "fas fa-university",
        },
        {
            id: "e205a3ba-66a3-4a83-a3eb-1e892f594e03",
            title: "Portfolio",
            path: "/portfolio",
            icon: "fas fa-images",
        },
        {
            id: "b26d4453-9d6e-461e-bdf2-2d13b33d02d4",
            title: "Contact",
            path: "/contact",
            icon: "fas fa-address-book",
        },
    ];

    return (
        <>
            <div className="sidebar">
                <div className="id">
                    <div className="idContent">
                        <img src="./media/portrait.png" alt="portrait" />
                        <h3>Roger BONNEPOIRE</h3>
                    </div>
                </div>
                <nav className="navigation">
                    <ul>
                        {dataPageLink.map((el) => (
                            <PageLink key={el.id} dataPL={el} />
                        ))}
                    </ul>
                </nav>
                <div className="socialNetwork">
                    <ul>
                        {socialmediaData.map((el) => (
                            <SocialRoundButton key={el.id} dataSL={el} />
                        ))}
                    </ul>

                    <div className="signature">
                        <YearCopyright />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
