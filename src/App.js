import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./scrollbar.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import StartMyProjectPage from "./pages/StartMyProjectPage";
import AboutUsPage from "./pages/AboutUsPage";
import PageNotFound from "./pages/404PageNotFound";

function App() {
  return (
    <div>
      {/* //   <NavBar navbarRef={navbarRef} /> */}
      <Routes>
        {/* 404 Page not found */}
        <Route path="*" element={<PageNotFound />} />

        <Route path="/" element={<Homepage />} />

        <Route path="/company">
          <Route path="contact-us" element={<StartMyProjectPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
