import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface AdminRouteProps {
  children: ReactNode;
}

export default function AdminRoute({ children }: AdminRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="p-10 text-lg">Checking admin access...</div>;
  }

  if (!user || user.role !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
