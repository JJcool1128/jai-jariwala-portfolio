const journeyItems = [
    {
      title: "Early Interest",
      description:
        "My journey in robotics started at a young age through hands-on building, competitions, and a growing curiosity for how systems work.",
    },
    {
      title: "Student Builder",
      description:
        "Over time, that curiosity turned into deeper technical work across robotics, software, controls, and engineering projects in school and beyond.",
    },
    {
      title: "Engineer Today",
      description:
        "Today, I continue building across hardware and software, with a strong focus on robotics, problem solving, and creating systems that have real-world impact.",
    },
  ];
  
  export default function JourneyPage() {
    return (
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "5rem 1.5rem 6rem",
        }}
      >
        <section style={{ maxWidth: "800px" }}>
          <p
            style={{
              margin: "0 0 1rem",
              color: "var(--muted)",
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            My Journey
          </p>
  
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            A long-term path into robotics and engineering.
          </h1>
  
          <div
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gap: "1.25rem",
            }}
          >
            {journeyItems.map((item) => (
              <article
                key={item.title}
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
                    fontSize: "1.2rem",
                  }}
                >
                  {item.title}
                </h2>
  
                <p
                  style={{
                    margin: 0,
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    );
  }