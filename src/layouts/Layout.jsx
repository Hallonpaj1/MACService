import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import "./Layout.css";

export default function Layout() {
  const handleSkipLinkClick = (event) => {
    event.preventDefault();

    const mainContent = document.getElementById("main-content");

    if (!mainContent) {
      return;
    }

    mainContent.focus({ preventScroll: true });
    mainContent.scrollIntoView({ block: "start" });
  };

  return (
    <div className="layout">

      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Skip link (accessibility + keyboard users + SEO bonus signal) */}
      <a
        href="#main-content"
        className="skip-link"
        onClick={handleSkipLinkClick}
      >
        Hoppa till innehåll
      </a>

      {/* NAVIGATION */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main
        id="main-content"
        className="main"
        aria-label="Huvudinnehåll"
        tabIndex={-1}
      >
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}