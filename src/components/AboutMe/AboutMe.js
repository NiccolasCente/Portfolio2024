//Componentes React
import React from 'react';
import { useLanguage } from '../common/LanguageContext'; 

// Componentes CSS
import './AboutMe.css';

// Componentes Imagens
import Image from "../../assets/fotomain2.png";
import Git from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Email from "../../assets/gmail.svg";
import Number from "../../assets/whatsapp.svg";
import HTMLIcon from "../../assets/html5.png";
import CSSIcon from "../../assets/css_plain_logo_icon_146573.png";
import JSIcon from "../../assets/javascript_icon_130900.png";
import BootstrapIcon from "../../assets/bootstrap_plain_logo_icon_146619.png";
import ReactIcon from "../../assets/react.png";
import FigmaIcon from "../../assets/Figma.png";
import ViteIcon from "../../assets/Vitejs-logo.svg.png";

const AboutMe = () => {
  const { language } = useLanguage();

  const texts = {
    pt: {
      abouth1: "Sobre Mim",
      paboutme: [
        "Olá, me chamo Niccolas Vinicius Cente, tenho 21 anos e sou um Desenvolvedor Front-End!",
        "Trabalho com as linguagens: <strong class='highlight'>HTML5</strong>, <strong class='highlight'>CSS3</strong>, <strong class='highlight'>JavaScript</strong>, <strong class='highlight'>Bootstrap</strong>, <strong class='highlight'>React</strong> e <strong class='highlight'>Vite</strong>, além de desenvolver designs com o <strong class='highlight'>Figma</strong>.",
        "Com uma abordagem de desenvolvimento moderna centrada no usuário, com interfaces intuitivas, atraentes e acessíveis buscando sempre a melhor experiência para o usuário!",
        "Apaixonado por tecnologia desde a infância, e desde então sempre desejei criar 'coisas' e resolver problemas. Com uma atitude pró-ativa e confiante nos conhecimentos adquiridos até então, sinto que estou preparado para o mercado de trabalho!"
      ]
    },
    en: {
      abouth1: "About Me",
      paboutme: [
        "Hello, my name is Niccolas Vinicius Cente. I am 21 years old and a Front-End Developer!",
        "I work with languages such as <strong class='highlight'>HTML5</strong>, <strong class='highlight'>CSS3</strong>, <strong class='highlight'>JavaScript</strong>, <strong class='highlight'>Bootstrap</strong>, <strong class='highlight'>React</strong> and <strong class='highlight'>Vite</strong>, as well as developing designs with <strong class='highlight'>Figma</strong>.",
        "With a modern development approach focused on the user, creating intuitive, attractive, and accessible interfaces, always aiming for the best user experience!",
        "Passionate about technology since childhood, and since then I have always wanted to create 'things' and solve problems. With a proactive attitude and confidence in the knowledge acquired so far, I feel ready for the job market!"
      ]
    }
  };

  return (
    <section className='aboutme-section'>
      <div className='image-icons-container'>
        <img 
          className="img-section"
          alt='Niccolas Foto'
          loading="lazy"
          src={Image} />
        <div className='icons-section'>
          <a href="https://github.com/NiccolasCente" target="_blank" rel="noopener noreferrer">
            <img src={Git} 
            className="contact-icons"
            alt='Github'/>
          </a> 
          <a href="https://linkedin.com/in/niccolas-cente-ba989b23b/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} 
            className="contact-icons"
            alt='Linkedin'/>
          </a> 
          <a href="mailto:niccolas.dev@hotmail.com" target="_blank" rel="noopener noreferrer">
            <img src={Email} 
            className="contact-icons"
            alt='Email'/>
          </a> 
          <a href="https://wa.me/11934747011" target="_blank" rel="noopener noreferrer">
            <img src={Number} 
            className="contact-icons"
            alt='Whatsapp'/>
          </a> 
        </div>
      </div>
      <div className='text-container'>
        <div className='content'>
          <h1 className='aboutme-h1'>{texts[language].abouth1}</h1>
          {texts[language].paboutme.map((paragraph, index) => (
            <p className='p-aboutme' key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
          ))}
          <div className='tech-icons'>
            <img src={HTMLIcon} className="tech-icon" alt='HTML5' />
            <img src={CSSIcon} className="tech-icon" alt='CSS3' />
            <img src={JSIcon} className="tech-icon" alt='JavaScript' />
            <img src={BootstrapIcon} className="tech-icon" alt='Bootstrap' />
            <img src={ReactIcon} className="tech-icon" alt='React' />
            <img src={FigmaIcon} className="tech-icon" alt='Figma' />
            <img src={ViteIcon} className="tech-icon" alt='Vite' />

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
