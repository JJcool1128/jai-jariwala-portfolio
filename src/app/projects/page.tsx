const projects = [
    {
      title: "Humanoid Robotics",
      summary:
        "Worked on motion, testing, diagnostics, and hardware-software consistency across robotic subsystems.",
    },
    {
      title: "SquidBox",
      summary:
        "Developed and integrated embedded and software components across robotics-related systems.",
    },
    {
      title: "Software and Automation Projects",
      summary:
        "Built technical tools and applications across software, automation, and class-based engineering work.",
    },
  ];
  
  export default function ProjectsPage() {
    return (
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "5rem 1.5rem 6rem",
        }}
      >
        <section>
          <p
            style={{
              margin: "0 0 1rem",
              color: "var(--muted)",
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Projects
          </p>
  
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            Things I have built, tested, and improved.
          </h1>
  
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
              marginTop: "2.5rem",
            }}
          >
            {projects.map((project) => (
              <article
                key={project.title}
                style={{
                  padding: "1.5rem",
                  borderRadius: "24px",
                  background: "rgba(255,255,255,0.65)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 10px 30px rgba(31, 23, 38, 0.05)",
                }}
              >
                <h2
                  style={{
                    marginTop: 0,
                    marginBottom: "0.75rem",
                    fontSize: "1.25rem",
                  }}
                >
                  {project.title}
                </h2>
  
                <p
                  style={{
                    margin: 0,
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {project.summary}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    );
  }