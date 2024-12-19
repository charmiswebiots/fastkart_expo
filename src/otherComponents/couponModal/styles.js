import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        position: 'absolute',
        bottom: 0,
        height:"61%",
        width: '100%'
    },
    offView: {
        backgroundColor: appColors.primary,
        width: '100%',
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        padding: windowHeight(13)
    },
    flatTxt: {
        color: appColors.white,
        fontSize: fontSizes.FONT28,
        fontFamily: 'quickSandMedium',
        marginTop:windowHeight(4),
    },
    offTxt: {
        color: appColors.white,
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        marginTop:windowHeight(2),
    },
    codeView: {
        width: '100%',
        borderRadius: windowHeight(6),
        backgroundColor: '#38BEAD',
        paddingVertical: windowHeight(13),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: windowWidth(26),
        marginTop: windowHeight(10)
    },
    codeTxt: {
        color: appColors.white,
        fontFamily: 'mulishBold',
        fontSize: fontSizes.FONT19
    },
    copyCode: {
        color: appColors.primary,
        backgroundColor: appColors.white,
        borderRadius: windowHeight(20),
        paddingVertical: windowHeight(5),
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
        paddingHorizontal: windowWidth(25)
    },
    txt1: {
        fontFamily: 'mulishBold',
        color: appColors.content,
        fontSize: fontSizes.FONT20,
    },
    txt: {
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        fontSize: fontSizes.FONT20,
    },
    keyView: {
        width: '96.5%',
        marginTop: windowHeight(8)
    },
    termsView: {
        padding: windowHeight(14),
        backgroundColor:appColors.white,
    },
})
export default styles;