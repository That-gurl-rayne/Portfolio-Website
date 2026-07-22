import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div style={{ fontFamily: "'DM Mono', monospace", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Mono:wght@400;500&family=Fustat:wght@500;700&display=swap');
        * { box-sizing: border-box; }
        html, body, #root { min-height: 100%; }
        body { margin: 0; background: #1A1147; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 8px rgba(111,227,224,0.4), 0 8px 32px rgba(0,0,0,0.25); }
  50% { box-shadow: 0 0 22px rgba(111,227,224,0.9), 0 8px 32px rgba(0,0,0,0.25); }
}
.glow-btn { transition: box-shadow 0.3s ease; }
.glow-btn:hover { animation: pulseGlow 1.4s ease-in-out infinite; }
        @media (max-width: 720px) {
          .work-row { grid-template-columns: 1fr !important; }
          .work-row > div { order: 0 !important; }
        }
           .hover-lift { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
          .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 14px 40px rgba(0,0,0,0.35); border-color: rgba(111,227,224,0.7); }
        }
      `}</style>
      <Nav page={page} setPage={setPage} />
      <main style={{ flex: 1 }}>
        {page === "home" && <Home setPage={setPage} />}
        {page === "work" && <Work />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}