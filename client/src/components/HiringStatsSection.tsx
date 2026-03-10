export default function HiringStatsSection() {

  const recruiters = [
    "Google",
    "Amazon",
    "Microsoft",
    "Meta",
    "Tesla"
  ];

  return (

    <section
      id="placements"
      style={{
        padding: "80px 20px",
        background: "#faf7f5",
        textAlign: "center"
      }}
    >

      {/* Title */}

      <h2
        style={{
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "10px"
        }}
      >
        Top Recruiters
      </h2>

      <p style={{ color: "#666", marginBottom: "40px" }}>
        Our graduates are hired by the world’s leading companies.
      </p>

      {/* Placement Stats */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          marginBottom: "60px"
        }}
      >

        <div>
          <h3 style={{ fontSize: "32px", color: "#7B1E2B" }}>92%</h3>
          <p>Placement Rate</p>
        </div>

        <div>
          <h3 style={{ fontSize: "32px", color: "#7B1E2B" }}>42 LPA</h3>
          <p>Highest Package</p>
        </div>

        <div>
          <h3 style={{ fontSize: "32px", color: "#7B1E2B" }}>10.2 LPA</h3>
          <p>Average CSE Package</p>
        </div>

      </div>

      {/* Recruiter Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "25px",
          maxWidth: "800px",
          margin: "0 auto"
        }}
      >

        {recruiters.map((company, index) => (

          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
              fontWeight: "600",
              color: "#444",
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {company}
          </div>

        ))}

      </div>

    </section>

  );

}