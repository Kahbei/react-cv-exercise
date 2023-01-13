import React from "react";
import CursusList from "../components/formations/CursusList";
import Navigation from "../components/Navigation";
import { cursusData } from "../data/cursusData";

const Formations = () => {
    return (
        <div className="formations">
            <Navigation />
            <div className="formationsContent">
                {cursusData.map((el) => <CursusList key={el.id} dataFormations={el} />).reverse()}
            </div>
        </div>
    );
};

export default Formations;
