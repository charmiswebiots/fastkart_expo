import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export function drawerArrow(props) {
    return (
        <Svg width={windowWidth(15)} height={windowHeight(15)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/3000/svg">
            <Path d="M1.45847 1.625L5.5418 6L1.45847 10.375" stroke={props.fill ? props.fill : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}