import React from 'react'
import imgUser from '../assets/images/tl.png';
import { Link } from 'react-router-dom'

{/* Cabeçalho da pagina */}

const Userstats = () => {
  let user = localStorage.getItem("nome");

  return (
    <div className="w-full bg-white px-40 py-11 flex items-center border-b">
      
      {/* Textos */}

    <div className='px-9'>
        <img src={imgUser} alt="Userphoto" className='h-25'/> 
     </div>

      <div className="flex flex-col">   

        <p className="text-lg font-semibold text-gray-900">
          Bem-vindo(a) de volta, {user?.split(' ').slice(0, 2).join(' ') || ''}
        </p>

        <p className="text-sm text-7xl text-gray-500">
          {user}
        </p>

        <a
          href="#"  
          className="text-sm text-blue-600 hover:underline w-fit"
        >
          Editar Perfil
        </a>
      </div>
    </div>
  );
};

export default Userstats;
