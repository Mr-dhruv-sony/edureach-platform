import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignupPage(){

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    navigate("/login");
  };

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <motion.div
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-md text-white"
      >

        <h1 className="text-3xl font-bold text-center mb-4">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/30 placeholder-white outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/30 placeholder-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/30 placeholder-white outline-none"
          />

          <button className="w-full bg-white text-purple-600 font-semibold py-2 rounded-lg hover:scale-105 transition">
            Sign Up
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