import { useState } from "react";
import { X, Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { initiateCall } from "../services/vapi.service";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CallPopup({ open, onClose }: Props) {

  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<"form" | "calling" | "done" | "error">("form");

  const handleSubmit = async () => {

    if (!phone) return;

    try {

      setStatus("calling");

      await initiateCall({
        phone,
        course,
        topic
      });

      setStatus("done");

    } catch {

      setStatus("error");

    }

  };

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-[420px] rounded-2xl shadow-2xl p-6">

        {/* Header */}

        <div className="flex justify-between items-center mb-4">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-[#7B1E2B] text-white flex items-center justify-center font-bold">
              AI
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                Ava — AI Counselor
              </h2>
              <p className="text-xs text-gray-500">
                Instant call assistance
              </p>
            </div>

          </div>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        {/* FORM */}

        {status === "form" && (

          <div className="space-y-4">

            <input
              placeholder="Phone Number"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7B1E2B]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              placeholder="Preferred Course"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7B1E2B]"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />

            <input
              placeholder="Topic (fees, placements...)"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7B1E2B]"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              className="bg-[#7B1E2B] text-white w-full py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90"
            >
              <Phone size={18} />
              Request Call from Ava
            </button>

          </div>

        )}

        {/* CALLING */}

        {status === "calling" && (

          <div className="text-center py-10">

            <Loader2 className="animate-spin mx-auto mb-4 text-[#7B1E2B]" size={32} />

            <p className="font-medium">Connecting you with Ava...</p>

            <p className="text-sm text-gray-500 mt-2">
              Please keep your phone nearby.
            </p>

          </div>

        )}

        {/* SUCCESS */}

        {status === "done" && (

          <div className="text-center py-10">

            <CheckCircle className="text-green-500 mx-auto mb-4" size={36} />

            <p className="font-medium">
              You will receive a call shortly 📞
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Ava will guide you through courses, admissions, and placements.
            </p>

          </div>

        )}

        {/* ERROR */}

        {status === "error" && (

          <div className="text-center py-10">

            <AlertCircle className="text-red-500 mx-auto mb-4" size={36} />

            <p className="font-medium">
              Something went wrong.
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Please try again later.
            </p>

          </div>

        )}

      </div>

    </div>

  );

}