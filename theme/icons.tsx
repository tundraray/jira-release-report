import React from "react";

interface IMobileAppIcon {
  color?: string;
  size?: number | string;
}

export const MobileAppIcon: React.FC<IMobileAppIcon> = ({ color, size }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 64 64">
    <path d="M38,48.674l-1.147-1.147A6.966,6.966,0,0,0,36,46.81V53a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H35a1,1,0,0,1,1,1V22.03a3.032,3.032,0,0,1,2-.579V7a3,3,0,0,0-3-3H7A3,3,0,0,0,4,7V57a3,3,0,0,0,3,3H35a3,3,0,0,0,3-3ZM24,58H18V56h6Z" />
    <path d="M21.536,16.65a3.067,3.067,0,0,1,4.235.007l7.9,7.9a3,3,0,0,1,.33-.53V8H8V52H34V45.777L22.625,41.311A3,3,0,0,1,21.58,36.4l1.643-1.643a5.035,5.035,0,0,1,5.331-1.139l4.663,1.8-13.1-13.1a3,3,0,0,1,0-4.244ZM12,11H10V9h2Zm8,0H14V9h6Z" />
    <path d="M39.918,47.764a7.007,7.007,0,0,0,9.9,0l8.49-8.48a7.031,7.031,0,0,0,0-9.907l-9.9-9.9a1.017,1.017,0,0,0-1.416,0,1,1,0,0,0,0,1.416,1,1,0,0,1-1.412,1.417L44.155,20.9a1.011,1.011,0,0,0-1.4-.006L41.325,22.31a1,1,0,0,0-.005,1.406l.01.01a1,1,0,0,1-1.417,1.411l0,0h0l-.009-.009-1.4-1.411a.666.666,0,0,0-.081-.07l-.016-.012a1.037,1.037,0,0,0-1.321.09L35.707,25.1a1.03,1.03,0,0,0-.036,1.46,1,1,0,0,1-1.418,1.41l-9.9-9.9a1.012,1.012,0,0,0-1.4,0l-1.428,1.417a1,1,0,0,0,0,1.414l16.44,16.44a1,1,0,0,1-1.067,1.64l-9.059-3.49a3.025,3.025,0,0,0-3.2.684L23,37.807a.993.993,0,0,0-.267.924.969.969,0,0,0,.613.713L35.2,44.1a1.508,1.508,0,0,1,.244.111,8.794,8.794,0,0,1,2.827,1.9Z" />
  </svg>
);
