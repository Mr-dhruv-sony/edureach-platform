import { useState } from "react";
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