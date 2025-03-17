import React from "react";

export const GridLines = () => (
  <svg
    width="75%"
    height="100%"
    viewBox="0 0 1728 1117"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="object-contain"
  >
    {[
      362.5, 758.9, 1155.3, 560.7, 957.1, 1353.5, 461.6, 858, 1254.4, 659.8,
      1056.2,
    ].map((x, i) => (
      <line
        key={i}
        x1={x}
        y1="0"
        x2={x}
        y2="1117"
        stroke="url(#paint_linear)"
        strokeOpacity="0.1"
        strokeWidth="3"
      />
    ))}
    {[
      1068.5, 983.4, 898.3, 813.2, 728.1, 643, 557.9, 472.8, 387.7, 302.6,
      217.5,
    ].map((y, i) => (
      <line
        key={i + 11}
        x1="-13.9999"
        y1={y}
        x2="1728"
        y2={y}
        stroke="url(#paint_linear)"
        strokeOpacity="0.05"
        strokeWidth="3"
      />
    ))}
    <defs>
      <linearGradient
        id="paint_linear"
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.5" stopColor="#2961EB" />
        <stop offset="1" stopColor="#999999" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
