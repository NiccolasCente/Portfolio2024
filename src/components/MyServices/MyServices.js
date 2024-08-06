//Componentes React
import React from "react";
import { useLanguage } from "../common/LanguageContext";

//Componentes CSS
import "../MyServices/MyServices.css";

const MyServices = () => {
  const { language } = useLanguage();

  const texts = {
    pt: {
      title: "Meus Serviços",
      services: [
        {
          title: "Criação de Sites",
          description: "Transformo suas ideias em realidade, desenvolvendo um site atrativo e profissional focado em transmitir aquilo que o cliente deseja!"
        },
        {
          title: "Criação de Landing Pages",
          description: "Crio páginas de destino para converter os visitantes em possíveis clientes, utilizando ferramentas de design modernas como o Figma!"
        },
        {
          title: "Criação de Protótipos",
          description: "Crio designs que ajudam a visualizar o produto final e que garantem uma transição perfeita para o desenvolvimento."
        },
      ]
    },
    en: {
      title: "My Services",
      services: [
        {
          title: "Website Creation",
          description: "I transform your ideas into reality, developing an attractive and professional website focused on conveying what the client desires!"
        },
        {
          title: "Landing Page Creation",
          description: "I create landing pages to convert visitors into potential customers, using modern design tools like Figma!"
        },
        {
          title: "Prototype Creation",
          description: "I create designs that help visualize the final product and ensure a seamless transition to development. "
        },
      ]
    }
  };

  return (
    <div className='services-container'>
        <h1 className='h1-services'>{texts[language].title}</h1>
        <div className='services-grid'>
          {texts[language].services.map((service, index) => (
            <div className='service-item' key={index}>
                <h2 className='h2-services'>{service.title}</h2>
                <p>{service.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default MyServices;
