import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function passChange ()  {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(24)} height={windowHeight(24)} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M16.4197 1H6.57919C3.14995 1 1 3.42805 1 6.86411V16.1359C1 19.5719 3.13973 22 6.57919 22H16.4185C19.8591 22 22 19.5719 22 16.1359V6.86411C22 3.42805 19.8591 1 16.4197 1Z" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M10.0159 11.5C10.0159 12.6601 9.07488 13.6023 7.91364 13.6023C6.75353 13.6023 5.8125 12.6601 5.8125 11.5C5.8125 10.3399 6.75353 9.39772 7.91364 9.39772C9.07488 9.39772 10.0159 10.3399 10.0159 11.5Z" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M10.0156 11.5H17.1874V13.6023" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M13.9756 13.6017V11.4995" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}