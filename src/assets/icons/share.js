import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function share() {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(30)} height={windowHeight(30)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/3000/svg">
            <Path d="M7.15845 11.2583L12.8501 14.575" stroke={colors.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12.8418 5.42499L7.15845 8.74165" stroke={colors.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M15 6.66666C16.3807 6.66666 17.5 5.54737 17.5 4.16666C17.5 2.78594 16.3807 1.66666 15 1.66666C13.6193 1.66666 12.5 2.78594 12.5 4.16666C12.5 5.54737 13.6193 6.66666 15 6.66666Z" stroke="#0BAF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#0BAF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M15 18.3333C16.3807 18.3333 17.5 17.2141 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.2141 13.6193 18.3333 15 18.3333Z" stroke="#0BAF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}