
import * as React from "react"
import Svg, { Defs, ClipPath, Path, Mask, G, Use } from "react-native-svg"

export function BottomCart() {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={23}
            height={23}
        >
            <Defs>
                <ClipPath id="b">
                    <Path d="M0 0h23v23H0z" />
                </ClipPath>
                <Mask id="d">
                    <G filter="url(#a)">
                        <Path
                            d="M0 0h23v23H0z"
                            style={{
                                // fill: "#000",
                                fillOpacity: 0.4,
                                stroke: "red",
                            }}
                        />
                    </G>
                </Mask>
                <G id="c" clipPath="url(#b)">
                    <Path
                        d="M16.432 9.693V6.534A3.934 3.934 0 0 0 12.5 2.603a3.937 3.937 0 0 0-3.949 3.914v3.176"
                        style={{
                            fill: "none",
                            strokeWidth: 1.5,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            stroke: "#fff",
                            strokeOpacity: 1,
                            strokeMiterlimit: 4,
                        }}
                        transform="scale(.92)"
                    />
                </G>
            </Defs>
            <Use xlinkHref="#c" mask="url(#d)" />
            <Path
                d="M17.438 21.875H7.562a4.434 4.434 0 0 1-4.437-4.433v-5.744a4.434 4.434 0 0 1 4.437-4.433h9.876a4.434 4.434 0 0 1 4.437 4.433v5.744a4.434 4.434 0 0 1-4.437 4.433Zm0 0"
                style={{
                    fill: "none",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    stroke: "#fff",
                    strokeOpacity: 1,
                    strokeMiterlimit: 4,
                }}
                transform="scale(.92)"
            />
        </Svg>
    )
}