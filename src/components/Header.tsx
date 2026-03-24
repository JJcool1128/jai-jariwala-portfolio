const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Journey", href: "/journey" },
    { label: "Resume", href: "/resume" },
  ];
  
  export default function Header() {
    return (
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(14px)",
          background: "rgba(255, 250, 247, 0.7)",
          borderBottom: "1px solid rgba(160, 140, 180, 0.18)",
        }}
      >
        <nav
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="/"
            style={{
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Jai Jariwala
          </a>
  
          <div
            style={{
              display: "flex",
              gap: "1rem",
              fontSize: "0.95rem",
              color: "var(--muted)",
            }}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>
    );
  }