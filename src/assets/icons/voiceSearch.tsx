import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function voiceSearch() {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(24)} height={windowHeight(24)} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/3000/svg">
            <Path d="M0.92873 8.11002C0.92873 11.518 3.69064 14.2799 7.09857 14.2799C10.5065 14.2799 13.2684 11.518 13.2684 8.11002" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.09889 16.6224V14.2803" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M7.20389 11.1537H6.99357C5.30944 11.1537 3.94357 9.78858 3.94357 8.10366V4.3116C3.94357 2.62747 5.30944 1.2616 6.99357 1.2616H7.20389C8.88801 1.2616 10.2539 2.62747 10.2539 4.3116V8.10366C10.2539 9.78858 8.88801 11.1537 7.20389 11.1537Z" stroke="#0BAF9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}