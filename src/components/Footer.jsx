import { COLORS } from "../theme.js";

export default function Footer() {
  return (
    <footer
      style={{
        background: COLORS.charcoal,
        color: "#A8A6A0",
        padding: "24px 20px",
        textAlign: "center",
        fontSize: 12,
        letterSpacing: "0.05em",
      }}
    >
      © {new Date().getFullYear()} YOANNA UDUNNA — DESIGNED &amp; BUILT BY HAND
    </footer>
  );
}
