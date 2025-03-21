import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./scrollbar.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

// Pages
import Homepage from "./pages/Homepage";
import CaseStudiesPage from "./pages/CaseStudies";
import StartMyProjectPage from "./pages/StartMyProjectPage";
import AboutUsPage from "./pages/AboutUsPage";
import PageNotFound from "./pages/404PageNotFound";
import AdminLoginPage from "./pages/admin/LoginPage";
import AdminDashboardHomePage from "./pages/admin/dashboard";
import CaseStudyPage from "./pages/CaseStudies/[case-study]";
import DesignRushBlogPost from "./pages/blog/gethsemane-technologies-recognized-by-designrush-for-excellence-in-web-design";
import BlogsPage from "./pages/blog";

function App() {
  return (
    <div>
      {/* //   <NavBar navbarRef={navbarRef} /> */}
      <Routes>
        {/* 404 Page not found */}
        <Route path="*" element={<PageNotFound />} />

        <Route path="/" element={<Homepage />} />

        {/* Case studies */}
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        {/* TO-DO: Make dynamic in the future /case-studies/[case-study-id] */}
        <Route path="/case-studies/shuttlelane" element={<CaseStudyPage />} />

        <Route path="/company">
          <Route path="contact-us" element={<StartMyProjectPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
        </Route>

        <Route path="/blog">
          <Route path="" element={<BlogsPage />} />
          <Route
            path="gethsemane-technologies-recognized-by-designrush-for-excellence-in-web-design"
            element={<DesignRushBlogPost />}
          />
        </Route>

        {/* Admin routes */}
        <Route path="/admin">
          <Route path="" element={<AdminLoginPage />} />

          {/* Admin dashboard routes */}
          <Route path="dashboard">
            <Route path="" element={<AdminDashboardHomePage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
