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
    <div className="relative z-[30] w-full px-7 lg:px-14 pt-7">
      <div className="w-full flex items-center justify-between">
        <img
          src={gethsemaneTechLogo}
          className="max-w-[110px] w-[110px] object-contain"
        />

        <div className="flex items-center gap-x-5">
          <div className="lg:flex flex-row items-center gap-x-5 hidden">
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
            <Link
              to="/"
              className="text-sm font-medium hover:text-gethsemaneRed transition-all"
            >
              Start my project
            </Link>
            <Link
              to="/"
              className="text-sm font-medium hover:text-gethsemaneRed transition-all"
            >
              About us
            </Link>
            <Link
              to="/"
              className="text-sm font-medium hover:text-gethsemaneRed transition-all"
            >
              Blog
            </Link>
            <Link
              to="mailto:@gethsemanestech@gmail.com"
              className="text-sm font-medium text-gethsemaneRed"
            >
              info@gethsemanetech.com
            </Link>
          </div>
          <button
            onClick={() => {
              setAttachAnimation(true);
              setDetachAnimation(false);
            }}
            className="focus:outline-none lg:hidden inline-block"
          >
            {/* <span className="text-lg lg:text-xl mr-8">menu</span> */}
            <RiMenu3Line size={20} />
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
          attachAnimation ? "navbarContentAnimation" : "hidden bg-transparent"
        } ${
          detachAnimation ? "navbarContentCloseAnimation" : ""
        } transition-all w-full z-[9] left-0 fixed top-0 right-0 shadow-md min-h-screen py-7 px-7 lg:px-14`}
      >
        <Fade duration={1000} delay={3200} className="w-full">
          <div className="w-full flex items-center justify-between">
            <img
              src={gethsemaneTechLogo}
              className="max-w-[110px] w-[110px] object-contain"
            />

            <button className="focus:outline-none">
              {/* <span className="text-lg lg:text-xl mr-8">close</span> */}
              <div className="fixed top-[30px] lg:right-14 right-7">
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
      </div>
    </div>
  );
}

export default NavBar;
