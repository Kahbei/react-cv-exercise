import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formations from "./pages/Formations";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/competences" element={<Knowledges />} />
                    <Route path="/formations" element={<Formations />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
