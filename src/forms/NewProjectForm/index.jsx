import React, { useRef, useState } from "react";
import { MdLink } from "react-icons/md";

function NewProjectForm() {
  // Client interest states
  const [isSiteFromScratch, setIsSiteFromScratch] = useState(false);
  const [isAppFromScratch, setIsAppFromScratch] = useState(false);
  const [isUIUXDesign, setIsUIUXDesign] = useState(false);
  const [isWebAppDevelopment, setIsWebAppDevelopment] = useState(false);
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [isOther, setIsOther] = useState(false);

  // Client budget states
  const [is1500To3000, setIs1500To00] = useState(false);
  const [is3000To5000, setIs3000To5000] = useState(false);
  const [is5000To10000, setIs5000To10000] = useState(false);
  const [is20000AndAbove, setIs20000AndAbove] = useState(false);
  const [is10000To20000, setIs10000To20000] = useState(false);

  // Attachmanet states
  const fileInputRef = useRef(null);
  const [attachmentFileName, setAttachmentFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAttachmentFileName(file.name);
      // Here, you can upload the file to Cloudinary using their SDK or API
    } else {
      setAttachmentFileName("");
    }
  };

  return (
    <form className="flex flex-col gap-y-7 mt-7">
      <div className="">
        <h2 className="lg:text-3xl text-2xl lg:leading-[60px]">
          I'm interested in
        </h2>

        <div className="lg:text-lg text-sm my-3 lg:w-1/2 w-full flex flex-row flex-wrap gap-4 items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSiteFromScratch(!isSiteFromScratch);
            }}
            className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
              isSiteFromScratch
                ? "bg-gethsemaneRed text-white"
                : "bg-transparent border-[1.5px] lg:border-2 border-black"
            }  rounded-full`}
          >
            Site from scratch
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsAppFromScratch(!isAppFromScratch);
            }}
            className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
              isAppFromScratch
                ? "bg-gethsemaneRed text-white"
                : "bg-transparent border-[1.5px] lg:border-2 border-black"
            }  rounded-full`}
          >
            App from scratch
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsUIUXDesign(!isUIUXDesign);
            }}
            className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
              isUIUXDesign
                ? "bg-gethsemaneRed text-white"
                : "bg-transparent border-[1.5px] lg:border-2 border-black"
            }  rounded-full`}
          >
            UI / UX design
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWebAppDevelopment(!isWebAppDevelopment);
            }}
            className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
              isWebAppDevelopment
                ? "bg-gethsemaneRed text-white"
                : "bg-transparent border-[1.5px] lg:border-2 border-black"
            }  rounded-full`}
          >
            Web app development
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsMaintenance(!isMaintenance);
            }}
            className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
              isMaintenance
                ? "bg-gethsemaneRed text-white"
                : "bg-transparent border-[1.5px] lg:border-2 border-black"
            }  rounded-full`}
          >
            Maintenance
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOther(!isOther);
            }}
            className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
              isOther
                ? "bg-gethsemaneRed text-white"
                : "bg-transparent border-[1.5px] lg:border-2 border-black"
            }  rounded-full`}
          >
            Other
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-7 lg:flex-row lg:justify-between lg:items-center lg:gap-x-7">
        <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
          <label htmlFor=" firstName" className="text-sm">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            className="h-16 p-4 bg-slate-200  text-[16px]"
          />
        </div>
        <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
          <label htmlFor="lastName" className="text-sm ">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
            className="h-16 p-4 bg-slate-200  text-[16px]"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-x-7 gap-y-7">
        <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
          <label htmlFor="emailAddress" className="text-sm ">
            Email Address
          </label>
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder="johndoe@organization.com"
            className="h-16 p-4 bg-slate-200  text-[16px]"
          />
        </div>
        <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
          <label htmlFor="projectDescription" className="text-sm ">
            Tell us about your project
          </label>
          <input
            type="text"
            name="projectDescription"
            id="projectDescription"
            placeholder="Tell us about your project"
            className="h-16 p-4 bg-slate-200  text-[16px]"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-x-7 gap-y-7">
        <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
          <label htmlFor="lastName" className="text-sm ">
            Project budget (USD)
          </label>
          <div className="lg:text-lg text-sm my-3 w-full flex flex-row flex-wrap gap-4 items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIs1500To00(!is1500To3000);
                setIs3000To5000(false);
                setIs5000To10000(false);
                setIs10000To20000(false);
                setIs20000AndAbove(false);
              }}
              className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                is1500To3000
                  ? "bg-gethsemaneRed text-white"
                  : "bg-transparent border-[1.5px] lg:border-2 border-black"
              }  rounded-full`}
            >
              1.5K - 3K
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIs1500To00(false);
                setIs3000To5000(!is3000To5000);
                setIs5000To10000(false);
                setIs10000To20000(false);
                setIs20000AndAbove(false);
              }}
              className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                is3000To5000
                  ? "bg-gethsemaneRed text-white"
                  : "bg-transparent border-[1.5px] lg:border-2 border-black"
              }  rounded-full`}
            >
              3k - 5K
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIs1500To00(false);
                setIs3000To5000(false);
                setIs5000To10000(!is5000To10000);
                setIs10000To20000(false);
                setIs20000AndAbove(false);
              }}
              className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                is5000To10000
                  ? "bg-gethsemaneRed text-white"
                  : "bg-transparent border-[1.5px] lg:border-2 border-black"
              }  rounded-full`}
            >
              5k - 10K
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIs1500To00(false);
                setIs10000To20000(!is10000To20000);
                setIs3000To5000(false);
                setIs5000To10000(false);
                setIs20000AndAbove(false);
              }}
              className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                is10000To20000
                  ? "bg-gethsemaneRed text-white"
                  : "bg-transparent border-[1.5px] lg:border-2 border-black"
              }  rounded-full`}
            >
              10k - 20K
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIs1500To00(false);
                setIs3000To5000(false);
                setIs5000To10000(false);
                setIs10000To20000(false);
                setIs20000AndAbove(!is20000AndAbove);
              }}
              className={` h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                is20000AndAbove
                  ? "bg-gethsemaneRed text-white"
                  : "bg-transparent border-[1.5px] lg:border-2 border-black"
              }  rounded-full`}
            >
              20K{" >"}
            </button>
          </div>
        </div>
      </div>

      <div className="maxContent cursor-pointer lg:text-lg text-sm">
        <div className="cursor-pointer flex flex-row gap-x-1 items-center w-full relative">
          <MdLink size={16} className="text-gethsemaneBlack rotate-45" />
          <input
            type="file"
            ref={fileInputRef}
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            onChange={handleFileChange}
            className="absolute top-0 w-full h-full opacity-0 z-40 cursor-pointer"
          />
          <span className="">Add attachment</span>
        </div>
        {attachmentFileName && (
          <span className="text-slate-400 ">{attachmentFileName}</span>
        )}
      </div>

      <button className="mt-4 lg:text-lg text-sm border-[1.5px] lg:border-2 border-black hover:bg-gethsemaneRed hover:border-transparent hover:text-[#FFF] bg-transparent transition-all h-24 w-full lg:w-1/2 rounded-full">
        Send request
      </button>
    </form>
  );
}

export default NewProjectForm;
