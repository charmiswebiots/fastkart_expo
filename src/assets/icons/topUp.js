import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function topUp()  {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(25)} height={windowHeight(25)} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M18.8338 20.8196C21.0213 20.8196 22.7923 19.0474 22.7923 16.8611V13.7111C21.3457 13.7111 20.179 12.5444 20.179 11.0989C20.179 9.65227 21.3457 8.48677 22.7923 8.48677L22.79 5.33327C22.79 3.14693 21.019 1.37477 18.8327 1.37477H5.16865C2.98232 1.37477 1.21015 3.14693 1.21015 5.33327L1.20898 8.58827C2.65448 8.58827 3.82115 9.65227 3.82115 11.0989C3.82115 12.5444 2.65448 13.7111 1.20898 13.7111V16.8611C1.20898 19.0474 2.97998 20.8196 5.16632 20.8196H18.8338Z" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M12.0003 13.1633L14.0304 14.2308C14.2205 14.33 14.4434 14.169 14.4072 13.9578L14.0187 11.6957L15.6625 10.0962C15.8165 9.94568 15.7314 9.68552 15.519 9.65402L13.2487 9.32385L12.2325 7.26585C12.138 7.07335 11.8639 7.07335 11.7682 7.26585L10.752 9.32385L8.48285 9.65402C8.27052 9.68552 8.18535 9.94568 8.33935 10.0962L9.98202 11.6957L9.59352 13.9578C9.55735 14.169 9.78018 14.33 9.97035 14.2308L12.0003 13.1633Z" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}