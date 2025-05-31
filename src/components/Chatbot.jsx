import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const sendMessage = () => {
    if (!input) return;
    const respuesta = { user: input, bot: "Esto es una respuesta simulada de IA." };
    setHistory([...history, respuesta]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-80 bg-white shadow-lg rounded-lg border p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-green-700">Chatbot Inteligente</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-red-600 font-bold"
            >
              ×
            </button>
          </div>
          <div className="max-h-48 overflow-y-auto mb-2 text-sm space-y-1">
            {history.map((msg, idx) => (
              <div key={idx}>
                <div><strong>Tú:</strong> {msg.user}</div>
                <div><strong>Bot:</strong> {msg.bot}</div>
              </div>
            ))}
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border w-full p-1 rounded mb-1 text-sm"
            placeholder="Escribe tu mensaje"
          />
          <button
            onClick={sendMessage}
            className="bg-green-600 text-white w-full py-1 rounded text-sm hover:bg-green-700"
          >
            Enviar
          </button>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
          aria-label="Abrir chatbot"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
