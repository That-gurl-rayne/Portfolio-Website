import { useState } from "react";
import { COLORS, GLASS } from "../theme.js";

export default function Contact() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(""), 1800);
    });
  };

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

        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=terryyoan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
               className="glow-btn"
              style={{
                ...GLASS,
                display: "inline-block",
                color: COLORS.paper,
                padding: "16px 28px",
                fontFamily: "'DM Mono', monospace",
                fontSize: 14,
                letterSpacing: "0.06em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              terryyoan@gmail.com
            </a>
            <button
              onClick={() => copyToClipboard("terryyoan@gmail.com", "email")}
               className="hover-lift"
              style={{
                ...GLASS,
                background: "transparent",
                color: COLORS.cyan,
                padding: "16px 18px",
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.05em",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {copied === "email" ? "Copied!" : "Copy"}
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 15,
                color: COLORS.paper,
                letterSpacing: "0.04em",
              }}
            >
              +234 08156129009
            </span>
            <button
             
             onClick={() => copyToClipboard("+234 08156129009", "phone")}
            className="hover-lift"
             style={{
                ...GLASS,
                background: "transparent",
                color: COLORS.cyan,
                padding: "8px 14px",
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.05em",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {copied === "phone" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}