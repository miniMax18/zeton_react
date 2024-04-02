import * as React from "react";
import { JSX } from 'react/jsx-runtime';
const SvgHome24Px = (props: any): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} border={"none"} {...props}>
    <path
      fill="none"
      d="M0 0h24v24H0z"
      style={{
        fill: "none",
        stroke: "none",
        strokeOpacity: 1,
        fillOpacity: 1,
      }}
    />
    <path
      d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
      style={{
        fill: "#fff",
        stroke: "none",
        strokeOpacity: 1,
        fillOpacity: 1,
      }}
    />
  </svg>
);
export default SvgHome24Px;
