import React from 'react'
import imgcapavideo from "../assets/images/Video.png";

const Item = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=R6ZgU_NNNo0&list=PLpdAy0tYrnKzswWFck3df5gL6pmRjZkK5&index=2"
      className="
        group
        flex flex-col gap-2
        bg-white rounded-2xl p-3
        transition-transform duration-300
        hover:scale-[1.03]
      "
    >
      {/* Container da imagem */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={imgcapavideo}
          alt="Capa dos videos"
          className="aspect-video w-full object-cover"
        />

        {/* Overlay com degradê */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/70 via-black/30 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            flex items-center justify-center
          "
        >
          {/* Ícone Play */}
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-black ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold">
          Titulo do Curso
        </h3>

        <p className="truncate text-gray-500">
          A antiguidade clássica, mormente, a alexandrina...
        </p>
      </div>

      <p className="text-sm">
        <span className="font-semibold">Tópico:</span> Linguagens
      </p>
    </a>
  )
}

export default Item

