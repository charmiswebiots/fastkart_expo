import Svg, {
	Path,
	G
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export default dark = () => {
	return (
		<Svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width={windowWidth(24)} height={windowHeight(24)} viewBox="0 0 256 256" enable-background="new 0 0 256 256">
			<G transform="translate(128 128) scale(0.72 0.72)">
				<G transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
					<Path fill='#0BAF9A' d="M60.699,2.178c-0.423,0.463-0.506,1.142-0.214,1.695c8.398,15.834,2.812,35.266-12.719,44.232
			c-15.53,8.966-35.149,4.09-44.665-11.101c-0.332-0.531-0.963-0.796-1.574-0.661c-0.612,0.134-1.074,0.638-1.153,1.259
			c-1.265,9.843,0.692,19.59,5.66,28.193c6.005,10.406,15.707,17.85,27.314,20.96c11.607,3.11,23.73,1.514,34.137-4.495
			c10.407-6.008,17.851-15.709,20.961-27.316c1.038-3.876,1.552-7.809,1.552-11.717c0-7.795-2.044-15.489-6.046-22.42
			C78.987,12.206,71.523,5.636,62.367,1.81C61.789,1.568,61.122,1.716,60.699,2.178z"/>
				</G>
			</G>
		</Svg>
	)
}