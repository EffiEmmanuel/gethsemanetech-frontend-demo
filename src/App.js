import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./scrollbar.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import StartMyProjectPage from "./pages/StartMyProjectPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <div>
      {/* //   <NavBar navbarRef={navbarRef} /> */}
      <Routes>
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
