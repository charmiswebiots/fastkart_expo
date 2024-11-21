import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export default delivery = () => {
    return (
        <Svg width={windowWidth(18)} height={windowHeight(18)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12 2.25H0.75V12H12V2.25Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12 6H15L17.25 8.25V12H12V6Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M4.125 15.75C5.16053 15.75 6 14.9105 6 13.875C6 12.8395 5.16053 12 4.125 12C3.08947 12 2.25 12.8395 2.25 13.875C2.25 14.9105 3.08947 15.75 4.125 15.75Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M13.875 15.75C14.9105 15.75 15.75 14.9105 15.75 13.875C15.75 12.8395 14.9105 12 13.875 12C12.8395 12 12 12.8395 12 13.875C12 14.9105 12.8395 15.75 13.875 15.75Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}