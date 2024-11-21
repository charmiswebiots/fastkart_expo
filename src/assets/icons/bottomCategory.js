import * as React from "react"
import Svg, { Defs, ClipPath, Path, Mask, G, Use } from "react-native-svg"

export function BottomCategory(){
    return(
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={24}
        height={24}
      >
        <Defs>
          <ClipPath id="b">
            <Path d="M0 0h24v24H0z" />
          </ClipPath>
          <Mask id="d">
            <G filter="url(#a)">
              <Path
                d="M0 0h24v24H0z"
                style={{
                  fill: "#50C5B6",
                  fillOpacity: 0.4,
                  stroke: "#50C5B6",
                }}
              />
            </G>
          </Mask>
          <G id="c" clipPath="url(#b)">
            <Path
              d="M13.417 6.23c0-2.516.026-3.355 3.354-3.355 3.328 0 3.354.839 3.354 3.354 0 2.516.011 3.354-3.354 3.354-3.366 0-3.354-.838-3.354-3.354Zm0 0"
              style={{
                fill: "none",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                stroke: "#fff",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              transform="rotate(.112) scale(1.04348)"
            />
          </G>
        </Defs>
        <Path
          d="M2.875 6.23c0-2.516.026-3.355 3.354-3.355 3.328 0 3.354.839 3.354 3.354 0 2.516.012 3.354-3.354 3.354-3.365 0-3.354-.838-3.354-3.354Zm0 0"
          style={{
            fill: "none",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "#fff",
            strokeOpacity: 1,
            strokeMiterlimit: 4,
          }}
          transform="rotate(.112) scale(1.04348)"
        />
        <Use xlinkHref="#c" mask="url(#d)" />
        <Path
          d="M2.875 16.77c0-2.515.026-3.353 3.354-3.353 3.328 0 3.354.838 3.354 3.354 0 2.515.012 3.354-3.354 3.354-3.365 0-3.354-.839-3.354-3.354ZM13.417 16.77c0-2.515.026-3.353 3.354-3.353 3.328 0 3.354.838 3.354 3.354 0 2.515.011 3.354-3.354 3.354-3.366 0-3.354-.839-3.354-3.354Zm0 0"
          style={{
            fill: "none",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "#fff",
            strokeOpacity: 1,
            strokeMiterlimit: 4,
          }}
          transform="rotate(.112) scale(1.04348)"
        />
      </Svg>
    )
}