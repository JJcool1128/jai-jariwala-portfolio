export default function ResumePage() {
    return (
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "5rem 1.5rem 6rem",
        }}
      >
        <section style={{ maxWidth: "760px" }}>
          <p
            style={{
              margin: "0 0 1rem",
              color: "var(--muted)",
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Resume
          </p>
  
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            Experience, skills, and technical background.
          </h1>
  
          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--muted)",
            }}
          >
            This page will hold your downloadable resume and, later, an embedded
            preview.
          </p>
  
          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: "1.5rem",
              padding: "0.9rem 1.3rem",
              borderRadius: "999px",
              background: "var(--foreground)",
              color: "white",
              fontWeight: 600,
            }}
          >
            Download Resume
          </a>
        </section>
      </main>
    );
  }