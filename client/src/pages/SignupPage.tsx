import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { registerUser } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

export default function SignupPage() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");
  const [submitting,setSubmitting] = useState(false);

  const handleSubmit = async (e:React.FormEvent) => {

    e.preventDefault();

    if(submitting) return;

    setError("");
    setSubmitting(true);

    try {

      const data = await registerUser({ name,email,password });

      await login(data.token);

      navigate("/");

    } catch(err:any) {

      setError(err?.response?.data?.message || "Unable to create account");

    } finally {

      setSubmitting(false);

    }

  };

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <motion.div
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-md text-white"
      >

        <h1 className="text-3xl font-bold text-center mb-1">
          Create Account
        </h1>

        <p className="text-center text-sm mb-6 opacity-90">
          Start exploring your future with EduReach
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/30 placeholder-white outline-none focus:ring-2 focus:ring-white"
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/30 placeholder-white outline-none focus:ring-2 focus:ring-white"
            required
          />

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/30 placeholder-white outline-none focus:ring-2 focus:ring-white"
            required
          />

          <p className="text-xs opacity-80">
            Use at least 6 characters
          </p>

          {error && (
            <p className="text-sm text-red-200 bg-red-500/20 p-2 rounded">
              {error}
            </p>
          )}

          <button
            disabled={submitting}
            className="w-full bg-white text-purple-700 font-semibold py-2 rounded-lg hover:scale-105 transition disabled:opacity-60"
          >
            {submitting ? "Creating account..." : "Sign Up"}
          </button>

        </form>

        <p className="text-center mt-6 text-sm">

          Already have an account?{" "}

          <span
            onClick={()=>navigate("/login")}
            className="underline cursor-pointer"
          >
            Login
          </span>

        </p>

      </motion.div>

    </div>

  );

}