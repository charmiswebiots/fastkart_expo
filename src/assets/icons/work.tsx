import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function work () {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(30)} height={windowHeight(30)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/3000/svg">
            <Path d="M2.57031 14.1872C2.57031 14.1872 2.70048 15.7804 2.73073 16.2827C2.77106 16.9565 3.0314 17.7091 3.4659 18.2316C4.07915 18.9722 4.80148 19.2335 5.76581 19.2353C6.89973 19.2372 15.1451 19.2372 16.2791 19.2353C17.2434 19.2335 17.9657 18.9722 18.579 18.2316C19.0135 17.7091 19.2738 16.9565 19.3151 16.2827C19.3444 15.7804 19.4746 14.1872 19.4746 14.1872" stroke="#0BAF9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.7876 4.88537V4.54529C7.7876 3.42695 8.69326 2.52129 9.8116 2.52129H12.1784C13.2958 2.52129 14.2024 3.42695 14.2024 4.54529L14.2033 4.88537" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M10.9951 15.2883V14.1022" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M2.52051 7.69001V10.8681C4.27867 12.0277 6.38517 12.8398 8.69701 13.1616C8.97384 12.1523 9.88409 11.4126 10.9905 11.4126C12.0795 11.4126 13.0081 12.1523 13.2666 13.1708C15.5876 12.849 17.7023 12.0368 19.4697 10.8681V7.69001C19.4697 6.13717 18.2203 4.88684 16.6674 4.88684H5.33192C3.77909 4.88684 2.52051 6.13717 2.52051 7.69001Z" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}