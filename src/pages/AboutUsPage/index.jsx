import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Fade } from "react-awesome-reveal";

function AboutUsPage() {
  return (
    <div className="">
      <NavBar />
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FFF] relative text-gethsemaneBlack overflow-hidden pt-20 p-7 lg:px-14 pb-10 lg:pb-24">
        <div className="flex flex-col items-center">
          <h2 className="lg:text-[3rem] text-center text-4xl lg:leading-[60px] leading-[30px]">
            Meet{" "}
            <span className="text-gethsemaneRed lg:text-[3rem] text-3xl font-medium">
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
                <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px] italic font-light">
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

        <div className="bg-white text-gethsemaneBlack rounded-[30px] p-7 w-full">
          <div className="flex w-full flex-col lg:px-12 gap-y-3">
            <div className="flex flex-col">
              <Fade duration={700}>
                <h2 className="lg:max-w-[50%] w-full lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px]">
                  Our{" "}
                  <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px] italic font-light">
                    Tech{" "}
                  </span>
                  stack
                </h2>
              </Fade>
            </div>

            <div className="flex lg:flex-row lg:justify-between gap-7 flex-col mt-8 pb-10"></div>
          </div>
        </div>
      </div>

      {/* About section continued */}
      <div className="min-h-screen text-gethsemaneBlack lg:min-h-[800px] relative bg-whi flex gap-x-24 flex-col items-center justify-center rounded-tr-[30px] rounded-tl-[30px] w-full p-7 lg:px-14 pt-32 pb-32">
        <div className="flex w-full flex-col lg:px-12 gap-y-3">
          <div className="flex flex-col">
            <Fade duration={700}>
              <h2 className="lg:max-w-[50%] w-full lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px]">
                What our{" "}
                <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px] italic font-light">
                  clients{" "}
                </span>
                are saying
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
      </div>

      <Footer />
    </div>
  );
}

export default AboutUsPage;
