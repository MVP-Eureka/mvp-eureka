import React from 'react'
import imgLogo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom'

{/* Cabeçalho da pagina */}

const Header = () => {
  return (
    <div className='shadow-md bg-blue-800'>
    {/* Configurações dos itens que tão no cabeçalho*/}
    <div className="flex items-center justify-between px-9 py-4 max-w-7xl mx-auto color">

        {/* Config da imagem do eureka */}
        <div className='flex items-center'>
            <img 
             className='h-16'
             src={imgLogo} 
             alt="Professor" 
            />
        </div>

        {/* Botão de login */} {/* abaixo as config da função de trocar de cor quando passar o mouse em cima */}
        <Link to="/login" className='text-white font-bold flex-items-center rounded-full border-2 border-white px-8 py-2 
        cursor-pointer hover:bg-gray-200 hover:text-blue-800 transition duration-300'>
            LOGIN
        </Link>
    </div>
    </div>
  );
};

export default Header
