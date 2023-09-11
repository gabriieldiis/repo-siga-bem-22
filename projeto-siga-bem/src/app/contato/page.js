// pages/Contato.js
import React from 'react';

const Integrante = ({ nome, cargo, email, imagem }) => {
  return (
    <div className="flex items-center mb-4">
      <img src={imagem} className="w-12 h-12 rounded-full mr-4" alt={nome} />
      <div>
        <h2 className="text-xl font-bold mb-2">{nome}</h2>
        <p className="text-gray-700 mb-1">{cargo}</p>
        <p className="text-blue-500">{email}</p>
      </div>
    </div>
  );
};

const Contato = () => {
  const integrantes = [
    {
      nome: 'João Silva',
      cargo: 'Desenvolvedor Frontend',
      email: 'joao.silva@example.com',
      imagem: '/images/pessoa1.jpg',
    },
    {
      nome: 'Maria Souza',
      cargo: 'Designer UX/UI',
      email: 'maria.souza@example.com',
      imagem: '/images/pessoa2.jpg',
    },
    {
      nome: 'José Oliveira',
      cargo: 'Desenvolvedor Backend',
      email: 'jose.oliveira@example.com',
      imagem: '/images/pessoa3.jpg',
    },
    {
      nome: 'Ana Santos',
      cargo: 'Gerente de Projeto',
      email: 'ana.santos@example.com',
      imagem: '/images/pessoa4.jpg',
    },
    {
      nome: 'Pedro Pereira',
      cargo: 'Analista de QA',
      email: 'pedro.pereira@example.com',
      imagem: '/images/pessoa5.jpg',
    },
  ];

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Entre em Contato</h1>
      {integrantes.map((integrante, index) => (
        <Integrante
          key={index}
          nome={integrante.nome}
          cargo={integrante.cargo}
          email={integrante.email}
          imagem={integrante.imagem}
        />
      ))}
    </div>
  );
};

export default Contato;
