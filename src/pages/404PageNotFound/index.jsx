import React, { useEffect, useRef } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// Images
// import pageNotFoundGraphics from "../../assets/images/404.svg";

function PageNotFound() {
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
    <div
      className="bg-[#FFF] scroll-container"
      data-scroll-container
      ref={scrollRef}
    >
      <NavBar />
      <div className="min-h-screen bg-[#FFF] text-gethsemaneBlack overflow-hidden pt-20 p-7 lg:px-14 pb-20 lg:pb-48 relative top-20">
        <div className="flex flex-col gap-y-4 items-center w-full">
          {/* <img
            src={pageNotFoundGraphics}
            alt=""
            className="opacity-0 lg:max-w-[18%] lg:w-[18%] max-w-[200px] w-[200px] object-contain lg:opacity-80"
          /> */}

          <Fade duration={1000}>
            <h2 className="lg:text-[3rem] text-3xl font-semibold w-full lg:max-w-3xl text-center mt-12 leading-[40px] lg:leading-[50px]">
              Oops! We couldn't find the page you are looking for
            </h2>
          </Fade>

          <div className="relative z-50 mt-8 w-full flex lg:flex-row flex-col gap-5 items-center justify-center">
            <Fade direction="up" className="lg:w-52 w-[70%]" duration={1000}>
              <Link
                to="/"
                className="h-10 text-sm lg:w-52 w-full border-[1.8px] flex flex-row items-center justify-center border-black p-3 rounded-full"
              >
                Go back to homepage
              </Link>
            </Fade>

            <Fade
              direction="up"
              className="lg:w-52 w-[70%]"
              duration={1000}
              delay={300}
            >
              <Link
                to="/company/contact-us"
                className="h-10 text-sm lg:w-52 w-full bg-gethsemaneRed text-white flex flex-row items-center justify-center p-3 rounded-full"
              >
                Start my project
              </Link>
            </Fade>
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center">
          <h1 className="lg:text-[20rem] font-bold text-[10rem] opacity-5 mt-10 lg:-mt-20">
            404
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PageNotFound;
