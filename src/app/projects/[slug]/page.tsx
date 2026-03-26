import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: "980px",
        margin: "0 auto",
        padding: "5rem 1.5rem 6rem",
      }}
    >
      <section style={{ marginBottom: "3rem" }}>
        <p
          style={{
            margin: "0 0 1rem",
            color: "var(--muted)",
            fontSize: "0.95rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Project
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2.75rem, 6vw, 4.75rem)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          {project.title}
        </h1>

        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "1.15rem",
            lineHeight: 1.8,
            color: "var(--muted)",
            maxWidth: "760px",
          }}
        >
          {project.subtitle}
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1.25rem",
          paddingTop: "1.5rem",
          paddingBottom: "2.5rem",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {[
          ["Role", project.role],
          ["Timeline", project.timeline],
          ["Team", project.team],
          ["Process", project.process],
        ].map(([label, value]) => (
          <div key={label}>
            <p
              style={{
                margin: "0 0 0.5rem",
                fontSize: "0.85rem",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {label}
            </p>
            <p style={{ margin: 0, fontWeight: 600 }}>{value}</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2
          style={{
            fontSize: "1.6rem",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
          }}
        >
          Summary
        </h2>
        <p
          style={{
            margin: 0,
            color: "var(--muted)",
            lineHeight: 1.9,
            fontSize: "1.05rem",
          }}
        >
          {project.summary}
        </p>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2
          style={{
            fontSize: "1.6rem",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
          }}
        >
          Main Content
        </h2>
        <p
          style={{
            margin: 0,
            color: "var(--muted)",
            lineHeight: 1.9,
            fontSize: "1.05rem",
          }}
        >
          {project.mainContent}
        </p>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2
          style={{
            fontSize: "1.6rem",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
          }}
        >
          Takeaways
        </h2>
        <p
          style={{
            margin: 0,
            color: "var(--muted)",
            lineHeight: 1.9,
            fontSize: "1.05rem",
          }}
        >
          {project.takeaways}
        </p>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2
          style={{
            fontSize: "1.6rem",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
          }}
        >
          Learn More
        </h2>
        <p
          style={{
            margin: 0,
            color: "var(--muted)",
            lineHeight: 1.9,
            fontSize: "1.05rem",
          }}
        >
          {project.learnMore}
        </p>
      </section>
    </main>
  );
}