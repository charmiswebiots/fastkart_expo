import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export function OrderDetails  ()  {
    return (
        <Svg width={windowWidth(48)} height={windowHeight(48)} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/3000/svg">
            <Path d="M31.5 24V12C31.4995 11.4739 31.3606 10.9572 31.0973 10.5017C30.834 10.0463 30.4556 9.66805 30 9.40501L19.5 3.40501C19.0439 3.1417 18.5266 3.00308 18 3.00308C17.4734 3.00308 16.9561 3.1417 16.5 3.40501L6 9.40501C5.54439 9.66805 5.16597 10.0463 4.90269 10.5017C4.63941 10.9572 4.50054 11.4739 4.5 12V24C4.50054 24.5261 4.63941 25.0428 4.90269 25.4983C5.16597 25.9537 5.54439 26.332 6 26.595L16.5 32.595C16.9561 32.8583 17.4734 32.9969 18 32.9969C18.5266 32.9969 19.0439 32.8583 19.5 32.595L30 26.595C30.4556 26.332 30.834 25.9537 31.0973 25.4983C31.3606 25.0428 31.4995 24.5261 31.5 24Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M4.90479 10.44L17.9998 18.015L31.0948 10.44" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M18 33.12V18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}