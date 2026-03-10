import { images, siteConfig } from "../data/content";

export default function HeroSection() {

  return (

    <section
      style={{
        minHeight: "85vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
          url(${images.hero})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
        color: "white"
      }}
    >

      <div
        style={{
          maxWidth: "700px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          padding: "50px 40px",
          borderRadius: "14px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.35)"
        }}
      >

        {/* Title */}

        <h1
          style={{
            fontSize: "56px",
            fontWeight: "700",
            marginBottom: "10px"
          }}
        >
          {siteConfig.name}
        </h1>

        {/* Tagline */}

        <p
          style={{
            fontSize: "22px",
            color: "#f1f1f1",
            marginBottom: "30px"
          }}
        >
          {siteConfig.tagline}
        </p>

        {/* CTA Buttons */}

        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>

          <button
            style={{
              padding: "14px 26px",
              background: "#7B1E2B",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "500"
            }}
          >
            🤖 Chat with AI Counselor
          </button>

          <button
            style={{
              padding: "14px 26px",
              background: "transparent",
              border: "2px solid white",
              color: "white",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "500"
            }}
          >
            📞 Request a Call
          </button>

        </div>

      </div>

    </section>

  );

}