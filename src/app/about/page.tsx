export default function AboutPage() {
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
            About Me
          </p>
  
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            Engineer, builder, and lifelong robotics enthusiast.
          </h1>
  
          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--muted)",
            }}
          >
            I am passionate about robotics, automation, and problem solving across
            both hardware and software. My interests come from a long-standing
            fascination with building systems that move, interact, and make a real
            impact in the world.
          </p>
  
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--muted)",
            }}
          >
            Over time, that interest has grown into hands-on experience with
            robotics projects, software development, embedded work, and technical
            problem solving. I enjoy learning deeply, building creatively, and
            approaching challenges with curiosity, persistence, and a strong
            systems mindset.
          </p>
        </section>
      </main>
    );
  }