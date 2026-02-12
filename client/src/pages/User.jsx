import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-200 flex flex-col items-center justify-center border-r border-gray-300 p-8">
        <div className="w-32 h-32 rounded-full bg-slate-500 flex items-center justify-center text-white text-4xl shadow-md">
          👤
        </div>

        <h3 className="mt-6 text-center font-semibold text-gray-700">
          Pedro Henrique Martins
          <br />
          Coelho da Silva
        </h3>
      </div>

      {/* Conteúdo */}
      <div className="w-2/3 p-16">
        <h1 className="text-3xl font-bold text-gray-800">
          Perfil do Usuário
        </h1>
        <p className="text-gray-500 mt-1 mb-10">
          Adicione as suas informações aqui
        </p>

        {/* Nome */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            Nome do Usuário:
          </label>
          <input
            type="text"
            defaultValue="Pedro Henrique Martins Coelho da Silva"
            className="w-3/4 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Senha */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            Senha do Usuário:
          </label>

          <div className="relative w-3/4">
            <input
              type={showPassword ? "text" : "password"}
              defaultValue="12345678"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              👁
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            E-mail do Usuário:
          </label>
          <input
            type="email"
            defaultValue="pedrohenrique@gmail.com"
            className="w-3/4 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botão */}
        <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-8 py-2 rounded-full shadow-md transition">
          Salvar
        </button>
      </div>
    </div>
  );
}

