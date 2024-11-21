import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function BottomHome() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} >
        <Path
          d="M7.657 19.902v-3.09c0-.785.635-1.422 1.424-1.43h2.885c.792 0 1.434.642 1.434 1.43v3.097c0 .67.535 1.214 1.202 1.228h1.926A3.468 3.468 0 0 0 20 17.674V8.891a2.464 2.464 0 0 0-.963-1.916l-6.58-5.285a3.163 3.163 0 0 0-3.945 0L1.962 6.982a2.45 2.45 0 0 0-.963 1.92v8.772a3.468 3.468 0 0 0 3.473 3.463h1.926a1.24 1.24 0 0 0 1.242-1.235"
          style={{
            fill: "none",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "#fff",
            strokeOpacity: 1,
            strokeMiterlimit: 4,
          }}
          transform="scale(1.09524 1.0909)"
        />
      </Svg>
    )
}
