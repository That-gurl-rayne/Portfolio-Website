import { COLORS } from "../theme.js";

export default function Contact() {
  return (
     <div style={{ background: COLORS.indigo, padding: "70px 20px", minHeight: "60vh" }}>
      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "'Fustat', sans-serif", fontSize: 13, letterSpacing: "0.12em", color: COLORS.cyan, marginBottom: 12, textTransform: "uppercase" }}>
          Letters to the editor
        </p>
        <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(32px, 6vw, 52px)", color: COLORS.paper, marginBottom: 20 }}>
          Let's work together
        </h2>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, color: "#B9B5D6", lineHeight: 1.6, marginBottom: 34 }}>
          Open to freelance, internships, and anything that needs a strong visual point of view.
        </p>
        <a
          href="mailto:terryyoan@gmail.com"
          style={{
            display: "inline-block",
            background: COLORS.indigo,
            color: COLORS.paper,
            padding: "16px 36px",
            fontFamily: "'DM Mono', monospace",
            fontSize: 14,
            letterSpacing: "0.06em",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          terryyoan@gmail.com
        </a>
      </div>
    </div>
  );
}
