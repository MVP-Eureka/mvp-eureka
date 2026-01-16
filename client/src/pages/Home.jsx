import React from "react";

// Imagens
import imgSombraHome from "../assets/images/SombraBruna2.png";
import imgProfessoraBruna from "../assets/images/professora_bruna.png";
import imgJaquelineHome from "../assets/images/professora_01.png";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      
      {/* ================= HERO AZUL ================= */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 h-[520px]">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6">
          
          <div className="max-w-xl z-10">
            <p className="font-lato-bold text-lg text-white">
              CURSINHO ONLINE PARA ENEM E VESTIBULARES
            </p>

            <h1 className="font-momo mt-4 text-4xl text-white">
              APRENDIZAGEM <span className="tracking-widest">ONLINE</span>
            </h1>

            <p className="font-lato-italic mt-6 text-lg text-white z-200">
              Empresa especializada e registrada desde 2020 com serviços de reforço
              escolar, aulas particulares e cursos para crianças e adolescentes da
              Educação Básica.
            </p>

            <div className="mt-8 flex gap-6">
              <button className="rounded-full bg-yellow-400 px-6 py-3 font-momo text-blue-900">
                COMECE AGORA
              </button>

              <button className="rounded-full bg-yellow-400 px-6 py-3 font-momo text-blue-900">
                VER AULA DE APRESENTAÇÃO
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= IMAGENS FIXAS (BRUNA + SOMBRA) ================= */}
      <div className="pointer-events-none absolute right-0 top-[150px] z-20">

        {/* Sombra */}
        <img
          src={imgSombraHome}
          alt="Sombra"
          className="
            absolute
            right-[200px]
            top-[-30px]
            scale-[1.95]
            z-10"
          />

        {/* Bruna */}
        <img
          src={imgProfessoraBruna}
          alt="Professora Bruna"
          className="
            relative
            w-[400px]
            z-250
            scale-[1.10]
            translate-y-[-105px]
            translate-x-[-270px] "
        />

      </div>


      {/* ================= SESSÃO BRANCA ================= */}
  <section className="bg-white py-32 relative z-10">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 px-6">

      <div>
        <img
          src={imgJaquelineHome}
          alt="Professora"
          className="w-[370px]"
        />
      </div>

      <div>
        <h2 className="mb-6 font-momo text-4xl text-blue-700">
          Apoio Escolar para Todas as Etapas da Educação!
        </h2>

        <p className="text-lg text-gray-700">
          Oferecemos acompanhamento completo e de qualidade para alunos do
          1º ao 9º ano do Ensino Fundamental e também do Ensino Médio.
        </p>
      </div>

    </div>
  </section>

    </div>
  );
};

export default Home;
