import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    inputView: {
        height: windowHeight(45),
        borderRadius: windowHeight(6),
        borderWidth:windowHeight(1),
        alignSelf: 'center',
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
    },
    input: {
        width:windowWidth(440),
        height: windowHeight(45),
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
    },
    leftIcon: {
        position: 'absolute',
        left: windowWidth(20)
    },
    rightIcon: {
        position: 'absolute',
        right: windowWidth(20)
    },
 
    text: {
        color: appColors.primary,
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
    }
});
export default styles;