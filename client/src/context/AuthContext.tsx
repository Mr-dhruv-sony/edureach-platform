import { createContext, useContext, useState, useEffect } from "react";
import { getMe } from "../services/auth.service";

interface User {
  id: string
  name: string
  email: string
  phone?: string
  role: "student" | "admin"
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (token: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (token: string) => {

    localStorage.setItem("token", token);

    try {
      const userData = await getMe();
      setUser(userData);
    } catch (error) {
      localStorage.removeItem("token");
      throw error;
    }
  };

  const logout = () => {

    localStorage.removeItem("token");

    setUser(null);
  };

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    getMe()
      .then((data) => {
        setUser(data);
      })
      .catch(() => {
        localStorage.removeItem("token");
      })
      .finally(() => setLoading(false));

  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};

export const useAuth = () => {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
