import React from 'react';

const Formulario = () => {
  return (
    <div className="max-w-screen-md mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Fale Conosco</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="nome" className="block font-bold mb-2">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nome" className="block font-bold mb-2">E-mail:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
