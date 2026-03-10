import { contactInfo } from "../data/content";

export default function Footer() {

  return (

    <footer
      style={{
        background: "#111",
        color: "#ddd",
        padding: "60px 20px 30px 20px"
      }}
    >

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px"
        }}
      >

        {/* Brand */}

        <div>

          <h3 style={{ color: "white", marginBottom: "10px" }}>
            EduReach
          </h3>

          <p style={{ lineHeight: "1.6", color: "#aaa" }}>
            EduReach helps students explore courses, connect with mentors,
            and make smarter education decisions using AI-powered guidance.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h4 style={{ color: "white", marginBottom: "15px" }}>
            Quick Links
          </h4>

          <p>About</p>
          <p>Courses</p>
          <p>Mentors</p>
          <p>Placements</p>

        </div>

        {/* Contact */}

        <div>

          <h4 style={{ color: "white", marginBottom: "15px" }}>
            Contact
          </h4>

          <p>Email: {contactInfo.email}</p>

          <p>Phone: {contactInfo.phone}</p>

          <p>{contactInfo.address}</p>

        </div>

      </div>

      {/* Bottom */}

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid #333",
          paddingTop: "20px",
          color: "#888"
        }}
      >

        © 2026 EduReach. All rights reserved.

      </div>

    </footer>

  );

}