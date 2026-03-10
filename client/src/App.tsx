import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminPage from "./pages/AdminPage";
import AdminLoginPage from "./pages/AdminLoginPage";

import AdminRoute from "./components/AdminRoute";

import FloatingChatButton from "./components/FloatingChatButton";
import FloatingCallButton from "./components/FloatingCallButton";

function AppShell() {

  const location = useLocation();

  const hideFloatingActions = location.pathname.startsWith("/admin");

  return (

    <>
    
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/admin/login" element={<AdminLoginPage />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />

      </Routes>

      {!hideFloatingActions && (
        <>
          <FloatingChatButton />
          <FloatingCallButton />
        </>
      )}

    </>

  );

}

export default function App() {

  return (

    <BrowserRouter>

      <AuthProvider>

        <AppShell />

      </AuthProvider>

    </BrowserRouter>

  );

}