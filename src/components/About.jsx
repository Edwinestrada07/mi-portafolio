import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-sans md:font-serif">
            Hola, soy Edwin Estrada
            <br className="hidden lg:inline-block" /> Soy desarrollador Full-Stack.
          </h1>
          <p className="mb-8 leading-relaxed font-sans md:font-serif">
            Soy un desarrollador creativo y orientado a los detalles. Me
            apasiona crear sitios web y aplicaciones web que sean atractivos y
            fáciles de usar. También soy un buen comunicador y trabajo bien con
            los clientes para comprender sus necesidades y satisfacer sus
            expectativas. En mi portafolio puedes ver algunos de mis trabajos
            más recientes. Estos proyectos incluyen sitios web corporativos,
            sitios web de comercio electrónico. También podrás ver algunas de
            mis habilidades y experiencia en detalle. Si está buscando un
            desarrollador web talentoso y con experiencia, no dude en ponerse en
            contacto conmigo. Estaré encantado de hablar más sobre tus
            necesidades y cómo puedo ayudarte. Hagamos algo especial.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="logotipo"
            src="/img/logoee.png"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
