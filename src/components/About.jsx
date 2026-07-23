import { COLORS } from "../theme.js";

const QA = [
  {
    q: "How did you get into this?",
    a: "Graphic design in secondary school, then it just kept expanding — UI/UX, then code, because I got tired of handing off designs and watching them get built wrong.",
  },
  {
    q: "What's the throughline?",
    a: "Bold, maximalist, a little unapologetic. I'd rather a design have a strong opinion than be safe.",
  },
  {
    q: "What are you studying?",
    a: "Software Engineering at Lead City University, Ibadan — which is also why the apps I design tend to actually ship.",
  },
  {
    q: "Off duty?",
    a: "Writing, since I was 13. Some music production. Creative Directing, currently in the fashion scene. I also like to make  drawing videos, and I have a small YouTube channel where I post some of my work.",
  },
];

export default function About() {
  return (
    <div style={{ background: COLORS.indigo, color: COLORS.paper, padding: "70px 20px", minHeight: "60vh" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(36px, 6vw, 56px)", marginBottom: 40 }}>About</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          {QA.map((item) => (
            <div key={item.q} style={{ borderLeft: `3px solid ${COLORS.blue}`, paddingLeft: 20 }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: COLORS.cyan, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Q — {item.q}</p>
              <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0, color: "#E8E5F5" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
