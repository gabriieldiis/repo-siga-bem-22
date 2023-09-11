// components/Chat.js
const Chat = () => {
    return (
      <div className="bg-gray-100 w-full h-screen flex flex-col">
        <div className="flex-grow p-4 overflow-y-auto">
          {/* Mensagens do chat */}
          <div className="flex mb-4">
            <img
              src="avatar1.png"
              className="w-8 h-8 rounded-full mr-2"
              alt="Avatar"
            />
            <div className="bg-white p-2 rounded-lg">
              <p className="text-gray-800">Olá! Como posso ajudar   ?</p>
            </div>
          </div>
          {/* (Adicione mais mensagens conforme necessário) */}
        </div>
        <div className="flex p-4">
          <input
            type="text"
            className="flex-grow border rounded-full p-2 mr-2 focus:outline-none"
            placeholder="Digite sua mensagem..."
          />
          <button className="bg-blue-500 text-white p-2 rounded-full focus:outline-none">
            Enviar
          </button>
        </div>
      </div>
    );
  };
  
  export default Chat;
  