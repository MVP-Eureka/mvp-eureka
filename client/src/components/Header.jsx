import React from 'react'

{/* Cabeçalho da pagina */}

const Header = () => {
  return (
    <div className='shadow-md bg-blue-800'>
    {/* Configurações dos itens que tão no cabeçalho*/}
    <div className="flex items-center justify-between px-8 py-3.5 max-w-7xl mx-auto color">

        {/* Config da imagem do eureka */}
        <div className='flex items-center'>
            <img 
             className='h-14.5'
             src="images/Logo.png" alt="Logo Eureka"
             />
        </div>

        {/* Botão de login */} {/* abaixo as config da função de trocar de cor quando passar o mouse em cima */}
        <div className='text-white flex-items-center rounded-full border border-white px-8.5 py-1.5 
        cursor-pointer hover:bg-gray-200 hover:text-blue-800 transition duration-300'>
            Login
        </div>
    </div>
    </div>
  );
};

export default Header
