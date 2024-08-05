
import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/common/Header";
import Main from "./components/Main/Main";
import  { LanguageProvider } from "../src/components/common/LanguageContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <LanguageProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sobremim" element={<AboutMe />} />
        <Route path="/sobremim" element={<Main />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </LanguageProvider>
  </Router>
    
  );
}

export default App;
