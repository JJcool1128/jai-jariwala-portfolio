import Link from "next/link";
import { projects } from "@/data/projects";
import { journeyItems } from "@/data/journey";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 1.5rem 6rem",
      }}
    >
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          padding: "5rem 0 3rem",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
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
              maxWidth: "700px",
            }}
          >
            Robotics engineer, lifelong builder, and problem solver creating
            systems that connect hardware, software, and real human impact.
          </p>

          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "1.08rem",
              lineHeight: 1.85,
              color: "var(--muted)",
              maxWidth: "760px",
            }}
          >
            My journey started with Lego projects and FIRST at age 11, grew into
            representing India and earning Gold at the 2019 World Robot
            Olympiad Open Category, and continued through building end-to-end
            robotic systems like Ava, a 3D-printed humanoid robot. My passion
            for creating projects that can meaningfully serve people has pushed
            me to gain experience building reliable electromechanical software
            systems and creating seamless integration between hardware and
            software.
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
              href="#featured-projects"
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

      <section
        id="featured-projects"
        style={{
          paddingTop: "2rem",
          scrollMarginTop: "100px",
        }}
      >
        <p
          style={{
            margin: "0 0 1rem",
            color: "var(--muted)",
            fontSize: "0.95rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Featured Projects
        </p>

        <h2
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          Projects that reflect how I build, solve, and learn.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card"
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-card-body">
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: "0.75rem",
                    fontSize: "1.2rem",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="timeline-section">
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

        <h2
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            maxWidth: "760px",
          }}
        >
          A timeline of how curiosity turned into robotics, engineering, and direction.
        </h2>

        <div
          style={{
            display: "block",
          }}
        >
          <div className="timeline-grid">
            <div className="timeline-line" />

            {journeyItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={item.title} className="timeline-item">
                  {isLeft ? (
                    <>
                      <div className="timeline-card">
                        <div className="timeline-card-image">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="timeline-card-body">
                          <p className="timeline-date">{item.date}</p>
                          <h3 className="timeline-title">{item.title}</h3>
                          <p className="timeline-description">{item.description}</p>
                        </div>
                      </div>
                      <div className="timeline-node" />
                      <div className="timeline-spacer" />
                    </>
                  ) : (
                    <>
                      <div className="timeline-spacer" />
                      <div className="timeline-node" />
                      <div className="timeline-card">
                        <div className="timeline-card-image">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="timeline-card-body">
                          <p className="timeline-date">{item.date}</p>
                          <h3 className="timeline-title">{item.title}</h3>
                          <p className="timeline-description">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}