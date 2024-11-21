import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';

export default dark = () => {
    return (
        <Svg width={windowWidth(24)} height={windowHeight(24)} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet">
            <Path d="M43.139 2a29.885 29.885 0 0 1 5.121 16.756c0 16.701-13.686 30.24-30.57 30.24a30.656 30.656 0 0 1-15.689-4.285C7.209 54.963 17.93 62 30.318 62C47.816 62 62 47.969 62 30.66C62 17.867 54.246 6.871 43.139 2z" fill="#0BAF9A" />
        </Svg>
    )
}