import React from "react";
import imgHome from "../assets/images/professora_bruna.png"; // importar imagens aqui
import imgSombraHome from "../assets/images/SombraBruna2.png"; // importar imagens aqui
import imgJaquelineHome from "../assets/images/Jaqueline.png"; // importar imagens aqui

{
  /* Abandonai toda a esperança, vós que entrais */
}

const Home = () => {
  return (
    <>
      {/* SESSÃO 1 — AZUL Inicio */}
      <section className="overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 py-20">
        <section className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Lado esquerdo (textos) */}
          {/* Linha 1 */}
          <div className="max-w-xl">
            <p className="font-lato-bold text-lg tracking-wide text-white">
              CURSINHO ONLINE PARA ENEM E VESTIBULARES
            </p>

            {/* Linha 2 – título */}
            <h1 className="font-momo mt-4 text-4xl text-white">
              APRENDIZAGEM <span className="tracking-widest">EUREKA</span>
            </h1>

            {/* Descrição */}
            <p className="font-lato-italic mt-6 text-lg leading-relaxed text-white">
              Empresa Especializada e registrada desde 2020 com serviços de
              Reforço Escolar, Aulas Particulares e Cursos para crianças e
              adolescentes estudantes na Educação Básica
            </p>

            {/* Botões */}
            <div className="mt-8 flex gap-6">
              <button className="font-momo rounded-full bg-yellow-400 px-6 py-3 text-blue-900 shadow-md transition hover:bg-yellow-300">
                COMECE AGORA
              </button>

              <button className="font-momo rounded-full bg-yellow-400 px-6 py-3 text-blue-900 shadow-md transition hover:bg-yellow-300">
                VER AULA DE APRESENTAÇÃO
              </button>
            </div>
          </div>

          {/* Círculo com gradiente atrás da imagem */}
          <img
            src={imgSombraHome}
            alt="Sombra"
            className="absolute right-0 bottom-19 w-[643px] object-contain"
          />
          {/* Lado direito (imagem) */}
          <img
            src={imgHome}
            alt="Professor"
            className="absolute right-40 bottom-2 w-[390px] object-contain"
          />
        </section>
      </section>
      {/* SESSÃO 2 — BRANCA */}
      <section className="bg-white py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          {/* Imagem à esquerda */}
          <div className="flex justify-center md:justify-start">
            <img
              src={imgJaquelineHome}
              alt="Imagem ilustrativa"
              className="absolute top-139 left-40 w-[370px] object-contain"
            />
          </div>

          {/* Texto à direita */}
          <div>
            <h2 className="font-momo mb-6 text-4xl text-blue-700">
              Apoio Escolar para Todas as Etapas da Educação!
            </h2>

            <p className="text-lg leading-relaxed text-gray-700">
              Oferecemos acompanhamento completo e de qualidade para alunos do
              1º ao 9º ano do Ensino Fundamental e também do Ensino Médio. Nosso
              objetivo é fortalecer o aprendizado, promover autonomia nos
              estudos e garantir o sucesso escolar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
