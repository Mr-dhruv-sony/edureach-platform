import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import CoursesSection from "../components/CoursesSection";
import MentorsSection from "../components/MentorsSection";
import StudentLifeSection from "../components/StudentLifeSection";
import EventsGallery from "../components/EventsGallery";
import HiringStatsSection from "../components/HiringStatsSection";
import Footer from "../components/Footer";
import SignupPopup from "../components/SignupPopup";
import CallPopup from "../components/CallPopup";

export default function HomePage() {

  const { user } = useAuth();

  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [openCallPopup, setOpenCallPopup] = useState(false);

  const handleMentorsReached = () => {

    if (!user && !sessionStorage.getItem("popupShown")) {

      setShowSignupPopup(true);
      sessionStorage.setItem("popupShown", "true");

    }

  };

  return (

    <div>

      <Navbar />

      <HeroSection />

      <section
        style={{
          padding: "28px 20px",
          background: "#fff8f3",
          borderBottom: "1px solid #f1dfd2"
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap"
          }}
        >
          <div>
            <p style={{ margin: 0, color: "#7B1E2B", fontWeight: 700 }}>
              Student home page
            </p>
            <p style={{ margin: "6px 0 0", color: "#6b5b52" }}>
              Students stay on the public site after login. Admin access is now
              handled through a separate login route.
            </p>
          </div>
          <Link
            to="/admin/login"
            style={{
              padding: "12px 18px",
              background: "#7B1E2B",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600
            }}
          >
            Admin Login
          </Link>
        </div>
      </section>

      <AboutSection />

      <AchievementsSection />

      <CoursesSection />

      <MentorsSection onReachMentors={handleMentorsReached} />

      {user ? (

        <>
          <StudentLifeSection />
          <EventsGallery />
          <HiringStatsSection />

          {/* AI Counselor CTA Section */}

          <section
            style={{
              padding: "80px",
              textAlign: "center",
              background: "#f6f2ef"
            }}
          >

            <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
              Talk to Ava — Our AI Counselor
            </h2>

            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              Have questions about admissions, fees, placements, or campus life?
              Our AI counselor Ava can call you and answer everything instantly.
            </p>

            <button
              onClick={() => setOpenCallPopup(true)}
              style={{
                marginTop: "25px",
                padding: "12px 26px",
                fontSize: "16px",
                background: "#7c2d12",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              📞 Request Call from Ava
            </button>

          </section>

        </>

      ) : (

        <section
          style={{
            padding: "80px",
            textAlign: "center",
            background: "#faf7f5"
          }}
        >

          <h2>Want to See More?</h2>

          <p>
            Sign up to unlock campus life, events,
            placements, and talk with our AI counselor.
          </p>

        </section>

      )}

      <Footer />

      <SignupPopup
        show={showSignupPopup}
        onClose={() => setShowSignupPopup(false)}
      />

      <CallPopup
        open={openCallPopup}
        onClose={() => setOpenCallPopup(false)}
      />

    </div>

  );

}
