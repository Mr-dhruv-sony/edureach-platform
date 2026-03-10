import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { loginAdmin } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const data = await loginAdmin({ email, password });
      await login(data.token);
      navigate("/admin");
    } catch (err: any) {
      setError(err.response?.data?.message || "Admin login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-rose-900 to-orange-700 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-lg"
      >
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-orange-200">
          Admissions Team
        </p>
        <h1 className="mb-2 text-3xl font-bold">Admin Login</h1>
        <p className="mb-6 text-sm text-orange-50/90">
          Use the dedicated admin account to access student leads and CRM data.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-white/20 p-3 placeholder-white/75 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-white/20 p-3 placeholder-white/75 outline-none"
            required
          />

          {error && <p className="text-sm text-red-200">{error}</p>}

          <button
            disabled={submitting}
            className="w-full rounded-lg bg-white py-3 font-semibold text-rose-900 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Signing in..." : "Login as Admin"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Student account?{" "}
          <span onClick={() => navigate("/login")} className="cursor-pointer underline">
            Go to student login
          </span>
        </p>
      </motion.div>
    </div>
  );
}
