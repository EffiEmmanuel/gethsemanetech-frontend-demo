import React, { useEffect, useRef } from "react";
import NewProjectForm from "../../forms/NewProjectForm";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

// Images
import wave from "../../assets/images/wave.jpg";
import LocomotiveScroll from "locomotive-scroll";
import { Fade } from "react-awesome-reveal";

function StartMyProjectPage() {
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
      <div className="bg-[#FFF] text-gethsemaneBlack overflow-hidden pt-20 p-7 lg:px-14 pb-20 lg:pb-48 relative top-20">
        <div className="flex flex-col">
          <h2 className="lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px]">
            <Fade
              direction="up"
              duration={700}
              delay={100}
              className="inline-block"
            >
              <span className="text-gethsemaneRed lg:text-[3rem] text-3xl italic font-light mr-3">
                Hey!{" "}
              </span>
            </Fade>
            <Fade
              direction="up"
              duration={700}
              delay={400}
              className="inline-block"
            >
              Tell us about
            </Fade>
            <br />
            <Fade
              direction="up"
              duration={700}
              delay={600}
              className="inline-block"
            >
              your project
            </Fade>{" "}
            <Fade duration={700} delay={800} className="inline-block">
              <img
                src={wave}
                alt="Hey! Tell us about your project"
                className="inline-block lg:w-12 w-6"
              />
            </Fade>
          </h2>
        </div>

        <NewProjectForm />
      </div>

      <Footer />
    </div>
  );
}

export default StartMyProjectPage;
