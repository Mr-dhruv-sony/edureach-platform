export default function AchievementsSection() {
  return (
    <section style={{ padding: "60px", background: "#7B1E2B", color: "white" }}>
      <h2 style={{ textAlign: "center" }}>Our Achievements</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "30px",
        }}
      >
        <div>
          <h3>20K+</h3>
          <p>Students</p>
        </div>

        <div>
          <h3>150+</h3>
          <p>Courses</p>
        </div>

        <div>
          <h3>95%</h3>
          <p>Placement Rate</p>
        </div>

        <div>
          <h3>500+</h3>
          <p>Mentors</p>
        </div>
      </div>
    </section>
  );
}