import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import SoundBar from "./subComponents/SoundBar";

// Lazy-loaded Components
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const ExperiencePage = lazy(() => import("./components/ExperiencePage"));

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        <AnimatePresence mode="wait">
          <Suspense fallback={<div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", backgroundColor: lightTheme.body }}>Loading...</div>}>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/skills" element={<MySkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="*" element={<Main />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
