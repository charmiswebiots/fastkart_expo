import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Phone() {
    return (

        <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={20} >
            <Path fill="#E9DEDC" d="M0 0h14v20H0V0Z" />
            <Path
                fill="#265B5F"
                d="M0 0h14v20H0V0Zm2 1v18l1-3h8l1 3V1h-2L9 3H5L4 1H2Z"
            />
            <Path fill="#82D5F2" d="M3 5h8v7H3V5Z" />
            <Path fill="#293441" d="M7 0h7v20H7v-1h5V1h-2v2H7V0Z" />
            <Path fill="#9BF8FE" d="M3 5h4v7H3V5Z" />
            <Path fill="#F45A4D" d="M3 16h8v3H3v-3Z" />
            <Path fill="#D5D5D5" d="M2 1h2l1 2h4l1-2h2l-2 4H2V1Z" />
            <Path fill="#1D4F53" d="M0 0h7v3l2 1-5-1V1L0 0Z" />
        </Svg>
    )
}