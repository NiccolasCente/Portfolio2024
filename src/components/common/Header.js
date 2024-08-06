import React, { useState } from 'react';
import { useLanguage } from '../common/LanguageContext'; 
import { Link, useLocation } from 'react-router-dom'; 
import CV from "../../assets/cv.pdf";
import arrowDown from "../../assets/seta.png";
import "../css/Header.css";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Hook 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang); 
    setIsDropdownOpen(false); // Fechar o dropdown após a seleção
  };

  const texts = {
    pt: {
      about: 'Sobre Mim',
      projects: 'Meus Projetos',
      services: 'Serviços Contratáveis',
      download: 'Baixar Currículo',
      language: 'PT-BR'
    },
    en: {
      about: 'About Me',
      projects: 'My Projects',
      services: 'Contractable Services',
      download: 'Download Resume',
      language: 'EN'
    }
  };

  return (
    <header>
      <nav className="navbar">
        <h1 className="h1-header">
          <Link to="/"> 
            &lt;Niccolas Cente/&gt;
          </Link>
        </h1>
        <ul>
          <li className={`li ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="sobremim"> {texts[language].about} </Link>
          </li>
          <li className={`li ${location.pathname === '/projects' ? 'active' : ''}`}>
            <Link to="/projetos">{texts[language].projects}</Link>
          </li>
          <li className={`li ${location.pathname === '/services' ? 'active' : ''}`}>
            <Link to="/serviços">{texts[language].services}</Link>
          </li>
          <li>
            <a href={CV} download="Niccolas_Cente_Curriculo.pdf">{texts[language].download}</a>
          </li>
          <li className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
              {texts[language].language}
              <img
               src={arrowDown} 
               alt="Dropdown arrow" 
               loading="lazy"
               className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={() => handleLanguageChange('pt')}>PT-BR</button>
                <button onClick={() => handleLanguageChange('en')}>EN</button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
