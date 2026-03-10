import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatDrawer from "./ChatDrawer";

export default function FloatingChatButton() {

  const [open, setOpen] = useState(false);

  return (
    <>

      {/* Floating Chat Button */}

      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-50">

        {!open && (
          <span className="bg-black text-white text-xs px-3 py-1 rounded-md shadow">
            Chat with AI
          </span>
        )}

        <button
          onClick={() => setOpen(true)}
          className="bg-[#7B1E2B] text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform"
        >
          <MessageCircle size={24} />
        </button>

      </div>

      {/* Chat Drawer */}

      <ChatDrawer open={open} onClose={() => setOpen(false)} />

    </>
  );
}