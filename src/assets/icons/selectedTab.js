import Svg, {
	Circle
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export default selectedTab = () => {
	return (
		<Svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width={windowWidth(6)} height={windowHeight(6)} viewBox="0 0 120 120" fill={'#ffffff'} enable-background="new 0 0 120 120">
			<Circle cx="60" cy="60.834" r="54.167" />
		</Svg>
	)
}