import { useEffect, useRef } from "react";

interface MentorsSectionProps {
  onReachMentors?: () => void;
}

export default function MentorsSection({ onReachMentors }: MentorsSectionProps) {

  const sectionRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        const entry = entries[0];

        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          onReachMentors?.();
        }

      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, [onReachMentors]);

  const mentors = [
    {
      name: "Dr. Sarah Lee",
      role: "AI Researcher",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      name: "Michael Carter",
      role: "Startup Mentor",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Prof. David Kim",
      role: "Software Architect",
      avatar: "https://i.pravatar.cc/150?img=45"
    }
  ];

  return (

    <section
      ref={sectionRef}
      id="mentors"
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
        Popular Mentors
      </h2>

      <p style={{ color: "#666", marginBottom: "40px" }}>
        Learn from industry leaders and experienced educators.
      </p>

      {/* Mentor Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >

        {mentors.map((mentor, index) => (

          <div
            key={index}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
            }}
          >

            {/* Avatar */}

            <img
              src={mentor.avatar}
              alt={mentor.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px"
              }}
            />

            {/* Name */}

            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "5px"
              }}
            >
              {mentor.name}
            </h3>

            {/* Role */}

            <p style={{ color: "#7B1E2B", fontWeight: "500" }}>
              {mentor.role}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}