import Svg, {
    Path
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export default dollar = () => {
    const { colors } = useTheme();
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={windowWidth(29)} height={windowHeight(29)} viewBox="0 0 24 24">
            <Path fill={colors.text} d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
            <Path fill="#0BAF9A" d="M12 13c-1.9 0-3.5-1.2-3.9-2.8C8 10 8 9.8 8 9.5 8 7.6 9.8 6 12 6s4 1.6 4 3.5c0 .3 0 .5-.1.7-.1.5-.7.9-1.2.7-.5-.1-.9-.7-.7-1.2v-.3c0-.7-.9-1.4-2-1.4s-2 .7-2 1.5v.3c.2.7 1 1.2 2 1.2.6 0 1 .4 1 1s-.4 1-1 1z" />
            <Path fill="#0BAF9A" d="M12 18c-2.2 0-4-1.6-4-3.5 0-.3 0-.5.1-.7.1-.5.7-.9 1.2-.7.5.1.9.7.7 1.2v.3c0 .8.9 1.5 2 1.5s2-.7 2-1.5v-.3c-.2-.7-1-1.2-2-1.2-.6 0-1-.4-1-1s.4-1 1-1c1.9 0 3.5 1.2 3.9 2.8.1.1.1.3.1.6 0 1.9-1.8 3.5-4 3.5z" />
            <Path fill="#0BAF9A" d="M12 20c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zm0-12c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zm3 3c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.4-.4 1-.4 1.4 0 .2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3z" />
        </Svg>
    )
}