import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function pageList  ()  {

    const { colors } = useTheme();

    return (
        <Svg width={windowWidth(22)} height={windowHeight(22)} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M11.7378 0.761809H5.0848C3.0048 0.753809 1.2998 2.41181 1.2508 4.49081V15.2038C1.2048 17.3168 2.8798 19.0678 4.9928 19.1148C5.0238 19.1148 5.0538 19.1158 5.0848 19.1148H13.0738C15.1678 19.0298 16.8178 17.2998 16.8028 15.2038V6.03781L11.7378 0.761809Z" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M11.4751 0.75V3.659C11.4751 5.079 12.6231 6.23 14.0431 6.234H16.7981" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M11.2881 13.3585H5.88806" stroke="#0BAF9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M9.24321 9.60602H5.88721" stroke="#0BAF9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}