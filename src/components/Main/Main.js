// Componentes React
import React from 'react';
import { useLanguage } from "../common/LanguageContext";
import { Link } from 'react-router-dom';


// Componentes CSS
import '../Main/Main.css';

// Componentes Imagens
import FotoMain from "../../assets/fotomain.png";

const Main = () => {
  const { language } = useLanguage();

  const texts = {
    pt: {
      hello: "Olá, eu sou o",
      title: "Desenvolvedor Web Freelancer",
      question: "O que eu faço?"
    },
    en: {
      hello: "Hello, I am the",
      title: "Freelance Web Developer",
      question: "What I Do?"
    }
  };

  return (
    <main>
      <div>
        <h2>{texts[language].hello}</h2>
        <h1>Niccolas Vinicius Cente</h1>
        <h2>{texts[language].title}</h2>
        <Link to="/sobremim">
             <h3 className="h3-main">{texts[language].question}</h3>
        </Link>
      </div>
      <div>
        <img src={FotoMain}   loading="lazy"  alt="Foto Main" />
      </div>
    </main>
  );
}

export default Main;

