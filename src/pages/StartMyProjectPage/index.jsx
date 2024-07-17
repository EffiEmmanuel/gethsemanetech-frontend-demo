import React from "react";
import NewProjectForm from "../../forms/NewProjectForm";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

// Images
import wave from "../../assets/images/wave.jpg";

function StartMyProjectPage() {
  return (
    <div className="">
      <NavBar />
      <div className="bg-[#FFF] relative text-gethsemaneBlack overflow-hidden pt-20 p-7 lg:px-14 pb-10 lg:pb-24">
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

      <Footer />
    </div>
  );
}

export default StartMyProjectPage;
