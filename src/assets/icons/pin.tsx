import Svg, {
	Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export default mapPin = () => {
	return (
		<Svg version="1.1" id="Flat" xmlns="http://www.w3.org/3000/svg" x="0px" y="0px"
			width={windowWidth(50)} height={windowHeight(50)} viewBox="0 0 256 256" fill="#0BAF9A">
			<Path fill="#0BAF9A" d="M127.994,15.997c-48.577,0.058-87.942,39.423-88,88c0,75.297,80,132.172,83.406,134.555
	c2.759,1.927,6.428,1.927,9.188,0c3.406-2.383,83.406-59.258,83.406-134.555C215.937,55.42,176.571,16.055,127.994,15.997z M128,72
	c17.674,0,32,14.327,32,32s-14.326,32-32,32c-17.673,0-32-14.327-32-32c0-17.673,14.326-32,31.998-32C127.999,72,128,72,128,72z"/>
		</Svg>
	)
}