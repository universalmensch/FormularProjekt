import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Startseite } from './pages/Startseite';
import { Basisinformationen } from './pages/Basisinformationen';
import { Logo } from './pages/Logo';
import { Kontaktdaten } from './pages/Kontaktdaten';
import { BestaetigungsSeite } from './pages/BestaetigungsSeite';
import { Koerperdaten } from './pages/Koerperdaten';
import { Berufsdaten } from './pages/Berufsdaten';
import { Arbeitgeberdaten } from './pages/Arbeitgeberdaten';
import { Arbeitnehmerdaten } from './pages/Arbeitnehmerdaten';
import { Arbeitsdaten } from './pages/Arbeitsdaten';
import { Gesundheitsdaten } from './pages/Gesundheitsdaten';
import { Schuldaten } from './pages/Schuldaten';
import { Sportdaten } from './pages/Sportdaten';
import { Studiendaten } from './pages/Studiendaten';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
    <Router>
      <Logo />
      <Routes>
        <Route path="/" element={<Startseite />}></Route>
        <Route path="/Formular_Abschluss" element={<BestaetigungsSeite />}></Route>
        <Route path="/Formular_Seite_1" element={<Basisinformationen />}></Route>
        <Route path="/Formular_Seite_2" element={<Kontaktdaten />}></Route>
        <Route path="/Formular_Seite_3" element={<Koerperdaten />}></Route>
        <Route path="/Formular_Seite_4" element={<Gesundheitsdaten />}></Route>
        <Route path="/Formular_Seite_5" element={<Sportdaten />}></Route>
        <Route path="/Formular_Seite_6" element={<Berufsdaten />}></Route>
        <Route path="/Formular_Seite_7a" element={<Schuldaten />}></Route>
        <Route path="/Formular_Seite_7b" element={<Studiendaten />}></Route>
        <Route path="/Formular_Seite_7c" element={<Arbeitsdaten />}></Route>
        <Route path="/Formular_Seite_8a" element={<Arbeitnehmerdaten />}></Route>
        <Route path="/Formular_Seite_8b" element={<Arbeitgeberdaten />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);