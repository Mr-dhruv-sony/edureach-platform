import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { sendMessage } from "../services/chat.service";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ChatDrawer({ open, onClose }: Props) {

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm the EduReach AI counselor. How can I help you today?",
      sender: "bot"
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {

    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user"
    };

    setMessages(prev => [...prev, userMessage]);

    const userInput = input;
    setInput("");
    setLoading(true);

    try {

      const res = await sendMessage(userInput);

      const botMessage: Message = {
        id: Date.now() + 1,
        text: res.response,
        sender: "bot"
      };

      setMessages(prev => [...prev, botMessage]);

    } catch {

      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 2,
          text: "Sorry, something went wrong.",
          sender: "bot"
        }
      ]);

    }

    setLoading(false);

  };

  if (!open) return null;

  return (

    <div className="fixed bottom-20 right-6 w-[380px] h-[540px] bg-white shadow-2xl rounded-xl flex flex-col border overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center p-4 border-b bg-[#7B1E2B] text-white">

        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full bg-white text-[#7B1E2B] flex items-center justify-center font-bold">
            AI
          </div>

          <div>
            <p className="text-sm font-semibold">EduReach Counselor</p>
            <p className="text-xs opacity-80">Online</p>
          </div>

        </div>

        <button onClick={onClose}>
          <X size={20} />
        </button>

      </div>


      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">

        {messages.map(msg => (

          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >

            <div
              className={`px-4 py-2 rounded-xl max-w-[75%] text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-[#7B1E2B] text-white"
                  : "bg-white border"
              }`}
            >
              {msg.text}
            </div>

          </div>

        ))}


        {loading && (

          <div className="flex justify-start">

            <div className="bg-white border px-4 py-2 rounded-xl text-sm text-gray-500 animate-pulse">
              AI is typing...
            </div>

          </div>

        )}

        <div ref={messagesEndRef} />

      </div>


      {/* Input */}

      <div className="p-3 border-t flex gap-2 bg-white">

        <input
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B1E2B]"
          placeholder="Ask about courses, admissions..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />

        <button
          onClick={handleSend}
          className="bg-[#7B1E2B] text-white p-2 rounded-lg hover:opacity-90"
        >
          <Send size={18} />
        </button>

      </div>

    </div>

  );

}