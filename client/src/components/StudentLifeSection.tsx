export default function StudentLifeSection() {

  const highlights = [
    "Modern innovation labs and maker spaces",
    "Global internship opportunities",
    "Student startup incubator",
    "Clubs, sports, and cultural events"
  ];

  return (

    <section
      style={{
        padding: "80px 20px",
        background: "#ffffff"
      }}
    >

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center"
        }}
      >

        {/* Image */}

        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          alt="Student Life"
          style={{
            width: "100%",
            borderRadius: "14px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
          }}
        />

        {/* Content */}

        <div>

          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              marginBottom: "20px"
            }}
          >
            Student Life at EduReach
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.6",
              marginBottom: "20px"
            }}
          >
            Students at EduReach enjoy a vibrant campus culture with
            innovation labs, international internships, student-led
            startups, and collaborative learning environments.
          </p>

          {/* Highlights */}

          <ul style={{ listStyle: "none", padding: 0 }}>

            {highlights.map((item, index) => (

              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  fontWeight: "500",
                  color: "#7B1E2B"
                }}
              >
                ✔ {item}
              </li>

            ))}

          </ul>

        </div>

      </div>

    </section>

  );

}