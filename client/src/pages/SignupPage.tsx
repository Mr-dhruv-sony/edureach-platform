import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

export default function SignupPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      const data = await registerUser({
        name,
        email,
        password
      });

      await login(data.token);

      navigate("/");

    } catch (error) {

      alert("Signup failed");

    }

  };

  return (

    <div style={{ padding: "40px" }}>

      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Signup
        </button>

      </form>

      <br />

      <Link to="/login">
        Already have an account?
      </Link>

    </div>

  );
}