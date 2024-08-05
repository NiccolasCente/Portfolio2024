import React from 'react';
import { useLanguage } from '../common/LanguageContext';

// Componentes CSS
import "../MyProjects/MyProjects.css";

// Componentes Imagens
import Mercado from "../../assets/mercado.png";
import Bordados from "../../assets/bordados.PNG";
import Carros from "../../assets/carros.PNG";
import Git2 from '../../assets/github.svg';

const MyProjects = () => {
  const { language } = useLanguage();

  const texts = {
    pt: {
      title: "Meus Projetos",
      supermarket: {
        title: "SuperMercado Bom D+",
        description: "Este é o meu primeiro projeto profissional. É um site que contém informações sobre horários de abertura e fechamento, os tipos de produtos que a mercearia oferece e seu endereço.",
        repoLink: "Acessar Repositório Git"
      },
      embroidery: {
        title: "Miriam Bordados",
        description: "Participei deste projeto criando interfaces dinâmicas e cheias de acessibilidade já que o projeto é destinado a senhoras de idade com um comércio.",
        repoLink: "Acessar Repositório Git"
      },
      carDealership: {
        title: "Loja de Automóveis Pastore",
        description: "Participei deste projeto criando interfaces dinâmicas e cheias de acessibilidade já que o projeto é destinado a senhoras de idade com um comércio.",
        repoLink: "Acessar Repositório Git"
      }
    },
    en: {
      title: "My Projects",
      supermarket: {
        title: "SuperMarket Bom D+",
        description: "This is my first professional project. It is a website that contains information about opening and closing hours, the types of products the grocery store offers, and its address.",
        repoLink: "Access Git Repository"
      },
      embroidery: {
        title: "Miriam Embroidery",
        description: "I participated in this project by creating dynamic and accessible interfaces since the project is aimed at elderly women with a business.",
        repoLink: "Access Git Repository"
      },
      carDealership: {
        title: "Pastore Car Dealership",
        description: "I participated in this project by creating dynamic and accessible interfaces since the project is aimed at elderly women with a business.",
        repoLink: "Access Git Repository"
      }
    }
  };

  return (
    <section>
      <h2 className="h2-section">{texts[language].title}</h2>
      <div className="projects-container">
        <div className="project">
          <a href="https://supermercadobomdemais.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={Mercado} alt="Imagem do Projeto" className="project-image" />
          </a>
          <p>
            <span id="html">HTML5</span> <span id="css">CSS3</span> <span id="js">JavaScript</span> <span id="Figma">Figma</span>
          </p>
          <h3>{texts[language].supermarket.title}</h3>
          <p>{texts[language].supermarket.description}</p>
          <div className="links">
            <a href="https://github.com/NiccolasCente/Supermercado-BomDemais" target="_blank" rel="noopener noreferrer">
              <img src={Git2} alt="Github Icon" className="github-icon" />
            </a>
            <a href="https://github.com/NiccolasCente/Supermercado-BomDemais" target="_blank" rel="noopener noreferrer" className="button-link">
              {texts[language].supermarket.repoLink}
            </a>
          </div>
        </div>
        <div className="project">
          <a href="https://miriambordados.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={Bordados} alt="Imagem do Projeto" className="project-image" />
          </a>
          <p>
            <span id="html">HTML5</span> <span id="css">CSS3</span> <span id="bootstrap">Bootstrap</span> <span id="js">JavaScript</span>
          </p>
          <h3>{texts[language].embroidery.title}</h3>
          <p>{texts[language].embroidery.description}</p>
          <div className="links">
            <a href="https://github.com/NiccolasCente/ProjetoE-CommerceBordado" target="_blank" rel="noopener noreferrer">
              <img src={Git2} alt="Github Icon" className="github-icon" />
            </a>
            <a href="https://github.com/NiccolasCente/ProjetoE-CommerceBordado" target="_blank" rel="noopener noreferrer" className="button-link">
              {texts[language].embroidery.repoLink}
            </a>
          </div>
        </div>
        <div className="project">
          <a href="https://concessionariapastore.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={Carros} alt="Imagem do Projeto" className="project-image" />
          </a>
          <p>
            <span id="html">HTML5</span> <span id="css">CSS3</span> <span id="js">JavaScript</span>
          </p>
          <h3>{texts[language].carDealership.title}</h3>
          <p>{texts[language].carDealership.description}</p>
          <div className="links">
            <a href="https://github.com/NiccolasCente/ConcessionariaPastore" target="_blank" rel="noopener noreferrer">
              <img src={Git2} alt="Github Icon" className="github-icon" />
            </a>
            <a href="https://github.com/NiccolasCente/ConcessionariaPastore" target="_blank" rel="noopener noreferrer" className="button-link">
              {texts[language].carDealership.repoLink}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
