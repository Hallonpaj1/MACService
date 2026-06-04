import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">

      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Skip link (accessibility + keyboard users + SEO bonus signal) */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Hoppa till innehåll
      </a>

      {/* NAVIGATION */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main
        id="main-content"
        className="main"
        role="main"
        aria-label="Huvudinnehåll"
      >
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}