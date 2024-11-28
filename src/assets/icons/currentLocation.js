import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export function currentLocation  ()  {
    return (
        <Svg width={windowWidth(26)} height={windowHeight(26)} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path opacity="0.4" d="M10.4747 5.47307L6.59399 9.59628" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M6.59422 9.59649L2.05088 6.64487C1.45555 6.25812 1.57622 5.30399 2.24688 5.09787L12.9735 1.80553C13.5835 1.61783 14.1475 2.22274 13.9649 2.86874L10.7822 14.1766C10.5829 14.8849 9.68888 15.0067 9.32755 14.3749L6.59422 9.59649Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}