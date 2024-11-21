import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export default into = (props) => {

    const { colors } = useTheme();

    return (
        <Svg width={props.width ? props.width : windowWidth(36)} height={props.height ? props.height : windowHeight(36)} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15.1792 7.79156L8.76261 14.2081" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8.76221 7.79156L15.1788 14.2081" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}