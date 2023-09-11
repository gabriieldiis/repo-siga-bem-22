// components/Botao.js
import React from 'react';

const Botao = ({ texto, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded"
    >
      Clique Aqui
    </button>
  );
};

export default Botao;
