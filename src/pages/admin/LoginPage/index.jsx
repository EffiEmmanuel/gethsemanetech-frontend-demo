// @ts-nocheck
import React from "react";
import AdminLoginForm from "../../../forms/admin/LoginForm";
// import { Helmet } from "react-helmet";

// Images
import gethsemaneTechLogo from "../../../assets/logos/gethsemane-tech.svg";

function AdminLoginPage(props) {
  return (
    <div className="w-full min-h-screen lg:px-14 px-7 p-7">
      {/* <Helmet>
        <title>Admin Log in | Gethsemane Tech | Admin Portal</title>
      </Helmet> */}

      <div className="lg:w-full overflow-hidden h-full bg-shuttlelanePurple lg:flex flex-col items-center">
        {/* Driver Signup Form */}
        <div className="mt-24 lg:w-[40%] w-full p-7">
          <div className="w-full flex justify-center items-center">
            <img src={gethsemaneTechLogo} className="object-contain w-36" />
          </div>

          <div className="mt-7 bg-white rounded-lg shadow-lg border-[1px] border-slate-200 p-6 pb-8">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">
                Log in{" "}
                <span className="text-gethsemaneRed font-bold text-3xl">.</span>
              </h2>
              <p className="text-sm">Sign in to your admin portal</p>
            </div>

            {/* Admin log in form */}
            <AdminLoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;
