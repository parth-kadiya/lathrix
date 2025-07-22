// src/App.js
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import PatientStories from './components/PatientStories';
import OurStories from './components/OurStories';
import ExploreLathrix from './components/ExploreLathrix';
import Acne from './components/Acne';
import Science from './components/Science';
import AboutLathrix from './components/AboutLathrix';
import PatientStoriesPage from './components/PatientStoriesPage';
import StartingLathrixPage from './components/StartingLathrixPage';
import Resources from './components/Resources';

function Home() {
  return (
    <>
      <Hero />
      <PatientStories />
      <OurStories />
      <ExploreLathrix />
    </>
  );
}

function HairGreying() {
  return (
    <>
      <Acne />
      <Science />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/lathrix" replace />} />
        <Route path="/lathrix" element={<Home />} />
        <Route path="/hair-greying" element={<HairGreying />} />
        <Route path="/about-lathrix" element={<AboutLathrix />} />
        <Route path="/patient-stories" element={<PatientStoriesPage />} />
        <Route path="/starting-lathrix" element={<StartingLathrixPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Navigate to="/lathrix" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
