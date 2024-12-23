import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export function markRead ()  {
    return (
        <Svg width={windowWidth(20)} height={windowHeight(20)} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/3000/svg">
            <Path d="M8.66673 2.60001L3.90006 7.36667L1.7334 5.30001" stroke="#0BAF9A" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8.66673 5.30001L3.90006 9.96668L1.7334 7.80001" stroke="#0BAF9A" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}