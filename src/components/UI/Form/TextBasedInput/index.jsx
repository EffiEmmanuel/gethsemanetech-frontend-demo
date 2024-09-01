import React from "react";

function TextBasedInput({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      className="border-[1px] border-slate-300 rounded-lg h-12 w-full p-3 focus:outline-none outline-none text-[16px]"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextBasedInput;
