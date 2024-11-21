import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";
import appColors from '../../theme/appColors';

export function category(props) {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(27)} height={windowHeight(27)} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M1.375 4.14583C1.375 2.06754 1.39725 1.375 4.14583 1.375C6.89441 1.375 6.91667 2.06754 6.91667 4.14583C6.91667 6.22413 6.92543 6.91667 4.14583 6.91667C1.36623 6.91667 1.375 6.22413 1.375 4.14583Z" stroke={props.color ? appColors.white : colors.text} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M10.0833 4.14583C10.0833 2.06754 10.1056 1.375 12.8542 1.375C15.6028 1.375 15.625 2.06754 15.625 4.14583C15.625 6.22413 15.6338 6.91667 12.8542 6.91667C10.0746 6.91667 10.0833 6.22413 10.0833 4.14583Z" stroke={props.color ? appColors.white : "#0BAF9A"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M1.375 12.8542C1.375 10.7759 1.39725 10.0833 4.14583 10.0833C6.89441 10.0833 6.91667 10.7759 6.91667 12.8542C6.91667 14.9325 6.92543 15.625 4.14583 15.625C1.36623 15.625 1.375 14.9325 1.375 12.8542Z" stroke={props.color ? appColors.white : colors.text} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M10.0833 12.8542C10.0833 10.7759 10.1056 10.0833 12.8542 10.0833C15.6028 10.0833 15.625 10.7759 15.625 12.8542C15.625 14.9325 15.6338 15.625 12.8542 15.625C10.0746 15.625 10.0833 14.9325 10.0833 12.8542Z" stroke={props.color ? appColors.white : colors.text} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}
