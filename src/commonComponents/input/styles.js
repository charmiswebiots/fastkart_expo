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
        marginHorizontal:windowWidth(8)
    },
    input: {
        height: windowHeight(45),
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
        // paddingHorizontal:windowWidth(15),
    },
    leftIcon: {
        position: 'absolute',
    },
    rightIcon: {
        position: 'absolute',
    },
 
    text: {
        color: appColors.primary,
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
    }
});
export default styles;