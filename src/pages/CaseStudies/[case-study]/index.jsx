import React, { useEffect, useRef } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Fade } from "react-awesome-reveal";
import { SiJavascript } from "react-icons/si";
import LocomotiveScroll from "locomotive-scroll";
import TechStack from "../../../components/TechStack";
import ThirdPartyIntegrations from "../../../components/ThirdPartyIntegrations";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

// Images
import shuttlelaneLogo from "../../../assets/images/projects/shuttlelane/logo.png";
import shuttlelaneDash from "../../../assets/images/projects/shuttlelane/shuttlelane-thumb.png";

function CaseStudyPage() {
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
      className="bg-[#FFF] scroll-container"
      data-scroll-container
      ref={scrollRef}
    >
      <NavBar blackBg={true} />
      <div className="min-h-screen flex lg:flex-row flex-col-reverse gap-7 lg:justify-between lg:gap-x-4 bg-[#FFF] relative text-gethsemaneBlack overflow-hidden pt-20 p-7 lg:px-14 pb-10 lg:pb-24 lg:top-10">
        {/* About section continued */}
        <div className="relative flex gap-x-24 flex-col items-center text-gethsemaneBlack w-full lg:w-[70%] mt-12">
          <div className="flex w-full flex-col gap-y-3">
            <div className="flex flex-col">
              <Fade duration={700}>
                <h2 className="w-full lg:text-[3rem] text-4xl">
                  <span className="text-gethsemaneBlack lg:text-[3rem] text-4xl">
                    Shuttlelane <br />
                  </span>
                  <span className="text-lg">
                    Airport chauffeur and car rental service
                  </span>
                </h2>
              </Fade>
            </div>

            <div className="flex gap-7 flex-col pb-10">
              <div className="flex lg:flex-row gap-3 lg:items-center flex-col-reverse w-full">
                <div className="w-full flex flex-col lg:gap-y-2 gap-y-3">
                  <p className="text-lg w-full pt-5 border-t-gray-4 border-t-[1px]">
                    Shuttlelane is an all in one provider of premium chauffeur
                    services that enables users book airport transfers, car
                    rentals, priority pass and visa on arrivals. Book airport
                    transfers, car rentals, priority pass and visa on arrivals
                    on Shuttlelane.
                  </p>
                  <p className="text-lg w-full pt-5 border-t-gray-4">
                    We have been working with the Shuttlelane team since 2020,
                    so they had a lot of trust in our expertise in designing and
                    building cutting-edge and customer-focused web applications
                    and mobile applications. Our team focused on crafting a
                    beautiful UI design and an immersive and seamless user
                    experience. Continuous collaboration with Shuttlelane
                    allowed us to refine their booking process, automate their
                    processes, etc, resulting in a redesign that was both
                    visually and functionally aligned with Shuttlelane's vision
                    and plan for its customers.
                  </p>
                  <p className="text-lg w-full pt-5 border-t-gray-4">
                    The resulting website showcased a functional representation
                    of all 4 services offered by Shuttlelane (Airport Transfer,
                    Car Rental, Priority Pass and Visa On Arrival) and
                    Shuttlelane's promise of putting their customers first and
                    offering the bese user experience, setting a new benchmark
                    in design that supports complex functionalities in a
                    user-friendly manner. Despite the challenges of integrating
                    complex functionalities such as Google Maps Direction API,
                    an automated currency detection and conversion system etc,
                    into a cohesive layout, the successful launch of the
                    Shuttlelane web application stands as a testament to our
                    team's expertise in creating web applications that are both
                    visually appealing and 100% functional to meet company
                    goals.
                  </p>
                  <p className="text-lg w-full pt-5 border-t-gray-4">
                    However, despite our detailed execution, the web application
                    was ultimately not launched on time due to an unforeseen
                    radical shift in product requirements at Shuttlelane, which
                    occurred just as we were adding the finishing touches. This
                    late-stage pivot made it clear that the new strategic
                    direction required a different approach to the web
                    application's design and architecture. Nevertheless, the
                    Shuttlelane web application has been launched and remains a
                    benchmark within our portfolio, demonstrating our commitment
                    to pushing the boundaries of design and user interaction in
                    web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="h-max relative flex gap-x-24 flex-col items-center text-gethsemaneBlack w-full lg:w-[25%] mt-12 border-[1px] rounded-lg border-gray-4 p-4">
          <div className="flex w-full flex-col gap-y-3">
            <div className="flex flex-row items-center justify-between">
              <Fade duration={700}>
                <img
                  src={shuttlelaneLogo}
                  alt="Shuttlelane Limited. Built by Effi Emmanuel for Gethsemane Technologies LTD"
                  className="w-[150px] object-contain"
                />
              </Fade>

              <Link
                to="https://www.shuttlelane.com"
                target="_blank"
                className="py-1 border-[1px] w-24 text-center border-gray-500 rounded-full hover:bg-gethsemaneRed hover:border-transparent transition-all hover:text-white text-gray-500"
              >
                Visit
              </Link>
            </div>

            <div className="flex gap-3 flex-col w-full">
              <div className="w-full flex flex-col lg:gap-y-2 gap-y-3">
                <p className="text-lg lg:w-3/4 w-full pt-5 font-semibold text-gethsemaneRed">
                  Services provided
                </p>
                <ul className="flex flex-col gap-y-2">
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      UI/UX Design
                    </p>
                  </li>
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      Frontend Development
                    </p>
                  </li>
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      Backend Development
                    </p>
                  </li>
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      Hosting and Deployment
                    </p>
                  </li>
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      Maintenance
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-full flex flex-col lg:gap-y-2 gap-y-3">
                <p className="text-lg lg:w-3/4 w-full pt-5 font-semibold text-gethsemaneRed">
                  Technology stack
                </p>
                <ul className="flex flex-col gap-y-2">
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      React.js
                    </p>
                  </li>
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      JavaScript
                    </p>
                  </li>
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      TailwindCSS
                    </p>
                  </li>
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      Node.js
                    </p>
                  </li>
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      Express.js
                    </p>
                  </li>
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      MongoDB
                    </p>
                  </li>
                  <li>
                    <p className="text-lg lg:w-3/4 w-full border-t-gray-4">
                      DigitalOcean
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CaseStudyPage;
