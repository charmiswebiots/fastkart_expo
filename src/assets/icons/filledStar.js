import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export default filledStar = () => {
    return (
        <Svg width={windowWidth(16)} height={windowHeight(16)} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/3000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M7.73617 1.86905L8.95445 4.37664C9.07384 4.62281 9.30431 4.79351 9.57157 4.83301L12.2969 5.23719C12.9702 5.33735 13.2382 6.17815 12.7509 6.65992L10.7801 8.61097C10.5864 8.80283 10.4983 9.07863 10.5441 9.34949L11.0092 12.104C11.1237 12.7853 10.4198 13.3052 9.818 12.9828L7.38214 11.6814C7.14335 11.5538 6.85735 11.5538 6.61786 11.6814L4.182 12.9828C3.58015 13.3052 2.87626 12.7853 2.9915 12.104L3.4559 9.34949C3.50171 9.07863 3.41355 8.80283 3.21988 8.61097L1.24912 6.65992C0.76181 6.17815 1.02976 5.33735 1.70311 5.23719L4.42843 4.83301C4.69569 4.79351 4.92685 4.62281 5.04625 4.37664L6.26383 1.86905C6.5651 1.24904 7.4349 1.24904 7.73617 1.86905Z" fill="#FFBF13" stroke="#FFBF13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}