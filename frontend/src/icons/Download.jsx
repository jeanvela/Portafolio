import * as React from "react";

const Download = ({ size = 46, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19 18H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Z" />
    <path d="M4 17v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0Z" />
    <path d="M18 17v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0Z" />
    <path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 1 1 1.16-1.63L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2Z" />
    <path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1Z" />
  </svg>
);

export default Download;