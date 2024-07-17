import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Images
import webDesignIcon from "../../assets/images/web-design.svg";
import webDevelopmentIcon from "../../assets/images/web-development.svg";

export default function WebDesignWebDevDrop() {
  return (
    <div className="flex flex-col gap-y-5 bg-white p-4 rounded-lg absolute top-14 -left-10 maxContent">
      <div className="flex flex-row gap-x-4">
        <div className="lg:max-w-[50px] lg:w-[50px] lg:min-w-[50px]">
          <img
            src={webDesignIcon}
            className="w-full object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-xl">Web Design</p>
          <p className="text-sm font-light">
            Get stunning website designs made by
            <br />
            our incredible team of 3d, motion,
            <br />
            graphic and web designers.
          </p>
          <Link
            to="/"
            className="text-gethsemaneRed hover:text-gethsemaneRoyalBlue transition-all text-sm flex items-center gap-x-2"
          >
            <span className="text-sm">Read more</span>
            <FaLongArrowAltRight size={16} className="mt-[1px]" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-x-4">
        <div className="lg:max-w-[50px] lg:w-[50px] lg:min-w-[50px]">
          <img
            src={webDevelopmentIcon}
            className="w-full object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-xl">Web Development</p>
          <p className="text-sm font-light">
            Get a reliable website or web application
            <br />
            built with Reactjs and 3rd parties
            <br />
            at your disposal.
          </p>
          <Link
            to="/"
            className="text-gethsemaneRed hover:text-gethsemaneRoyalBlue transition-all text-sm flex items-center gap-x-2"
          >
            <span className="text-sm">Read more</span>
            <FaLongArrowAltRight size={16} className="mt-[1px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
