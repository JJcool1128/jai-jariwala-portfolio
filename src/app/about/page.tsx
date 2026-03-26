export default function AboutPage() {
    return (
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "5rem 1.5rem 6rem",
        }}
      >
        <section style={{ maxWidth: "780px" }}>
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
            Lifelong robotics enthusiast with a passion for building things that matter.
          </h1>
  
          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--muted)",
            }}
          >
            I am a robotics engineer who has been drawn to building from a young
            age. What started with Lego projects and early robotics experiences
            grew into a long-term passion for creating systems that move,
            interact, and solve meaningful real-world problems.
          </p>
  
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--muted)",
            }}
          >
            Since then, I have continued building across robotics, software, and
            electromechanical systems. My experiences have ranged from competitive
            robotics and international achievement to developing end-to-end
            robotic systems and working on the integration between hardware and
            software. I enjoy solving difficult problems, learning deeply, and
            creating systems that are both technically strong and human-centered.
          </p>
        </section>
      </main>
    );
  }