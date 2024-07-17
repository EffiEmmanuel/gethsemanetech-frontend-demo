import React, { useEffect, useRef } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Fade } from "react-awesome-reveal";
import { SiJavascript } from "react-icons/si";
import LocomotiveScroll from "locomotive-scroll";

// Images
import javascript from "../../assets/images/tech-stack/js.svg";
import typescript from "../../assets/images/tech-stack/ts.svg";
import reactjs from "../../assets/images/tech-stack/react.svg";
import redux from "../../assets/images/tech-stack/redux.svg";
import tailwind from "../../assets/images/tech-stack/tailwind.svg";
import nodejs from "../../assets/images/tech-stack/node.svg";
import java from "../../assets/images/tech-stack/java.svg";
import springboot from "../../assets/images/tech-stack/spring.png";
import mongodb from "../../assets/images/tech-stack/mongo.svg";
import postgresql from "../../assets/images/tech-stack/postgre.svg";
import vercel from "../../assets/images/hosting/vercel.png";
import aws from "../../assets/images/hosting/aws.png";
import digitalOcean from "../../assets/images/hosting/digitalocean.png";
import netlify from "../../assets/images/hosting/netlify.png";

function AboutUsPage() {
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
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FFF] relative text-gethsemaneBlack overflow-hidden pt-20 p-7 lg:px-14 pb-10 lg:pb-24">
        <div className="flex flex-col items-center">
          <h2 className="font-medium lg:text-[3rem] text-center text-4xl lg:leading-[60px] leading-[30px]">
            Meet{" "}
            <span className="text-gethsemaneRed lg:text-[3rem] text-3xl">
              Gethsemane Technologies
            </span>
          </h2>

          <p className="w-full lg:max-w-2xl text-xl text-center">
            For quarter of a decade, we’ve been on a mission to help our
            clients’ companies bring their ideas to life and reveal their full
            potential by designing and building outstanding, world-class
            websites and web applications.
          </p>
        </div>
      </div>

      {/* About section continued */}
      <div className="min-h-screen lg:min-h-[800px] relative bg-gethsemaneBlack flex gap-x-24 flex-col items-center justify-center text-white rounded-[30px] w-full p-7 lg:px-14 pt-32 pb-32">
        <div className="flex w-full flex-col lg:px-12 gap-y-3">
          <div className="flex flex-col">
            <Fade duration={700}>
              <h2 className="lg:max-w-[50%] w-full lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px]">
                Over the years, we have gained extensive{" "}
                <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px] italic">
                  expertise{" "}
                </span>
                and refined how we work
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
                  At Gethsemane Technologies, we've got a rockstar squad packed
                  with insanely talented web, graphic, and motion designers,
                  plus our awesome software engineers. And they're led by
                  project managers who really know their craft. This whole crew
                  has this incredible synergy and combined experience that helps
                  us deliver mind-blowing websites and web applications time
                  after time. It's like magic, but better!
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
                  Communication is the key to any successful relationship. Here
                  at Gethsemane Technologies, we prioritize prompt responses,
                  addressing inquiries within hours. Our team eagerly engages in
                  discussions to comprehend your requirements thoroughly.
                  Throughout the project lifecycle, we maintain transparency by
                  providing regular updates, ensuring you remain well-informed
                  about our progress on your project.
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
                  Members of our team have robust technical backgrounds in Open
                  Source, DevOps, and SaaS domains. This expertise enables us to
                  seamlessly translate the technological complexities of your
                  project into visually appealing and clear graphics, ensuring a
                  seamless and engaging user experience. Our approach not only
                  enhances the visual appeal but also bridges the gap between
                  complex technical details and user-friendly presentations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-gethsemaneBlack rounded-[30px] p-7 w-full mt-14">
          <div className="flex w-full flex-col lg:px-12">
            <div className="flex flex-col">
              <Fade duration={700}>
                <h2 className="lg:max-w-[50%] w-full lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px]">
                  Our{" "}
                  <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px] italic">
                    Tech{" "}
                  </span>
                  stack
                </h2>
              </Fade>
            </div>

            <div className="flex lg:flex-row flex-wrap items-center gap-7 flex-col">
              <div className="h-[75px] w-auto">
                <img
                  src={javascript}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-[75px] w-auto">
                <img
                  src={typescript}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-[75px] w-auto">
                <img
                  src={reactjs}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-[75px] w-auto">
                <img
                  src={redux}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-[150px] w-auto">
                <img
                  src={tailwind}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-[100px] w-auto">
                <img
                  src={nodejs}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-[75px] w-auto">
                <img
                  src={java}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-[75px] w-auto">
                <img
                  src={springboot}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-[110px] w-auto">
                <img
                  src={mongodb}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-[65px] w-auto">
                <img
                  src={postgresql}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About section continued */}
      <div className="min-h-screen text-gethsemaneBlack lg:min-h-[800px] relative bg-whi flex gap-x-24 flex-col items-center justify-center rounded-tr-[30px] rounded-tl-[30px] w-full p-7 lg:px-14 pt-32 pb-32">
        <div className="flex w-full flex-col lg:px-12 gap-y-3">
          <div className="flex flex-col">
            <Fade duration={700}>
              <h2 className="lg:max-w-[70%] w-full lg:text-[4rem] text-4xl lg:leading-[70px] leading-[50px]">
                We use{" "}
                <span className="text-gethsemaneRed lg:text-[4rem] text-4xl lg:leading-[60px] leading-[50px] italic">
                  the best hosting{" "}
                </span>
                and third party integrations
              </h2>
            </Fade>
          </div>

          <div className="gap-7 flex-col mt-10 pb-10">
            <h3 className="text-3xl">
              The fastest and most reliable hosting platforms
            </h3>

            {/* Hosting platforms */}
            <div className="flex lg:flex-row flex-col lg:justify-between gap-7 mt-7">
              <div className="flex flex-col justify-center flex-wrap lg:flex-row items-center gap-5">
                <div className="flex lg:flex-row flex-col items-center gap-5">
                  {/* Vercel */}
                  <div className="p-7 min-h-[250px] h-[250px] w-full md:w-[250px] md:min-w-[250px] rounded-lg bg-[#1A1A1A] flex flex-col justify-center gap-y-10">
                    <div className="w-[120px]">
                      <img
                        src={vercel}
                        alt=""
                        className="w-full object-contain"
                      />
                    </div>

                    <p className="text-lg text-white">
                      Our go-to option providing best flexibility for a
                      reasonable price
                    </p>
                  </div>

                  {/* Netlify */}
                  <div className="p-7 min-h-[250px] h-[250px] w-full md:w-[250px] md:min-w-[250px] rounded-lg bg-[#42D7D7] flex flex-col justify-center gap-y-10">
                    <div className="w-[120px]">
                      <img
                        src={netlify}
                        alt=""
                        className="w-full object-contain"
                      />
                    </div>

                    <p className="text-lg text-gethsemaneBlack">
                      For developers who prioritize streamlined deployment
                    </p>
                  </div>
                </div>

                <div className="w-full flex lg:flex-row flex-col items-center gap-5">
                  {/* AWS */}
                  <div className="p-7 min-h-[250px] h-[250px] w-full md:w-[250px] md:min-w-[250px] rounded-lg bg-[#F7C797] flex flex-col justify-center gap-y-10">
                    <div className="w-[80px]">
                      <img src={aws} alt="" className="w-full object-contain" />
                    </div>

                    <p className="text-lg text-gethsemaneBlack">
                      For enterprises seeking extensive scalability
                    </p>
                  </div>

                  {/* DigitalOcean */}
                  <div className="p-7 min-h-[250px] h-[250px] w-full md:w-[250px] md:min-w-[250px] rounded-lg bg-[#2c2c2c] flex flex-col justify-center gap-y-10">
                    <div className="w-[90px]">
                      <img
                        src={digitalOcean}
                        alt=""
                        className="w-full object-contain"
                      />
                    </div>

                    <p className="text-lg text-white">
                      For building with blazing fast GPUs
                    </p>
                  </div>
                </div>

                <div className="w-full flex lg:flex-row flex-col items-center gap-5">
                  {/* Others */}
                  <div className="p-7 min-h-[250px] h-[250px] w-full md:w-[250px] md:min-w-[250px] rounded-lg bg-[#F9F9F9] flex flex-col justify-center gap-y-10">
                    <div className="w-[80px]">
                      <h1 className="text-2xl font-bold">OR</h1>
                    </div>

                    <p className="text-lg text-gethsemaneBlack">
                      any other hosting platform of your choice
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUsPage;
