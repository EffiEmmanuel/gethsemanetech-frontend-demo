// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPassport, FaTrash, FaUser } from "react-icons/fa";
import { MdCheck, MdLocationPin } from "react-icons/md";
import { ImSpinner2 } from "react-icons/im";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import AdminDashboardNavbar from "../../../components/Admin/Navbar";
import { FaXmark } from "react-icons/fa6";
import AdminTopBar from "../../../components/Admin/TopBar";

// Images
// import profilePicPlaceholder from "../../../assets/logos/icon.png";

function AdminDashboardHomePage() {
  // Mobile navbar handler
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="">
      {/* <Helmet>
        <title>Admin Dashboard - Overview | Shuttlelane Portal</title>
      </Helmet> */}

      <div className="">
        {/* Navbar here */}
        <AdminDashboardNavbar
          link="home"
          isNavbarOpen={isNavbarOpen}
          setIsNavbarOpen={setIsNavbarOpen}
        />
        {/* Main content goes here */}
        <div className="w-full min-h-screen lg:pl-[6%] bg-[#fff] text-shuttlelaneBlack">
          <div className="px-7 py-5 relative z-0">
            {/* Top bar */}
            <AdminTopBar
              isNavbarOpen={isNavbarOpen}
              setIsNavbarOpen={setIsNavbarOpen}
            />

            <div className="mt-24 pt-2">
              <div className="flex xl:flex-row flex-col gap-y-5 gap-x-5">
                {/* Statistics */}
                <div className="bg-white p-4 w-full lg:w-[180px] h-48 rounded-lg shadow-md border-[1px] border-slate-200">
                  <div className="flex flex-col justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      Last 24 hours
                    </span>

                    {/* Graph */}
                    <div className="w-full h-20 bg-slate-200 p-2"></div>

                    <div className="flex flex-col">
                      <h3 className="text-2xl font-semibold">1.2K</h3>
                      <span className="text-md">Total visits</span>
                    </div>
                  </div>
                </div>
                {/* Statistics */}
                <div className="bg-white p-4 w-full lg:w-[180px] h-48 rounded-lg shadow-md border-[1px] border-slate-200">
                  <div className="flex flex-col justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      Last 24 hours
                    </span>

                    {/* Graph */}
                    <div className="w-full h-20 bg-slate-200 p-2"></div>

                    <div className="flex flex-col">
                      <h3 className="text-2xl font-semibold">3</h3>
                      <span className="text-md">Total Inquiries</span>
                    </div>
                  </div>
                </div>
                {/* Statistics */}
                <div className="bg-white p-4 w-full lg:w-[180px] h-48 rounded-lg shadow-md border-[1px] border-slate-200">
                  <div className="flex flex-col justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      Last 24 hours
                    </span>

                    {/* Graph */}
                    <div className="w-full h-20 bg-slate-200 p-2"></div>

                    <div className="flex flex-col">
                      <h3 className="text-2xl font-semibold">$6,500</h3>
                      <span className="text-md">Total revenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardHomePage;
