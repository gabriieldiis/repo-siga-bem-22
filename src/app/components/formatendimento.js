import React from 'react';

const Formatendimento = () => {
  return (
    <div className="max-w-screen-md mx-auto p-6 shadow-md rounded-md">
      
      <form>
        <div className="mb-4">
          <input
            type="text"
            id="nome"
            name="nome"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Formatendimento;
