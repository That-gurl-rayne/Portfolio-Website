import { COLORS, GLASS } from "../theme.js";
import { PROJECTS } from "../data.js";

export default function Work() {
  return (
    <div
      style={{
        background: `radial-gradient(circle at 85% 10%, rgba(111,227,224,0.10), transparent 45%), ${COLORS.indigo}`,
        padding: "70px 20px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(36px, 6vw, 56px)", color: COLORS.paper, marginBottom: 10 }}>The Work</h2>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, color: "#B9B5D6", marginBottom: 50 }}>Selected projects, in no particular order. Tap a project to see the full files.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
          {PROJECTS.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)",
                gap: 30,
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
              className="work-row"
            >
              <div
               className="hover-lift" 
                style={{
                  order: i % 2 === 0 ? 0 : 1,
                  height: 220,
                  borderRadius: 4,
                  background: p.image ? `url(${p.image}) center/cover no-repeat` : p.grad,
                }}
              />
              <div style={{ order: i % 2 === 0 ? 1 : 0, ...GLASS, padding: "24px 26px" }}>
                <p style={{ fontFamily: "'Fustat', sans-serif", fontSize: 12, letterSpacing: "0.12em", color: COLORS.cyan, marginBottom: 8, textTransform: "uppercase" }}>{p.tag}</p>
                <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 28, color: COLORS.paper, margin: "0 0 10px" }}>{p.title}</h3>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14.5, lineHeight: 1.6, color: "#C7C2E3", margin: "0 0 14px" }}>{p.blurb}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tools.map((t) => (
                    <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: 11.5, border: `1px solid ${COLORS.cyan}`, color: COLORS.cyan, padding: "3px 8px", borderRadius: 20 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}