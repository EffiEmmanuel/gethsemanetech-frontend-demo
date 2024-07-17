import React from "react";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

function DropdownItem(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <Fade up duration={800}>
        {/* DROPDOWN */}
        <div
          className="max-w-5xl mx-auto text-left cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {/* DROPDOWN TITLE */}
          <div className="h-16 flex justify-between align-middle">
            <h4 className="my-auto text-xl font-normal">
              {props.dropdownTitle}
            </h4>
            <button>
              {isDropdownOpen ? (
                <span>
                  <FaCaretUp />
                </span>
              ) : (
                <span>
                  <FaCaretDown />
                </span>
              )}
            </button>
          </div>

          {/* DROPDOWN LIST */}
          <div
            className="px-10 -ml-8 pb-5 transition-all"
            style={{
              display: isDropdownOpen ? "block" : "none",
              height: !isDropdownOpen ? "0px" : "auto",
            }}
          >
            {props?.dropdownList}
          </div>
        </div>
      </Fade>
    </>
  );
}

export default DropdownItem;
