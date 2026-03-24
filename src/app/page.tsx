export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "5rem 1.5rem 6rem",
      }}
    >
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <p
            style={{
              margin: "0 0 1rem",
              color: "var(--muted)",
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Robotics • Software • Problem Solving
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.06em",
            }}
          >
            Jai Jariwala
          </h1>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: "var(--muted)",
              maxWidth: "640px",
            }}
          >
            I am a robotics engineer, lifelong builder, and creative problem
            solver who enjoys turning ideas into real systems across hardware
            and software.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/projects"
              style={{
                padding: "0.9rem 1.3rem",
                borderRadius: "999px",
                background: "var(--foreground)",
                color: "white",
                fontWeight: 600,
              }}
            >
              View Projects
            </a>

            <a
              href="/journey"
              style={{
                padding: "0.9rem 1.3rem",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.65)",
                fontWeight: 600,
              }}
            >
              My Journey
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}