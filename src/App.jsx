import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./pages/Error/Error";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />} />

            <Route path="services" element={<Services />} />

            <Route path="contact" element={<Contact />} />

            <Route path="integritetspolicy" element={<PrivacyPolicy />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;