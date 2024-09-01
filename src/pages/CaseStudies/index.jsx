import React, { useEffect, useRef } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Fade } from "react-awesome-reveal";
import { SiJavascript } from "react-icons/si";
import LocomotiveScroll from "locomotive-scroll";
import TechStack from "../../components/TechStack";
import ThirdPartyIntegrations from "../../components/ThirdPartyIntegrations";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

// Images
import shuttlelaneLogo from "../../assets/images/projects/shuttlelane/logo.png";
import shuttlelaneDash from "../../assets/images/projects/shuttlelane/shuttlelane-thumb.png";

function CaseStudiesPage() {
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

  // Case studies ref
  const caseStudiesRef = useRef(null);

  return (
    <div
      className="bg-gethsemaneBlack scroll-container"
      data-scroll-container
      ref={scrollRef}
    >
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gethsemaneBlack relative text-gethsemaneBlack overflow-hidden pt-20 p-7 lg:px-14 pb-10 lg:pb-24 lg:top-10">
        <div className="flex flex-col items-center justify-center gap-3 lg:gap-2">
          <Fade direction="up" duration={1000}>
            <h2 className="text-[#FFF] font-medium lg:text-[3rem] text-center text-4xl lg:leading-[60px] leading-[30px]">
              You dream it,{" "}
              <Fade
                direction="up"
                duration={1000}
                delay={200}
                className="inline-block"
              >
                <span className="text-gethsemaneRed lg:text-[3rem] text-4xl">
                  We build it
                </span>
              </Fade>
              .
            </h2>
          </Fade>

          <Fade duration={1000} delay={300}>
            <p className="w-full lg:max-w-2xl text-xl text-center text-[#FFF] mt-7">
              See our latest projects
            </p>

            <IoArrowDownCircleOutline
              size={32}
              color="#fff"
              onClick={() =>
                caseStudiesRef?.current.scrollIntoView({
                  behaviour: "smooth",
                })
              }
              className="cursor-pointer"
            />
          </Fade>
        </div>
      </div>

      {/* About section continued */}
      <div
        ref={caseStudiesRef}
        className="min-h-screen lg:min-h-[800px] relative bg-[#FFF] flex gap-x-24 flex-col items-center justify-center text-gethsemaneBlack w-full p-7 lg:px-14 pt-32 pb-32"
      >
        <div className="flex w-full flex-col lg:px-12 gap-y-3">
          <div className="flex flex-col">
            <Fade duration={700}>
              <h2 className="lg:max-w-[50%] w-full lg:text-[3rem] text-4xl">
                <span className="text-gethsemaneRed lg:text-[3rem] text-4xl">
                  Case studies <br />
                </span>
                <span className="text-lg">
                  See how we have helped our customers achieve their goals
                </span>
              </h2>
            </Fade>
          </div>

          <div className="flex gap-7 flex-col mt-8 py-10">
            <div className="flex lg:flex-row gap-3 lg:items-center flex-col-reverse w-full">
              <div className="lg:w-[50%] w-full flex flex-col lg:gap-y-2 gap-y-3">
                <div className="">
                  <img
                    src={shuttlelaneLogo}
                    alt="Shuttlelane Limited. Built by Effi Emmanuel for Gethsemane Technologies LTD"
                    className="w-[150px] object-contain"
                  />

                  <p className="text-lg lg:w-3/4 w-full mt-5">
                    Airport chauffeur and car rental service
                  </p>
                </div>

                <p className="text-lg lg:w-3/4 w-full pt-5 border-t-gray-4 border-t-[1px]">
                  Shuttlelane is an all in one provider of premium chauffeur
                  services that enables users book airport transfers, car
                  rentals, priority pass and visa on arrivals.
                </p>

                <Link
                  to="/case-studies/shuttlelane"
                  className="text-gethsemaneRed flex flex-row items-center gap-x-2"
                >
                  <span>Shuttlelane case study</span>
                  <FaArrowRight size={16} />
                </Link>
              </div>
              <div className="lg:w-[50%] w-full">
                <img
                  src={shuttlelaneDash}
                  alt="Shuttlelane Limited. Built by Effi Emmanuel for Gethsemane Technologies LTD"
                  className="w-full object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-7 w-full flex flex-row justify-center items-center gap-x-3 mt-14">
          <Link
            to="/company/contact-us"
            className="w-full lg:w-auto flex flex-row justify-center items-center gap-x-3 text-gethsemaneRed lg:text-[4rem] text-2xl p-7 h-32 rounded-full"
          >
            <span>Let's build your next project</span>
            <FaArrowRight
              size={24}
              className="text-gethsemaneRed animate-bounce"
            />
          </Link>
        </div>
      </div>

      <div className="p-7 lg:px-14 pt-32 pb-32">
        <div className="lg:px-12">
          <ThirdPartyIntegrations darkBg={true} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CaseStudiesPage;
