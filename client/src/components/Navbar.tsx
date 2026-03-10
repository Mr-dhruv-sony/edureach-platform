import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { navLinks, siteConfig } from "../data/content";

export default function Navbar() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (

    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "white",
        borderBottom: "1px solid #eee"
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px"
        }}
      >

        {/* Logo */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer"
          }}
          onClick={() => navigate("/")}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#7B1E2B"
            }}
          >
            {siteConfig.name}
          </span>

          <span
            style={{
              fontSize: "12px",
              color: "#777"
            }}
          >
            {siteConfig.tagline}
          </span>
        </div>

        {/* Navigation Links */}

        <div style={{ display: "flex", gap: "20px" }}>

          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "#444",
                fontWeight: "500"
              }}
            >
              {link.label}
            </a>
          ))}

        </div>

        {/* Auth Buttons */}

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

          {!user && (
            <>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#555",
                  fontWeight: "500"
                }}
              >
                Login
              </Link>

              <Link
                to="/signup"
                style={{
                  background: "#7B1E2B",
                  color: "white",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
              >
                Signup
              </Link>

              <Link
                to="/admin/login"
                style={{
                  textDecoration: "none",
                  color: "#7B1E2B",
                  fontWeight: "600"
                }}
              >
                Admin Login
              </Link>
            </>
          )}

          {user && (
            <>
              <span
                style={{
                  fontWeight: "500",
                  color: "#333"
                }}
              >
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                style={{
                  background: "#7B1E2B",
                  border: "none",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Logout
              </button>

              {user.role === "admin" && (
                <Link
                  to="/admin"
                  style={{
                    textDecoration: "none",
                    color: "#7B1E2B",
                    fontWeight: "600"
                  }}
                >
                  Dashboard
                </Link>
              )}
            </>
          )}

        </div>

      </div>

    </nav>

  );
}
