import Svg, {
	Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export default euro = () => {
	const { colors } = useTheme();
	return (
		<Svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width={windowWidth(31)} height={windowHeight(31)} viewBox="0 0 24 24">
			<Path fill="#0BAF9A" d="M12.535,7.67c1.041,0.027,2.01,0.537,2.62,1.38c0.335,0.439,0.961,0.524,1.399,0.19
	c0.439-0.336,0.522-0.963,0.188-1.402c-0.002-0.002-0.005-0.005-0.007-0.008c-0.986-1.336-2.54-2.135-4.2-2.16
	c-2.346,0.068-4.397,1.6-5.13,3.83h-1.46c-0.553,0-1,0.448-1,1s0.447,1,1,1h1c0,0.17,0,0.33,0,0.5s0,0.33,0,0.5h-1
	c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.46c0.732,2.23,2.784,3.762,5.13,3.83c1.66-0.025,3.214-0.824,4.2-2.16
	c0.404-0.376,0.428-1.009,0.052-1.413c-0.376-0.405-1.009-0.428-1.414-0.052c-0.09,0.084-0.164,0.184-0.218,0.295
	c-0.61,0.844-1.579,1.354-2.62,1.38c-1.242-0.049-2.361-0.769-2.92-1.88h2.33c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2.95
	c-0.026-0.166-0.043-0.332-0.05-0.5c0.007-0.167,0.023-0.334,0.05-0.5h2.95c0.553,0,1-0.448,1-1s-0.447-1-1-1h-2.33
	C10.188,8.408,11.303,7.709,12.535,7.67z"/>
			<Path d="M12,1C5.925,1,1,5.925,1,12s4.925,11,11,11s11-4.925,11-11S18.075,1,12,1z M12,21c-4.971,0-9-4.029-9-9s4.029-9,9-9
	s9,4.029,9,9S16.971,21,12,21L12,21z" fill={colors.text} />
		</Svg>
	)
}