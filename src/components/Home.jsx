import { useState, useEffect } from "react";
import { COLORS, GLASS } from "../theme.js";
import { TICKER } from "../data.js";

export default function Home({ setPage }) {
  const [tickIdx, setTickIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTickIdx((i) => (i + 1) % TICKER.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <section
        style={{
          background: `radial-gradient(circle at 80% 20%, rgba(111,227,224,0.12), transparent 45%), ${COLORS.indigo}`,
          color: COLORS.paper,
          padding: "90px 20px 70px",
          borderBottom: `2px solid ${COLORS.blue}`,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 50, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 420px", minWidth: 280 }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: "0.15em", color: COLORS.blue, marginBottom: 18 }}>
              VOL. 01 — Lagos, NIGERIA
            </p>
            <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(42px, 8vw, 92px)", lineHeight: 0.95, margin: 0, letterSpacing: "-0.02em" }}>
              MULTI-
              <br />
              HYPHENATE.
            </h1>
            <div style={{ marginTop: 28, height: 26, display: "flex", alignItems: "center", overflow: "visible" }}>
              <p
                key={tickIdx}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 16,
                  color: COLORS.cyan,
                  letterSpacing: "0.05em",
                  animation: "fadeIn 0.4s ease",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {TICKER[tickIdx]}
              </p>
            </div>
            <p style={{ maxWidth: 480, marginTop: 30, fontSize: 17, lineHeight: 1.6, color: "#D9D4EE" }}>
              Design, code, and words — usually all in the same week. I build brand
              identities, interfaces, and the occasional full-stack app, then edit
              the video that announces it.
            </p>
            <button
              onClick={() => setPage("work")}
              style={{
                marginTop: 34,
                background: COLORS.blue,
                color: COLORS.ink,
                border: "none",
                padding: "14px 28px",
                fontFamily: "'DM Mono', monospace",
                fontSize: 14,
                letterSpacing: "0.08em",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              See the work →
            </button>
          </div>

          <div style={{ flex: "0 1 300px", minWidth: 220, display: "flex", justifyContent: "center" }}>
            <div
              style={{
                ...GLASS,
                width: "100%",
                maxWidth: 300,
                aspectRatio: "4 / 5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(160deg, rgba(79,195,247,0.18), rgba(111,227,224,0.08))`,
                }}
              />
              <p style={{ position: "relative", fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#B9E9E7", textAlign: "center", padding: "0 16px", letterSpacing: "0.03em" }}>
                YOUR PHOTO HERE
                <br />
                <span style={{ fontSize: 11, color: "#8E88A8" }}>upload it and I'll drop it in</span>
              </p>
            </div>
          </div>
        </div>
      </section>

     <section
  style={{
    background: COLORS.indigo,
    padding: "60px 20px",
  }}
>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <p style={{ fontFamily: "'Fustat', sans-serif", fontSize: 13, letterSpacing: "0.12em", color: COLORS.cyan, marginBottom: 20, textTransform: "uppercase" }}>
      In this issue
    </p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
      {[
        { h: "Brand systems", d: "Logos, guidelines, and identities built to hold up across every touchpoint." },
        { h: "Interfaces", d: "Figma-first UI/UX, from wireframe to shipped product." },
        { h: "Everything else", d: "React apps, video edits, and writing — the parts that don't fit a category." },
      ].map((c) => (
        <div key={c.h} style={{ borderTop: `3px solid ${COLORS.cyan}`, paddingTop: 14 }}>
          <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 20, color: COLORS.paper, margin: "0 0 8px" }}>{c.h}</h3>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, color: "#B9B5D6", lineHeight: 1.5, margin: 0 }}>{c.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}
