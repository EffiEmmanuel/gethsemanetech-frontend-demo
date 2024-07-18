import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="lg:min-h-[104vh] relative bg-black gap-x-24 text-white w-full py-20 pb-20 rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px]">
      <div className="w-full min-h-[200px] flex flex-col gap-y-4 lg:flex-row lg:items-center p-7 lg:px-14 gap-x-4">
        <Fade direction="up" duration={1000} className="inline-block w-full">
          <h2 className="lg:text-[4rem] text-[2.1rem] text-white lg:text-center w-full">
            Let's have a chat <br />
            <Fade duration={1000} delay={200} className="inline-block w-full">
              <Link
                to="/company/contact-us"
                className="w-full text-gethsemaneRed flex flex-row items-center lg:justify-center gap-x-2"
              >
                <span className="lg:text-center">Get in touch</span>
                <FaArrowRight size={24} className="-rotate-45" />
              </Link>
            </Fade>
          </h2>
        </Fade>
      </div>

      <div className="flex flex-col gap-y-7 w-full mt-7">
        <Link
          to="https://linkedin.com/in/gethsemane-technologies-ltd"
          target="_blank"
          className="font-matter lg:px-14 px-7 flex items-center justify-between w-full pb-3 border-b-[0.1px] border-b-white"
        >
          <span className="font-matter">LinkedIn</span>
          <FaExternalLinkAlt size={15} className="text-white" />
        </Link>
        <Link
          to="https://instagram.com/gethsemanetech"
          target="_blank"
          className="font-matter lg:px-14 px-7 flex items-center justify-between w-full pb-3 border-b-[0.1px] border-b-white"
        >
          <span className="font-matter">Instagram</span>
          <FaExternalLinkAlt size={15} className="text-white" />
        </Link>
        <Link
          to="https://twitter.com/in/gethsemanetech"
          target="_blank"
          className="font-matter lg:px-14 px-7 flex items-center justify-between w-full pb-3 border-b-[0.1px] border-b-white"
        >
          <span className="font-matter">Twitter (X)</span>
          <FaExternalLinkAlt size={15} className="text-white" />
        </Link>
      </div>

      <div className="flex lg:flex-row lg:items-center lg:justify-between flex-col gap-3 mt-7 lg:px-14 px-7">
        <div className="flex lg:flex-row flex-col gap-y-4 lg:items-center gap-x-3">
          <Link
            to="mailto:@gethsemanestech@gmail.com"
            target="_blank"
            className="font-matter text-sm h-10 w-52 p-4 border-white border-[0.2px] flex items-center justify-center rounded-full"
          >
            info@gethsemanestech.com
          </Link>
          <Link
            to="tel:+2348118412819"
            target="_blank"
            className="font-matter text-sm h-10 w-52 p-4 border-white border-[0.2px] flex items-center justify-center rounded-full"
          >
            CALL US: +2348118412819
          </Link>
          <Link className="text-sm font-matter" to="/company/privacy-policy">
            PRIVACY POLICY
          </Link>
        </div>
        <div className="text-sm flex lg:flex-row lg:items-center lg:justify-between flex-col gap-y-4">
          <p className="text-xs font-matter">
            Copyright&copy; 2024 Gethsemane Technologies
          </p>
        </div>
      </div>
    </div>
  );
}
