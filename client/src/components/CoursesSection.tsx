export default function CoursesSection() {

  const courses = [
    {
      title: "Computer Science",
      description: "AI, Data Science, Software Engineering",
      icon: "💻"
    },
    {
      title: "Business",
      description: "Finance, Marketing, Entrepreneurship",
      icon: "📊"
    },
    {
      title: "Engineering",
      description: "Mechanical, Civil, Electrical",
      icon: "⚙️"
    }
  ];

  return (

    <section
      id="courses"
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
          marginBottom: "10px",
          color: "#222"
        }}
      >
        Popular Courses
      </h2>

      <p style={{ color: "#666", marginBottom: "40px" }}>
        Explore our most in-demand programs designed for future leaders.
      </p>

      {/* Course Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >

        {courses.map((course, index) => (

          <div
            key={index}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
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

            {/* Icon */}

            <div style={{ fontSize: "40px", marginBottom: "15px" }}>
              {course.icon}
            </div>

            {/* Title */}

            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#7B1E2B"
              }}
            >
              {course.title}
            </h3>

            {/* Description */}

            <p style={{ color: "#555", fontSize: "15px" }}>
              {course.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}