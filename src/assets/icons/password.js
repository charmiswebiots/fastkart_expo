// import Svg, {
//     Path,
// } from 'react-native-svg';
// import React from 'react';
// import { windowWidth, windowHeight } from '../../theme/appConstant';
// import { useTheme } from "@react-navigation/native";


// export function password() {
//     return (
//         <Svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={windowWidth(50)}
//             height={windowHeight(50)}
//             fill="none"
//         >
//             <Path
//                 stroke="#0BAF9A"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M13.686 8.267V6.388c0-2.199-1.698-3.982-3.792-3.982-2.094-.01-3.8 1.765-3.809 3.965v1.896"
//             />
//             <Path
//                 stroke="#222"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M13.07 18.593H6.701c-1.745 0-3.16-1.485-3.16-3.318v-3.752c0-1.834 1.415-3.318 3.16-3.318h6.367c1.745 0 3.16 1.484 3.16 3.318v3.752c0 1.833-1.414 3.318-3.16 3.318Z"
//                 clipRule="evenodd"
//             />
//             <Path
//                 stroke="#222"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M9.886 12.427v1.944"
//             />
//         </Svg>
//     )

// }




import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";


export function password() {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={27}
            viewBox="0 0 25 26"
        >
            <Path
                d="M13.688 8.266v-1.88c0-2.198-1.7-3.98-3.794-3.98C7.8 2.398 6.094 4.17 6.088 6.37v1.896"
                style={{
                    fill: "none",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    stroke: "#0baf9a",
                    strokeOpacity: 1,
                    strokeMiterlimit: 4,
                }}
                transform="matrix(1.25 0 0 1.1994 0 .406)"
            />
            <Path
                d="M13.069 18.593H6.703c-1.747 0-3.162-1.485-3.162-3.315v-3.755c0-1.834 1.415-3.316 3.162-3.316h6.366c1.747 0 3.16 1.482 3.16 3.316v3.755c0 1.83-1.413 3.315-3.16 3.315ZM9.884 12.425v1.947"
                style={{
                    fill: "none",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    stroke: "#222",
                    strokeOpacity: 1,
                    strokeMiterlimit: 4,
                }}
                transform="matrix(1.25 0 0 1.1994 0 .406)"
            />
        </Svg>
    )
}