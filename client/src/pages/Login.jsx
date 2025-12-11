import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import googleLogo from "../assets/images/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error("Erro: " + res.status + " — " + text);
      }

      const data = await res.json();
      console.log("Resposta:", data);
      alert("Login realizado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Falha no login: " + err.message);
    }
  };

  // Fundo azul ocupando a tela inteira
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400">
      {/* Card branco */}
      <div className="flex w-full max-w-lg flex-col items-center gap-5 rounded-3xl bg-white p-8 shadow-xl">
        {/* Imagem do eureka */}
        <img
          className="h-18"
          src="../src/assets/images/Logo.png"
          alt="Logo Eureka"
        />

        {/* Texto maior */}
        <h1 className="font-lato-bold text-2xl">Faça seu login</h1>

        {/* inicio do formulario */}
        {/* texto acima do email */}
        <form
          className="font-lato flex w-full flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <p>Endereço de e-mail</p>

          {/* Section de colocar o email */}
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite seu e-mail"
          />

          {/* texto acima da senha */}
          <p>Senha de acesso</p>

          {/* Section de colocar a senha */}
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite sua senha"
          />

          {/* famoso "esqueceu a senha?? FODA-SE*/}
          <p>
            <Link
              to="/Recuperação"
              className="font-momo cursor-pointer text-blue-500 underline hover:text-blue-600"
            >
              Esqueceu a senha?
            </Link>
          </p>

          {/* Botão de iniciar sessão */}
          <button className="font-momo w-full cursor-pointer rounded-full border border-gray-300 bg-blue-800 px-4 py-2 text-amber-50 hover:bg-blue-700">
            Iniciar Sessão
          </button>

          {/* fim do formulario */}
        </form>

        {/* Botão Login com Google */}
        <button
          /* onClick - é para testar se o botão funciona ( -- funciona :) -- ) */
          onClick={() => console.log("Login com Google")}
          className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 py-3 transition-all hover:bg-gray-100"
        >
          <img src={googleLogo} alt="Google" className="h-6" />
          <span className="font-lato text-gray-600">Entrar com Google</span>
        </button>

        {/* fazer a conta */}
        <p className="font-lato">
          Ainda não tem conta?{" "}
          <Link
            to="/Register"
            className="font-momo cursor-pointer text-blue-500 underline hover:text-blue-600"
          >
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
