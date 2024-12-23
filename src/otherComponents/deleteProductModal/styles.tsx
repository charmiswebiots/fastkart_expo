import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: windowWidth(20),
        alignItems: 'center',
        backgroundColor:appColors.white,
        justifyContent: 'center'
    },
    sure: {
        fontSize: fontSizes.FONT30,
        fontFamily: 'mulishSemiBold',
        color:appColors.black,
    },
    txt: {
        fontSize: fontSizes.FONT16,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        textAlign: 'center',
        marginTop: windowHeight(16)
    },
})
export default styles;