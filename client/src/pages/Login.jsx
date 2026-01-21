import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Imagens
import googleLogo from "../assets/images/google.png";
import logoEureka from "../assets/images/Logo_eureka.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://mvp-eureka.onrender.com/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Erro ${response.status}: ${text}`);
      }

      const data = await response.json();
      console.log("Resposta do login:", data);
      alert("Login realizado com sucesso!");

      if(data != undefined) {
        navigate("/inicial");
        localStorage.setItem("nome", data.user.nome);
      }

    } catch (error) {
      console.error(error);
      alert("Falha no login.");
    }
  };

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
          Faça seu login
        </h1>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="font-lato flex w-full flex-col gap-2"
        >
          <label htmlFor="email">Endereço de e-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            required
          />

          <label htmlFor="password">Senha de acesso</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            required
          />

          <button
            type="submit"
            className="font-momo w-full rounded-full bg-blue-800 px-4 py-2 text-amber-50 transition hover:bg-blue-700"
          >
            Iniciar Sessão
          </button>
        </form>

        {/* Cadastro */}
        <p className="font-lato">
          Ainda não tem conta?{" "}
          <Link
            to="/Register"
            className="font-momo text-blue-500 underline hover:text-blue-600"
          >
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
