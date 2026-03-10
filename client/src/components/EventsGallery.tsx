export default function EventsGallery() {

  const events = [
    {
      title: "Hackathon 2026",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      title: "Startup Summit",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
    },
    {
      title: "Tech Fest",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      title: "AI Workshop",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b"
    }
  ];

  return (

    <section
      style={{
        padding: "80px 20px",
        background: "#f8f6f4",
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
        Campus Events
      </h2>

      <p style={{ color: "#666", marginBottom: "40px" }}>
        Explore exciting events happening at EduReach.
      </p>

      {/* Event Grid */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >

        {events.map((event, index) => (

          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 35px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
            }}
          >

            {/* Event Image */}

            <img
              src={event.image}
              alt={event.title}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover"
              }}
            />

            {/* Event Title */}

            <div style={{ padding: "20px" }}>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#7B1E2B"
                }}
              >
                {event.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}