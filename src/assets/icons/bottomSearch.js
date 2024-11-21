import * as React from "react"
import Svg, { Defs, ClipPath, Path, Mask, G, Use } from "react-native-svg"

export function BottomSearch() {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={23}
            height={23}
            fill="none"
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11.276 19.89a8.614 8.614 0 1 0 0-17.228 8.614 8.614 0 0 0 0 17.228Z"
            />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m17.267 17.715 3.378 3.369"
                opacity={0.4}
            />
        </Svg>
    )
}