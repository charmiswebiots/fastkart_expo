import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function sideArrow (props)  {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(24)} height={windowHeight(24)} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/3000/svg">
            <Path d="M4.95825 2.91664L9.04159 6.99998L4.95825 11.0833" stroke={props.color ? props.color : colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}