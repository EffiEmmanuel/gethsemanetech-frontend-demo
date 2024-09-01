import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMap, FaPassport, FaUsers } from "react-icons/fa";
import { IoCarSport, IoPeopleOutline } from "react-icons/io5";
import {
  MdAdminPanelSettings,
  MdFlight,
  MdLuggage,
  MdOutlineCurrencyExchange,
  MdOutlineFlightTakeoff,
  MdOutlineLocationCity,
  MdOutlineNotifications,
} from "react-icons/md";
import { PiBinocularsBold } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";
import { RiBroadcastFill } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { IoIosGlobe } from "react-icons/io";
import { TbBrandBooking, TbLogout2, TbSteeringWheel } from "react-icons/tb";
import { BiPlus } from "react-icons/bi";
import { LiaCarSolid, LiaMailBulkSolid } from "react-icons/lia";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaCcMastercard, FaHandHoldingDollar } from "react-icons/fa6";
// import { useSelector } from "react-redux";

// Images
import gethsemaneTechIcon from "../../../assets/logos/favicon.ico";

function AdminDashboardNavbar(props) {
  //   const { isLoading, admin } = useSelector((store) => store.admin);

  const navigate = useNavigate();

  const [isBookingMenuOpen, setIsBookingMenuOpen] = useState(false);
  const [isBroadcastMenuOpen, setIsBroadcastMenuOpen] = useState(false);
  const [isUsersMenuOpen, setIsUsersMenuOpen] = useState(false);
  const [isRatesMenuOpen, setIsRatesMenuOpen] = useState(false);

  return (
    <div
      className={`lg:w-[6vw] w-24 ${
        props?.isNavbarOpen ? "flex" : "hidden"
      } bg-white shadow-lg h-screen fixed top-0 left-0 z-[50] lg:flex flex-col items-center py-5`}
    >
      <div className="h-12 w-12 rounded-lg shadow-md">
        <img src={gethsemaneTechIcon} alt="" className="w-full h-full" />
      </div>

      <div className="flex flex-col mt-14 gap-y-2 relative h-full">
        <Link
          to="/admin/dashboard"
          className={`h-11 w-11 flex justify-center items-center rounded-lg ${
            props?.link == "home" &&
            "bg-gethsemaneRed shadow-[#4540cf85] shadow-md"
          }`}
        >
          <PiBinocularsBold
            size={15}
            className={`${
              props?.link == "home" ? "text-white" : "text-gray-400"
            }`}
          />
        </Link>

        <div
          className={`relative h-11 w-11 cursor-pointer flex justify-center items-center rounded-lg ${
            props?.link == "bookings" &&
            "bg-gethsemaneRed shadow-[#4540cf85] shadow-md"
          }`}
          onMouseOver={() => {
            setIsBookingMenuOpen(true);
            setIsBroadcastMenuOpen(false);
            setIsUsersMenuOpen(false);
            setIsRatesMenuOpen(false);
          }}
          onMouseOut={() => {
            setIsBookingMenuOpen(false);
            setIsBroadcastMenuOpen(false);
            setIsUsersMenuOpen(false);
            setIsRatesMenuOpen(false);
          }}
          onClick={() => {
            setIsBookingMenuOpen(true);
            setIsBroadcastMenuOpen(false);
            setIsUsersMenuOpen(false);
            setIsRatesMenuOpen(false);
          }}
        >
          <FaMap
            size={15}
            className={`${
              props?.link == "bookings" ? "text-white" : "text-gray-400"
            }`}
          />

          {/* SUB MENUS */}
          {isBookingMenuOpen && (
            <div
              className={`flex flex-col gap-y-4 absolute left-12 top-0 maxContent max-w-none h-auto p-3 z-[30] rounded-lg bg-white shadow-lg`}
              style={{
                zIndex: 30,
              }}
            >
              <Link
                to="/admin/dashboard/bookings/add-booking"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "add-booking"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <BiPlus size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "add-booking" && "font-semibold"
                  }`}
                >
                  Add Booking
                </span>
                {props?.sublink === "add-booking" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>

              <Link
                to="/admin/dashboard/bookings/airport-transfer"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "airport-transfer"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <MdFlight size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "airport-transfer" && "font-semibold"
                  }`}
                >
                  Airport Transfer
                </span>
                {props?.sublink === "airport-transfer" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>

              <Link
                to="/admin/dashboard/bookings/car-rental"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "car-rental"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <IoCarSport size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "car-rental" && "font-semibold"
                  }`}
                >
                  Car Rental
                </span>
                {props?.sublink === "car-rental" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>

              <Link
                to="/admin/dashboard/bookings/priority-pass"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "priority-pass"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <MdLuggage size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "priority-pass" && "font-semibold"
                  }`}
                >
                  Priority Pass
                </span>
                {props?.sublink === "priority-pass" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>

              <Link
                to="/admin/dashboard/bookings/visa-on-arrival"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "visa-on-arrival"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <FaPassport size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "visa-on-arrival" && "font-semibold"
                  }`}
                >
                  Visa On Arrival
                </span>
                {props?.sublink === "visa-on-arrival" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>

              <Link
                to="/admin/dashboard/bookings/payments"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "payments"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <FaCcMastercard size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "payments" && "font-semibold"
                  }`}
                >
                  Payments
                </span>
                {props?.sublink === "payments" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/admin/dashboard/cities"
          className={`h-11 w-11 flex justify-center items-center rounded-lg ${
            props?.link == "cities" &&
            "bg-gethsemaneRed shadow-[#4540cf85] shadow-md"
          }`}
        >
          <MdOutlineLocationCity
            size={17}
            className={`${
              props?.link == "cities" ? "text-white" : "text-gray-400"
            }`}
          />
        </Link>

        <div
          className={`relative h-11 w-11 cursor-pointer flex justify-center items-center rounded-lg ${
            props?.link == "users" &&
            "bg-gethsemaneRed shadow-[#4540cf85] shadow-md"
          }`}
          onMouseOver={() => {
            setIsBookingMenuOpen(false);
            setIsBroadcastMenuOpen(false);
            setIsUsersMenuOpen(true);
          }}
          onMouseOut={() => {
            setIsBookingMenuOpen(false);
            setIsBroadcastMenuOpen(false);
            setIsUsersMenuOpen(false);
          }}
          onClick={() => {
            setIsBookingMenuOpen(false);
            setIsBroadcastMenuOpen(false);
            setIsUsersMenuOpen(true);
          }}
        >
          <FaUsers
            size={17}
            className={`${
              props?.link == "users" ? "text-white" : "text-gray-400"
            }`}
          />

          {/* SUB MENUS */}
          {isUsersMenuOpen && (
            <div
              className={`flex flex-col gap-y-4 absolute left-12 top-0 maxContent max-w-none h-auto p-3 z-[30] rounded-lg bg-white shadow-lg`}
              style={{
                zIndex: 30,
              }}
            >
              <Link
                to="/admin/dashboard/users/manage-admin-accounts"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "manage-admin-accounts"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <MdAdminPanelSettings size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "manage-admin-accounts" &&
                    "font-semibold"
                  }`}
                >
                  Manage Admin Accounts
                </span>
                {props?.sublink === "manage-admin-accounts" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>

              <Link
                to="/admin/dashboard/users/manage-users"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "manage-users"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <IoPeopleOutline size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "manage-users" && "font-semibold"
                  }`}
                >
                  Manage Users
                </span>
                {props?.sublink === "manage-users" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>

              <Link
                to="/admin/dashboard/users/manage-drivers"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "manage-drivers"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <TbSteeringWheel size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "manage-drivers" && "font-semibold"
                  }`}
                >
                  Manage Drivers
                </span>
                {props?.sublink === "manage-drivers" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>

              <Link
                to="/admin/dashboard/users/manage-vendors"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "manage-vendors"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <IoCarSport size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "manage-vendors" && "font-semibold"
                  }`}
                >
                  Manage Vendors
                </span>
                {props?.sublink === "manage-vendors" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>
            </div>
          )}
        </div>

        <div
          className={`relative h-11 w-11 cursor-pointer flex justify-center items-center rounded-lg ${
            props?.link == "broadcasts" &&
            "bg-gethsemaneRed shadow-[#4540cf85] shadow-md"
          }`}
          onMouseOver={() => {
            setIsBookingMenuOpen(false);
            setIsBroadcastMenuOpen(true);
            setIsUsersMenuOpen(false);
            setIsRatesMenuOpen(false);
          }}
          onMouseOut={() => {
            setIsBookingMenuOpen(false);
            setIsBroadcastMenuOpen(false);
            setIsUsersMenuOpen(false);
            setIsRatesMenuOpen(false);
          }}
          onClick={() => {
            setIsBookingMenuOpen(false);
            setIsBroadcastMenuOpen(true);
            setIsUsersMenuOpen(false);
            setIsRatesMenuOpen(false);
          }}
        >
          <RiBroadcastFill
            size={17}
            className={`${
              props?.link == "broadcasts" ? "text-white" : "text-gray-400"
            }`}
          />

          {/* SUB MENUS */}
          {isBroadcastMenuOpen && (
            <div
              className={`flex flex-col gap-y-4 absolute left-12 top-0 maxContent max-w-none h-auto p-3 z-[30] rounded-lg bg-white shadow-lg`}
              style={{
                zIndex: 30,
              }}
            >
              {/* <Link
                to="/admin/dashboard/broadcasts/enquiries"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "enquiries"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <GoMail size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "enquiries" && "font-semibold"
                  }`}
                >
                  Enquiries
                </span>
                {props?.sublink === "enquiries" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link> */}

              <Link
                to="/admin/dashboard/broadcasts/push-notifications"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "push-notifications"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <MdOutlineNotifications size={18} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "push-notifications" && "font-semibold"
                  }`}
                >
                  Push Notifications
                </span>
                {props?.sublink === "push-notifications" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>

              <Link
                to="/admin/dashboard/broadcasts/bulk-email"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "bulk-email"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <LiaMailBulkSolid size={18} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "bulk-email" && "font-semibold"
                  }`}
                >
                  Bulk Email
                </span>
                {props?.sublink === "bulk-email" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>
            </div>
          )}
        </div>

        <div
          className={`relative h-11 w-11 cursor-pointer flex justify-center items-center rounded-lg ${
            props?.link == "rates" &&
            "bg-gethsemaneRed shadow-[#4540cf85] shadow-md"
          }`}
          onMouseOver={() => {
            setIsBookingMenuOpen(false);
            setIsBroadcastMenuOpen(false);
            setIsUsersMenuOpen(false);
            setIsRatesMenuOpen(true);
          }}
          onMouseOut={() => {
            setIsBookingMenuOpen(false);
            setIsBroadcastMenuOpen(false);
            setIsUsersMenuOpen(false);
            setIsRatesMenuOpen(false);
          }}
          onClick={() => {
            setIsBookingMenuOpen(false);
            setIsBroadcastMenuOpen(false);
            setIsUsersMenuOpen(false);
            setIsRatesMenuOpen(true);
          }}
        >
          <AiOutlineDollar
            size={20}
            className={`${
              props?.link == "rates" ? "text-white" : "text-gray-400"
            }`}
          />

          {/* SUB MENUS */}
          {isRatesMenuOpen && (
            <div
              className={`flex flex-col gap-y-4 absolute left-12 top-0 maxContent max-w-none h-auto p-3 z-[30] rounded-lg bg-white shadow-lg`}
              style={{
                zIndex: 30,
              }}
            >
              {/* <Link
                to="/admin/dashboard/rates/vehicle-classes"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "vehicle-classes"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <LiaCarSolid size={18} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "vehicle-classes" && "font-semibold"
                  }`}
                >
                  Vehicle Classes
                </span>
                {props?.sublink === "vehicle-classes" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link> */}

              <Link
                to="/admin/dashboard/rates/booking-rates"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "booking-rates"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <FaHandHoldingDollar size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "booking-rates" && "font-semibold"
                  }`}
                >
                  Booking Rates
                </span>
                {props?.sublink === "booking-rates" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>

              <Link
                to="/admin/dashboard/rates/exchange-rates"
                className={`flex items-center gap-x-2 text-xs ${
                  props?.sublink === "exchange-rates"
                    ? "text-gethsebg-gethsemaneRed hover:text-gethsebg-gethsemaneRed visited:text-gethsebg-gethsemaneRed focus:text-gethsebg-gethsemaneRed"
                    : "text-gray-400 hover:text-gray-400 visited:text-gray-400 focus:text-gray-400"
                } hover:no-underline visited:no-underline`}
              >
                <MdOutlineCurrencyExchange size={16} className="" />
                <span
                  className={`text-sm ${
                    props?.sublink === "exchange-rates" && "font-semibold"
                  }`}
                >
                  Exchange Rates
                </span>
                {props?.sublink === "exchange-rates" && (
                  <div className="h-2 w-2 rounded-full bg-gethsemaneRed"></div>
                )}
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/admin/dashboard/blog"
          className={`h-11 w-11 flex justify-center items-center rounded-lg ${
            props?.link == "blog" &&
            "bg-gethsemaneRed shadow-[#4540cf85] shadow-md"
          }`}
        >
          <IoIosGlobe
            size={22}
            className={`${
              props?.link == "blog" ? "text-white" : "text-gray-400"
            }`}
          />
        </Link>

        <button
          onClick={() => {
            localStorage.clear();
            navigate("/admin");
          }}
          className="h-11 w-full flex justify-center items-center absolute bottom-0"
        >
          <TbLogout2 size={17} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
}

export default AdminDashboardNavbar;
