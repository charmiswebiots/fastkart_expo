import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function Mywishlist() {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(27)} height={windowHeight(27)} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M16.4301 9.69274V6.53441C16.4301 4.36358 14.6707 2.60416 12.5009 2.60416C10.3301 2.59483 8.56235 4.34587 8.55298 6.5167V6.53441V9.69274" stroke="#0BAF9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M17.4398 21.8754H7.56019C5.1101 21.8754 3.125 19.891 3.125 17.4431V11.6972C3.125 9.24933 5.1101 7.26495 7.56019 7.26495H17.4398C19.8899 7.26495 21.875 9.24933 21.875 11.6972V17.4431C21.875 19.891 19.8899 21.8754 17.4398 21.8754Z" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}