import { Link } from "react-router-dom";

interface SignupPopupProps {
  show: boolean;
  onClose: () => void;
}

export default function SignupPopup({ show, onClose }: SignupPopupProps) {

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "400px"
        }}
      >

        <h2>Unlock EduReach</h2>

        <p>
          Sign up to access student life, events, placements,
          and talk with our AI counselor.
        </p>

        <div style={{ marginTop: "20px" }}>

          <Link to="/signup">
            <button style={{ marginRight: "10px" }}>
              Sign Up
            </button>
          </Link>

          <button onClick={onClose}>
            Close
          </button>

        </div>

      </div>

    </div>
  );
}