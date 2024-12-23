import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function wishlist() {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(24)} height={windowHeight(24)} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/3000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M1.24855 6.79948C0.531372 4.56039 1.36953 2.00114 3.72024 1.24386C4.95675 0.844837 6.3216 1.08011 7.34957 1.85343C8.32207 1.1015 9.73704 0.847511 10.9722 1.24386C13.3229 2.00114 14.1664 4.56039 13.4499 6.79948C12.3337 10.3486 7.34957 13.0823 7.34957 13.0823C7.34957 13.0823 2.40218 10.3901 1.24855 6.79948Z" stroke={colors.text} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M10.0232 3.52551C10.7384 3.75677 11.2437 4.39508 11.3045 5.14434" stroke="#0BAF9A" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}