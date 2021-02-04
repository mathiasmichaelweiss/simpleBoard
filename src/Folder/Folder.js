import React, { Component } from "react";
import folder from "./FolderImages/folder.png";

import "./Folder.css";

export default class Folder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="folder-container">
          <div className="delete delete-folder-position" />
          <div className="folder">
            <svg
              width="124"
              height="96"
              viewBox="0 0 124 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M117.387 95.1947H6.61343C2.9609 95.1947 0 92.2338 0 88.5812V6.61343C0 2.9609 2.9609 0 6.61343 0H37.8843C40.2735 0 42.4771 1.28874 43.6485 3.37133L47.2955 9.85528C48.4666 11.9379 50.6702 13.2266 53.0597 13.2266H117.387C121.04 13.2266 124.001 16.1875 124.001 19.84V88.5812C124 92.2338 121.039 95.1947 117.387 95.1947Z"
                fill="#ACE3FF"
              />
              <g filter="url(#filter0_i)">
                <path
                  d="M6.61343 95.1946H117.387C121.039 95.1946 124 92.2337 124 88.5812V19.8402C124 16.1877 121.039 13.2268 117.387 13.2268H69.5824C67.1932 13.2268 64.9896 14.5155 63.8182 16.5981L60.1712 23.0821C59 25.1647 56.7964 26.4534 54.407 26.4534H6.61343C2.9609 26.4534 0 29.4143 0 33.0668V88.5812C0 92.2337 2.9609 95.1946 6.61343 95.1946Z"
                  fill="#80C6ED"
                />
              </g>
              <path
                d="M120.099 13.8215C120.473 14.6509 120.693 15.5644 120.693 16.5335V85.2745C120.693 88.9267 117.732 91.8879 114.08 91.8879H3.30672C2.33758 91.8879 1.42405 91.6679 0.594727 91.2934C1.63165 93.5894 3.9303 95.1946 6.61344 95.1946H117.387C121.039 95.1946 124 92.2337 124 88.5812V19.8402C124 17.1569 122.395 14.8585 120.099 13.8215Z"
                fill="#ACE3FF"
              />
              <defs>
                <filter
                  id="filter0_i"
                  x="0"
                  y="13.2268"
                  width="124"
                  height="85.9678"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.694118 0 0 0 0 0.878431 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="folder-name">To-do list</div>
        </div>
      </>
    );
  }
}
