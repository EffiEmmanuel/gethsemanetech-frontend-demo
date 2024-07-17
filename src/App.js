import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./scrollbar.css";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import StartMyProjectPage from "./pages/StartMyProjectPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Additional options can be added here
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} className="scroll-container">
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
