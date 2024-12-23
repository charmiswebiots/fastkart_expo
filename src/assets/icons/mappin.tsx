import Svg, {
    Path,
    Rect
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export function mapPin ()  {
    return (
        <Svg width={windowWidth(30)} height={windowHeight(30)} xmlns="http://www.w3.org/3000/svg" viewBox="0 0 256 256">
            <Rect width={windowWidth(20)} height={windowHeight(20)} fill="none" />
            <Path stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M127.99414,15.9971a88.1046,88.1046,0,0,0-88,88c0,75.29688,80,132.17188,83.40625,134.55469a8.023,8.023,0,0,0,9.1875,0c3.40625-2.38281,83.40625-59.25781,83.40625-134.55469A88.10459,88.10459,0,0,0,127.99414,15.9971ZM128,72a32,32,0,1,1-32,32A31.99909,31.99909,0,0,1,128,72Z" />
        </Svg>
    )
}