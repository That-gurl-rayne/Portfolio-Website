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
    <div style={{ fontFamily: "'DM Mono', monospace", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Mono:wght@400;500&family=Fustat:wght@500;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 720px) {
          .work-row { grid-template-columns: 1fr !important; }
          .work-row > div { order: 0 !important; }
        }
      `}</style>
      <Nav page={page} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "work" && <Work />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
      <Footer />
    </div>
  );
}
