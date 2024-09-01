// @ts-nocheck
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
// import { useSelector } from "react-redux";

// Images
import profilePicPlaceholder from "../../../assets/logos/favicon.ico";

function AdminTopBar(props) {
  //   const { admin } = useSelector((store) => store.admin);

  return (
    <div className="flex fixed top-0 py-5 bg-white left-0 lg:pl-[8%] px-7 z-[55] lg:z-[3] w-full justify-between border-b-[0.5px] border-b-gray-100 pb-3">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">Welcome back, Emmanuel</h2>
        <p className="text-sm text-gray-400 ">info@gethsemanetech.com</p>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="h-9 w-9 rounded-full bg-transparent flex justify-center items-center overflow-hidden">
          {/* <img
            src={admin?.image ?? profilePicPlaceholder}
            alt={`${admin?.firstName} ${admin?.lastName}`}
            className="h-full w-full object-cover"
          /> */}
        </div>

        <div className="inline-block lg:hidden">
          <button
            className={`transition-all ${
              !props?.isNavbarOpen ? "inline-block" : "hidden"
            }`}
            onClick={() => {
              props?.setIsNavbarOpen(true);
            }}
          >
            <MdOutlineMenu size={28} />
          </button>

          <button
            className={`transition-all ${
              props?.isNavbarOpen ? "inline-block" : "hidden"
            }`}
            onClick={() => {
              props?.setIsNavbarOpen(false);
            }}
          >
            <FaXmark size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminTopBar;
