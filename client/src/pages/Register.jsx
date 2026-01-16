import React from "react";
import { Link } from "react-router-dom";

// Imagem
import logoEureka from "../assets/images/Logo_eureka.png";

const Register = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400">
      {/* Card */}
      <div className="flex w-full max-w-lg flex-col items-center gap-5 rounded-3xl bg-white p-8 shadow-xl">
        
        {/* Logo */}
        <img
          src={logoEureka}
          alt="Logo Eureka"
          className="h-18"
        />

        {/* Título */}
        <h1 className="font-lato-bold text-2xl">
          Cadastre-se grátis
        </h1>

        {/* Formulário */}
        <form className="font-lato flex w-full flex-col gap-2">
          
          <label htmlFor="name">Nome completo</label>
          <input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            required
          />

          <label htmlFor="email">Endereço de e-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            required
          />

          <label htmlFor="password">Senha de acesso</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            required
          />

          <button
            type="submit"
            className="font-momo mt-2 w-full rounded-full bg-blue-800 px-4 py-2 text-amber-50 transition hover:bg-blue-700"
          >
            Criar conta
          </button>
        </form>

        {/* Link para login */}
        <p className="font-lato">
          Já tem uma conta?{" "}
          <Link
            to="/Login"
            className="font-momo text-blue-500 underline hover:text-blue-600"
          >
            Entrar
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;

