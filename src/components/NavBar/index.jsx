// @ts-nocheck
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
// Images
import gethsemaneTechLogo from "../../assets/logos/gethsemane-tech.svg";
import WebDesignWebDevDrop from "../WebDesignWebDevDrop";

function NavBar(props) {
  const [attachAnimation, setAttachAnimation] = useState(false);
  const [detachAnimation, setDetachAnimation] = useState(false);

  // Menu states
  const [isServicesActive, setIsServicesActive] = useState(false);

  return (
    <div className="relative z-[30] w-full px-7 lg:px-7 pt-7">
      <div className="fixed top-7 left-0 right-0 h-20 w-full px-3 lg:px-10">
        <div className="flex items-center w-full h-full bg-white p-5 rounded-full">
          <div className="w-full flex items-center justify-between">
            <Link to="/">
              <img
                src={gethsemaneTechLogo}
                className="max-w-[130px] w-[120px] lg:w-[130px] object-contain"
              />
            </Link>

            <div className="flex items-center gap-x-5">
              <nav className="">
                <ul className="lg:flex flex-row items-center gap-x-5 hidden">
                  {/* <div
              className="relative"
              onMouseOver={() => {
                setIsServicesActive(true);
              }}
              onMouseOut={() => {
                setIsServicesActive(false);
              }}
            >
              <p className="text-sm font-medium pb-5 mt-5">Services</p>

              {isServicesActive && (
                <Fade duration={1000}>
                  <WebDesignWebDevDrop />
                </Fade>
              )}
            </div> */}

                  <li>
                    <Link
                      to="/company/contact-us"
                      className="text-md font-medium hover:text-gethsemaneRed transition-all"
                    >
                      Build My Project
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/company/about-us"
                      className="text-md font-medium hover:text-gethsemaneRed transition-all"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/case-studies"
                      className="text-md font-medium hover:text-gethsemaneRed transition-all"
                    >
                      Case Studies
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="mailto:@info@gethsemanetech.com"
                      className="text-md font-medium text-gethsemaneRed"
                    >
                      info@gethsemanetech.com
                    </Link>
                  </li>
                </ul>
              </nav>
              <button
                onClick={() => {
                  setAttachAnimation(true);
                  setDetachAnimation(false);
                }}
                className="focus:outline-none lg:hidden inline-block"
              >
                {/* <span className="text-lg lg:text-xl mr-8">menu</span> */}
                <RiMenu3Line size={26} />
                {/* <div className="fixed top-10 lg:right-14 right-7">
              <button
                onClick={() => {
                  setAttachAnimation(true);
                  setDetachAnimation(false);
                }}
                className="flex flex-col gap-y-1 items-center justify-center w-6 focus:outline-none"
              >
                <span className="block relative top-0 h-[2px] w-full my-[1px] bg-black transition-all"></span>
                <span className="block relative top-0 h-[2px] w-full my-[1px] bg-black transition-all"></span>
              </button>
            </div> */}
              </button>
            </div>
          </div>

          <div
            className={`w-full fixed left-0 z-[10] top-0 min-h-screen items-end ${
              attachAnimation ? "flex flex-row" : "hidden"
            } ${detachAnimation && "hidden"} transition-all`}
          >
            <div
              className={`w-1/4 bg-black rec1 ${
                attachAnimation ? "rec1OpenAnimation" : ""
              } z-[10] ${detachAnimation ? "" : ""}`}
            ></div>
            <div
              className={`w-1/4 bg-black rec2 ${
                attachAnimation ? "rec2OpenAnimation" : ""
              } z-[10] ${detachAnimation ? "" : ""}`}
            ></div>
            <div
              className={`w-1/4 bg-black rec3 ${
                attachAnimation ? "rec3OpenAnimation" : ""
              } z-[10] ${detachAnimation ? "" : ""}`}
            ></div>
            <div
              className={`w-1/4 bg-black rec4 ${
                attachAnimation ? "rec4OpenAnimation" : ""
              } z-[10] ${detachAnimation ? "" : ""}`}
            ></div>
          </div>

          <div
            className={`w-full fixed left-0 z-[11] top-0 min-h-screen items-end ${
              attachAnimation ? "flex flex-row" : "hidden"
            } ${detachAnimation && "hidden"} transition-all`}
          >
            <div
              className={`w-1/4 bg-white rec1 ${
                attachAnimation ? "rec5OpenAnimation" : ""
              } ${detachAnimation ? "rec1CloseAnimation" : ""} z-[11]`}
            ></div>
            <div
              className={`w-1/4 bg-white rec2 ${
                attachAnimation ? "rec6OpenAnimation" : ""
              } ${detachAnimation ? "rec2CloseAnimation" : ""} z-[11]`}
            ></div>
            <div
              className={`w-1/4 bg-white rec3 ${
                attachAnimation ? "rec7OpenAnimation" : ""
              } ${detachAnimation ? "rec3CloseAnimation" : ""} z-[11]`}
            ></div>
            <div
              className={`w-1/4 bg-white rec4 ${
                attachAnimation ? "rec8OpenAnimation" : ""
              } ${detachAnimation ? "rec4CloseAnimation" : ""} z-[11]`}
            ></div>
          </div>

          <div
            ref={props?.navbarRef}
            className={`${
              attachAnimation
                ? "navbarContentAnimation"
                : "hidden bg-transparent"
            } ${
              detachAnimation ? "navbarContentCloseAnimation" : ""
            } transition-all w-full z-[9] left-1 fixed top-6 right-0 shadow-md min-h-screen py-7 px-7 lg:px-14`}
          >
            <Fade
              duration={1000}
              delay={3200}
              className="w-full relative z-[20]"
            >
              <div className="w-full flex items-center justify-between">
                <img
                  src={gethsemaneTechLogo}
                  className="max-w-[130px] w-[120px] lg:w-[130px]  object-contain"
                />

                <button className="focus:outline-none">
                  {/* <span className="text-lg lg:text-xl mr-8">close</span> */}
                  <div className="fixed top-[58px] lg:right-14 right-9">
                    <button
                      onClick={() => {
                        setDetachAnimation(true);
                      }}
                      className="focus:outline-none flex flex-col gap-y-1 items-center justify-center w-6"
                    >
                      <FaXmark size={24} />
                    </button>
                  </div>
                </button>
              </div>
            </Fade>

            <Fade duration={1000} delay={3500}>
              <div className="absolute z-[10] top-0 left-0 right-0 flex justify-center w-full h-[80%] items-center">
                <div className="flex flex-col gap-y-7 items-center">
                  <Link
                    to="/company/contact-us"
                    className="text-2xl font-medium hover:translate-x-1 hover:text-gethsemaneRed transition-all"
                  >
                    Build My Project
                  </Link>
                  <Link
                    to="/company/about-us"
                    className="text-2xl font-medium hover:translate-x-1 hover:text-gethsemaneRed transition-all"
                  >
                    About us
                  </Link>
                  <Link
                    to="/case-studies"
                    className="text-2xl font-medium hover:translate-x-1 hover:text-gethsemaneRed transition-all"
                  >
                    Case Studies
                  </Link>
                  {/* <Link
                    to="/company/blog"
                    className="text-2xl font-medium hover:translate-x-1 hover:text-gethsemaneRed transition-all"
                  >
                    Blog
                  </Link> */}
                  <Link
                    to="mailto:@gethsemanestech@gmail.com"
                    className="text-2xl font-medium hover:translate-x-1 text-gethsemaneRed"
                  >
                    info@gethsemanetech.com
                  </Link>
                </div>

                <div className="absolute bottom-10 left-0 right-0 w-full flex flex-col items-center gap-y-2">
                  <p className="text-xs">
                    Copyright &copy; 2024. Gethsemane Technologies
                  </p>

                  <div className="flex items-center gap-x-4">
                    <Link to="/" className="text-xs">
                      LinkedIn
                    </Link>
                    <span to="/" className="text-xs">
                      |
                    </span>
                    <Link to="/" className="text-xs">
                      Instagram
                    </Link>
                    <span to="/" className="text-xs">
                      |
                    </span>
                    <Link to="/" className="text-xs">
                      Twitter (X)
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
