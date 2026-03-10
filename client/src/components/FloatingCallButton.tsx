import { useState } from "react";
import { Phone } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CallPopup from "./CallPopup";

export default function FloatingCallButton() {

  const { user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {

    if (!user) {
      navigate("/login");
      return;
    }

    setOpen(true);

  };

  return (
    <>
      {/* Floating Call Button */}

      <div className="fixed bottom-24 right-6 flex flex-col items-end gap-2 z-50">

        {!open && (
          <span className="bg-black text-white text-xs px-3 py-1 rounded-md shadow">
            Talk to AI Counselor
          </span>
        )}

        <button
          onClick={handleClick}
          className="flex items-center gap-2 bg-[#7B1E2B] text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-transform"
        >
          <Phone size={18} />
          <span className="text-sm font-medium">Talk to Ava</span>
        </button>

      </div>

      {/* Call Popup */}

      <CallPopup
        open={open}
        onClose={() => setOpen(false)}
      />

    </>
  );
}