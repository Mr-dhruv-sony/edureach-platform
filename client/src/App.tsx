import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminPage from "./pages/AdminPage";

import FloatingChatButton from "./components/FloatingChatButton";
import FloatingCallButton from "./components/FloatingCallButton";

export default function App() {

  return (

    <BrowserRouter>

      <AuthProvider>

        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignupPage />} />

          <Route path="/admin" element={<AdminPage />} />

        </Routes>

        {/* Floating AI Features */}

        <FloatingChatButton />

        <FloatingCallButton />

      </AuthProvider>

    </BrowserRouter>

  );

}