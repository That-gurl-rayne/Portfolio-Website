import { COLORS } from "../theme.js";

export default function Nav({ page, setPage }) {
  const items = ["home", "work", "about", "contact"];
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(26,17,71,0.75)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: `2px solid ${COLORS.blue}`,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <button
          onClick={() => setPage("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "'Archivo Black', sans-serif",
            color: COLORS.paper,
            fontSize: 22,
            letterSpacing: "0.02em",
          }}
        >
          UDUNNA YOANNA
        </button>
        <div style={{ display: "flex", gap: 22, fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: "0.08em" }}>
          {items.map((it) => (
            <button
              key={it}
              onClick={() => setPage(it)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 2px",
                color: page === it ? COLORS.blue : COLORS.paper,
                borderBottom: page === it ? `2px solid ${COLORS.blue}` : "2px solid transparent",
                textTransform: "uppercase",
              }}
            >
              {it}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
