import React from 'react';
import imgHome from '../assets/images/Professor_Nonato.png'; // importar imagens aqui

{/* Abandonai toda a esperança, vós que entrais */}

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-20">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Lado esquerdo (textos) */}
        {/* Linha 1 */}
        <div className="max-w-xl">
          <p className="text-white font-lato-bold text-lg tracking-wide">
            CURSINHO ONLINE PARA ENEM E VESTIBULARES
          </p>

          {/* Linha 2 – título */}
          <h1 className="text-white font-momo text-4xl mt-4">
            APRENDIZAGEM <span className="tracking-widest">EUREKA</span>
          </h1>

          {/* Descrição */}
          <p className="text-white font-lato-italic text-lg mt-6 leading-relaxed">
            Empresa Especializada e registrada desde 2020 com serviços de Reforço Escolar,
            Aulas Particulares e Cursos para crianças e adolescentes estudantes na
            Educação Básica
          </p>

          {/* Botões */}
          <div className="flex gap-6 mt-8">
            <button className="bg-yellow-400 text-blue-900 font-momo px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition">
              COMECE AGORA
            </button>

            <button className="bg-yellow-400 text-blue-900 font-momo px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition">
              VER AULA DE APRESENTAÇÃO
            </button>
          </div>
        </div>

        {/* Lado direito (imagem) */}
        <img 
          src={imgHome} 
          alt="Professor" 
          className="absolute bottom-19 right-0 w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
