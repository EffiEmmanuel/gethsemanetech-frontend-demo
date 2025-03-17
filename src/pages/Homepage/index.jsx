import React, { useEffect, useRef } from "react";
import NavBar from "../../components/NavBar";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { Fade } from "react-awesome-reveal";

// Images
import gethsemaneTechCircleAsset from "../../assets/images/gethsemane-tech-circle-asset.png";
import wave from "../../assets/images/wave.jpg";

// Project images
import shuttlelaneLogo from "../../assets/images/projects/shuttlelane/logo.png";
import NewProjectForm from "../../forms/NewProjectForm";
import LocomotiveScroll from "locomotive-scroll";
import ThirdPartyIntegrations from "../../components/ThirdPartyIntegrations";
import TechStack from "../../components/TechStack";
import { GridLines } from "../../components/UI/GridLines";

MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower();

export default function Homepage() {
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
      <div className="mt-28 lg:mt-16">
        {/* Hero section */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 min-h-screen w-full -top-[50%] overflow-hidden flex items-center justify-center">
            <GridLines />
          </div>
          <div className="w-full text-center px-7 lg:px-14 min-h-[65vh] lg:min-h-[70vh] mt-12 lg:relative lg:top-20">
            <Fade
              duration={1000}
              direction="up"
              delay={1300}
              className="lg:-mt-5"
            >
              <h1 className="lg:text-[1.5rem] text-2xl mb-5 text-[#ED2A6C]">
                /ɡɛθˈsɛməni/
              </h1>
            </Fade>
            <Fade duration={1000} className="lg:-mt-5">
              <h1 className="font-medium lg:text-7xl text-[1.8rem]">
                We are a{" "}
                <span className="font-medium text-[#ED2A6C]">Software</span>{" "}
                <span className="italic font-medium">design</span>
              </h1>
            </Fade>
            <Fade duration={1000} className="lg:-mt-4">
              <h1 className="font-medium lg:mt-7 lg:text-7xl text-[1.8rem]">
                and <span className="italic font-medium">development</span>{" "}
                agency
              </h1>
            </Fade>

            <Fade delay={1500} duration={1300}>
              <img
                src={gethsemaneTechCircleAsset}
                className="absolute -bottom-10 -right-10 max-w-[250px] lg:w-[250px] object-contain animate-spin"
                alt=""
              />
            </Fade>

            <div className="mt-8 w-full flex lg:flex-row flex-col gap-5 items-center justify-center">
              <Fade direction="up" className="lg:w-52 w-[70%]" duration={1000}>
                <Link
                  to="/case-studies"
                  className="h-10 text-sm lg:w-52 w-full border-[1.8px] flex flex-row items-center justify-center border-black p-3 rounded-full"
                >
                  Learn more
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
                  Get a quote
                </Link>
              </Fade>
            </div>
          </div>
        </div>

        <div data-scroll-section className="bg-[#FFF]">
          {/* About section */}
          <div className="min-h-screen lg:min-h-[800px] relative -top-32 bg-black flex gap-x-24 flex-row items-center justify-between text-white mt-20 rounded-tr-[30px] rounded-tl-[30px] w-full pt-24 p-7 lg:px-14">
            <div className="lg:w-[50%] lg:inline-block hidden overflow-hidden">
              <Fade duration={700}>
                <video
                  className="h-[400px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://res.cloudinary.com/gethsemane-tech/video/upload/v1716549555/gt-3d-asset1_ifb7tq.mp4" />
                </video>
              </Fade>
            </div>

            <div className="lg:w-[50%] w-full flex flex-col lg:px-12 gap-y-3">
              <div className="flex flex-col">
                <Fade duration={700}>
                  <h2 className="lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px]">
                    Building a website or web application is a{" "}
                    <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px] italic font-light">
                      complex
                    </span>{" "}
                    thing to do on your own{" "}
                  </h2>
                </Fade>
              </div>

              <Fade duration={700}>
                <p className="">
                  Most times, you just go wild cherry-picking & managing
                  freelancers but it doesn’t have to be like that.
                </p>
              </Fade>

              {/* Gethsemane Technologies is a
              leading software development agency focused on UI/UX design,
              mobile and web development. */}

              <Fade duration={700}>
                <Link
                  to="/company/contact-us"
                  className="mt-8 lg:mt-4 border-2 flex items-center justify-center hover:bg-gethsemaneRed hover:text-white transition-all hover:border-transparent border-white bgansparent h-24 w-full lg:w-1/2 rounded-full"
                >
                  Let's build your project
                </Link>
              </Fade>
            </div>
          </div>

          {/* About section continued */}
          <div className="mt-12 min-h-screen lg:min-h-[800px] relative -top-48 bg-gethsemaneBlack flex gap-x-24 flex-col items-center justify-center text-white rounded-br-[30px] rounded-bl-[30px] w-full p-7 lg:px-14 pt-14 pb-32">
            <div className="flex w-full flex-col lg:px-12 gap-y-3">
              <div className="flex flex-col">
                <Fade duration={700}>
                  <h2 className="lg:max-w-[50%] w-full lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px]">
                    Work with{" "}
                    <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px] italic font-light">
                      Gethsemane Technologies{" "}
                    </span>
                    to see the difference
                  </h2>
                </Fade>
              </div>

              <div className="flex lg:flex-row lg:justify-between gap-7 flex-col mt-8 pb-10">
                <div className="flex lg:flex-row gap-3 flex-col lg:w-1/3 w-full">
                  <h2 className="text-gethsemaneRed text-xl font-medium">1.</h2>

                  <div className="flex-col flex gap-y-2">
                    <h2 className="text-white text-xl font-medium">
                      Rockstar Team
                    </h2>
                    <p className="font-light">
                      At Gethsemane Technologies, we've got a rockstar squad
                      packed with insanely talented web, graphic, and motion
                      designers, plus our awesome software engineers. And
                      they're led by project managers who really know their
                      craft. This whole crew has this incredible synergy and
                      combined experience that helps us deliver mind-blowing
                      websites and web applications time after time. It's like
                      magic, but better!
                    </p>
                  </div>
                </div>

                <div className="flex lg:flex-row gap-3 flex-col lg:w-1/3 w-full">
                  <h2 className="text-gethsemaneRed text-xl font-medium">2.</h2>

                  <div className="flex-col flex gap-y-2">
                    <h2 className="text-white text-xl font-medium">
                      Effective Communication
                    </h2>
                    <p className="font-light">
                      Communication is the key to any successful relationship.
                      Here at Gethsemane Technologies, we prioritize prompt
                      responses, addressing inquiries within hours. Our team
                      eagerly engages in discussions to comprehend your
                      requirements thoroughly. Throughout the project lifecycle,
                      we maintain transparency by providing regular updates,
                      ensuring you remain well-informed about our progress on
                      your project.
                    </p>
                  </div>
                </div>

                <div className="flex lg:flex-row gap-3 flex-col lg:w-1/3 w-full">
                  <h2 className="text-gethsemaneRed text-xl font-medium">3.</h2>

                  <div className="flex-col flex gap-y-2">
                    <h2 className="text-white text-xl font-medium">
                      Realizing Your Vision
                    </h2>
                    <p className="font-light">
                      Members of our team have robust technical backgrounds in
                      Open Source, DevOps, and SaaS domains. This expertise
                      enables us to seamlessly translate the technological
                      complexities of your project into visually appealing and
                      clear graphics, ensuring a seamless and engaging user
                      experience. Our approach not only enhances the visual
                      appeal but also bridges the gap between complex technical
                      details and user-friendly presentations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:px-14 pt-32 pb-3">
              <ThirdPartyIntegrations darkBg={true} />
            </div>
          </div>

          {/* Featured projects section */}
          {/* <div className="mt-24 lg:mt-0 -top-56 bg-[#FFF] rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] relative text-gethsemaneBlack overflow-hidden p-7 lg:px-14 py-10"></div> */}
          <div className="-top-16 lg:-top-32 min-h-[300px] lg:min-h-[300px] relative bg-[#FFF] flex gap-x-24 flex-row justify-between text-gethsemaneBlack rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] w-full pt-0 lg:pt-20 p-7 lg:px-14">
            <div className="flex w-full flex-col gap-y-3">
              <div className="flex flex-col lg:px-14">
                <h2 className="lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px]">
                  Featured{" "}
                  <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px] italic font-light">
                    Project
                  </span>
                </h2>
                <p className="">Check out our most recent project.</p>
              </div>

              <div className="flex flex-row justify-center gap-10 w-full">
                {/* Featured Project Card */}
                <div className="w-full flex flex-col justify-center gap-y-48">
                  <div className="flex flex-col gap-y-8 w-full lg:justify-between">
                    <div className="w-full flex lg:flex-row flex-col gap-y-5 lg:justify-between overflow-hidden lg:items-center">
                      <div className="w-full lg:w-[55%] lg:px-12">
                        <div className="rounded-xl w-full h-[350px] overflow-hidden flex flex-row items-center justify-center bg-[#AECAB4]">
                          <video
                            className="h-[350px] w-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src="https://res.cloudinary.com/gethsemane-tech/video/upload/v1717873683/Untitled_design_anqubd.mp4" />
                          </video>
                        </div>
                      </div>

                      <div className="w-full lg:w-[45%] flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-4 mt-3">
                          <div className="flex flex-row items-center gap-x-2">
                            <img
                              src={shuttlelaneLogo}
                              alt="Shuttlelane Limited. Developed by Gethsemane Technologies LTD."
                              className="w-[110px] object-contain"
                            />

                            <div className="w-[70px] h-6 flex items-center justify-center p-1 px-4 border-[1px] border-gray-400 rounded-full">
                              <span className="text-sm uppercase text-gray-400">
                                SaaS
                              </span>
                            </div>
                          </div>
                          <p className="text-md lg:pr-14">
                            Book airport transfers, car rentals, priority pass
                            and visa on arrivals on Shuttlelane. Shuttlelane is
                            a tested and trusted service provider in ground
                            transportation in Nigeria’s commercial heartbeat –
                            Lagos. At Shuttlelane, you get the best of executive
                            airport services. Because we are committed to
                            enriching your travel experiences, we always make
                            sure that you get unique standard services from us.
                            Our focus at Shuttlelane is simple – to give you
                            comfortable, safe airport taxi. And, we do this by
                            putting quality services and customer satisfaction
                            first. Take your time to enjoy our finest
                            customer-centered services because you deserve only
                            the best.
                          </p>
                        </div>
                        <div className="w-full flex lg:flex-row flex-col gap-y-5 gap-x-10 lg:items-center">
                          <Link
                            to="/case-studies/shuttlelane"
                            className="h-10 hover:bg-gethsemaneRed transition-all hover:text-white hover:border-transparent text-sm lg:w-52 w-full border-[1.8px] flex flex-row items-center justify-center border-black p-3 rounded-full"
                          >
                            Case study
                          </Link>
                          <Link
                            to="https://www.shuttlelane.com"
                            className="h-10 text-sm lg:w-52 w-full bg-gethsemaneRed text-white flex flex-row items-center justify-center p-3 rounded-full hover:border-gethsemaneBlack hover:border-[1.8px] transition-all hover:text-black hover:bg-transparent"
                          >
                            View project
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our philosophy section */}
          <div className="mt-10 min-h-[750px] lg:min-h-[850px] relative bg-black flex gap-x-24 flex-row items-center justify-between text-white rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] w-full p-7 lg:px-14 pb-20 lg:pb-48 pt-20">
            <div className="lg:w-[50%] lg:inline-block hidden overflow-hidden">
              <video
                className="h-[400px] object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://res.cloudinary.com/gethsemane-tech/video/upload/v1716581364/_import_61b859cfb32924.99788186_rt5wdd.mp4" />
              </video>
            </div>

            <div className="flex flex-col lg:px-12 gap-y-3 lg:w-[50%] w-full">
              <div className="flex flex-col">
                <h2 className="lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px]">
                  Our <br />{" "}
                  <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px] italic font-light">
                    Philosophy
                  </span>
                </h2>
              </div>

              <div className="lg:text-lg text-md flex flex-col gap-y-4 mt-4">
                <p className="">
                  At Gethsemane Technologies, our developers work together with
                  our UI/UX designers. We are big on building to specification.
                  Gethsemane Technologies does not do cookie-cutter solutions,
                  we build products exactly as they are during the design phase,
                  no shortcuts or simplifications whatsoever.
                </p>
                <p className="">
                  We are driven by user-centered design and development that
                  drives productivity and increass revenue. We always strive to
                  exceed the expectations of every of our client.
                </p>
              </div>

              <button className="mt-4 border-[1.5px] lg:text-lg text-md lg:border-2 border-white bg-transparent h-24 w-full lg:w-1/2 rounded-full">
                Contact Us
              </button>
            </div>
          </div>

          <div className="-top-10 bg-[#FFF] rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] relative text-gethsemaneBlack overflow-hidden p-7 lg:px-14 py-10"></div>
          <div className="-top-20 bg-[#FFF] rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] relative text-gethsemaneBlack overflow-hidden pt-20 p-7 lg:px-14 pb-10 lg:pb-24">
            <div className="flex flex-col">
              <h2 className="lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px]">
                <span className="text-gethsemaneRed lg:text-[3rem] text-3xl italic font-light">
                  Hey!{" "}
                </span>
                Tell us about <br />
                your project{" "}
                <img
                  src={wave}
                  alt="Hey! Tell us about your project"
                  className="inline-block lg:w-12 w-6"
                />
              </h2>
            </div>

            <NewProjectForm />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
