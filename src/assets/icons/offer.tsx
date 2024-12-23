import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function offer  () {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(25)} height={windowHeight(25)} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/3000/svg">
            <Path d="M12.8496 1.2503V3.6703" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12.8496 14.7601V16.7841" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12.8496 11.3246V6.5036" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M17.7021 17C19.5242 17 21 15.5426 21 13.7431V11.1506C19.7943 11.1506 18.8233 10.1917 18.8233 9.00103C18.8233 7.81035 19.7943 6.85039 21 6.85039L20.999 4.25686C20.999 2.45745 19.5221 1 17.7011 1H4.29892C2.47789 1 1.00104 2.45745 1.00104 4.25686L1 6.93485C2.20567 6.93485 3.17668 7.81035 3.17668 9.00103C3.17668 10.1917 2.20567 11.1506 1 11.1506V13.7431C1 15.5426 2.4758 17 4.29787 17H17.7021Z" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}