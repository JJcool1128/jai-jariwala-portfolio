export default function Footer() {
    return (
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          marginTop: "4rem",
          background: "rgba(255, 255, 255, 0.45)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "var(--muted)",
              fontSize: "0.95rem",
            }}
          >
            Built by Jai Jariwala
          </p>
  
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a href="https://github.com/JJcool1128" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:your-email@example.com">Email</a>
          </div>
        </div>
      </footer>
    );
  }