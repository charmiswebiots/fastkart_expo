import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export default dropDown = () => {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(18)} height={windowHeight(18)} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10.6666 1.66666L5.99992 6.33332L1.33325 1.66666" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}