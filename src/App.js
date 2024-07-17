import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./scrollbar.css";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState(null);

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
      </Routes>
    </div>
  );
}

export default App;
