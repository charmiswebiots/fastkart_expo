import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export function cart  () {
    return (
        <Svg width={windowWidth(28)} height={windowHeight(28)} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M16.4301 9.69274V6.53441C16.4301 4.36358 14.6707 2.60416 12.5009 2.60416C10.3301 2.59483 8.56235 4.34587 8.55298 6.5167V6.53441V9.69274" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M17.4398 21.8753H7.56019C5.1101 21.8753 3.125 19.891 3.125 17.443V11.6972C3.125 9.2493 5.1101 7.26492 7.56019 7.26492H17.4398C19.8899 7.26492 21.875 9.2493 21.875 11.6972V17.443C21.875 19.891 19.8899 21.8753 17.4398 21.8753Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}