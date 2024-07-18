import React from "react";
import { Fade } from "react-awesome-reveal";

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

function TechStack() {
  return (
    <div className="bg-white text-gethsemaneBlack rounded-[30px] p-7 w-full mt-14">
      <div className="flex w-full flex-col lg:px-12">
        <div className="flex flex-col">
          <Fade duration={700}>
            <h2 className="text-center lg:text-left lg:max-w-[50%] w-full lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px]">
              Our{" "}
              <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px] italic">
                Tech{" "}
              </span>
              stack
            </h2>
          </Fade>
        </div>

        <div className="flex flex-row flex-wrap items-center lg:justify-normal justify-center gap-x-7 mt-10 lg:mt-0">
          <div className="h-[55px] lg:h-[75px] w-auto">
            <img
              src={javascript}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-[55px] lg:h-[75px] w-auto">
            <img
              src={typescript}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-[55px] lg:h-[75px] w-auto">
            <img
              src={reactjs}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-[55px] lg:h-[75px] w-auto">
            <img src={redux} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="h-[130px] lg:h-[150px] w-auto">
            <img
              src={tailwind}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-[80px] lg:h-[100px] w-auto">
            <img src={nodejs} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="h-[55px] lg:h-[75px] w-auto">
            <img src={java} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="h-[55px] lg:h-[75px] w-auto">
            <img
              src={springboot}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-[90px] lg:h-[110px] w-auto">
            <img
              src={mongodb}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-[45px] lg:h-[65px] w-auto">
            <img
              src={postgresql}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
