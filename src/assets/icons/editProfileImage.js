import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export function editProfileImage () {
    return (
        <Svg width={windowWidth(20)} height={windowHeight(20)} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path opacity="0.4" d="M6.9917 11.4363H10.7116" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.49891 2.09731C6.92883 1.51044 7.62358 1.54106 8.17191 2.00169L8.98274 2.68294C9.53108 3.14356 9.72533 3.85794 9.29541 4.44606L4.46016 11.0554C4.29858 11.2767 4.05183 11.4073 3.78933 11.4104L1.92441 11.4361L1.50208 9.48919C1.44258 9.21607 1.50208 8.92857 1.66366 8.70669L6.49891 2.09731Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path opacity="0.4" d="M5.59326 3.33507L8.38976 5.68382" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}