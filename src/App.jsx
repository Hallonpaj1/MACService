import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/Error/Error";

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Skip link för accessibility */}
        <a href="#main-content" className="skip-link">
          Hoppa till innehåll
        </a>

        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={
                <main id="main-content" tabIndex={-1}>
                  <Home />
                </main>
              }
            />

            <Route
              path="about"
              element={
                <main id="main-content" tabIndex={-1}>
                  <AboutPage />
                </main>
              }
            />

            <Route
              path="services"
              element={
                <main id="main-content" tabIndex={-1}>
                  <Services />
                </main>
              }
            />

            <Route
              path="contact"
              element={
                <main id="main-content" tabIndex={-1}>
                  <Contact />
                </main>
              }
            />

            <Route
              path="*"
              element={
                <main id="main-content" tabIndex={-1}>
                  <NotFound />
                </main>
              }
            />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;