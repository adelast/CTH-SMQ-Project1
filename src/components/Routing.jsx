import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "../styles/Routing.css"

import Navbar from './Navbar';
import Accueil from '../pages/Accueil';
import Processus from "../pages/Processus";
import Procedures from "../pages/Procedures";
import AnalyseRisques from "../pages/Analyse_risques";
import Tbq from "../pages/Tbq";
import Enregistrements from "../pages/Enregistrements";
import Contacts from '../pages/Contacts';
import NotMatch from '../pages/NotMatch';

function Routing() {
  return (
    <div>
        <BrowserRouter className="Browser">
          <Navbar/>
          <Routes className="pages">
            <Route path="/" element={<Accueil />} />
            <Route path="/processus" element={<Processus />} />
            <Route path="/procedures" element={<Procedures />} />
            <Route path="/analyse_risques" element={<AnalyseRisques />} />
            <Route path="/tbq" element={<Tbq />} />
            <Route path="/enregistrements" element={<Enregistrements />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotMatch />} />
          </Routes>
        </BrowserRouter> 
    </div>
  )
}

export default Routing