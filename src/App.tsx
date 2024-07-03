import AppHeader from "@/components/shared/AppHeader";
import { AnimatePresence } from "framer-motion";
import ButtonWhatsapp from "@/components/reusable/ButtonWhatsapp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "@/assets/css/App.css";
import "@/assets/css/Customstyles.css";
import { lazy, Suspense } from "react";
import AppFooter from "./components/shared/AppFooter";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <AnimatePresence>
        <div className="m-0 p-0 border-none box-border transition duration-300 bg-secondary-light dark:bg-primary-dark">
          <ButtonWhatsapp />

          <Router>
            <AppHeader />
            <ScrollToTop />
            <Suspense fallback={""}>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Suspense>
            <AppFooter />
          </Router>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
